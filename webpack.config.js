const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: 'js/index.js',
    },

    // WEBPACK DEV SERVER
    devServer: {
        contentBase: path.join(__dirname, 'app/dist/'),
        port: 8085,
    },

    // MODULE LOADERS
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    // PLUGINS
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
        }),
    ],
};
