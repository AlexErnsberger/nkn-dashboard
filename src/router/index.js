import Vue from 'vue'
import Router from 'vue-router'
import nbSignIn from '@/views/nbSignIn.vue'
import nbHome from '@/views/nbHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: nbSignIn
    },
    {
      path: '/home',
      name: 'home',
      component: nbHome
    }
  ]
})
