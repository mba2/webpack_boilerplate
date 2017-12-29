const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");
const Extract = require("extract-text-webpack-plugin");

const config = {
    entry : {
        app : "./src/index.js"
    },
    output : {
        filename : "app.js",
        path : path.resolve(__dirname, 'dist')
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
                use: Extract.extract({
                    fallback :  'style-loader',
                    use : [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        // 'postcss-loader',
                        "sass-loader"
                    ]
                })
            }
        ]
    },

    plugins : [
        new HTML({
            template : "./src/index.html",
            // hash : true,
            // minify : { collapseWhitespace : true}
        }),
        new Extract("app.css")
        // new Extract({
        //     "filename" : "app.css"
        // })
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;