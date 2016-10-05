const path = require('path');
const webpack = require('webpack');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
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
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        stats: 'errors-only',
        host: options.host,
        port: options.port,
        contentBase: PATHS.app
    },
    target: 'web',
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-3'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            },

            {
                test: /\.css$/,
                loaders: ['style', 'css'],
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

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    watch: true
};