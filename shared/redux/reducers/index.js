'use strict'

import { combineReducers } from 'redux'

/*
 * Import reducers
 */
import User from './User'

/*
 * Combine the reducers
 */

const rootReducer = combineReducers({
  User
})

export default rootReducer
