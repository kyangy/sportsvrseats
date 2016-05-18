import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../container'
import Home from '../components/Home'
import About from '../components/about'
import Product from '../components/product'

export default (
  <Route name="app" component={ App } path='/' >
    <IndexRoute component={ Home } />
    <Route component={ About } path='about' />
    <Route component={ Product } path='product' />
  </Route>
)