const ACCOUNT = 'account'
const ACCOUNT_KEY = 'account_key'
const REQUEST_KEY = 'request_key'
const WALLET_KEY = 'wallet_key'

const WALLET = 'wallet'
const WALLET_ADDRESS = 'wallet_address'

const LANG = 'lang'

let setAccount = function (account, accountKey, reqKey, walletKey) {
  window.sessionStorage.setItem(ACCOUNT, account)
  window.sessionStorage.setItem(ACCOUNT_KEY, accountKey)
  window.sessionStorage.setItem(REQUEST_KEY, reqKey)
  window.sessionStorage.setItem(WALLET_KEY, walletKey)
}

let getAccount = function () {
  return {
    account: window.sessionStorage.getItem(ACCOUNT),
    accountKey: window.sessionStorage.getItem(ACCOUNT_KEY),
    requestKey: window.sessionStorage.getItem(REQUEST_KEY),
    walletKey: window.sessionStorage.getItem(WALLET_KEY)
  }
}

let setWallet = function (wallet, address) {
  window.sessionStorage.setItem(WALLET, wallet)
  window.sessionStorage.setItem(WALLET_ADDRESS, address)
}

let getWallet = function () {
  return window.sessionStorage.getItem(WALLET)
}

let getWalletAddress = function () {
  return window.sessionStorage.getItem(WALLET_ADDRESS)
}

let clear = function () {
  window.sessionStorage.clear()
  window.localStorage.clear()
}

let logout = function () {
  window.sessionStorage.clear()
}

let checkLogin = function () {
  return window.sessionStorage.getItem(ACCOUNT) !== null && window.sessionStorage.getItem(WALLET) !== null
}

let checkClear = function () {
  return (
    window.sessionStorage.getItem(ACCOUNT) === null &&
    window.sessionStorage.getItem(ACCOUNT_KEY) === null &&
    window.sessionStorage.getItem(REQUEST_KEY) === null &&
    window.sessionStorage.getItem(WALLET_KEY) === null &&
    window.sessionStorage.getItem(WALLET) === null &&
    window.sessionStorage.getItem(WALLET_ADDRESS) === null
  )
}

let verifyData = function () {
  return (window.sessionStorage.getItem(ACCOUNT) !== null && window.sessionStorage.getItem(WALLET)) !== null ||
         (window.sessionStorage.getItem(ACCOUNT) === null && window.sessionStorage.getItem(WALLET) === null)
}

let verifyGenWalletState = function () {
  return (window.sessionStorage.getItem(ACCOUNT) !== null && window.sessionStorage.getItem(WALLET) === null)
}

let setLogin = function (account, wallet, address, keys) {
  setAccount(account, keys.account, keys.req, keys.wallet)
  setWallet(wallet, address)
}

let setLanguage = function (lang) {
  window.localStorage.setItem(LANG, lang)
}

let getLanguage = function () {
  return window.localStorage.getItem(LANG)
}

export default {
  setAccount,
  getAccount,

  setWallet,
  getWallet,
  getWalletAddress,

  setLanguage,
  getLanguage,

  clear,
  logout,
  checkLogin,
  setLogin,
  checkClear,
  verifyData,
  verifyGenWalletState
}
