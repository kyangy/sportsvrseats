import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../container'
import Home from '../components/Home'
import About from '../components/about'
import Sports from '../components/sports'
import SignUp from '../components/signup'
import NoMatch from '../components/no-match'

export default (
  <Route name="app" component={ App } path='/' >
    <IndexRoute component={ Home } />
    <Route component={ About } path='about' />
    <Route component={ Sports } path='sports' />
    <Route component={ SignUp } path='signup' />
    <Route path='*' component={ NoMatch } />
  </Route>
)