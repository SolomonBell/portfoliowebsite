# Portfolio Website

A personal portfolio website built with **Next.js 16** (App Router), **React**, **TypeScript**, and **Tailwind CSS**. The site features a modern, responsive design with reusable components and semantic HTML structure.

## Tech Stack

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open in your browser:

   http://localhost:3000

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
  components/     shared components (Navbar, UI primitives)
  sections/       page sections (Hero, About, Projects, Certificates, Hobbies, Contact)
  lib/            constants and helpers
public/           static assets (images, resume)
```

## Deployment

Deployed on Vercel with a custom domain managed via Cloudflare DNS.