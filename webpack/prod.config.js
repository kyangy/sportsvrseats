const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: [
    path.resolve(__dirname, '../client/index')
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '../static/dist/'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.min.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, '../client')
      },
      { test: /\.css$/, 
        exclude: /\.useable\.css$/, 
        loader: "style!css"
      },
      { test: /\.useable\.css$/, 
        loader: "style/useable!css"
      },
      { test: /\.scss$/,  
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.mp4$/,
        loader: 'url?mimetype=video/mp4'
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders:
        [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};
