
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import TAS from '../views/pages/TAS.vue'
import WF from '../views/pages/WalthamForest.vue'
import Jellytask from '../views/pages/Jellytask.vue'
import Chatsnoirs from '../views/pages/Chatsnoirs.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Landing', component: Landing },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/TAS', name: 'TAS', component: TAS },
    { path: '/WF', name: 'WF', component: WF },
    { path: '/Jellytask', name: 'Jellytask', component: Jellytask },
    { path: '/Chatsnoirs', name: 'Chatsnoirs', component: Chatsnoirs },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router