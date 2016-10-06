var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: ['babel-polyfill', './main'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 3000,
    host: 'localhost',
    open: true,
    contentBase: path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};