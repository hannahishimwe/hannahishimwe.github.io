<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  copy: String,
})

</script>

<template>
  <h1>{{ title }}</h1>

  <p class="header-copy">{{ copy }}</p>

</template>

<style scoped>

</style>
