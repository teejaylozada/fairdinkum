// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',
    ['nuxt-mail', {
      smtp: {
        service: 'gmail',
        auth: {
          user: process.env.NUXT_MAIL_USER,
          pass: process.env.NUXT_MAIL_PASSWORD,
        },
      },
    }],
  ],

  mail: {
    message: {
      to: "fortexd20@gmail.com",
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 587,
    },
  },

})
