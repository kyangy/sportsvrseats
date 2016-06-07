'use strict'

// Import dependencies
import { Router } from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import path from 'path'
import { Provider } from 'react-redux'
import store from '../../shared/redux/store'

// Import files
import routes from '../../shared/routes'
import { fetchComponentData } from '../utils'
const router = Router()

/* SPA */
router.get('*', (req, res, next) => {
  // Hot module replacement is enabled in development env
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh()
  }

  /* Isomorphic React Router render */
  const location = createLocation(req.url)
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {

    /* Catch 500s */
    if (err) {
      let err = new Error('Internal Server Error')
      err.static = 500
      next(err)
    }

    /*
     * All the fetching & rendering happens here
     */

    // Fetch the data
    fetchComponentData(
      store.dispatch,
      renderProps.components,
      renderProps.params,
      renderProps.location.query
    )
    .then(() => {
      // Fetch completed

      // Grab the initial state
      const finalState = store.getState()

      // React Component to render
      const componentHTML = renderToString(
        <Provider store={ store }>
          <RouterContext assets={webpackIsomorphicTools.assets()} {...renderProps } />
        </Provider>
      )

      // Pass the data and render the Jade template
      res.render('index', {
        component: componentHTML,
        finalState,
      })

    })
    .catch(err => res.end(err.message))
  })
})

module.exports = router
