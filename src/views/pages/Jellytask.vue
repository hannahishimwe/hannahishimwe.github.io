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
  body=
    "A user-focused application designed to work with the mind to encourage productivity. 
    <br /><br />
    Key design choices: Immediate visual feedback on task completion, readable fonts and spacing optimised to boost overall efficiency and task tracking. 
    <br /><br />
    Feedback noted a demonstration of the ability to translate functional requirements into intuitive, well-structured interfaces.
    <br /> <br />
    Technology: Django (Python), HTML, CSS."

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