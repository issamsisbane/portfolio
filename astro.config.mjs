import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://IssamSisbane.github.io',
  base: '/portfolio',
  integrations: [mdx(), sitemap(), tailwind(), vue(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),],
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});