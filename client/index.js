'use strict'

/* ENTRY POINT */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from '../shared/routes'

import store from '../shared/redux/store'

// on update
function onUpdate() {
  window.scroll(0,0)
}

render((
  <Provider store={ store }>
    <Router onUpdate={onUpdate} children={routes} history={ browserHistory } />
  </Provider>
), document.querySelector('#root'))
