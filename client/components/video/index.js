'use strict'

import React, { Component, PropTypes } from 'react'

export default class extends Component {
  render() {
    return (
      <video autoPlay loop muted>
        <source src='../../assets/videos/courtside.mp4' type='video/mp4' />
      </video>
    )
  }
}
