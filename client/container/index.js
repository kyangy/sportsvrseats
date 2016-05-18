'use strict'

import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    const { children } = this.props
    return (
      <div id="app">
        { this.props.children }
      </div>
    )
  }
}