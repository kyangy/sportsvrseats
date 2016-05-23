'use strict'

import React, { Component, PropTypes } from 'react'

export default class SportBox extends Component {
  static propTypes = {
    sports: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)

    this.state = {
      sports: this.props.sports
    }
  }

  render() {
    const { sports } = this.state
    let sportNodes = sports.map((sport, i) => {
      return (
        <option key={ i + '-' + sport.title }>{ sport.title }</option>
      )
    })

    return (
      <div>
        <select>
          { sportNodes }
        </select>
      </div>
    )
  }
}
