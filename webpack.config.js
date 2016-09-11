var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		dist: './app/client/main.js'
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
        extensions:['','.js','.jsx'],
		modulesDirectories: ['app', 'node_modules', 'base_modules']
	},
	module: {
		preLoaders: [{
			test: /\.json$/,
			loader: 'json-loader'
		}],
		loaders: [
			{test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loaders: ['eslint-loader','babel']},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				loader: 'file-loader'
			},
			{
				test: /\.scss$/,
                loaders: ["style", "css", "sass"]	
			},
			{
				test: /\.md$/,
				loader: "html!markdown"
			},
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            },
            { test: /\.tsx?$/, loader: 'ts-loader?compiler=ntypescript' }
        ],
            postLoaders:[
            {
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
				loader: 'transform?brfs'
			}
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
