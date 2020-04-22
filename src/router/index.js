import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('../view/index/Index.vue')

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router