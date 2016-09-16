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
        loaders: ['babel']
      }
    ]
  },
  devServer: {
    inline: true,
    open: true,
    port: 3000,
    contentBase: path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js','.jsx', 'js']
  },
  watch: true
};