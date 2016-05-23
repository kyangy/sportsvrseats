'use strict'

import React, { Component, PropTypes } from 'react'

require('./index.scss')

export default class extends Component {

  render() {
    return (
      <div className="container-fluid about-section">
        <div className="row">
          <div className="col-md-6 camera"></div>
          <div className="col-md-6">
            <h1>Virtual Reality video cameras</h1>
            <p>Experience courtside, first row, club dugout levels, and more!</p>
          </div>
        </div>
      </div>
    )
  }
}
