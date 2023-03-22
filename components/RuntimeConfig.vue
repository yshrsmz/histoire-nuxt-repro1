<script setup>
/* eslint-disable no-undef */
console.log('useNuxtApp', useNuxtApp())
console.log('useNuxtApp().$config', useNuxtApp().$config)
const config = useRuntimeConfig()
console.log('useRuntimeConfig', config)
</script>

<template>
    <div>
        <h3>Nuxt runtime config</h3>
        <pre>{{ config }}</pre>
    </div>
</template>
