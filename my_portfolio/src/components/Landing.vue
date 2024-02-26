<script setup>

import Button from './helpers/Button.vue';
import Heading from './helpers/Heading.vue'
defineProps({
  copy: String,
})

</script>

<template>
  <Heading/>
  <div class="copy-parent">
    <p class="landing-copy">{{ copy }}</p>
  </div>
  <Button copy="Learn More" destination="./About.vue" />

</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Questrial&family=Radley:ital@0;1&display=swap');

  .copy-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}
  .landing-copy {
    font-family: 'Questrial', serif;
    font-size: 2rem;
    color: #f8eaea;
    margin: 0;
    padding: 1rem 2rem;
  }
</style>
