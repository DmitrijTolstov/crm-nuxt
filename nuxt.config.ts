export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    ['@nuxtjs/google-fonts',{
        families: {
          Lato:{
            wght:[300,400,700],
            ital:[300]
          }
        }
    }]
  ],
   shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})