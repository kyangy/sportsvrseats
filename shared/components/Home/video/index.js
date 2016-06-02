'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

if (__CLIENT__) {
  require('./index.scss')
}

export default class extends Component {
  render() {
    return (
      <div className="video-banner">
        <div className="video-frame">
          <video autoPlay loop muted>
            <source src={require('../../../../static/vids/courtside.mp4')} type='video/mp4' />
          </video>
        </div>
        <div className="overlay">
          <div className="text-box">
            <div className="text">
              <p>SportsVRSeats</p>
            </div>
            <div>
              <Link to="sports"><i className="fa fa-ticket" aria-hidden="true"></i></Link>
              <Link to="about"><i className="fa fa-video-camera" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
