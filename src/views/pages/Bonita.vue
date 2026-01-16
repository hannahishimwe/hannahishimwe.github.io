<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/404_page.png', import.meta.url).href
</script>

<template>
<div class="page-container">
<NavBar/>
<router-link to="/Experience"><img class="fixed-back" src="../../assets/images/back_button.png"></router-link> 
<PageLayout
  title="Bonita: A Witty 404 Page"
  body="A creative exercise and rapid prototype. I combined a café photo shoot I was interested in (Bonita) with a design exercise prompt (a 404 page for a Boston-based company).
<br /><br />
Key design choices: Used Boston-inspired colour schemes and iconic associations (Harvard, intelligence, local character) to create a witty, memorable experience, even though the café isn’t actually from Boston. Clear layout and hierarchy ensure usability. 
<br /><br />
I used this to practice creative thinking, adaptability, and the ability to turn cultural cues into intentional, user-focused design. 
<br /><br />
Technology: Figma."
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
