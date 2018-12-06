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
    myNodeInfo: null,
    myNodeList: null,
    nodeWallet: null
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
    },
    getMyNodeList (state) {
      return state.myNodeList
    },
    getNodeWallet (state) {
      return state.nodeWallet
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
    },
    setNodeList (state, data) {
      state.myNodeList = data
    },
    setNodeWallet (state, data) {
      state.nodeWallet = data
    }
  },
  modules: {
    session: sessionModule,
    local: localModule
  }
})

export default vuex
