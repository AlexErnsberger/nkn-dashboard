import axios from '@/assets/js/axios'
import Axios from 'axios'
import Is from 'is_js'

function postRequest (scope, api, param, success, fail) {
  return axios.post(api, param).then((res) => {
    let data = res.data
    if (Is.function(success)) {
      success.call(scope, data)
    }
  }).catch((error) => {
    if (Is.function(fail)) {
      fail.call(scope, error)
    }
  })
}

// function getRequest (scope, api, param, success, fail) {
//   return axios.get(api, param).then((response) => {
//     if (Is.function(success)) {
//       success.call(scope, response)
//     }
//   }).catch((error) => {
//     if (Is.function(fail)) {
//       fail.call(scope, error)
//     }
//   })
// }

function reqBatch (scope, reqs, success, fail) {
  return Axios.all(reqs).then(Axios.spread(() => {
    if (Is.function(success)) {
      success.call(scope)
    }
  })).catch((e) => {
    if (Is.function(fail)) {
      fail.call(scope)
    }
  })
}

let login = function (scope, param, success) {
  return postRequest(scope, '/login', param, success)
}

let pwdc = function (scope, param, success) {
  return postRequest(scope, '/pwdc', param, success)
}

let myInfo = function (scope, success) {
  return postRequest(scope, '/myInfo', {}, success)
}

let globalInfo = function (scope, success) {
  return postRequest(scope, '/globalInfo', {}, success)
}

let myNodeInfo = function (scope, success) {
  return postRequest(scope, '/nodeInfo', {}, success)
}

let myNodeList = function (scope, success) {
  return postRequest(scope, '/myNodeList', {}, success)
}

let nodeWallet = function (scope, param, success) {
  return postRequest(scope, '/nodeWallet', param, success)
}

let nodeWalletTransaction = function (scope, param, success) {
  return postRequest(scope, '/nodeWalletTransaction', param, success)
}

let nodeWalletMining = function (scope, param, success) {
  return postRequest(scope, '/nodeWalletMining', param, success)
}

let walletTransfer = function (scope, param, success) {
  return postRequest(scope, '/walletTransfer', param, success)
}

let nodeDetail = function (scope, param, success) {
  return postRequest(scope, '/nodeDetail', param, success)
}

let dataCompute = function (scope, param, success) {
  return postRequest(scope, '/dataCompute', param, success)
}

let log = function (scope, param, success) {
  return postRequest(scope, '/log', param, success)
}

export default {
  login,
  pwdc,
  myInfo,
  globalInfo,
  myNodeInfo,
  reqBatch,
  myNodeList,
  nodeWallet,
  nodeWalletTransaction,
  nodeWalletMining,
  walletTransfer,
  nodeDetail,
  dataCompute,
  log
}

// class nbHttpRequest {
//   logIn () {
//     return postRequest()
//   }

//   changePassword () {
//     return postRequest()
//   }

//   getMyBaseInfo () {
//     return postRequest()
//   }

//   getNKNBaseInfo () {
//     return postRequest()
//   }

//   getMyNodeCount () {
//     return postRequest()
//   }

//   getMyNodeList () {
//     return postRequest()
//   }

//   getNodeInfo () {
//     return postRequest()
//   }

//   getNodeNeighbor () {
//     return postRequest()
//   }

//   getChrodNeighbor () {
//     return postRequest()
//   }

//   addNode () {
//     return postRequest()
//   }

//   deleteNode () {
//     return postRequest()
//   }

//   getNodeWallet () {
//     return postRequest()
//   }

//   walletTransfer () {
//     return postRequest()
//   }

//   getTransferHistory () {
//     return postRequest()
//   }

//   getMiningHistory () {
//     return postRequest()
//   }

//   calculator () {
//     return postRequest()
//   }

//   getNodeLog () {
//     return postRequest()
//   }
// }

// export default nbHttpRequest
