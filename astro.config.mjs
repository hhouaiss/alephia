import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://alephia.com",
  integrations: [tailwind(), react()],
  output: "static",
  adapter: vercel(),
});