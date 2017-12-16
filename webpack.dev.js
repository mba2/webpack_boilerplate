const path = require('path');
const clean = require('clean-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './build'
    },

    entry : {
        app : "./src/scripts/index.js",
    },

    output : {
        filename : "[name].js",
        path: path.resolve(__dirname, "dev")
    },

    module : {
        rules : [
            {
                test : /\.s?css$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins : [
        new HtmlWebpack({
            template : "./src/index.html"
        })
        // new clean(['build'])
    ]
};