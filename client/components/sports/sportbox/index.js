'use strict'

import React, { Component, PropTypes } from 'react'

import Ticket from '../../ticket'

require('./index.scss')

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
        <div style={{backgroundImage: `url('${sport.img}')`}} className="col-md-3 sport-nodes" key={ i + '-' + sport.title }>
          <div className="overlay">
            <Ticket sport={ sport } />
          </div>
        </div>
      )
    })

    return (
      <div className="container-fluid sport-box">
        <div className="row">
          { sportNodes }
        </div>
      </div>
    )
  }
}
