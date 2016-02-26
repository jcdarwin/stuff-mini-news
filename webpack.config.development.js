var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-hot-middleware/client',
		'./index.js'
	],

	output: {
		path: __dirname,
		publicPath: '/stuff-news-sorter/',
		filename: 'dist/bundle.js',
		sourceMapFilename: 'dist/bundle.map'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {
		loaders: [
			// JAVASCRIPT
			{
				test:     /\.jsx?$/,
				loader:   'babel',
				exclude:  /node_modules/
			},
			// SASS
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			// CSS
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
}
