import vue from 'vue'
import msgbox from './MessageBox'
//导出组件方法给vue注册使用
const install = function(Vue) {
    //注册全局组件
    Vue.component(msgbox.name, msgbox)
    //添加全局API
    Vue.prototype.$mybox = msgbox
}
export default install