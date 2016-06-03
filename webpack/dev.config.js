'use strict'

const webpack = require('webpack')
const assign = require('object-assign')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const path = require('path')
const prodConfig = require('./prod.config.js')
const config = require('../config')

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

// Use Object.assign
Object.assign = assign

const host = config.HOST || 'localhost'
const port = (config.PORT + 1) || 3001

exports.webpackDevConfig = function(app) {
  const config = Object.assign(prodConfig, {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, '..'),
    entry: [
      `webpack-hot-middleware/client`,
      path.resolve(__dirname, '../client/index')
    ],
    output: {
      path: path.resolve(__dirname, '../static/dist'),
      filename: 'bundle.min.js',
      chunkFilename: 'bundle.min.js',
      publicPath: `http://${host}:${port}/dist/`
    },
    progress: true,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('bundle.min.css', {
        allChunks: true
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: true,
        __DEVTOOLS__: true
      }),
      webpackIsomorphicToolsPlugin.development()
    ]
  })

  const serverOptions = {
    contentBase: `http://${host}:${port}`,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    lazy: false,
    publicPath: config.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
  }
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, serverOptions))
  app.use(webpackHotMiddleware(compiler))
}
