
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Landing', component: Landing },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/experience', name: 'Experience', component: Experience }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router