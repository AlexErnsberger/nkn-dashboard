'use strict'
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
  nav: {
    langSel: '简体中文'
  }
})
