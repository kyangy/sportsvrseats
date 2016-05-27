'use strict'

require('dotenv').config({silent: true})

exports.PORT = 3000
exports.ENV = process.env.NODE_ENV || 'development'
exports.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY
exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
