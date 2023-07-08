import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: {},
  extends: "@nuxt-themes/docus",
  css: [
    resolve('./assets/css/AlgoliaSearch.css'),
    resolve('./assets/css/Fixup.css'),
    resolve('./assets/css/MediumZoom.css'),
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
    public: {
      algolia: {
        applicationId: '',
        apiKey: '',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'nootincio',
        },
      },
    },
  },
});
