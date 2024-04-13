<script>
import CarouselItem from '../components/CarouselItem.vue'
export default {
  components: {
    CarouselItem // Register the CarouselItem component
  },
data() {
    return {
      currentIndex: 0,
      items: [
        { text: "Junior Data Analyst", url: "/src/assets/images/ambulance.jpg" },
        { text: "Covid Data Report", url: "/src/assets/images/covid_data_pic.jpg" },
        { text: "Game Of Life", url: "/src/assets/images/game_of_life_pic.jpg" },
        { text: "Task Manager App", url: "/src/assets/images/jellyfish_pic.jpg" }
      ]
    };
  }};
</script>

<template>
<div class="carousel-div">
    <CarouselItem v-for="(item, index) in items" :key="index" :text="item.text" :url="item.url" />
</div>
</template>


<style scoped>
.carousel-div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
    height: 600px;
    left: 50%;
    top: 50%;
}
</style>