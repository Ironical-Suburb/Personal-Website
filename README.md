# Personal Website

A modern personal website built with React, Vite, Tailwind CSS, and Django REST Framework.

## Features

- **Modern Tech Stack**: React with Vite for fast development and hot reload
- **Beautiful UI**: Tailwind CSS for responsive and modern design
- **RESTful API**: Django REST Framework backend
- **Responsive Design**: Works on all devices
- **Fast Performance**: Optimized with Vite

## Project Structure

```
Personal Website/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── backend/           # Django REST Framework
    ├── personal_website/
    ├── portfolio/
    └── manage.py
```

## Prerequisites

- Node.js (v18 or higher)
- Python (v3.9 or higher)
- pip (Python package manager)

## Setup Instructions

### Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   
   **Note:** The `watchdog` package is included for auto-reloading data when you edit `load_sample_data.py`.

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser (optional, for admin access):
   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django development server:
   ```bash
   python manage.py runserver 8001
   ```

The backend will be available at `http://localhost:8001`

### Frontend Setup (React + Vite)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3001`

## Adding Content

### Auto-Reload Data When Editing load_sample_data.py

To automatically reload data whenever you modify `load_sample_data.py`:

1. **Install the watchdog dependency** (if not already installed):
   ```bash
   pip install watchdog
   ```

2. **Run the watch command** (in a separate terminal):
   ```bash
   python manage.py watch_and_reload_data
   ```

This will:
- Load the initial sample data
- Watch for changes to `load_sample_data.py`
- Automatically reload data whenever you save changes to the file
- Display notifications when data is reloaded

Now you can edit `backend/portfolio/management/commands/load_sample_data.py` and the changes will automatically be reflected in your database!

### Using Django Admin (Recommended)

1. Start the Django server and navigate to `http://localhost:8001/admin`
2. Log in with your superuser credentials
3. Add Projects, Internships, Awards, and Hobbies through the admin interface

### Using Django Shell

You can also add content programmatically using Django shell:

```bash
python manage.py shell
```

```python
from portfolio.models import Project, Internship, Award, Hobby

# Create a project
Project.objects.create(
    title="My Awesome Project",
    description="A description of my project",
    icon="💻",
    tags=["React", "Django", "Python"],
    link="https://github.com/yourusername/project"
)

# Create an internship
Internship.objects.create(
    title="Software Engineering Intern",
    company="Tech Company",
    date="Summer 2024",
    description="Worked on exciting projects",
    responsibilities=["Built features", "Fixed bugs", "Code reviews"]
)

# Create an award
Award.objects.create(
    title="Best Project Award",
    organization="University",
    date="2024",
    description="Won for outstanding work",
    icon="🏆"
)

# Create a hobby
Hobby.objects.create(
    title="Gaming",
    description="I enjoy playing video games",
    icon="🎮"
)
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/projects/` - List all projects
- `POST /api/projects/` - Create a new project
- `GET /api/projects/{id}/` - Get a specific project
- `PUT /api/projects/{id}/` - Update a project
- `DELETE /api/projects/{id}/` - Delete a project

Similar endpoints exist for:
- `/api/internships/`
- `/api/awards/`
- `/api/hobbies/`

## Production Deployment

### Backend

For production, make sure to:
- Set `DEBUG = False` in `settings.py`
- Configure a proper database (PostgreSQL recommended)
- Set secure `SECRET_KEY` in environment variables
- Configure `ALLOWED_HOSTS`
- Set up static file serving

### Frontend

Build the frontend for production:
```bash
cd frontend
npm run build
```

The built files will be in the `dist/` directory.

## Technologies Used

- **Frontend**:
  - React 18
  - Vite 5
  - Tailwind CSS 3
  - Axios

- **Backend**:
  - Django 4.2
  - Django REST Framework
  - django-cors-headers

## License

This project is open source and available for personal use.

## Customization

- Update your name in `frontend/src/components/Hero.jsx` and `frontend/src/components/Navbar.jsx`
- Modify colors in `frontend/tailwind.config.js`
- Add your social links in `frontend/src/components/Footer.jsx`
- Customize the content through Django admin or API

