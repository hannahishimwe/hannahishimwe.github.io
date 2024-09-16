<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
<NavBar/>
<div class="contact-wrapper">
    <div class="contact-heading">
    <h1 class="contact-text">Thanks for staying a while.<br>Let's connect.</h1>
</div>
<div class="contact-div">
<div class="location">
    <img src="../assets/images/location.png" alt="location icon">
    <p>London, UK</p>
</div>
<div class="linkedin">
    <img src="../assets/images/internet.png" alt="location icon">
    <p> <a href="https://www.linkedin.com/in/hannah-destiny-bbb089293/" title="LinkedIn">Visit my LinkedIn here </a></p>
</div>
<div class="email">
    <img src="../assets/images/mail.png" alt="location icon">
    <p><a href="mailto:hannah.ishimwe@gmail.com">Write to me if you'd like</a></p>
</div>
<div class="phone">
    <img src="../assets/images/telephone.png" alt="location icon">
    <p><a href="tel:+447702091007">Phone</a></p>
</div>
</div>
</div>
<router-link to="/"><img class="fixed-plus" src="../assets/images/plus_sign.png"></router-link> 
</template>

<style scoped>
.contact-wrapper{
    display: flex; 
    align-items: center; 
    
}

.contact-heading{
    position:relative;
    text-align: left;
    font-size: 36px;
    width: 500px;
    margin-right: 100px;
}
.contact-div{
    position:relative;
    display:flex;
    flex-direction: column;
}

/* Align each div in a column layout */
div.location, div.linkedin, div.email, div.phone {
    display: flex;               /* Use flexbox for horizontal alignment */
    align-items: center;         /* Vertically align the icon and text */
    margin-bottom: 15px;         /* Space between each row */
}

/* Ensure the icons are appropriately sized */
div.location img,
div.linkedin img,
div.email img,
div.phone img {
    width: 24px;                 /* Adjust the icon size */
    height: 24px;
    margin-right: 10px;          /* Add space between the icon and the text */
}

div.location p,
div.linkedin p,
div.email p,
div.phone p {
    margin: 0;                  
    font-size: 16px;             
}


</style>
