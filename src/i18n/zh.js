'use strict'
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
  header: {
    langSel: '简体中文',
    logOut: '注销'
  },
  footer: {
    copyRight: 'Copyright © 2017-2018 NKN | 版权所有',
    attention: '目前软件正处于早期研发阶段，可能存在部分问题。请勿用于正式途径。'
  },
  signIn: {
    accountLabel: '账号',
    accountPlaceholder: '请输入您的矿机账号',
    pwdLabel: '密码',
    pwdPlaceholder: '请输入8-20位密码',
    pwdErrorInfo: '输入密码的长度不得超过20位！',
    login: '登陆',
    pwdChange: '修改密码'
  },
  pwdChange: {
    currentPwdLabel: '当前密码',
    newPwdLabel: '新密码',
    confirmPwdLabel: '再次输入新密码',
    confirmPwdErrorInfo: '两次输入的密码不一致！'
  },
  homeNav: {
    tabHome: '主页',
    tabWallet: '钱包',
    tabNode: '节点',
    tabCalculator: '计算',
    tabLog: '日志'
  },
  homeCommon: {
    balance: '余额',
    miningReward: '挖矿奖励',
    price: 'NKN 价格',
    priceToUSTD: 'NKN/USDT 价格比',
    priceToETH: 'NKN/ETH 价格比',
    height: '当前区块高度',
    transection: '当前交易数量',
    averageBlockTime: '平均区块时间',
    nodeCount: '节点总数',
    version: '版本',
    relayedTransactions: '转发交易数量',
    connectedClient: '客户端连接数量'
  },
  nodeCommon: {
    myNodeCount: '我的节点数量',
    SyncStarted: '同步开始的节点',
    SyncFinished: '同步结束的节点',
    PersistFinished: '同步完成的节点',
    Stopped: '终止的节点',
    nodeAdd: '新增节点',
    nodeDel: '删除节点'
  },
  homeWallet: {
    walletAddress: '钱包地址',
    addressCopy: '复制',
    transfer: {
      title: '转账',
      addressInput: '目标地址',
      amountInput: '转账数量',
      walletPwd: '钱包密码',
      btn: '确定'
    },
    transferHistoryTable: {
      title: '交易历史记录',
      col1: '转账地址',
      col2: '目标地址',
      col3: '转账数量',
      col4: '转账时间'
    },
    miningRewardTable: {
      title: '奖励历史记录',
      col1: '区块高度',
      col2: '交易哈希',
      col3: '奖励数量',
      col4: '奖励时间'
    }
  },
  homeNode: {
    nodeIP: '节点 IP',
    nodeID: '节点 ID',
    chordIP: 'Chrod IP',
    chordID: 'Chrod ID',
    webSocket: '网络套接字',
    jsonrpc: 'Json rpc',
    nodeNeighborTable: {
      title: '邻居节点',
      col1: '节点 ID',
      col2: '节点 IP',
      col3: '端口'
    },
    chordNeighborTable: {
      title: '邻居Chrod',
      col1: 'Chord ID',
      col2: 'Chord IP',
      col3: '端口'
    }
  },
  homeCalculator: {
    input1: '每秒出块时间',
    input1Prefix: '1 区块/',
    input2: '当前NKN节点总数',
    input3: '您当前的节点总数',
    input4: '一个月内您节点的工作时间',
    btnReset: '重置',
    btnCompute: '计算',
    result1: '每天挖取测试网中token的近似数量',
    result2: '每月挖去测试网中token的数量',
    result3: '每月NKN主网的token （1：5比）',
    result4: '每日获取的利润',
    result5: '每月获取的利润'
  },
  homeLog: {
    title: '日志'
  }
})
