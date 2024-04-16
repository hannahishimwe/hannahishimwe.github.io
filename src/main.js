
import { createApp } from "../node_modules/vue/dist/vue.esm-bundler.js"
import './style/style.css'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
