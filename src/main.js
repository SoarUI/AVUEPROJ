import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.ttf'
import axios from 'axios'
import bscroll from '@/components/Scroller'
import Lancher from '@/components/Loading'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
key: 'ebb3310e602e7027987911af5e30be56',
plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});
//注册自定义插件
import mymsg from '@/components/js'
Vue.use(mymsg)
//使用element-ui组件
Vue.use(ElementUI);
Vue.config.productionTip = false
//注册全局组件
//axios.defaults.baseURL='http://192.168.2.254/api'
Vue.prototype.axios =axios
Vue.component('Scroller',bscroll);
Vue.component('Loading',Lancher);
//----面包屑导航
/*
var routeList = [];
router.beforeEach((to, from, next) => {
  var index = -1;
  for(var i = 0; i < routeList.length; i++) {
    if(routeList[i].name == to.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
//如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if(to.name != 'login'){
    routeList.push({"name":to.name,"path":to.fullPath});
  }
  to.meta.routeList = routeList;
  next()
});
*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
