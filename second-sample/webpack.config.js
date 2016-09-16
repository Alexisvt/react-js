var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry: ['babel-polyfill', './main'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3000,
    open: true,
    contentBase: path.resolve('dist')
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  watch: true
};