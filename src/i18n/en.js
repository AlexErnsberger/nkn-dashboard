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
    confirmPwdErrorInfo: 'The password for the two input is inconsistent!'
  }
})
