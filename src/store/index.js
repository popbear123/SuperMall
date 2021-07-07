import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// Vue里添加插件
Vue.use(Vuex)

// 抽离出 state 方便管理
const state = {
  cartList: []
}

// 创建Vuex对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 导出Vuex对象，挂在到vue实例
export default store
