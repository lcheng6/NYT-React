const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  // This code will be compiled 
  entry: [
    "./app/Components/Main.js"
    ],

  // Then output into this file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  },
  // resolve: {
  //     extensions: ['', '.js', '.jsx']
  // },
  // devServer: {
  //     historyApiFallback: true,
  //     contentBase: './'
  // }
  // plugins: [
  //   new ExtractTextPlugin('public/style.css', {
  //     allChunks: true
  //   })
  // ]

};