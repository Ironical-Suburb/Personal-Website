from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.db import connection
from portfolio.models import Project, Internship, Award, Hobby


class Command(BaseCommand):
    help = 'Loads sample data for the personal website'

    def handle(self, *args, **options):
        # Check if migrations have been run
        tables = connection.introspection.table_names()
        if 'portfolio_project' not in tables:
            self.stdout.write(self.style.WARNING(
                'Database tables not found. Running migrations first...'
            ))
            try:
                # First create migrations for portfolio app
                call_command('makemigrations', 'portfolio', verbosity=0)
                # Then run all migrations
                call_command('migrate', verbosity=1)
                self.stdout.write(self.style.SUCCESS('Migrations completed successfully!'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(
                    f'Error running migrations: {e}\n'
                    'Please run: python manage.py makemigrations portfolio && python manage.py migrate'
                ))
                return

        self.stdout.write('Loading sample data...')

        # Clear existing data first
        self.stdout.write('Clearing existing data...')
        Project.objects.all().delete()
        Internship.objects.all().delete()
        Award.objects.all().delete()
        Hobby.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Cleared existing data'))

        # Projects
        projects_data = [
            {
                'title': 'The Wordle',
                'description': 'Created a Python-based Wordle game variant with a custom Scrabble dictionary class for word validation. This project demonstrates object-oriented programming principles, dictionary manipulation, and game logic implementation. The game provides a challenging word-guessing experience with custom word validation rules.',
                'icon': '🎮',
                'tags': ['Python'],
                'link': 'https://github.com/priyanshupusola/the-wordle',
                'image_url': 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop'
            },
            {
                'title': 'Mongo-Twitter',
                'description': 'Developed Python scripts for MongoDB management, focusing on batch processing, error handling, and real-time analytics. Included dynamic database interaction for tweet composition and analytics. This project showcases database optimization, data processing pipelines, and analytics dashboard creation with real-time updates.',
                'icon': '🐦',
                'tags': ['Python', 'MongoDB', 'SQL'],
                'link': 'https://github.com/priyanshupusola/mongo-twitter',
                'image_url': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
            },
            {
                'title': 'AI Chat Bot',
                'description': 'Built a Python AI chat interface using OpenAI\'s GPT model, providing real-time answers from documents. Implemented text extraction from PDFs, Excel, CSV, and images with Tkinter for the GUI. The application features document parsing, vector embeddings, and conversational AI for intelligent Q&A functionality.',
                'icon': '🤖',
                'tags': ['Python', 'OpenAI', 'NLP'],
                'link': 'https://github.com/priyanshupusola/ai-chatbot',
                'image_url': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
            },
            {
                'title': 'Cobra Chickens',
                'description': 'Developed a mobile app using Android and Java that includes user account management, QR code scanning, location services, photo posting, real-time notifications, and secure data handling. The app features a complete authentication system, geolocation tracking, camera integration, and push notification services.',
                'icon': '📱',
                'tags': ['Java', 'Android'],
                'link': 'https://github.com/priyanshupusola/cobra-chickens',
                'image_url': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
            },
            {
                'title': 'Travel Companion',
                'description': 'Developed an Agentic AI responsible for finding flights and hotels and preparing a travel itinerary based on the travel budget and dates given to it. The system integrates with multiple APIs to provide comprehensive travel planning, including flight comparisons, hotel recommendations, and optimized itinerary scheduling.',
                'icon': '✈️',
                'tags': ['AI', 'Agentic AI', 'Python'],
                'link': 'https://github.com/priyanshupusola/travel-companion',
                'image_url': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
            }
        ]

        for project_data in projects_data:
            Project.objects.create(**project_data)
            self.stdout.write(self.style.SUCCESS(f'Created project: {project_data["title"]}'))

        # Internships
        internships_data = [
            {
                'title': 'Functional Safety Coop',
                'company': 'BlackBerry',
                'date': 'May 2024 – Aug 2024',
                'description': 'Wrote automated/functional tests for 10+ libc functions, validating kernel/standard behavior and maintaining compatibility across two major product releases.',
                'responsibilities': [
                    'Wrote automated/functional tests for 10+ libc functions, validating kernel/standard behavior and maintaining compatibility across two major product releases',
                    'Built a FastAPI + Python service to interact with JIRA, streamlining engineering workflows',
                    'Partnered with the OS team for test planning, code reviews (Review Board), merges, and function migrations; worked daily in Vim, JIRA; followed SDLC/SCRUM practices'
                ]
            },
            {
                'title': 'Software Developer Coop',
                'company': 'Newgen Software',
                'date': 'Jun 2023 – Aug 2023',
                'description': 'Curated and cleaned 2000+ text documents to produce high-quality training data. Fine-tuned OpenAI GPT-3.5 on user Q&A, boosting accuracy by 25%.',
                'responsibilities': [
                    'Curated and cleaned 2000+ text documents to produce high-quality training data',
                    'Fine-tuned OpenAI GPT-3.5 on user Q&A, boosting accuracy by 25%',
                    'Designed and deployed a Gradio app to analyze documents, audio, CSV, and Excel; applied NLP techniques end-to-end',
                    'Key Results: Used Vector Store Index by LlamaIndex for better search similarity, was able to decrease the response time by 10%'
                ]
            }
        ]

        for internship_data in internships_data:
            Internship.objects.create(**internship_data)
            self.stdout.write(self.style.SUCCESS(f'Created internship: {internship_data["title"]} at {internship_data["company"]}'))

        # Awards
        awards_data = [
            {
                'title': 'University of Alberta International Country Scholarship',
                'organization': 'University of Alberta',
                'date': '2022',
                'description': 'Awarded the University of Alberta International Country Scholarship',
                'icon': '🏆'
            },
            {
                'title': 'International Student Scholarship',
                'organization': 'University of Alberta',
                'date': '2022',
                'description': 'Awarded the International Student Scholarship',
                'icon': '⭐'
            },
            {
                'title': 'HackEd 2022',
                'organization': 'University of Alberta',
                'date': '2022',
                'description': 'Participated in HackEd 2022',
                'icon': '💻'
            },
            {
                'title': 'Nathacks 2024',
                'organization': 'Nathacks',
                'date': '2024',
                'description': 'Participated in Nathacks 2024',
                'icon': '🚀'
            },
            {
                'title': 'ODSC Agentic AI 2025',
                'organization': 'ODSC',
                'date': '2025',
                'description': 'Participated in ODSC Agentic AI 2025',
                'icon': '🤖'
            }
        ]

        for award_data in awards_data:
            Award.objects.create(**award_data)
            self.stdout.write(self.style.SUCCESS(f'Created award: {award_data["title"]}'))

        # Hobbies
        hobbies_data = [
            {
                'title': 'Soccer',
                'description': '',
                'icon': '⚽'
            },
            {
                'title': 'Gaming',
                'description': '',
                'icon': '🎮'
            },
            {
                'title': 'Hiking',
                'description': '',
                'icon': '🥾'
            },
            {
                'title': 'Cats',
                'description': '',
                'icon': '🐱'
            },
            {
                'title': 'Anime',
                'description': '',
                'icon': '🎌'
            },
            {
                'title': 'Hackathons',
                'description': '',
                'icon': '💻'
            }
        ]

        for hobby_data in hobbies_data:
            Hobby.objects.create(**hobby_data)
            self.stdout.write(self.style.SUCCESS(f'Created hobby: {hobby_data["title"]}'))

        self.stdout.write(self.style.SUCCESS('Successfully loaded sample data!'))

