'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import Video from '../video'

require('./index.css');

export default class Home extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Video />
      </main>
    )
  }
}
