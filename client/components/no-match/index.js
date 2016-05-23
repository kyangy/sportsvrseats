'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class NoMatch extends Component {
  render() {
    return (
      <main className='not-found light-bg'>
        <div className='container'>
          <h1 className='text-xs-center'>404</h1>
          <p className='text-xs-center'>The page you are looking for is not here.</p>
          <div className='text-xs-center'>
            <Link to='/' className='btn btn-success'>Return to safety</Link>
          </div>
        </div>
      </main>
    )
  }
}
