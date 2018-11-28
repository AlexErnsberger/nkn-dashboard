import VuexPersistence from 'vuex-persist'

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})

const sessionModule = {
  namespaced: true,
  state: {
    userInfo: null,
    loading: false
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    },
    getLoading (state) {
      return state.loading
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  plugins: [vuexSession.plugin]
}

export default sessionModule
