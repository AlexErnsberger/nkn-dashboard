// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import axios from '@/assets/js/axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import i18n from '@/i18n'
import storage from '@/assets/js/nbStorage'
import namespace from '@/assets/js/nbNamespace'
import '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.$storage = storage
Vue.prototype.$namespace = namespace
Vue.use(VueAxios, axios)
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
