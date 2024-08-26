import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import compress from "@playform/compress";
import robots from "astro-robots-txt";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sotiesman.tech",
  integrations: [svelte(), mdx(), sitemap(), robots(), compress()],
  redirects: {
    "/git": "https://codeberg.org/sotiesman",
  },
  experimental: {
    env: {
      schema: {
        SPOTIFY_CLIENT_ID: envField.string({
          context: "client",
          access: "public",
        }),
        SPOTIFY_CLIENT_SECRET: envField.string({
          context: "client",
          access: "public",
        }),
        SPOTIFY_REFRESH_TOKEN: envField.string({
          context: "client",
          access: "public",
        }),
      },
    },
  },
});
