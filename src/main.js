
import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.prod.js"
import './style/style.css'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
