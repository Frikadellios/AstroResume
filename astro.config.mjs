import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.devopsick.com' : 'http://localhost:4321',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), sitemap(), robotsTxt({
    sitemap: 'https://www.devopsick.com/sitemap-0.xml',
    host: 'devopsick.com'
  })],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});