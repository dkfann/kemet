const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        // This proxy is required for socket.io, which is being hosted from the server,
        // to have it's requests from the front end be routed to the express server port, not the dev server one
        proxy: {
            '/socket.io': {
                target: 'http://localhost:8000',
                ws: true,
            },
        },
        hot: false,
        inline: false,
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
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                        },
                    }
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },

    // PLUGINS
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'app/src/assets/images', to: 'assets/images' },
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html',
        }),
    ],
};
