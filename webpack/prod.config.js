var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, '../client/index')
  ],
  output: {
    path: path.join(__dirname, '../static/dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
