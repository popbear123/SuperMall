import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// toast插件安装
Vue.use(toast)

// 懒加载插件安装
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300ms延时
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
