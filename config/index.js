'use strict'

require('dotenv').config({silent: true})

exports.port = process.env.PORT || 3000
exports.env = process.env.NODE_ENV || 'development'
exports.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/sportsvrseats'
exports.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY
exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
