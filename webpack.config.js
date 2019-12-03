const path = require("path");
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './index.js',
	},
	context: `${__dirname}/static_src`,
	output: {
		path: `${__dirname}/static/build`,
		filename: 'app.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "static_src"),
				exclude: path.resolve(__dirname, "node_modules"),
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
					plugins: [
						[
							"@babel/plugin-proposal-class-properties",
							{
								"loose": true
							}
						]
					]
				}
			}
		],
	},

	resolve: {
		modules: [path.resolve(__dirname, "static_src"), 'node_modules'],
		extensions: ['.js', '.jsx'],
	},

	devServer: {
		port: 3000,
		historyApiFallback: {
			index: 'index.html'
		}
	},
};