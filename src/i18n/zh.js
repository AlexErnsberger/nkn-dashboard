'use strict'
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
  header: {
    langSel: '简体中文'
  }
})
