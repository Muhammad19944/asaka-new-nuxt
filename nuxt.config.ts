// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
  * CSS
  * */
  // @ts-ignore
  css: ["~/assets/css/main.css"],
  /*
  * Modules
  * */
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-swiper'
  ],
  i18n: {
    baseUrl: 'https://asakabank.uz',
    locales: [
      {
        name: "Uz",
        code: 'uz',
        iso: 'uz-UZ',
        file: "uz.json"
      },
      {
        name: "Ру",
        code: 'ru',
        iso: 'ru-RU',
        file: "ru.json"
      },
      {
        name: "En",
        code: 'en',
        iso: 'en-US',
        file: "en.json"
      },
    ],
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'uz',
    fallbackLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    rootRedirect: {
      statusCode: 301,
      path: 'uz'
    }
  },
  colorMode: {
    preference: "light"
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  }
})
