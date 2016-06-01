'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

require('./index.scss')

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#main-nav">
        &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="main-nav">
          <Link className="navbar-brand" to="/">SportsVRSeats</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="sports">Sports</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
