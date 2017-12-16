const common = require('./webpack.common');
const merge = require('webpack-merge');

const clean = require('clean-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './build'
    },


    module : {
        rules : [
            {
                test : /\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    "sass-loader"
                ]
            },
            {
                test : /\.(jpeg|jpe?g|svg|png|gif)$/,
                use : [
                    'file-loader'
                ]
            }
        ]
    },

    plugins : [
        new HtmlWebpack({
            template : "./src/index.html"
        })
        // new clean(['dev'])
    ]
});