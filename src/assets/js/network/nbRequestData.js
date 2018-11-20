import Crypto from 'crypto-js'

function encrypt (plaintext, key, rebuildKey) {
  let cipherData = Crypto.AESEnc(plaintext, key, rebuildKey)

  return {
    Data: cipherData
  }
}

let RequestData = function () {
  let dataString = ''
  let plainData = ''
  this.encryptedData = function (key, rebuildKey = true) {
    return encrypt(dataString, key, rebuildKey)
  }

  this.fullData = function (key, rebuildKey = true) {
    let encryptedData = this.encryptedData(key, rebuildKey)
    encryptedData.PlainData = plainData
    return encryptedData
  }
}

export {
  RequestData
}
