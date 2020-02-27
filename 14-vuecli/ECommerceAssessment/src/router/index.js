import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home.vue')
const Search = () => import('views/search/Search.vue')
const Profile = () => import('views/profile/Profile.vue')
const Order = () => import('views/order/Order.vue')
const Food = () => import('views/food/Food.vue')
const One =() => import('components/reset/One.vue')
const Two =() => import('components/reset/Two.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/food',
    component: Food
  },
  {
    path: '/one',
    component: One
  },
  {
    path: '/two',
    component: Two
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
