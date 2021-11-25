import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端适配文件
import "./assets/app"
// 引入样式重置文件
import "./assets/reset.css"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
// 引入tab tabs组件 按需引入
import {Tab,Tabs} from 'vant'
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
Vue.use(Tab)
Vue.use(Tabs)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
