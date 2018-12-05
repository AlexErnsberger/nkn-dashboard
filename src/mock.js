const Mock = require('mockjs')

const Random = Mock.Random

const loginData = {
  status: true,
  data: {
    reqKey: Random.guid()
  },
  errmsg: Random.string()
}

const pwdcData = {
  status: true,
  errmsg: Random.string()
}

const myInfoData = {
  status: true,
  data: {
    balance: Random.integer(10, 1000),
    miningAward: Random.integer(1, 100)
  },
  errmsg: Random.string()
}

const globalData = {
  status: true,
  data: {
    height: Random.integer(30000, 60000),
    transection: Random.integer(10, 50),
    averageBlockTime: Random.integer(1000, 20000),
    nodeCount: Random.integer(3000, 5000),
    version: Random.float(0, 0.01, 0, 2),
    relayedTransactions: Random.integer(100, 500),
    connectedClient: Random.integer(10, 50),
    NKNprice: Random.float(0.01, 1, 0, 6),
    priceToUSTD: Random.float(0.01, 0.1, 0, 6),
    priceToETH: Random.float(0.01, 0.1, 0, 6)
  },
  errmsg: Random.string()
}

const myNodeData = {
  status: true,
  data: {
    myNodeCount: Random.integer(1, 10),
    SyncStarted: Random.integer(1, 10),
    SyncFinished: Random.integer(1, 10),
    PersistFinished: Random.integer(1, 10),
    Stopped: Random.integer(1, 10)
  },
  errmsg: Random.string()
}

Mock.mock('/login', 'post', loginData)
Mock.mock('/pwdc', 'post', pwdcData)
Mock.mock('/myInfo', 'post', myInfoData)
Mock.mock('/globalInfo', 'post', globalData)
Mock.mock('/nodeInfo', 'post', myNodeData)
