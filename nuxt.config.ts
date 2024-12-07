// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  image: {
    // Example default configuration for the Nuxt Image module
    dir: 'assets', // Set the default directory
  },
  googleFonts: {
    families: {
      'Clash Display': {
        wght: [400, 700],
      }, // Enables Clash Display with default weights
      'Subjectivity': {
        wght: [700, 400],
        ital: [700]
      },
      'Outfit': {
        wght: [900, 400]
      }
    },
    display: 'swap',
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ]
})