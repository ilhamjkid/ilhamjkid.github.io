export const ALLOWED_TECH_STACK = [
  // --- Languages ---
  "typescript",
  "javascript",

  // --- Runtime & Bundler ---
  "bun",
  "nodejs",

  // --- Frontend & UI Frameworks ---
  "react",
  "nextjs",
  "astro",
  "expo",
  "tailwindcss",

  // --- Backend Frameworks ---
  "express",
  "elysia",

  // --- Databases & ORM/Query Builders ---
  "postgresql",
  "neon",
  "prisma",
  "drizzle-orm",
  "postgresjs",

  // --- State & Data Fetching (Modern React/TanStack) ---
  "tanstack-query",
  "tanstack-router",
  "tanstack-start",

  // --- Auth & Utilities ---
  "jwt",
  "authjs",
] as const;

export function formatTechName(tech: string): string {
  const map: Record<string, string> = {
    typescript: "TypeScript",
    javascript: "JavaScript",
    nextjs: "Next.js",
    tailwindcss: "Tailwind CSS",
    elysia: "ElysiaJS",
    "drizzle-orm": "Drizzle ORM",
    postgresql: "PostgreSQL",
    express: "Express.js",
    postgresjs: "Postgres.js",
    "tanstack-query": "TanStack Query",
    "tanstack-router": "TanStack Router",
    "tanstack-start": "TanStack Start",
    authjs: "Auth.js",
    jwt: "JWT",
    bun: "Bun",
    expo: "Expo",
    astro: "Astro",
    react: "React",
    prisma: "Prisma",
    neon: "Neon",
  };

  return map[tech.toLowerCase()] || tech.toUpperCase();
}
