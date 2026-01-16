<script setup>

const props = defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
  bodyClass: {type: String, default: '', required:false},
  imageUrl: { type: String, required: true },
})
</script>

<template>
  <div class="content-card">
    <div class="text-section">
      <h2 class="title">{{ title }}</h2>
      <p v-html="body" :class="bodyClass" class="body"></p>
    </div>
    <div class="image-section">
      <img :src="imageUrl" alt="Card image" />
    </div>
  </div>
</template>

<style scoped>
.content-card {
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 2000px;
  height: 500px;       
  overflow: hidden;       
  border-radius: 20px;
  margin-left: 50px;
  flex-shrink:0;
  flex-grow:0;


}


.text-section {
  flex: 1;                 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  overflow: hidden;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: left;
}

.body {
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;       
  text-align: left;
}


.image-section {
  flex: 1.5;                 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 20px;

}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
 

}
</style>
