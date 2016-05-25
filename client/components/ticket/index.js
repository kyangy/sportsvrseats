'use strict'

import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'

// Handler
let handler, paymentObj

handler = StripeCheckout.configure({
  key: 'pk_test_tNCxCjKholBL3nUIVEBN36bo',
  locale: 'auto',
  color: 'white',
  token: function(token) {
    // Use the token to create the charge with a server-side script.
    // You can access the token ID with `token.id`
    fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: paymentObj.amount,
        stripeToken: token,
        description: paymentObj.description
      })
    })
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        $.notify({
          message: json.message
        }, {
          type: 'success'
        })
      } else {
        $.notify({
          message: json.message
        }, {
          type: 'danger'
        })
      }
    })
  }
});

export default class extends Component {
  constructor(props) {
    super(props)
  }

  purchase = (e) => {
    const { sport } = this.props.sport

    paymentObj = {
      name: 'SportsVRSeats',
      description: 'sport.title',
      amount: 100
    }

    handler.open(paymentObj)

    e.preventDefault()
  };

  render() {
    return (
      <button className='btn btn-success' onClick={ this.purchase }>Purchase</button>
    )
  }
}

