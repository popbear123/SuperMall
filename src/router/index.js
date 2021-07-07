import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue初始化VueRouter
Vue.use(VueRouter)

// 动态引入路由组件
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 路由组件
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

// 创建路由实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出router实例
export default router
