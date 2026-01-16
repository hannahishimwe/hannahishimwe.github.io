<script setup>
import NavBar from '../components/NavBar.vue'
// import CarouselItem from '../components/CarouselItem.vue'
// import Carousel from '../components/Carousel.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';



const images = [
  {
    id: 1,
    url: new URL('../assets/images/jellyfish_logo.png', import.meta.url).href,
    link:'/Jellytask',
  },
  {
    id: 2,
    url: new URL('../assets/images/appello_logo.png', import.meta.url).href,
    link:'/WF',
  },
  {
    id: 3,
    url: new URL('../assets/images/chatsnoir_logo.png', import.meta.url).href,
    link:'/Chatsnoirs',
  },
  {
    id: 5,
    url: new URL('../assets/images/UKTAS.png', import.meta.url).href,
    link:'/TAS'
  },
    {
    id: 6,
    url: new URL('../assets/images/bonita.jpg', import.meta.url).href,
    link:'/Bonita'
  },
]



const carouselConfig = {
  height: 250,
  itemsToShow: 2,
  wrapAround: true,
}

</script>

<template>
<NavBar/>
<div class="experience-page">
<div class="experience-div">
<h1> Scroll through each project </h1>
<Carousel v-bind="carouselConfig">
    <Slide v-for="image in images" :key="image.id">
        <router-link :to="image.link" class="image-container">
      <img class="carousel-image" :src="image.url" alt="image" />
        </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>



<router-link to="/"><img class="fixed-plus" src="../assets/images/plus_sign.png"></router-link> 
</div>
</div>
</template>

<style scoped>

/* .experience-page{
   background: 
    radial-gradient(circle at var(--x, 50%) var(--y, 50%), #1a1a1a 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, #141414 0%, transparent 40%),
    #000000;
  animation: moveGradient 3s ease infinite;
}
@keyframes moveGradient {
  0%, 100% {
    --x: 20%;
    --y: 30%;
  }
  50% {
    --x: 80%;
    --y: 70%;
  }
} */

.experience-div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: -80px;
 
}

h1{
  font-size: 50px;
}

:root {
  --carousel-transition: 300ms;
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.9;

  background-color: #242424;

}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  
}

.image-container {
  display: block;
  width: 100%;
  height: 250px; /* fixed height */
  padding: 20px;

}

.carousel-image {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  
}

.carousel__viewport {
  perspective: 2000px;

}

.carousel__track {
  transform-style: preserve-3d;
  
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.85);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
  filter: drop-shadow(0 4px 13px rgba(255, 255, 255, 0.3));
  transform: scale(1.05)
  
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}

</style>
