'use strict'

import React, { Component, PropTypes } from 'react'

import NavBar from '../navigation'
import SportBox from './sportbox'

if (__CLIENT__) {
  require('./index.scss')
}

let sports = [
  {
    title: 'NBA Finals',
    time: 'June 2, 2016',
    location: 'Staples Center, Los Angeles - CA',
    img: '../../../../static/imgs/nba.png',
    logo: '../../../../static/imgs/nba-logo.png'
  },
  {
    title: 'Superbowl LI',
    time: 'February 5, 2017',
    location: 'NRG Stadium, Houston - TX',
    img: '../../../../static/imgs/nfl.png',
    logo: '../../../../static/imgs/nfl-logo.png'
  },
  {
    title: 'World Series',
    time: 'October 27, 2016',
    location: 'Dodger Stadium, Los Angeles - CA',
    img: '../../../../static/imgs/mlb.png',
    logo: '../../../../static/imgs/mlb-logo.png'
  },
  {
    title: 'Mayweather vs McGregor',
    time: 'August 14, 2016',
    location: 'MGM Grand, Las Vegas - NV',
    img: '../../../../static/imgs/boxing.png',
    logo: '../../../../static/imgs/boxing-logo.png'
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
