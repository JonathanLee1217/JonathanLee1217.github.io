# Jonathan Lee - Portfolio Website

A clean, professional portfolio website built with HTML, CSS, and JavaScript.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript for interactivity
├── assets/
│   └── Resume_JonathanLee.pdf  # Your resume for download
└── README.md           # This file
```

## Getting Started

### Prerequisites

- **Visual Studio Code** (download from https://code.visualstudio.com/)
- **Live Server extension** for VS Code

### Step 1: Install VS Code Extensions

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open Extensions
3. Search for and install these extensions:
   - **Live Server** by Ritwick Dey (required)
   - **Prettier - Code formatter** (recommended)
   - **HTML CSS Support** (recommended)
   - **Auto Rename Tag** (recommended)

### Step 2: Open the Project

1. In VS Code, go to **File → Open Folder**
2. Select the `portfolio` folder
3. You should see all the files in the Explorer sidebar

### Step 3: Run the Website Locally

1. Open `index.html` in VS Code
2. Right-click anywhere in the file
3. Select **"Open with Live Server"**
4. Your browser will open with the website running at `http://127.0.0.1:5500`

Any changes you make to the files will automatically refresh in the browser!

## Customization

### To update your information:
- Edit `index.html` to change text content
- Your contact links, GitHub, and LinkedIn URLs are in the HTML

### To change colors:
- Open `styles.css` and modify the CSS variables at the top:
```css
:root {
    --color-accent: #0066CC;        /* Main accent color (blue) */
    --color-accent-hover: #004C99;  /* Hover state */
    /* ... other colors */
}
```

### To update your resume:
- Replace `assets/Resume_JonathanLee.pdf` with your updated resume
- Keep the same filename, or update the links in `index.html`

## Deploying to GitHub Pages (Free Hosting)

1. Create a GitHub account at https://github.com
2. Create a new repository named `yourusername.github.io`
3. Upload all portfolio files to the repository
4. Go to **Settings → Pages** 
5. Under "Source", select **main** branch
6. Your site will be live at `https://yourusername.github.io`

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Scroll animations
- ✅ Mobile hamburger menu
- ✅ Clean, minimal design per your spec
- ✅ Resume download button
- ✅ Accessible (ARIA labels, semantic HTML)

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

---

Built with passion for Jonathan Lee's portfolio
