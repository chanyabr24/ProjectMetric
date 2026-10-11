import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WomenView from '@/views/Women.vue'
import NewView from '@/views/NewView.vue'
import MenView from '@/views/MenView.vue'
import BoysView from '@/views/BoysView.vue'
import GirlsView from '@/views/GirlsView.vue'
import AccountView from '@/views/AccountView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ContactView from '@/views/ContactView.vue'
import OrderCompleteView from '@/views/OrderCompleteView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'



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
  { path: '/product/:id', 
    name: 'product-detail', 
    component: ProductDetailView 
  },
  { path: '/account', 
    name: 'account', 
    component: AccountView 
  },
  { path: '/cart', 
    name: 'cart', 
    component: CartView 
  },
  { path: '/checkout', 
    name: 'checkout', 
    component: CheckoutView 
  },
  { path: '/contact',
    name: 'contact', 
    component: ContactView 
  },
  { path: '/order-complete', 
    name: 'order-complete', 
    component: OrderCompleteView 
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router