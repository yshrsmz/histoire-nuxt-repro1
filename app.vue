<script setup>
/* eslint-disable no-undef */
console.log('useNuxtApp', useNuxtApp())
console.log('useNuxtApp().$config', useNuxtApp().$config)
const config = useRuntimeConfig()
console.log('useRuntimeConfig', config)
</script>

<template>
  <div>
    <Meow/>
    <pre>{{ config }}</pre>
  </div>
</template>
