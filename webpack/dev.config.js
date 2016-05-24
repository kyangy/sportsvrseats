var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, '../static/dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
