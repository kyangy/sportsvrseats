'use strict'

const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

exports.devConfig = devConfig
exports.prodConfig = prodConfig

exports.compiler = require('webpack')(prodConfig)

