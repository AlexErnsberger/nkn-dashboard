import Vue from 'vue'
import Router from 'vue-router'
import nbSignIn from '@/views/nbSignIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: nbSignIn
    }
  ]
})
