import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// const vuexSession = new VuexPersistence({
//   storage: window.sessionStorage
// })

const vuex = new Vuex.Store({
  state: {
    userInfo: null,
    reqKey: '',
    loading: false,
    globalNKNInfo: null,
    myNodeInfo: null,
    myNodeList: null,
    currentNode: null
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
    getCurrentNode (state) {
      return state.currentNode
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
    setCurrentNode (state, data) {
      state.currentNode = data
    }
  }
  // plugins: [vuexSession.plugin]
})

export default vuex
