'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'

export default class Product extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1>Product Page!</h1>
      </div>
    )
  }
}
