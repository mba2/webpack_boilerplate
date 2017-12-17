
module.exports = {
    entry : {
        app : "./src/scripts/index.js",
    },

    module : {
        rules : [
            // IMAGE PROCESS
			{
				test : /\.(jpeg|jpe?g|svg|png|gif)$/,
				use : [
					// {
					// 	loader:'url-loader',
					// 	options : { limit : 40000 }
					// },
					{
						loader:'file-loader',
						options : { 
                            outputPath: 'img/',
                        }
					},
					'image-webpack-loader'
				]
            },
            // HTML PROCESS
			{
				test: /\.html$/,
				use: ['html-loader']
            },
            // FONT PROCESS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}