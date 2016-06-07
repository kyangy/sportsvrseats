'use strict'

import React, { Component } from 'react'

if (__CLIENT__) {
  require('./index.scss')
}

export default class extends Component {
  render() {
    let year = new Date().getFullYear()
    return (
      <footer>
        <div className="container">
          <span>SportsVRSeats &copy; { year } </span>
        </div>
      </footer>
    )
  }
}