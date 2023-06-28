import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import KeranjangView from '../views/Keranjang.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Foods',
    name: 'foods',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: KeranjangView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
