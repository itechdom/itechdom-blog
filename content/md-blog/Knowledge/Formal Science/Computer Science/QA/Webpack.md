# Resources
### https://github.com/petehunt/webpack-howto
# Third Party
### Gulp
### gulp-webpack
### https://www.npmjs.com/package/gulp-webpack
### Vinyl-Name
### give names to files
### https://github.com/shama/vinyl-named
# Concepts
### Loaders
### Modules bundling
7. Multiple entrypointsLet's say you have a profile page and a feed page. You don't want to make the user download the code for the feed if they just want the profile. So make multiple bundles: create one "main module" (called an entrypoint) per page:// webpack.config.js
module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // Template based on keys in entry above
  }
};For profile, insert  into your page. Do a similar thing for feed.
### Optimizing Shared Code
8. Optimizing common codeFeed and Profile share a lot in common (like React and the common stylesheets and components). webpack can figure out what they have in common and make a shared bundle that can be cached between pages:// webpack.config.js

var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // Template based on keys in entry above
  },
  plugins: [commonsPlugin]
};Add  before the script tag you added in the previous step and enjoy the free caching.
### Async loading
9. Async loadingCommonJS is synchronous but webpack provides a way to asynchronously specify dependencies. This is useful for client-side routers, where you want the router on every page, but you don't want to have to download features until you actually need them.Specify the split point where you want to load asynchronously. For example:if (window.location.pathname === '/feed') {
  showLoadingState();
  require.ensure([], function() { // this syntax is weird but it works
    hideLoadingState();
    require('./feed').show(); // when this function is called, the module is guaranteed to be synchronously available.
  });
} else if (window.location.pathname === '/profile') {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./profile').show();
  });
}webpack will do the rest and generate extra chunk files and load them for you.webpack will assume that those files are in your root directory when you load then into a html script tag for example. You can use output.publicPath to configure that.// webpack.config.js
output: {
    path: "/home/proj/public/assets", //path to where webpack will build your stuff
    publicPath: "/assets/" //path that will be considered when requiring your files
}
