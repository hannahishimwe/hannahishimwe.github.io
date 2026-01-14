<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/edith_main.jpg', import.meta.url).href
</script>

<template>
<NavBar/>
<PageLayout
  title="Appello: A PCN Case Officer Dashboard"
  body="This is some body text that explains something important. It can wrap across multiple lines but will stay inside the card."
  :imageUrl="tasImg"
/>
 <router-link to="/"><img class="fixed-plus" src="../../assets/images/plus_sign.png"></router-link> 
</template>

<style scoped>
 
</style>
