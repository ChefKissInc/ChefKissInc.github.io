import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: {},
  extends: "@nuxt-themes/docus",
  css: [
    resolve('./assets/css/medium-zoom.css')
  ],
  colorMode: {
    preference: 'dark',
  },
  runtimeConfig: {
    content: {
      // @ts-ignore
      documentDriven: {
        host: 'https://nootinc.github.io',
      },
    },
  },
});
