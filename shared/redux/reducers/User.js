'use strict'

import Immutable from 'immutable'

const initialState = new Immutable.List()

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
