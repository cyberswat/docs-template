# VitePress Diátaxis Documentation Template

A production-ready documentation template using [VitePress](https://vitepress.dev/) and the [Diátaxis](https://diataxis.fr/) framework.

## Features

- 📚 **Diátaxis Framework** - Organized into tutorials, how-to guides, reference, and explanation
- 🚀 **VitePress Powered** - Fast, lightweight, and beautiful documentation
- 🎨 **Ready to Customize** - Pre-configured with sensible defaults
- 📱 **Mobile Friendly** - Responsive design that works everywhere
- 🔍 **Built-in Search** - Local search out of the box
- 🚦 **GitHub Actions** - Automatic deployment to GitHub Pages
- 🌙 **Dark Mode** - Automatic theme switching

## Quick Start

### Use This Template

1. Click "Use this template" button on GitHub
2. Create your new repository
3. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   ```

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run docs:dev
   ```

3. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run docs:build
```

Preview the production build:
```bash
npm run docs:preview
```

## Customization

### 1. Update Project Information

Edit `docs/.vitepress/config.js`:
```js
export default defineConfig({
  title: 'Your Project Name',
  description: 'Your project description',
  // ...
})
```

### 2. Update Homepage

Edit `docs/index.md` to customize:
- Hero section
- Features
- Calls to action

### 3. Configure GitHub Pages

1. Go to Settings → Pages in your GitHub repository
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

## Documentation Structure

Following the Diátaxis framework:

```
docs/
├── tutorials/        # Learning-oriented
│   └── getting-started.md
├── how-to/          # Task-oriented
│   └── index.md
├── reference/       # Information-oriented
│   └── index.md
└── explanation/     # Understanding-oriented
    └── architecture.md
```

### Tutorials
Step-by-step guides for newcomers. Focus on learning by doing.

### How-To Guides
Recipes for solving specific problems. Assume basic knowledge.

### Reference
Technical descriptions. Accurate and complete information.

### Explanation
Conceptual guides. Provide context and discuss alternatives.

## GitHub Actions

The included workflow automatically deploys to GitHub Pages when you push to main. Make sure to:

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Your docs will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Advanced Configuration

### Custom Domain

1. Add a `CNAME` file to `docs/public/` with your domain
2. Configure DNS to point to GitHub Pages

### Analytics

Add to `docs/.vitepress/config.js`:
```js
export default defineConfig({
  head: [
    // Google Analytics, Plausible, etc.
  ]
})
```

### Custom Components

Create Vue components in `docs/.vitepress/components/` and register them in `docs/.vitepress/theme/index.js`.

## Tips

1. **Keep it organized** - Follow the Diátaxis principles
2. **Use frontmatter** - Add metadata to your pages
3. **Include examples** - Code samples make everything clearer
4. **Add diagrams** - VitePress supports Mermaid out of the box
5. **Cross-reference** - Link between related pages

## Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Diátaxis Framework](https://diataxis.fr/)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This template is MIT licensed. Your documentation content can have its own license.