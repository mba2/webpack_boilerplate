const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
	output : {
		filename : "[name].js",
		path: path.resolve(__dirname, "build")
	},

	module : {
		rules : [
            {
                test : /\.s?css$/,
                use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader',
						"sass-loader",
					]
				})
			},
				// use: ExtractTextPlugin.extract({
				// 	use: [
				// 	// {
				// 	// 	loader: "css-loader"
				// 	// }, 
				// 		{
				// 			loader: "sass-loader"
				// 		}
				// 	],
				// 	// use style-loader in development
				// 	// fallback: "style-loader"
				// })
		]
	},

	plugins: [
		new ExtractTextPlugin("styles.css"),
	// new UglifyJSPlugin()
	]
});