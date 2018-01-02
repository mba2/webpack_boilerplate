const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");
const Extract = require("extract-text-webpack-plugin");
const Clean = require('clean-webpack-plugin');

const config = {
    entry : {
        app : "./src/index.js"
    },
    output : {
        filename : "[name].js",
        path : path.resolve(__dirname, 'build')
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
        //STYLES PROCESS
        {
          test : /\.s?css$/,
          use: Extract.extract({
            fallback :  'style-loader',
            use : [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader',
              "sass-loader"
            ]
          })
        },
         //JAVASCRIPT PROCESS
        {
          test : /\.js$/,
          use : ['babel-loader'],
          exclude : /node_modules/
        },
        // IMAGE PROCESS
        {
          test : /\.(jpeg|jpe?g|svg|png|gif)$/,
          use : [
            {
              loader:'url-loader',
              options : { limit : 40000 }
            },
            'image-webpack-loader'
          ]
        },
        // FONT PROCESS
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
          ]
        },
        // HTML PROCESS
			  {
				  test: /\.html$/,
				  use: ['html-loader']
        }
      ]
    },

    plugins : [
      new HTML({
        template : "./src/index.html",
        hash : true,
        minify : { collapseWhitespace : true}
      }),
      new Extract("app.css"),
      new Clean(["build"])
  ]
}

module.exports = config;