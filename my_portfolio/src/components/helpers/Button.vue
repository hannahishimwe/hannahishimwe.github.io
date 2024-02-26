<script setup>

defineProps({
  copy: String,
  destination: String,
})

</script>

<template>
<div class="button-parent">
    <a href={{destination}} class="button"><em>{{ copy }}</em></a>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap');

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