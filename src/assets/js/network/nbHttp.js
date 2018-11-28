import axios from '@/assets/js/axios'
import RequestData from '@/assets/js/network/nbRequestData'
import Axios from 'axios'
import Is from 'is_js'

function postRequest (scope, api, param, success, fail) {
  return axios.post(api, param).then((response) => {
    if (Is.function(success)) {
      success.call(scope, response)
    }
  }).catch((error) => {
    if (Is.function(fail)) {
      fail.call(scope, error)
    }
  })
}

function getRequest (scope, api, param, success, fail) {
  return axios.get(api, param).then((response) => {
    if (Is.function(success)) {
      success.call(scope, response)
    }
  }).catch((error) => {
    if (Is.function(fail)) {
      fail.call(scope, error)
    }
  })
}

class nbHttpRequest {
  logIn () {
    return postRequest()
  }

  changePassword () {
    return postRequest()
  }

  getMyBaseInfo () {
    return postRequest()
  }

  getNKNBaseInfo () {
    return postRequest()
  }

  getMyNodeCount () {
    return postRequest()
  }

  getMyNodeList () {
    return postRequest()
  }

  getNodeInfo () {
    return postRequest()
  }

  getNodeNeighbor () {
    return postRequest()
  }

  getChrodNeighbor () {
    return postRequest()
  }

  addNode () {
    return postRequest()
  }

  deleteNode () {
    return postRequest()
  }

  getNodeWallet () {
    return postRequest()
  }

  walletTransfer () {
    return postRequest()
  }

  getTransferHistory () {
    return postRequest()
  }

  getMiningHistory () {
    return postRequest()
  }

  calculator () {
    return postRequest()
  }

  getNodeLog () {
    return postRequest()
  }
}

export default nbHttpRequest
