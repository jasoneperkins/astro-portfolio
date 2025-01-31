// @ts-check
import {defineConfig} from "astro/config"
import AstroPWA from "@vite-pwa/astro"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://jasoneperkins.com",
  integrations: [AstroPWA(), sitemap()],
})
