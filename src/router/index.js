import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/classify.vue'
import More from '../views/more.vue'
import My from '../views/my.vue'
import gen from "../components/genduo/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/more',
    name: 'more',
    component: More
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/gen',
    name: 'gen',
    component: gen
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
