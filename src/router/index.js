import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WomenView from '@/views/Women.vue'
import NewView from '@/views/NewView.vue'
import MenView from '@/views/MenView.vue'
import BoysView from '@/views/BoysView.vue'
import GirlsView from '@/views/GirlsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/women',
    name: 'women',
    component: WomenView 
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  { path: '/men',
    name: 'men', 
    component: MenView 
  },
  { path: '/boys',
    name: 'boys',
    component: BoysView 
  },
  { path: '/girls',
    name: 'girls', 
    component: GirlsView 
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router