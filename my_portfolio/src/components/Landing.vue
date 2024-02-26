<script setup>

import Button from './Button.vue';
import Heading from './Heading.vue'
defineProps({
  copy: String,
})

</script>

<template>
  <Heading/>
  <p class="header-copy">{{ copy }}</p>
  <Button copy="Explore" destination="./About" />

</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Questrial&family=Radley:ital@0;1&display=swap');
  .header-copy {
    font-family: 'Questrial', serif;
    font-size: 2rem;
    color: #f8eaea;
    margin: 0;
    padding: 1rem 2rem;
  }
</style>
