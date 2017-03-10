const webpack = require('webpack');
const path = require('path');
const postcssConfig = require('./postcss.config');


module.exports = {
    context: path.join(process.cwd(), 'dev'),
    entry: './main.js',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    postcss: postcssConfig.plugins,
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css?sourceMap!postcss!sass',
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?limit=1024&name=font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader?mimetype=image/png',
            },
        ],
    },
    postcss: postcssConfig,
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
        },
    },
    vue: {
        loaders: {
            js: 'babel',
            scss: 'style!css!postcss!sass',
        },
        postcss: postcssConfig.plugins,
        cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true,
        },
    },
};
