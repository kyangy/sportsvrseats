'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import Video from './video'

if (__CLIENT__) {
  require('./index.scss')
}

export default class Home extends Component {
  render() {
    return (
      <main>
        <Video />
      </main>
    )
  }
}
