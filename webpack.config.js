var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		       dist: './app/client/main.js',
		       example:'./app/example.js'
	       },
	output: {
			path: __dirname + "/dist",
			publicPath: "/dist/",
			filename: '[name].js'
		},
	eslint: {
			configFile: './eslintrc.json'
		},
	resolve: {
			 modulesDirectories: ['app', 'node_modules', 'base_modules']
		 },
	module: {
			loaders: [
			{test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loaders: ['eslint-loader','babel']},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.json$/, loader: 'raw'},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				loader: 'file-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{ 
				test: /\.md$/, 
				loader: "html!markdown" 
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel' // 'babel-loader' is also a legal name to reference
			},
			{ test: /\.tsx?$/, loader: 'ts-loader?compiler=ntypescript' }
			]
		},
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
		$: "jquery"
		})
	]
};
