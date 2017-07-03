var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  
  // This code will be compiled 
  entry: [
    "./app/Components/Main.js"
    ],

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This will be what we do
  module: {
    loaders: [
        {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-1']
        }
    }]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  devServer: {
      historyApiFallback: true,
      contentBase: './'
  }
  // plugins: [
  //   new ExtractTextPlugin('public/style.css', {
  //     allChunks: true
  //   })
  // ]

};