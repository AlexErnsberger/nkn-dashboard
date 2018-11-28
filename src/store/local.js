import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const localModule = {
  namespaced: true,
  state: {
    lang: 'en'
  },
  getters: {
    getLang (state) {
      return state.lang
    }
  },
  mutations: {
    setLang (state, data) {
      state.lang = data
    }
  },
  plugins: [vuexLocal.plugin]
}

export default localModule
