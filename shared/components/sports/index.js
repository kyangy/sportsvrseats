'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import SportBox from './sportbox'

require('./index.scss')

let sports = [
  {
    title: 'NBA Finals',
    time: 'June 2, 2016',
    location: 'Staples Center, Los Angeles - CA',
    img: require('../../assets/images/nba.png'),
    logo: require('../../assets/images/nba-logo.png'),
  },
  {
    title: 'Superbowl LI',
    time: 'February 5, 2017',
    location: 'NRG Stadium, Houston - TX',
    img: require('../../assets/images/nfl.png'),
    logo: require('../../assets/images/nfl-logo.png'),
  },
  {
    title: 'World Series',
    time: 'October 27, 2016',
    location: 'Dodger Stadium, Los Angeles - CA',
    img: require('../../assets/images/mlb.png'),
    logo: require('../../assets/images/mlb-logo.png'),
  },
  {
    title: 'Mayweather vs McGregor',
    time: 'August 14, 2016',
    location: 'MGM Grand, Las Vegas - NV',
    img: require('../../assets/images/boxing.png'),
    logo: require('../../assets/images/boxing-logo.png'),
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
