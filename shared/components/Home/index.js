'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import Video from './video'
import Footer from '../footer'

if (__CLIENT__) {
  require('./index.scss')
}

export default class Home extends Component {
  render() {
    return (
      <main>
        <Video />
        <Footer />
      </main>
    )
  }
}
