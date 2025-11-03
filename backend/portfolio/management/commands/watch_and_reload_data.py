from django.core.management.base import BaseCommand
from django.core.management import call_command
from pathlib import Path
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


class DataFileHandler(FileSystemEventHandler):
    def __init__(self, command_instance):
        self.command = command_instance
        self.last_reload = 0
        
    def on_modified(self, event):
        if event.is_directory:
            return
            
        # Only watch the load_sample_data.py file
        if event.src_path.endswith('load_sample_data.py'):
            current_time = time.time()
            # Debounce: only reload if more than 1 second has passed
            if current_time - self.last_reload > 1:
                self.last_reload = current_time
                self.command.stdout.write(
                    self.command.style.WARNING('\n📝 Detected change in load_sample_data.py')
                )
                self.command.stdout.write(
                    self.command.style.WARNING('🔄 Reloading sample data...\n')
                )
                call_command('load_sample_data', verbosity=1)
                self.command.stdout.write(
                    self.command.style.SUCCESS('✅ Data reloaded successfully!\n')
                )


class Command(BaseCommand):
    help = 'Watches load_sample_data.py for changes and automatically reloads data'

    def handle(self, *args, **options):
        # Find the load_sample_data.py file
        portfolio_dir = Path(__file__).parent.parent.parent
        data_file = portfolio_dir / 'management' / 'commands' / 'load_sample_data.py'
        
        if not data_file.exists():
            self.stdout.write(
                self.style.ERROR(f'Error: load_sample_data.py not found at {data_file}')
            )
            return
        
        # Load initial data
        self.stdout.write(
            self.style.SUCCESS('🔄 Loading initial sample data...\n')
        )
        call_command('load_sample_data', verbosity=1)
        
        # Set up file watcher
        self.stdout.write(
            self.style.SUCCESS(f'👀 Watching for changes in: {data_file}')
        )
        self.stdout.write(
            self.style.SUCCESS('Press Ctrl+C to stop\n')
        )
        
        event_handler = DataFileHandler(self)
        observer = Observer()
        observer.schedule(event_handler, path=str(data_file.parent), recursive=False)
        observer.start()
        
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            observer.stop()
            self.stdout.write(
                self.style.SUCCESS('\n👋 Stopped watching for changes.')
            )
        
        observer.join()

