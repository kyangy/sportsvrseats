'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import SportBox from './sportbox'

require('./index.scss')

let sports = [
  {
    title: '2016 NBA Finals',
    img: require("../../assets/images/nba.png"),
  },
  {
    title: 'Superbowl LI',
    img: require("../../assets/images/nfl.png"),
  },
  {
    title: 'World Series 2016',
    img: require("../../assets/images/mlb.png"),
  },
  {
    title: 'Mayweather vs McGregor',
    img: require("../../assets/images/boxing.png"),
  },
]

export default class Sports extends Component {
  render() {
    return (
      <main className="sports-page">
        <NavBar />
        <SportBox sports={ sports } />
      </main>
    )
  }
}
