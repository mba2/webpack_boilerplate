const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");

const config = {
    entry : {
        app : "./src/index.js"
    },
    output : {
        filename : "app.js",
        path : path.resolve(__dirname, 'build')
        // publicPath : ,
    },

    devtool : 'inline-source-map',
    devServer : {
        compress : true,
        // hot : true,
        // stats : "errors-only",
        // open : true
    },

    module : {
        rules : [
            {
                test : /\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.js$/,
                use : ['babel-loader'],
                exclude : /node_modules/
            },
            // IMAGE PROCESS

            // FONT PROCESS

            // HTML PROCESSS
        ]
    },

    plugins : [
        new HTML({
            template : "./src/index.html",
            // hash : true,
            // minify : { collapseWhitespace : true}
        })
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;