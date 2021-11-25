import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/lxy/classify.vue'
import More from '../views/more.vue'
import My from '../views/my.vue'
import gen from "../components/genduo/index.vue"

import ziying from '@/views/ziying'

import Tj from '../views/lxy/tj.vue'
import Sm from '../views/lxy/sm.vue'
import Yl from '../views/lxy/yl.vue'
import Ys from '../views/lxy/ys.vue'
import Jd from '../views/lxy/jd.vue'

import Ss from '../views/lxy/ss.vue'

import Jx from '../views/lxy/jx.vue'
import Fl from '../views/lxy/flfl/fl.vue'
import Flyx from '../views/lxy/flfl/flyx.vue'
import One from '../views/lxy/flfl/one.vue'
import Two from '../views/lxy/flfl/two.vue'
import Three from '../views/lxy/flfl/three.vue'
import Five from '../views/lxy/flfl/five.vue'
import Six from '../views/lxy/flfl/six.vue'
import Seven from '../views/lxy/flfl/seven.vue'
import Eight from '../views/lxy/flfl/eight.vue'
import Nine from '../views/lxy/flfl/nine.vue'
import Ten from '../views/lxy/flfl/ten.vue'


// 解决vue-router报NavigationDuplicated: Avoided redundant navigation to current location: "/fl/flyx".的问题
// 导航复制:避免多余的导航到当前位置:"/fl/flyx"。 
const originalPush = VueRouter.prototype.push
 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 

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
    redirect: 'fl/one',
    children:[
      {
        path:'flyx',
        component:Flyx
      },
      {
        path:'one',
        component:One
      },
      {
        path:'two',
        component:Two
      },
      {
        path:'three',
        component:Three
      },
      {
        path:'five',
        component:Five
      },
      {
        path:'six',
        component:Six
      },
      {
        path:'seven',
        component:Seven
      },
      {
        path:'eight',
        component:Eight
      },
      {
        path:'nine',
        component:Nine
      },
      {
        path:'ten',
        component:Ten
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
