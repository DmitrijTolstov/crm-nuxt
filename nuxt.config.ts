export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    'shadcn-nuxt',
    '@nuxt/image',
    ['@nuxtjs/google-fonts',{
        families: {
          Lato:{
            wght:[300,400,700],
            ital:[300]
          }
        }
    }],
    '@nuxt/icon',
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports:true
      }
    ],
  ],
   shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia:{
    storesDirs: ['./store/**']
  }
})