#Resources
#https://github.com/petehunt/webpack-howto
#Third Party
#Gulp
#gulp-webpack
#https://www.npmjs.com/package/gulp-webpack
#Vinyl-Name
#give names to files
#https://github.com/shama/vinyl-named
#Concepts
#Loaders
#Modules bundling
* <h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;">7. Multiple entrypoints</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let's say you have a profile page and a feed page. You don't want to make the user download the code for the feed if they just want the profile. So make multiple bundles: create one "main module" (called an entrypoint) per page:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// webpack.config.js</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">module</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exports</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
  entry<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
    Profile<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./profile.js<span class="pl-pds" style="box-sizing: border-box;">'</span></span>,
    Feed<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./feed.js<span class="pl-pds" style="box-sizing: border-box;">'</span></span>
  },
  output<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
    path<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>build<span class="pl-pds" style="box-sizing: border-box;">'</span></span>,
    filename<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>[name].js<span class="pl-pds" style="box-sizing: border-box;">'</span></span> <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Template based on keys in entry above</span>
  }
};</pre></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For profile, insert&nbsp;<code style="box-sizing: border-box; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&lt;script src="build/Profile.js"&gt;&lt;/script&gt;</code>&nbsp;into your page. Do a similar thing for feed.</p>
#Optimizing Shared Code
* <h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;">8. Optimizing common code</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Feed and Profile share a lot in common (like React and the common stylesheets and components). webpack can figure out what they have in common and make a shared bundle that can be cached between pages:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// webpack.config.js</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> webpack <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>webpack<span class="pl-pds" style="box-sizing: border-box;">'</span></span>);

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> commonsPlugin <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">webpack.optimize</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">CommonsChunkPlugin</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>common.js<span class="pl-pds" style="box-sizing: border-box;">'</span></span>);

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">module</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exports</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
  entry<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
    Profile<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./profile.js<span class="pl-pds" style="box-sizing: border-box;">'</span></span>,
    Feed<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./feed.js<span class="pl-pds" style="box-sizing: border-box;">'</span></span>
  },
  output<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
    path<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>build<span class="pl-pds" style="box-sizing: border-box;">'</span></span>,
    filename<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>[name].js<span class="pl-pds" style="box-sizing: border-box;">'</span></span> <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Template based on keys in entry above</span>
  },
  plugins<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [commonsPlugin]
};</pre></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Add&nbsp;<code style="box-sizing: border-box; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&lt;script src="build/common.js"&gt;&lt;/script&gt;</code>&nbsp;before the script tag you added in the previous step and enjoy the free caching.</p>
#Async loading
* <h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;">9. Async loading</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">CommonJS is synchronous but webpack provides a way to asynchronously specify dependencies. This is useful for client-side routers, where you want the router on every page, but you don't want to have to download features until you actually need them.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Specify the&nbsp;<strong style="box-sizing: border-box;">split point</strong>&nbsp;where you want to load asynchronously. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">window</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">location</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">pathname</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>/feed<span class="pl-pds" style="box-sizing: border-box;">'</span></span>) {
  <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">showLoadingState</span>();
  <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">ensure</span>([], <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>() { <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// this syntax is weird but it works</span>
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">hideLoadingState</span>();
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./feed<span class="pl-pds" style="box-sizing: border-box;">'</span></span>).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">show</span>(); <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// when this function is called, the module is guaranteed to be synchronously available.</span>
  });
} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">else</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">window</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">location</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">pathname</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>/profile<span class="pl-pds" style="box-sizing: border-box;">'</span></span>) {
  <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">showLoadingState</span>();
  <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">ensure</span>([], <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>() {
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">hideLoadingState</span>();
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>./profile<span class="pl-pds" style="box-sizing: border-box;">'</span></span>).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">show</span>();
  });
}</pre></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">webpack will do the rest and generate extra&nbsp;<strong style="box-sizing: border-box;">chunk</strong>&nbsp;files and load them for you.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">webpack will assume that those files are in your root directory when you load then into a html script tag for example. You can use&nbsp;<code style="box-sizing: border-box; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">output.publicPath</code>&nbsp;to configure that.</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// webpack.config.js</span>
output<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
    path<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>/home/proj/public/assets<span class="pl-pds" style="box-sizing: border-box;">"</span></span>, <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">//path to where webpack will build your stuff</span>
    publicPath<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>/assets/<span class="pl-pds" style="box-sizing: border-box;">"</span></span> <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">//path that will be considered when requiring your files</span>
}</pre></div>