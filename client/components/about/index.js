'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import AboutSection from './about-section'

export default class About extends Component {

  render() {
    return (
      <main>
        <NavBar />
        <AboutSection />
      </main>
    )
  }
}
