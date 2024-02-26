<script setup>

import Heading from './Heading.vue'
defineProps({
  copy: String,
})

</script>

<template>
  <Heading/>

  <p class="header-copy">{{ copy }}</p>

</template>

<style scoped>

</style>
