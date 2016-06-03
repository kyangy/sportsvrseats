'use strict'

/* polyfills */
import '../polyfills'

import express from 'express'
import config from '../config'
import routes from './routes'
import path from 'path'
import bodyParser from 'body-parser'
import api from './api'

const app = express()

/* webpack development */
if (config.ENV !== 'production') {
  require('../webpack/dev.config').webpackDevConfig(app)
}

// Static files
app.use(express.static(path.join(__dirname, '../static'), {
  maxAge: 86400000
}))

// Logging
app.use(require('morgan')('dev'))

// Use Jade
app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'jade')

// Set up route
app.use('/', routes)

// Set up api
app.use('/api', api)

/* POST parsing */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Handle errors
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Export App
module.exports = app
