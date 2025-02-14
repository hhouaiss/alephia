#!/bin/bash

# Création des dossiers principaux
mkdir -p src/{components,layouts,pages,styles,utils,content} public/images

# Création des sous-dossiers de components
mkdir -p src/components/{layout,shared,blog}

# Création des sous-dossiers de content
mkdir -p src/content/blog

# Création des fichiers de composants layout
touch src/components/layout/{Header,Footer,Navigation}.astro

# Création des fichiers de composants shared
touch src/components/shared/{Button,Card,SEOHead,StatCard,ServiceCard}.astro

# Création des fichiers de composants blog
touch src/components/blog/{BlogCard,BlogList}.astro

# Création des fichiers de layout
touch src/layouts/{Layout,BlogPost}.astro

# Création des pages principales
touch src/pages/{index,about,services,contact}.astro
mkdir -p src/pages/blog
touch src/pages/blog/index.astro
touch src/pages/blog/[slug].astro

# Création des fichiers de style
touch src/styles/global.css

# Création des fichiers utils
touch src/utils/{seo,constants}.ts

# Création des fichiers de configuration
touch astro.config.mjs
touch tailwind.config.mjs
touch tsconfig.json

# Création des fichiers de contenu exemple
touch src/content/blog/{article1,article2}.md

# Création du dossier public et ses assets
touch public/favicon.svg

# Création du fichier de configuration des contenus
touch src/content/config.ts

# Ajout de contenu initial dans les fichiers de configuration
echo 'import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://alephia.com",
  integrations: [tailwind()],
  output: "static",
  adapter: vercel(),
});' > astro.config.mjs

echo '/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#10118b",
        secondary: "#ffa500",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};' > tailwind.config.mjs

# Message de confirmation
echo "✅ Structure du projet créée avec succès !"
echo "📁 Les dossiers et fichiers suivants ont été créés :"
tree