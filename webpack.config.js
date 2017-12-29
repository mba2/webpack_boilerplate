const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");

const config = {
    entry : {
        app : "./src/index.js"
    },
    output : {
        filename : "app.js",
        path : path.resolve(__dirname, 'dist')
        // publicPath : ,
    },

    // modules : {
    //     rules : [

    //     ]
    // },

    plugins : [
        new HTML({
            template : "./src/index.html",
            // hash : true,
            // minify : { collapseWhitespace : true}
        })
    ]
}

module.exports = config;