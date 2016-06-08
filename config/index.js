'use strict'

require('dotenv').config({silent: true})

exports.port = process.env.PORT || 3000
exports.env = process.env.NODE_ENV || 'development'
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sportsvrseats'
exports.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY
exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
