const VENDOR = require('./src/vendor/vendor-libs');

const webpack = require("webpack");
const path = require("path");
const HTML = require("html-webpack-plugin");


const config = {
    entry : {
        app : './src/index.js',
        'vendor' :  VENDOR.js_libs
    },
    output : {
        filename : "[name].js",
        path : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },

    devtool : 'inline-source-map',
    devServer : {
        // compress : true,
        // hot : true,
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
            names : ['vendor','manifest']
        })        
        /**
         *  UNCOMMENT THIS TWO PLUGINS + ADD {} INTO 'hot : true,' INTO devServer PROPERTY
         *  TO WORK WITH HOT MODULE REPLACEMENT
        */ 
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;