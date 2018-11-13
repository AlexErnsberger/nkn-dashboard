const ACCOUNT = 'account'
const ACCOUNT_KEY = 'account_key'
const REQUEST_KEY = 'request_key'
const WALLET_KEY = 'wallet_key'

const WALLET = 'wallet'
const WALLET_ADDRESS = 'wallet_address'

const LANG = 'lang'

let setAccount = function (account, accountKey, reqKey, walletKey) {
  window.localStorage.setItem(ACCOUNT, account)
  window.localStorage.setItem(ACCOUNT_KEY, accountKey)
  window.localStorage.setItem(REQUEST_KEY, reqKey)
  window.localStorage.setItem(WALLET_KEY, walletKey)
}

let getAccount = function () {
  return {
    account: window.localStorage.getItem(ACCOUNT),
    accountKey: window.localStorage.getItem(ACCOUNT_KEY),
    requestKey: window.localStorage.getItem(REQUEST_KEY),
    walletKey: window.localStorage.getItem(WALLET_KEY)
  }
}

let setWallet = function (wallet, address) {
  window.localStorage.setItem(WALLET, wallet)
  window.localStorage.setItem(WALLET_ADDRESS, address)
}

let getWallet = function () {
  return window.localStorage.getItem(WALLET)
}

let getWalletAddress = function () {
  return window.localStorage.getItem(WALLET_ADDRESS)
}

let clear = function () {
  window.localStorage.clear()
}

let logout = function () {
  window.localStorage.removeItem(ACCOUNT)
  window.localStorage.removeItem(ACCOUNT_KEY)
  window.localStorage.removeItem(REQUEST_KEY)
  window.localStorage.removeItem(WALLET_KEY)
}

let checkLogin = function () {
  return window.localStorage.getItem(ACCOUNT) !== null && window.localStorage.getItem(WALLET) !== null
}

let checkClear = function () {
  return (
    window.localStorage.getItem(ACCOUNT) === null &&
    window.localStorage.getItem(ACCOUNT_KEY) === null &&
    window.localStorage.getItem(REQUEST_KEY) === null &&
    window.localStorage.getItem(WALLET_KEY) === null &&
    window.localStorage.getItem(WALLET) === null &&
    window.localStorage.getItem(WALLET_ADDRESS) === null &&
    window.localStorage.getItem(LANG) === null
  )
}

let verifyData = function () {
  return (window.localStorage.getItem(ACCOUNT) !== null && window.localStorage.getItem(WALLET)) !== null ||
         (window.localStorage.getItem(ACCOUNT) === null && window.localStorage.getItem(WALLET) === null)
}

let verifyGenWalletState = function () {
  return (window.localStorage.getItem(ACCOUNT) !== null && window.localStorage.getItem(WALLET) === null)
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
