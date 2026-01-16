
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import TAS from '../views/pages/TAS.vue'
import WF from '../views/pages/WalthamForest.vue'
import Jellytask from '../views/pages/Jellytask.vue'
import Chatsnoirs from '../views/pages/Chatsnoirs.vue'
import Bonita from '../views/pages/Bonita.vue'
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
    { path: '/Bonita', name: 'Bonita', component: Bonita },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

//preload images before transitioning to prevent FOUC
router.beforeResolve(async (to, from, next) => {
const component = to.matched[0]?.components?.default
if (component) {
  try {
    const imageUrls = to.meta?.images || []
    
    await Promise.all(
      imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve 
          img.src = url
        })
      })
    )
  } catch (error) {
    console.error('Image preload error:', error)
  }
}

next()
})


export default router