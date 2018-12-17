'use strict'
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
  header: {
    langSel: 'Language',
    logOut: 'Logout'
  },
  footer: {
    copyRight: 'Copyright © 2017-2018 NKN | All rights reserved',
    attention: 'This software is in the early development stage and may not have all functions working properly. It should be used only for testing now.'
  },
  signIn: {
    title: 'NKN Mining Dashboard',
    accountLabel: 'ACCOUNT',
    accountPlaceholder: 'You NKN mining account',
    pwdLabel: 'PASSWORD',
    pwdPlaceholder: '8-20 characters',
    pwdErrorInfo: 'Please input 8-20 characters',
    login: 'Log in',
    pwdChange: 'Change password'
  },
  pwdChange: {
    currentPwdLabel: 'CURRENT PASSWORD',
    newPwdLabel: 'NEW PASSWORD',
    confirmPwdLabel: 'CONFIRM NEW PASSWORD',
    confirmPwdErrorInfo: 'The password for the two input is inconsistent!',
    confirmPwdEqual: 'The new password cannot be the same as the old one!',
    successModify: 'Password modification succeeded!'
  },
  homeNav: {
    tabHome: 'Home',
    tabWallet: 'Wallet',
    tabNode: 'Node',
    tabCalculator: 'Calculator',
    tabLog: 'Log'
  },
  homeCommon: {
    balance: 'Balance',
    miningReward: 'Mining Reward',
    price: 'NKN Price',
    priceToUSTD: 'NKN/USDT Price',
    priceToETH: 'NKN/ETH Price',
    height: 'Current Height',
    transection: 'Current Transection',
    averageBlockTime: 'Average Block Time',
    nodeCount: 'Total Node',
    version: 'Version',
    relayedTransactions: 'Relayed Transactions',
    connectedClient: 'Connected Client'
  },
  nodeCommon: {
    myNode: 'My Node',
    myNodeCount: 'My Node',
    SyncStarted: 'SyncStarted',
    SyncFinished: 'SyncFinished',
    PersistFinished: 'PersistFinished',
    Stopped: 'Stopped',
    nodeAdd: 'Add node',
    addDialogTitle: 'Please type you IP for new node',
    addDialogInput: 'node IP',
    addDialogBtn: 'add',
    addDialogErr: 'Illegal IP address',
    nodeDel: 'Delete node',
    delDialogTitle: 'Warning',
    delDialogRemind: 'Are you sure to delete',
    delDialogBtn: 'delete',
    nodeAddPrefix: 'A new node',
    nodeAddSuffix: 'has been successfully created!',
    nodeDelMsg: 'has been successfully deleted!'
  },
  homeWallet: {
    walletAddress: 'Wallet Address',
    addressCopy: 'copy',
    transfer: {
      title: 'Transfer',
      addressInput: 'transfer Address',
      addressInputErr: 'please enter a valid address!',
      amountInput: 'transfer Amount',
      amountInputErr: 'please enter the amount of transfer!',
      walletPwd: 'wallet password',
      pwdErr: 'Please enter your wallet password!',
      btn: 'Transfer',
      success: 'Successful transfer!'
    },
    transferHistoryTable: {
      title: 'Transaction History',
      col1: 'From',
      col2: 'to',
      col3: 'Value',
      col4: 'Time'
    },
    miningRewardTable: {
      title: 'Mining Reward',
      col1: 'Height',
      col2: 'Transaction Hash',
      col3: 'Value',
      col4: 'Time'
    }
  },
  homeNode: {
    nodeIP: 'Node IP',
    nodeID: 'Node ID',
    chordIP: 'Chrod IP',
    chordID: 'Chrod ID',
    webSocket: 'Websocket',
    jsonrpc: 'Json rpc',
    nodeNeighborTable: {
      title: 'Node Neighbor',
      col1: 'Node ID',
      col2: 'Node IP',
      col3: 'Port'
    },
    chordNeighborTable: {
      title: 'Chrod Neighbor',
      col1: 'Chord ID',
      col2: 'Chord IP',
      col3: 'Port'
    }
  },
  homeCalculator: {
    input1: 'Average block time in seconds',
    input1Prefix: '1 block/',
    input2: 'Currnet node count in NKN network',
    input3: 'Amount of your nodes',
    input4: 'Your nodes working time in months',
    btnReset: 'Reset',
    btnCompute: 'Calculator',
    result1: 'Approximate amount of NKN testnet tokens mined per day',
    result2: 'Total testnet tokens mined per 1 month',
    result3: 'NKN mainnet tokens (1:5 ratio) per 1 month',
    result4: 'USD profit per day',
    result5: 'USD profit per 1 month'
  },
  homeLog: {
    title: 'Log'
  },
  dialog: {
    cancel: 'cancel'
  },
  colon: ':'
})
