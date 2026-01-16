<script setup>
import NavBar from '../components/NavBar.vue'

</script>

<template>
<NavBar/>
<div class="about-div">
    <div class="about-text">
        <h1>About Me</h1>
        <p>
            I'm Hannah: a freelance web architect, front end designer, and writer.<br><br>
            I combine a strong creative instinct with a solid technical foundation as a Computer Science Master's student to translate requirements into clean, usable, well-structured layouts.
            I thrive in an ever dynamic atmosphere, always described by previous employers as organised, reliable, proactive and ambitious. <br><br>
            I value a growth mindset. I am quick to learn, always building new skills and not having a fear to try new things. <br><br>
            Have a look around, explore and get in touch to collaborate.<br><br>
            The best experience with this website is in full screen mode.
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
        margin-top: -20px;
    }
    h1{
        font-size: 3em;
    }
    p{
        font-size: 1em;
    }
    .about-div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;

    }
    .about-image{
        position: relative;
        background-image: url('../assets/images/laptop_image.jpg');
        background-size: contain; 
        background-position: center;
        background-repeat: no-repeat; 
        border-radius: 15%;
        width: 600px;
        height: 600px;
    }
    .about-text{
        position: relative;
        margin: 0px -5px 250px 100px;
        text-align: left;
        width: 400px;
        height: 300px;
    }
</style>
