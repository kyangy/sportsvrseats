'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import SportBox from './sportbox'

let sports = [
  {
    title: '2016 NBA Finals',
  },
  {
    title: 'Superbowl LI',
  },
  {
    title: 'World Series 2016',
  },
  {
    title: '2016 Stanley Cup Finals',
  },
  {
    title: 'Mayweather vs McGregor',
  },
  {
    title: 'UFC 200',
  },
  {
    title: '2018 FIFA World Cup Russia',
  },
]

export default class Sports extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Find your event!</h1>
        <SportBox sports={ sports } />
      </div>
    )
  }
}
