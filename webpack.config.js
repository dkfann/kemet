const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './app/src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: '[name].js',
    },

    target: 'web',

    // WEBPACK DEV SERVER
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'app/src/'),
        port: 8005,
    },

    // MODULE LOADERS
    module: {
        rules: [
            // Transpile JS using babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Compile less to css
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader?limit=8192',
                },
            },
        ],
    },

    // PLUGINS
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html',
        }),
    ],
};
