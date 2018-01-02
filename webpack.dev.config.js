const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");

const config = {
    entry : {
        app : "./src/index.js"
    },
    output : {
        filename : "app.js",
        path : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },

    devtool : 'inline-source-map',
    devServer : {
        compress : true,
        hot : true,
        // stats : "errors-only",
        // open : true
    },

    module : {
        rules : [
            //STYLES PROCESS
            {
                test : /\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            //JAVASCRIPT PROCESS
            {
                test : /\.js$/,
                use : ['babel-loader'],
                exclude : /node_modules/
            },
            //FONT PROCESS
            {
                test : /\.(woff|woff2|svg|eot)$/,
                use : 'file-loader'
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
            // hash : true,
            // minify : { collapseWhitespace : true}
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;