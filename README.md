# Jonathan Lee — Personal Website

Personal portfolio website built with HTML, CSS, and JavaScript.

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub repository
- Go to [github.com](https://github.com) and click **New repository**
- Name it: `JonathanLee1217.github.io` *(must match your GitHub username exactly)*
- Set it to **Public**
- Do **not** initialize with a README

### Step 2 — Upload your files
Upload all files in this folder to the repository root:
```
index.html       ← main website
resume.pdf       ← your resume (replace the placeholder)
README.md        ← this file
```

### Step 3 — Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Under **Source**, select `main` branch, folder `/ (root)`
- Click **Save**

Your site will be live at: **https://JonathanLee1217.github.io**

---

## 📧 Activate the Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) — free for up to 200 emails/month.

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (Gmail works great)
3. Create an **Email Template** — use these variables in the template:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Open `index.html` and find these 3 lines near the bottom (~line 580):
   ```js
   emailjs.init('YOUR_PUBLIC_KEY');
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
   ```
5. Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with your actual values from the EmailJS dashboard.

---

## 📄 Replace the Resume

Replace `resume.pdf` in this folder with your actual resume PDF. Keep the filename exactly as `resume.pdf`.

---

## 🛠 Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- [Font Awesome 6](https://fontawesome.com) — icons
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)
- [Devicons CDN](https://devicon.dev) — tool logos
- [EmailJS](https://www.emailjs.com) — contact form

---

© 2025 Jonathan Lee
