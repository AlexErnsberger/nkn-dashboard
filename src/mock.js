const Mock = require('mockjs')

const Random = Mock.Random

const loginData = {
  status: Random.boolean(true),
  data: {
    reqKey: Random.guid()
  },
  errmsg: Random.string()
}

const pwdcData = {
  status: Random.boolean(true),
  errmsg: Random.string()
}

const myInfoData = {
  status: Random.boolean(true),
  data: {
    balance: Random.integer,
    miningAward: Random.integer
  },
  errmsg: Random.string()
}

Mock.mock('/login', 'post', loginData)
Mock.mock('/pwdc', 'post', pwdcData)
Mock.mock('/myInfo', 'post', myInfoData)
