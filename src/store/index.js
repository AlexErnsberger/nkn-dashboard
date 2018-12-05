import Vue from 'vue'
import Vuex from 'vuex'
import sessionModule from '@/store/session'
import localModule from '@/store/local'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    userInfo: null,
    reqKey: '',
    loading: false,
    globalNKNInfo: null,
    myNodeInfo: null
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    },
    getLoading (state) {
      return state.loading
    },
    getReqKey (state) {
      return state.reqKey
    },
    getGlobalInfo (state) {
      return state.globalNKNInfo
    },
    getNodeInfo (state) {
      return state.myNodeInfo
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setLoading (state, data) {
      state.loading = data
    },
    setReqKey (state, data) {
      state.reqKey = data
    },
    setGlobalNKNInfo (state, data) {
      state.globalNKNInfo = data
    },
    setNodeInfo (state, data) {
      state.myNodeInfo = data
    }
  },
  modules: {
    session: sessionModule,
    local: localModule
  }
})

export default vuex
