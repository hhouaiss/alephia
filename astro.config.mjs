import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alefia.co',
  trailingSlash: 'never',
  // Site statique par défaut : meilleur TTFB et pages toujours crawlables.
  // Seules les routes /api opt-out via `export const prerender = false`.
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
    imageService: true,
  }),
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Seules la home et les pages /formation-ia sont indexées.
      // Pages légales, 404 et ancienne home (/old) : noindex, exclues du sitemap.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return path === '/' || path === '/formation-ia' || path.startsWith('/formation-ia/');
      },
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            lucide: ['lucide-react'],
          },
        },
      },
    },
  },
});
