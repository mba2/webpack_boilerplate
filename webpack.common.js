
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
    }
}