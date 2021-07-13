import Toast from './Toast.vue'

const obj = {}

// Vue.use会调用install的方法
obj.install = function (vue) {
  // 创建Toast组件构造器
  const Toastconstructor = vue.extend(Toast)

  // 创建组件构造器对象
  const toast = new Toastconstructor()

  // 对象需要挂载在一个元素下
  toast.$mount(document.createElement('div'))

  // 添加到body下
  document.body.appendChild(toast.$el)

  // 挂在到vue的原型上
  vue.prototype.$toast = toast
}

export default obj
