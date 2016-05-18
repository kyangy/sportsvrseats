import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

// require('./styles/home.css');

render((
  <Router children={ routes } history={ browserHistory } />
), document.querySelector('#root'))
