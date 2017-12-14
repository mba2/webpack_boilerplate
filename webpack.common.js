const path = require('path');
const clean = require('clean-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry : {
        app : "./src/scripts/index.js",
    },

    output : {
        filename : "[name].js",
        path: path.resolve(__dirname, "dev")
    },

    plugins : [
        new HtmlWebpack({
            template : "./src/index.html"
        })
        // new clean(['build'])
    ]
};