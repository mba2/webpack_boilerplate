const webpack = require('webpack');
const merge = require('webpack-merge');
const commom = require('./webpack.common.config');
const path = require('path');
const HTML = require('html-webpack-plugin');


const config = merge(commom, {
    output : {
        filename : "[name].js",
        chunkFilename: '[name].chunk.js',
        path : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },

    devtool : 'inline-source-map',

    devServer : {
        // compress : true,
        // hot : true,
        stats : "errors-only",
        // open : true
    },

	module : {
		rules : [
			//STYLE PROCESS
			{
				test : /\.s?css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},

    plugins : [
        /** SET THIS ENVIRONMENT AS A TYPE OF `DEVELOPMENT` SO THIRD PARTY LIBRARIES ACT ACCORDINGLY */
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        }),
        /** SET ACCESS TO jQuery */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        /** GENERATES HTML FILES */
        new HTML({
            template : "./src/index.html",
        }),
        /**  THIS PLUGIN JOIN PLUGINS THAT ARE USED IN MORE THAN ONE MODULE */
        new webpack.optimize.CommonsChunkPlugin({
            names : ['vendor']
        })        
        /**
         *  UNCOMMENT THIS TWO PLUGINS + ADD {} INTO 'hot : true,' INTO devServer PROPERTY
         *  TO WORK WITH HOT MODULE REPLACEMENT
        */ 
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;