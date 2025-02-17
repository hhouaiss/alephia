import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel(
    {
      webAnalytics: { enabled: true },
      speedInsights: { enabled: true },
      imageService: true,
    }),
    integrations: [
      tailwind(),
      react({
        include: ['**/react/*'],
      })
    ],
    vite: {
      optimizeDeps: {
        exclude: ['lucide-react']
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'lucide': ['lucide-react']
            }
          }
        }
      }
    }
});