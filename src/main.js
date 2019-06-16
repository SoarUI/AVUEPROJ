import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.ttf'
import axios from 'axios'
import bscroll from '@/components/Scroller'
import Lancher from '@/components/Loading'
Vue.config.productionTip = false
//注册全局组件
axios.defaults.baseURL='http://192.168.2.254/api'
Vue.prototype.axios =axios
Vue.component('Scroller',bscroll);
Vue.component('Loading',Lancher);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
