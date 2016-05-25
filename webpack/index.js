'use strict'

const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

exports.devConfig = devConfig
exports.prodConfig = prodConfig

if (__DEVELOPMENT__) {
  exports.compiler = require('webpack')(devConfig)
}

exports.compiler = require('webpack')(prodConfig)

