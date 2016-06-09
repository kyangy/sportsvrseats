'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props
    return (
      <div id="app">
        { this.props.children }
      </div>
    )
  }
}

export default connect()(App);
