const path = require('path');
const webpack = require('webpack');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PATHS = {
    app: path.resolve('src'),
    images: path.resolve('src/assets/'),
    build: path.resolve('dist')
};

const options = {
    host: 'localhost',
    port: '3000'
};

module.exports = {
    entry: ['babel-polyfill', PATHS.app],
    output: {
        path: PATHS.build,
        filename: 'bundle.[hash].js',
        publicPath: '/'
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
                plugins: ['transform-object-rest-spread', 'transform-class-properties']
            }
        },
        { test: /(\.css)$/, loaders: ['style', 'css'] },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        {
            test: /\.(jpg|png)$/,
            loader: 'file?name=[path][name].[hash].[ext]',
            include: PATHS.images
        },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
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

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new htmlPlugin({
            template: path.join(PATHS.app, 'index.html'),
            inject: 'body'
        }),
        new openBrowserPlugin({
            url: `http://${options.host}:${options.port}`
        }),
    ]
};