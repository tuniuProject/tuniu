import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import mine from './mine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    mine,
    {
      path: '/',
      redirect:'/home'
      // component: () => import('../pages/home')
    }
  ]
})
