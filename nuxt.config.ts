import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  css: [
    resolve('./assets/css/medium-zoom.css')
  ],
})
