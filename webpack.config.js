
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
				app: './js/app.js',
				red: './js/exp.js'
			},
	output: {
		path: './build',
		filename: '[name].finalbundle.js'
	},
	module:{
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
			  presets: ['es2015', 'react']
			}
		}]

	},
	plugins: [
		new webpack.ProvidePlugin({
	    	'ReactDOM':   'react-dom',
	    	'React':     'react'

	    	
	  	}),
		new HtmlWebpackPlugin({  // Also generate a test.html
	      
	      template: 'template/build.html'
	    })
	]
};