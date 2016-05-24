'use strict'

import React, { Component, PropTypes } from 'react'

require('./index.scss')

export default class extends Component {

  render() {
    return (
      <div className="container-fluid about-section">
        <div className="row">
          <div className="col-md-7">
            <img src={require('../../../assets/images/camera.png')} className="camera" />
          </div>
          <div className="col-md-5">
            <h1>Virtual Reality cameras</h1>
            <p>Experience courtside, first row, club dugout levels, and more!</p>
          </div>
        </div>
      </div>
    )
  }
}
