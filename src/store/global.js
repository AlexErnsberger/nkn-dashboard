export default {
  namespaced: true,
  state: {
    lang: 'en',
    userInfo: null,
    loading: true
  },
  getters: {
    getLang (state) {
      if (state.lang) return state.lang
      return window.localStorage.getItem('lang')
    },
    getUserInfo (state) {
      if (state.userInfo) return state.userInfo
      return window.sessionStorage.getItem('account')
    }
  }
}
