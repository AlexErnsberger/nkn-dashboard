import VuexPersistence from 'vuex-persist'

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})

const sessionModule = {
  namespaced: true,
  state: {
    userInfo: null,
    reqKey: '',
    loading: false
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
    }
  },
  plugins: [vuexSession.plugin]
}

export default sessionModule
