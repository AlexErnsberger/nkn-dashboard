// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import nbHttp from '@/assets/js/network/nbHttp'
import VueClipboard from 'vue-clipboard2'
import i18n from '@/i18n'
import storage from '@/assets/js/nbStorage'
import namespace from '@/assets/js/nbNamespace'
import '@/assets/css/global.css'

// 引入mockjs
require('./mock.js')

Vue.config.productionTip = false
Vue.prototype.$storage = storage
Vue.prototype.$namespace = namespace
Vue.prototype.$http = nbHttp
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
