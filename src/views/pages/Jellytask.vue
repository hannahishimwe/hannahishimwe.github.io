<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/jellyfish_main.jpg', import.meta.url).href
</script>

<template>
<div class="page-container">
<NavBar/>
<router-link to="/Experience"><img class="fixed-back" src="../../assets/images/back_button.png"></router-link> 
<PageLayout
  title="Jellyfish: A Task Managing Application"
  body="This is some body text that explains something important. It can wrap across multiple lines but will stay inside the card."
  :imageUrl="tasImg"
/>
 <router-link to="/"><img class="fixed-plus" src="../../assets/images/plus_sign.png"></router-link> 
</div>
</template>

<style scoped>
  .page-container {
  min-height: 100vh;  
  width: 100%;
  margin-top: 150px;
}
</style>