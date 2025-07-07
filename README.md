# Personal Website Template

A modern, professional personal website built with Next.js, TypeScript, shadcn/ui, and Tailwind CSS. Originally cloned from [BadEnd777/Personal-Website](https://github.com/BadEnd777/Personal-Website) and extensively customized.

This template is optimized for engineering leaders, technical professionals, and entrepreneurs who want to showcase their work, investments, and advisory roles.

The website is built using [Next.js](https://nextjs.org/) as the framework, [shadcn/ui](https://ui.shadcn.com/) for beautiful components, [Tailwind CSS](https://tailwindcss.com/) for styling, and [TypeScript](https://www.typescriptlang.org/) for type safety.

## Table of Contents

-   [Personal Website Template](#personal-website-template)
    -   [Table of Contents](#table-of-contents)
    -   [Prerequisites](#prerequisites)
    -   [Technologies Used](#technologies-used)
    -   [Usage](#usage)
        -   [Development](#development)
        -   [Production](#production)
    -   [Project Structure](#project-structure)
    -   [Using with Claude Code](#using-with-claude-code)
    -   [Contributing](#contributing)
    -   [License](#license)

## Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (Or other package manager of your choice)
-   [Git](https://git-scm.com/) (Optional, but recommended)

## Technologies Used

-   [Next.js](https://nextjs.org/) — The React framework for production
-   [shadcn/ui](https://ui.shadcn.com/) — Beautiful design components for modern web applications
-   [Tailwind CSS](https://tailwindcss.com/) — A utility-first CSS framework for rapid UI development
-   [TypeScript](https://www.typescriptlang.org/) — A typed superset of JavaScript that compiles to plain JavaScript

## Usage

### Development

To work on the project locally, ensure you have Node.js installed on your machine.

-   Clone the repository:

```bash
git clone https://github.com/Bhavya/Personal-Website.git
```

-   Navigate to the project directory:

```bash
cd Personal-Website # or open the directory in your file explorer
```

-   Install dependencies:

```bash
npm install  # or `pnpm install` if you prefer pnpm
```

-   Start the development server:

```bash
npm run dev  # or `pnpm run dev` if you prefer pnpm
```

-   Open your browser and visit [`http://localhost:3000`](http://localhost:3000) to view the website locally.

### Production

To build the project for production deployment, run:

```bash
npm run build  # or `pnpm run build` if you prefer pnpm
```

The optimized production-ready assets will be generated in the `dist` directory. You can then host these files on a web server to make the website accessible online.

## Project Structure

The project structure is as follows:

-   `public/`: Static assets like images, icons, and favicon
-   `src/`: Source files for the website
    -   `app/`: Next.js App Router pages and layouts
        -   `advising/`: Technical advising page
        -   `investing/`: Angel investing page  
        -   `projects/`: Projects showcase page
        -   `blog/`: Blog listing and individual posts
    -   `components/`: React components
        -   `layout/`: Navigation, header, footer components
        -   `sections/`: Page section components (about, projects, contact)
        -   `ui/`: shadcn/ui components
    -   `data/`: Data files for content management
        -   `contact.ts`: Social media and contact links
        -   `projects.ts`: Project portfolio data
        -   `experience.ts`: Work experience data
        -   `routes.ts`: Navigation menu configuration
    -   `lib/`: Utility functions and helpers
    -   `blog/`: MDX blog posts
    -   `styles/`: Global CSS and Tailwind styles
-   `CLAUDE.md`: Claude Code configuration and project documentation
-   `PERSONAL_SUMMARY.md`: Comprehensive project and personal summary
-   `components.json`: shadcn/ui components configuration
-   `next.config.mjs`: Next.js configuration with static export
-   `tailwind.config.ts`: Tailwind CSS configuration with custom theme
-   `tsconfig.json`: TypeScript configuration

## Using with Claude Code

This template is optimized for use with [Claude Code](https://claude.ai/code) for easy customization and maintenance. 

### Getting Started with Claude Code

1. **Setup**: Ensure you have `CLAUDE.md` and `PERSONAL_SUMMARY.md` in your project root (both included in this template)

2. **CLAUDE.md**: Contains development commands, project architecture, and guidance for Claude Code:
   - Development commands (`npm run dev`, `npm run build`, etc.)
   - Project structure and tech stack overview
   - Component patterns and data management approach
   - Blog system configuration

3. **PERSONAL_SUMMARY.md**: Comprehensive personal and professional summary that Claude Code uses to:
   - Generate relevant content for your pages
   - Understand your background for consistent messaging
   - Create appropriate project descriptions and portfolio content
   - Maintain authentic voice across all sections

### Customizing Your Website

With these files in place, you can ask Claude Code to:

- **Update content**: "Update my work experience section with my new role"
- **Add new pages**: "Create a speaking engagements page"  
- **Modify styling**: "Make the homepage more minimal"
- **Add functionality**: "Add a newsletter signup form"
- **Update projects**: "Replace the projects list with my new repositories"

The template's structured data approach (`src/data/*.ts`) makes it easy for Claude Code to understand and modify your content while maintaining consistency across the site.

### Example Claude Code Prompts

- "Update my bio based on the PERSONAL_SUMMARY.md"
- "Add a new project to my portfolio"
- "Create a testimonials section using the quotes in PERSONAL_SUMMARY.md"
- "Update the color scheme to be more professional"

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding! 🚀

---
