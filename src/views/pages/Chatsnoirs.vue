<script setup>
import NavBar from '../../components/NavBar.vue'
import PageLayout from '../../components/PageLayout.vue'

const tasImg = new URL('../../assets/images/chatsnoir_main.png', import.meta.url).href
</script>

<template>
<div class="page-container">
<NavBar/>
<router-link to="/Experience"><img class="fixed-back" src="../../assets/images/back_button.png"></router-link> 
<PageLayout
  title="Chatsnoirs: Sustainability App for Students Prototype"
  body="A high-fidelity prototype for an app encouraging university students to adopt sustainable practices. 
<br /><br />
Key design choices: User-centred design informed by interviews, coding quotes, thematic analysis, and HCI/UX research methods, ensuring the interface was intuitive, engaging, and aligned with user needs. 
<br /><br />
Feedback from participants highlighted the design as thoughtful, usable, and well-informed by research, demonstrating strong user-focused design and prototype development skills. 
<br /><br />
Technology: Miro, Figma."
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
