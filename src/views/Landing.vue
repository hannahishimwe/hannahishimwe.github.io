<script setup>
import Heading from '../components/Heading.vue'
defineProps({
  copy: String,
})
</script>

<template>
<div class = "landing-container">
  <Heading/>
  <div class="copy-parent">
    <p class="landing-copy">Designer, Writer, Computer Science MSci.</p>
  </div>
  <div class="button-parent">
    <router-link to="/about" class="nav-link"><em>Learn More</em></router-link>
</div>
</div>

</template>

<style scoped>

.landing-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

}

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

  

.button-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}
.button{
    position: relative;
    font-family: 'Radley', serif;
    font-size: 1rem;
    color: #f8eaea;
    padding: 1rem 2rem;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    border: none;

}

.button::after {
  content: ''; /* Required for pseudo-elements */
  position: absolute;
  left: 30%;
  bottom: 10px; /* Move the underline slightly below the text */
  width: 0;/* Initial width of underline */
  height: 1px;
  background-color: #f8eaea; /* Color of underline */
  transition: width 0.5s ease; 

}

.button:hover::after {
    width: 40%;  /* Fade in the underline on hover */
}

.button:hover {
  color:  #f8eaea; /* Text color on hover */
}
</style>
