<script setup>
import NavBar from '../components/NavBar.vue'
import CarouselItem from '../components/CarouselItem.vue'
import Carousel from '../components/Carousel.vue'
</script>

<template>
<NavBar/>
<div class="exp-div">
 <Carousel/>
    <router-link to="/"><img class="fixed-plus" src="../assets/images/plus_sign.png"></router-link> 
</div>
</template>

<style scoped>

</style>
