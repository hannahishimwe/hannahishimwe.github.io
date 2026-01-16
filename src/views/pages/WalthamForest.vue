<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/edith_main.jpg', import.meta.url).href
</script>

<template>
<div class="page-container">
<NavBar/>
<router-link to="/Experience"><img class="fixed-back" src="../../assets/images/back_button.png"></router-link> 
<PageLayout
  title="Appello: A PCN Case Officer Dashboard"
  body="A dashboard for managing PCN cases for the London Borough of Waltham Forest.

This is the high level prototype before development.
<br /><br />
Key design choices: Accessibility-first approach with clear fonts and colour choices for extreme users, smooth interaction flows and design elements to reduce feelings of monotony and improve task efficiency. 
<br /><br />
Feedback highlighted the design as modern, fun and innovative. 
<br /><br />
Technology: Figma"
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
