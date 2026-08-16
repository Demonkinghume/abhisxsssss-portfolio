# Deployment Guide for Netlify

This project is fully optimized and configured for seamless deployment on **Netlify**.

---

## Method 1: Deploy via GitHub (Recommended & Easiest)

1. **Push your code to GitHub:**
   Create a new repository on GitHub and push all files from this project.

2. **Connect to Netlify:**
   - Log in to your [Netlify Dashboard](https://app.netlify.com/).
   - Click **"Add new site"** -> **"Import an existing project"**.
   - Choose **GitHub** and select your repository.

3. **Verify Build Settings (Netlify auto-detects these via `netlify.toml`):**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Click "Deploy site"!**
   Netlify will build your portfolio and provide a live URL in under a minute.

---

## Method 2: Manual Drag-and-Drop Deployment

1. Build the production files locally on your computer:
   ```bash
   npm run build
   ```
   This generates a production-ready folder named `dist/`.

2. Log in to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder into the browser window. Your site is live instantly!

---

## Project Structure & Assets

- **Single configuration file:** All personal info, projects, and links are managed in `src/data/portfolio.js`.
- **Assets:** Images and videos in `public/assets/` use deployment-safe relative paths.
- **SPA Routing:** `netlify.toml` includes standard redirect rules so direct links and `#admin` work perfectly without 404 errors.
