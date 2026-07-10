# Dibburim Web Landing Page

This repository contains the source code for the official landing page of the **Dibburim** mobile application. 

Dibburim is an app focused on personal prayer (Hitbodedut) and spiritual connection. The landing page serves as a central hub to introduce the app, provide updates regarding the testing and launch phases, and allow users to sign up for early access.

## Live Site
The website is live and accessible at: **[dibburim.com](https://dibburim.com)**

## Project Structure
The website is built using plain HTML, CSS, and vanilla JavaScript. It supports multiple languages:

- `index.html` - Main landing page (Hebrew)
- `/en/index.html` - English version
- `/fr/index.html` - French version
- `/es/index.html` - Spanish version
- `styles.css` - Global stylesheet
- `script.js` - JavaScript for UI interactions (e.g., language dropdown)
- `privacy.html` - Privacy Policy page required for app store compliance

## Hosting & Deployment
This project is connected directly to **Cloudflare Pages**. 
Any push to the `master` branch in this repository automatically triggers a deployment and updates the live website on Cloudflare's CDN.

## Local Development
To run this website locally on your computer, you can use any local web server. For example, using Python:

1. Open a terminal in the project directory.
2. Run the following command:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.

## Contact
For any inquiries, contact: info@dibburim.com
