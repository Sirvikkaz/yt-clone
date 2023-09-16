import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Shorts from '../views/Shorts.vue'
import Homevideo from '../components/Homevideo'
import Search from '../components/Search'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homevideo
  },
  /*{
    path: '/homedata',
    name: 'home',
    component: Homevideo
  },*/
  {
    path: '/shorts',
    name: 'Shorts',
    component:Shorts,
  },
  {
    path: '/Search',
    name: 'Search',
    component:Search,
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
