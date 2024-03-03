<script setup>
import { defineProps } from 'vue';
defineProps({
    text: String,
    url: String
})
</script>

<template>
<div class="carousel-div">
    <div class="text-div">
        <p>{{text}}</p>
    </div>
    <div class="img-div" :style="{ 'background-image': 'url(' + url + ')' }">
    </div>
</div>
</template>

<style scoped>
.carousel-div {
    position: relative; /* Required for absolute positioning of children */
    display: flex;
    width: 200px; /* Set the width of the div */
    height: 300px; /* Set the height of the div */
    border-top: 1px solid white; /* Create a white line on the top border */
    border-left: 0; /* Remove border on the left side */
    border-right: 0; /* Remove border on the right side */
    border-bottom: 0; /* Remove border on the bottom side */
    overflow: hidden; /* Hide overflowing content */
}

.img-div {
    position: absolute;
    width: 200px; /* Set the width of the div */
    height: 200px; /* Set the height of the div */
    background-size:cover; /* Fit the entire image within the container */
    background-position: center;
    background-repeat: no-repeat; /* Prevent image from repeating */
    border-radius: 10%; /* Create a circle */
    bottom: 0; /* Fixed at the bottom of carousel-div */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
}

.text-div {
    position: absolute;
    width: 200px; /* Set the width of the div */
    height: 40px; /* Set the height of the div */
    top: 30px; /* Positioned 10px away from the top of carousel-div */
    left: 50%; /* Center horizontally */
    /* background-color: grey; */
    transform: translateX(-50%); /* Center horizontally */
    text-align: left; /* Align text to the left */
}

p{
        font-family: 'Questrial', sans-serif;
        color: white;
        font-size: 1.25em;   
}

</style>
