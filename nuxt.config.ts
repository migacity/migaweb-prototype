import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    meta: {
        link: [
            { rel: 'icon', type: "image/svg+xml", href: 'favicon.svg' }
        ],
    },
})
