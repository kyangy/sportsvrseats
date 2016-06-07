'use strict'

/*
 * Import dependencies
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

let createStoreWithMiddleware

if (__CLIENT__) {
  // Logger
  const logger = createLogger({
    predicate: () => ! process.env.NODE_ENV
  })

  // Create store
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger
  )(createStore)

} else {

  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore)

}


/*
 * Configure & export the store usage
 */

function configureStore(initialState) {
  // Return the store
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore()
