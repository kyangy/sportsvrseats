'use strict'

import React, { Component, PropTypes } from 'react'

import Ticket from '../../ticket'

if (__CLIENT__) {
  require('./index.scss')
}

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
        <div className="col-md-3 sport-nodes" key={ i + '-' + sport.title }>
          <img className="sport-img" src=`${sport.img}` />
          <div className="overlay">
            <div className="sport-logo">
              <img src=`${sport.logo}` />
            </div>
            <div className="sport-info">
              <p>{ sport.title }</p>
              <p>{ sport.time }</p>
              <p>{ sport.location }</p>
              <Ticket sport={ sport } />
            </div>
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
