<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/TAS.png', import.meta.url).href
</script>

<template>
<div class="page-container">
<NavBar/>
<router-link to="/Experience"><img class="fixed-back" src="../../assets/images/back_button.png"></router-link> 
<PageLayout
  title="TAS Usecase Library"
  body="A maintenance and optimisation project for a web application, ensuring it was ready for continued use. 
<br /><br />
Key design choices: Code fixes to improve usability, reliability, and workflow efficiency. Improvements to accessibility to comply with WCAG standards. 
<br /><br />
Feedback highlighted that the improvements allowed the team to continue their vital research work without interruption, allowing me to show practical problem-solving and technical competence. 
<br /><br />
Technology: PHP, HTML, CSS, JavaScript."
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
