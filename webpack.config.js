const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
