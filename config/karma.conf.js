// Karma configuration
// Generated on Mon Aug 31 2015 11:23:48 GMT-0600 (MDT)
var webpackConfig = require('./webpack.config.js');
var clone = require('clone');
var myWebpackConfig = clone(webpackConfig);

//delete entry and output
delete myWebpackConfig.entry;
delete myWebpackConfig.output;

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha'],


	// list of files / patterns to load in the browser
	files: [
		'app/**/*.spec.js'
			 ],


		// list of files to exclude
		exclude: [
		'**/*.swp'
		     ],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
		'app/**/*.spec.js': ['webpack']
			 },
		 webpack:{

		 module: myWebpackConfig.module,
		 plugins:myWebpackConfig.plugins
		 
		 },
		 
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}
