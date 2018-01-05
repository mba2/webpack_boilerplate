/** ALL INFORMATION ABOUT VENDOR ASSETS ARE DEFINED IN THIS FILE */ 
const VENDOR = require('./src/vendor/vendor-libs');

const path = require('path');
const webpack = require('webpack');
const HTML = require('html-webpack-plugin');

module.exports = {
	entry : {
		app : "./src/index.js",
		resume : "./src/resume.js",
		vendor : VENDOR.js_libs
	},
	module : {
		rules : [
			//JAVASCRIPT PROCCESS
			{
				test : /\.js$/,
				use : ['babel-loader'],
				include : path.resolve(__dirname, "src"),  /** THERE`S ALSO THE OPTION TO EXCLUDE AN SPECIFIC FOLDER. ADD THE 'EXCLUDE' PROPERTY:  exclude : /node_modules/ */
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
		/** SET ACCESS TO jQuery */
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		/** GENERATES HTML FILES */
		new HTML({
			template : "./src/index.html",
			minify : { collapseWhitespace : true },
			excludeChunks: ['resume']
		})
	]
};