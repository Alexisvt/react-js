import webpack from 'webpack';
import path from 'path';

// TOOD: Investigate how to work with this to be more lean
// import nodeExternals from 'webpack-node-externals';

export default {
  // target: 'node',
  // externals: [nodeExternals()],
  entry: {
    app: path.join(__dirname, 'src', 'app-client'),
    // TODO: Investigate how to make it work perfectly in all cases
    // vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // TODO: Investigate how to make it work perfectly in all cases
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};