# Deployment Guide for GitHub Pages

## Important Notes

⚠️ **GitHub Pages only serves static files**, so you can only deploy the React frontend. The Django backend needs to be hosted separately (e.g., Railway, Render, Heroku, or another service).

## Step 1: Update Repository Name in vite.config.js

Before deploying, update the `base` path in `frontend/vite.config.js` to match your GitHub repository name:

```javascript
base: '/your-repository-name/',  // Replace with your actual repo name
```

If your repository is in the root (username.github.io), use:
```javascript
base: '/',
```

## Step 2: Set Up GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

## Step 3: Alternative: Manual Deployment

If you prefer to deploy manually:

```bash
cd frontend
npm run build
```

Then copy the `frontend/dist` folder contents to the `gh-pages` branch or use GitHub Desktop.

## Step 4: Update API Endpoint

Since your Django backend won't be on GitHub Pages, update `frontend/src/services/api.js` to point to your deployed backend:

```javascript
const API_BASE_URL = 'https://your-backend-url.com/api'  // Replace with your backend URL
```

## Step 5: Backend Deployment Options

For the Django backend, consider these hosting options:

1. **Railway** (https://railway.app) - Easy setup, free tier available
2. **Render** (https://render.com) - Free tier with PostgreSQL
3. **Heroku** - Easy deployment, paid plans
4. **PythonAnywhere** - Free tier available
5. **DigitalOcean App Platform** - Simple deployment

## Alternative: Static Data Approach

If you don't need a dynamic backend, you can:
1. Export your data as JSON files
2. Store them in the `frontend/public` folder
3. Update the API service to fetch from local JSON files
4. This way you don't need to host the Django backend

Would you like me to help you set up a static data approach instead?

