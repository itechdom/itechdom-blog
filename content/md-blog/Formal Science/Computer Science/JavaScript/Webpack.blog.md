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
## 7\. Multiple entrypoints

Let's say you have a profile page and a feed page. You don't want to make the user download the code for the feed if they just want the profile. So make multiple bundles: create one "main module" (called an entrypoint) per page:



// webpack.config.js
module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // Template based on keys in entry above
  }
};



For profile, insert `` into your page. Do a similar thing for feed.
### Optimizing Shared Code
## 8\. Optimizing common code

Feed and Profile share a lot in common (like React and the common stylesheets and components). webpack can figure out what they have in common and make a shared bundle that can be cached between pages:



// webpack.config.js

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
};



Add `` before the script tag you added in the previous step and enjoy the free caching.
### code spliting
*   [Simple](https://github.com/webpack/webpack/tree/master/examples/code-splitting)
*   [with bundle-loader](https://github.com/webpack/webpack/tree/master/examples/code-splitting-bundle-loader)
*   [with context](https://github.com/webpack/webpack/tree/master/examples/code-splitted-require.context)
*   [with amd and context](https://github.com/webpack/webpack/tree/master/examples/code-splitted-require.context-amd)
*   [with deduplication](https://github.com/webpack/webpack/tree/master/examples/code-splitted-dedupe)
*   [named-chunks](https://github.com/webpack/webpack/tree/master/examples/named-chunks)
*   [multiple entry chunks](https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points)
*   [multiple commons chunks](https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks)
### https://webpack.github.io/docs/code-splitting.html
# Source Code
### it outputs a function 
it has an IIFE to load all the modules. The ones that weren't loaded will be added to cache, if not put them there. Then it calls the the module.exports function with all arguments.



/******/ (function(modules) { // webpackBootstrap

/******/ // The module cache

/******/ var installedModules = {};

/******/ // The require function

/******/ function __webpack_require__(moduleId) {

/******/ // Check if module is in cache

/******/ if(installedModules[moduleId])

/******/ return installedModules[moduleId].exports;

/******/ // Create a new module (and put it into the cache)

/******/ var module = installedModules[moduleId] = {

/******/ exports: {},

/******/ id: moduleId,

/******/ loaded: false

/******/ };

/******/ // Execute the module function

/******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ // Flag the module as loaded

/******/ module.loaded = true;

/******/ // Return the exports of the module

/******/ return module.exports;

/******/ }

/******/ // expose the modules object (__webpack_modules__)

/******/ __webpack_require__.m = modules;

/******/ // expose the module cache

/******/ __webpack_require__.c = installedModules;

/******/ // __webpack_public_path__

/******/ __webpack_require__.p = "/dist/";

/******/ // Load entry module and return exports

/******/ return __webpack_require__(0);

/******/ })

/************************************************************************/

/******/ ([

/* 0 */

/***/ function(module, exports, __webpack_require__) {

//here's the module


### the modules are encapsulated in a function with arguements
### any module has an id number (0.... etc)
### npm modules get included in a function, given an id and called from the __webpack--require__
