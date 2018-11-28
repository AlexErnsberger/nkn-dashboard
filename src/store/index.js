import Vue from 'vue'
import Vuex from 'vuex'
import sessionModule from '@/store/session'
import localModule from '@/store/local'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  modules: {
    session: sessionModule,
    local: localModule
  }
})

export default vuex
