'use strict'

import React, { Component, PropTypes } from 'react'

import SignUpForm from './signup-form'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <SignUpForm />
        </div>
      </div>
    )
  }
}