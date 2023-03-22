// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            testKey: 'test_value',
            apiKey: '',
            environment: ''
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
})
