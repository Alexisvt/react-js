const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const dashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

const PATHS = {
  app: path.join(__dirname, 'src'),
  images: path.join(__dirname, 'src/assets/'),
  build: path.join(__dirname, 'dist')
};

const options = {
  host: 'localhost',
  port: '3000'
};

module.exports = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: options.host,
    port: options.port
  },
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-3'],
          plugins: ['transform-object-rest-spread']
        }
      }, {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: PATHS.app
      },

      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]'
        }
      },
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  },
  plugins: [
    new dashboardPlugin(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new htmlPlugin({
      template: path.join(PATHS.app, 'index.html'),
      inject: 'body'
    }),
    new openBrowserPlugin({
      url: `http://${options.host}:${options.port}`
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};