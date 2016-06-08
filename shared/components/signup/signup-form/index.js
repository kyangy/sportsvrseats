'use strict'

import React, { Component, PropTypes } from 'react'

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Sign Up!</button>
      </div>
    )
  }
}