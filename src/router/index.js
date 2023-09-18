import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Furniture from '@/pages/Furniture.vue'
import Contacts from '@/pages/Contacts.vue'
import Classic from '@/pages/Classic.vue'
import Cheep from '@/pages/Cheep.vue'
import Akril from '@/pages/Akril.vue'
import Fur from '@/pages/Fur.vue'
import Bad from '@/pages/Bad.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/furniture', name: 'Furniture', component: Furniture},
    {path: '/contacts', name: 'Contacts', component: Contacts},
    {path: '/classic', name: 'Classic', component: Classic},
    {path: '/cheep', name: 'Cheep', component: Cheep},
    {path: '/akril', name: 'Akril', component: Akril},
    {path: '/fur', name: 'Fur', component: Fur},
    {path: '/bad', name: 'Bad', component: Bad},
  ]
})

export default router