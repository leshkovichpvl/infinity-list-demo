const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: NODE_ENV,

    entry: './src/main.tsx',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    watch: 'development' === NODE_ENV,

    devtool: 'development' === NODE_ENV ? 'eval': false,

    context: __dirname,

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    transpileOnly: true
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: "index.ejs",
            inject: false
        }),
        new CleanWebpackPlugin('./dist', {
            allowExternal: true
        })
    ]
};