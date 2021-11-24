import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/lxy/classify.vue'
import More from '../views/more.vue'
import My from '../views/my.vue'
import gen from "../components/genduo/index.vue"


import Tj from '../views/lxy/tj.vue'
import Sm from '../views/lxy/sm.vue'
import Yl from '../views/lxy/yl.vue'
import Ys from '../views/lxy/ys.vue'
import Jd from '../views/lxy/jd.vue'

import Ss from '../views/lxy/ss.vue'

import Jx from '../views/lxy/jx.vue'
import Fl from '../views/lxy/fl.vue'
import Flyx from '../views/lxy/flyx.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jx',
    component: Jx,
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify,
    redirect: 'classify/tj',
    children:[
      {
        path: 'tj',
        component: Tj,
      },
      {
        path: 'sm',
        component: Sm
      },
      {
        path: 'yl',
        component: Yl
      },
      {
        path: 'ys',
        component: Ys
      },
      {
        path: 'jd',
        component: Jd
      },
      
    ]
  },
  {
    path: '/fl',
    component: Fl,
    children:[
      {
        path: 'flyx',
        component: Flyx
      },
    ]
  },
  {
    path: '/ss',
    component: Ss
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
