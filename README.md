# 💝 Valentine's Day Proposal Website

A special interactive website to ask Washielah to be my Valentine! ❤️

## Features

- Beautiful animated card with glowing effects
- Interactive "No" button that moves away when hovered
- "Yes" button that grows bigger with each attempt to click "No"
- Success screen when "Yes" is clicked
- Fully responsive design

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the local URL shown in the terminal

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `valentines-proposal`

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit - Valentine's proposal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentines-proposal.git
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source should be set to "gh-pages" branch
   - Your site will be published at: `https://YOUR_USERNAME.github.io/valentines-proposal/`

## Adding Your Celebration GIF

Place your celebration GIF in the `public` folder and name it `celebration.gif`, or update the path in [src/App.jsx](src/App.jsx#L82).

## Customization

- Update the homepage URL in [package.json](package.json#L5) with your GitHub username
- Update the base path in [vite.config.js](vite.config.js#L6) if you use a different repository name
- Customize colors, text, and styling in [src/App.css](src/App.css)

---

Made with ❤️ for Washielah
