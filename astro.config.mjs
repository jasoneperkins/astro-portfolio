// @ts-check
import {defineConfig} from "astro/config"
import AstroPWA from "@vite-pwa/astro"
import sitemap from "@astrojs/sitemap"

import webmanifest from "astro-webmanifest"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  site: "https://www.jasoneperkins.com",
  integrations: [
    AstroPWA(),
    sitemap(),
    webmanifest({
      name: "AstroCorp",
      icon: "src/assets/icons/favicon.svg",
      short_name: "Astro",
      description: "Here is your app description",
      start_url: "/",
      theme_color: "#fefefe",
      background_color: "#fefefe",
      display: "standalone",
      config: {
        icon: "src/assets/images/apple-touch-icon.png",
        insertAppleTouchLinks: true,
      },
    }),
  ],
  adapter: netlify(),
})
