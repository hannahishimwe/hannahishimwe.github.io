<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
<NavBar/>
<div class="about-div">
    <div class="about-text">
        <h1>About Me</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="about-image">&nbsp;
    </div>
    <router-link to="/"><img class="fixed-plus" src="../assets/images/plus_sign.png"></router-link> 
    <!-- TODO: Add tooltip -->
</div>
</template>

<style scoped>
    h1, p{
        font-family: 'Questrial', sans-serif;
        margin-top: 10px; 
    }
    h1{
        font-size: 3em;
    }
    p{
        font-size: 1em;
    }
    .about-div{
        display: flex; /* Changed from grid to flex for simpler layout */
        align-items: center; /* Vertically align content */

    }
    .about-image{
        position: relative;
        background-image: url('../assets/images/laptop_image.jpg');
        background-size: contain; /* Fit the entire image within the container */
        background-position: center;
        background-repeat: no-repeat; /* Prevent image from repeating */
        border-radius: 15%;
        width: 600px;
        height: 600px;
    }
    .about-text{
        position: relative;
        margin: 0 -5px 0 100px;
        text-align: left;
        width: 400px;
        height: 300px;
    }
</style>
