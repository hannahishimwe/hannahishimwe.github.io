<script>
import CarouselItem from '../components/CarouselItem.vue'
export default {
  components: {
    CarouselItem // Register the CarouselItem component
  }
};
</script>

<template>
<div class="carousel-div">
    <CarouselItem text="Junior Data Analyst" url="/src/assets/images/ambulance.jpg"/>
</div>
</template>

<style scoped>
.carousel-div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 600px;
    height: 600px;
}
</style>