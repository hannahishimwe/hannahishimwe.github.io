<script>
</script>

<template>
<div class="nav-div">
    <nav class="nav">
        <router-link to="/about" class="nav-link nav-elem"><em>About</em></router-link>
        <router-link to="/experience" class="nav-link nav-elem"><em>Experience</em></router-link>
        <router-link to="/contact" class="nav-link nav-elem"><em>Contact</em></router-link>
    </nav>
</div>
</template>

<style scoped>
.nav-div {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    
}

.nav-elem{
    margin: 0 150px;
}


</style>
