import path from 'path';
import webpack from 'webpack';
import openBrowserPlugin from 'open-browser-webpack-plugin';
import htmlPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

export const PATHS = {
    app: path.resolve('src'),
    images: path.resolve('src/assets/'),
    build: path.resolve('dist')
};

export const options = {
    host: 'localhost',
    port: '3000'
};

export default {
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
                exclude: /(node_modules|bower_components)/
            },

            {
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
        })
    ]
};