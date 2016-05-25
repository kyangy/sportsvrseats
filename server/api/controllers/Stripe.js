'use strict'

import { STRIPE_SECRET_KEY } from '../../../config'

// Configure the secret key
const stripe = require('stripe')(STRIPE_SECRET_KEY)

class StripeController {
  chargeCard(req, res, next) {
    stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: req.body.stripeToken.id,
      description: req.body.description
    }, (err, charge) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Payment failed'
        })
      } else {
        return res.json({
          success: true,
          message: 'Payment received!'
        })
      }
    })
  }
}

export default new StripeController()
