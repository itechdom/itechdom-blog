#Concepts
#Event streams
#Vinyl files
#Globs
#Node Streams
#Regex
#Plugins
#What does a good plugin look like?
* <h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;">What does a good plugin look like?</h3><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// through2 is a thin wrapper around node transform streams</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> through <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>through2<span class="pl-pds" style="box-sizing: border-box;">'</span></span>);
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gutil <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">require</span>(<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>gulp-util<span class="pl-pds" style="box-sizing: border-box;">'</span></span>);
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> PluginError <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> gutil.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PluginError</span>;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Consts</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PLUGIN_NAME</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>gulp-prefixer<span class="pl-pds" style="box-sizing: border-box;">'</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">prefixStream</span>(<span class="pl-smi" style="box-sizing: border-box;">prefixText</span>) {
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> stream <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">through</span>();
  stream.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">write</span>(prefixText);
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> stream;
}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Plugin level function(dealing with files)</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">gulpPrefixer</span>(<span class="pl-smi" style="box-sizing: border-box;">prefixText</span>) {

  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!</span>prefixText) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">throw</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">PluginError</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">PLUGIN_NAME</span>, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>Missing prefix text!<span class="pl-pds" style="box-sizing: border-box;">'</span></span>);
  }
  prefixText <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">Buffer</span>(prefixText); <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// allocate ahead of time</span>

  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Creating a stream through which each file will pass</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> through.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">obj</span>(<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">file</span>, <span class="pl-smi" style="box-sizing: border-box;">enc</span>, <span class="pl-smi" style="box-sizing: border-box;">cb</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isNull</span>()) {
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// return empty file</span>
      <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cb</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, file);
    }
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isBuffer</span>()) {
      file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Buffer.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">concat</span>([prefixText, file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents</span>]);
    }
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">isStream</span>()) {
      file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> file.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">contents</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">pipe</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">prefixStream</span>(prefixText));
    }

    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cb</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, file);

  });

}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Exporting the plugin main function</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">module</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exports</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> gulpPrefixer;</pre></div>
#Third party
#Through
#https://www.npmjs.com/package/through2
#Creates streams that are both readable and writeable
#through suggests that files go through two functions
#Read
#Write
#Resources
#https://github.com/substack/stream-handbook
#node stream handbook
#https://github.com/wearefractal/vinyl-fs
#vinyl-fs
#metadata with a file?
#https://github.com/gulpjs/gulp/blob/master/docs/API.md
#gulp docs
#https://github.com/isaacs/node-glob
#glob options
#https://github.com/gulpjs/gulp/blob/master/docs/API.md
#Gulp Api
#gulp.dest
#gulp.src 
#...
#https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
#Writing a plugin
