# Tomato Nursery Landing Page - Lab 4

A modern, JAMstack-powered landing page built with Astro SSG and TinaCMS for easy content management.

## Live Demo

Deploy link: [Coming soon]

## Tech Stack

- **Static Site Generator**: Astro 4.0
- **Git-based CMS**: TinaCMS
- **CSS Framework**: Bootstrap 5.3.2
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Google Fonts (Fraunces & Space Grotesk)

## Features

### Lab 4 - SSG & CMS Integration
- ✅ Migrated to Astro static site generator
- ✅ Integrated TinaCMS for content management
- ✅ All page content editable via CMS
- ✅ Bootstrap CSS framework from Lab 3 maintained
- ✅ Git-based content workflow

### Editable Content via CMS
- Hero section (heading, description, metrics)
- Services cards
- Benefits section
- Contact information
- Mobile promotional banner
- Page title and meta description

### From Previous Labs
- Fully responsive design (mobile/tablet/desktop)
- Animated tomato mascot with hover interactions
- Mobile-only elements (FAB button, promo banner)
- Bootstrap grid system and components

## Development

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup

1. Clone the repository:
```bash
git clone https://github.com/FilipObrijan/web-lab4.git
cd web-lab4
```

2. Install dependencies:
```bash
npm install
```

3. Run development server with TinaCMS:
```bash
npm run dev
```

This starts:
- Astro dev server at `http://localhost:4321`
- TinaCMS admin at `http://localhost:4321/admin`

### TinaCMS Setup

To connect TinaCMS to your GitHub repository:

1. Sign up at [https://tina.io](https://tina.io)
2. Create a new project and connect your GitHub repository
3. Get your `TINA_CLIENT_ID` and `TINA_TOKEN`
4. Create a `.env` file in the project root:
```
TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

### Editing Content

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:4321/admin`
3. Edit content in the visual editor
4. Changes are saved to `content/pages/home.json`
5. Commit and push changes to Git

### Build for Production

```bash
npm run build
```

Builds both TinaCMS admin and the Astro site to `dist/` folder.

## Project Structure

```
web-lab4/
├── content/
│   └── pages/
│       └── home.json          # CMS-managed content
├── public/
│   └── screenshots/           # Static assets
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Base layout template
│   ├── pages/
│   │   └── index.astro       # Home page
│   └── styles/
│       ├── reset.css         # CSS reset
│       └── style.css         # Custom styles
├── tina/
│   └── config.ts             # TinaCMS schema configuration
├── astro.config.mjs          # Astro configuration
└── package.json              # Dependencies and scripts
```

## Deployment

This site can be deployed to:
- **GitHub Pages** (configured in astro.config.mjs)
- **Netlify**
- **Vercel** 
- **Cloudflare Pages**

### GitHub Pages Deployment

1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. The site will build and deploy automatically

## Development Branches

- `setup-astro-ssg` - Initial Astro SSG migration
- `add-tinacms` - TinaCMS integration and content modeling

## Content Management

All content is stored in JSON format at `content/pages/home.json` and can be edited through:
1. TinaCMS visual editor (recommended)
2. Direct JSON file editing in your code editor
3. GitHub web interface

Changes are version-controlled via Git, providing full content history and rollback capabilities.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## From Previous Labs

### Lab 3 Branches
- `responsive-design` - Mobile-first responsive improvements
- `add-animated-mascot` - Friendly tomato mascot with animations
- `css-framework-bootstrap` - Bootstrap CSS framework integration

## License

Educational project - Lab 4 assignment
