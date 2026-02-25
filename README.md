# Bianka's Portfolio

A personal portfolio website showcasing three frontend development projects built during the Noroff Frontend Development course.

## Description

This portfolio is a single-page React application with individual project article pages. It features a responsive design using Tailwind CSS, client-side routing with React Router, and is built with TypeScript for type safety.

### Featured Projects

| Project | Description | Live Site | Repository |
| --- | --- | --- | --- |
| **CSS Frameworks** | A responsive UI built with utility-first CSS frameworks | [Live](https://css-frameworks-rust.vercel.app) | [Repo](https://github.com/BiankaSzabo/css-frameworks) |
| **Auction House** | A full-featured online auction platform (Semester Project 2) | [Live](https://semester-project-2-auctionhouse.vercel.app/) | [Repo](https://github.com/EkremGursoy/semester-project-2-auctionhouse) |
| **JS Frameworks** | A React-based e-commerce app with API integration | [Live](https://jsfw-2025-v1-bianka-jsframeworks.vercel.app) | [Repo](https://github.com/BiankaSzabo/jsfw-2025-v1-bianka-jsframeworks) |

## Built With

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [React Router](https://reactrouter.com/) — Client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS framework
- [Vite](https://vite.dev/) — Build tool and dev server
- [react-icons](https://react-icons.github.io/react-icons/) — Icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (included with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BiankaSzabo/portfolio2.git
cd portfolio2
```

2. Install dependencies:

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── AboutSection.tsx
│   ├── Button.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── Layout.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsSection.tsx
│   ├── ScrollToTop.tsx
│   ├── SocialLinks.tsx
│   └── TechTag.tsx
├── data/
│   └── projects.ts  # Project data (titles, descriptions, URLs)
├── pages/
│   ├── HomePage.tsx
│   └── ProjectPage.tsx
├── index.css         # Tailwind config & global styles
└── main.tsx          # App entry point & router setup
```

## Contact

- [GitHub](https://github.com/BiankaSzabo)
- [LinkedIn](https://www.linkedin.com/in/bianka-szab%C3%B3-76aa1885/)
- Email: bianka.d.szabo@gmail.com

## License

This project is for educational purposes as part of the Noroff Frontend Development course.
