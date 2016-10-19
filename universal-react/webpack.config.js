const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'client-render.jsx'),
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};