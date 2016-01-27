# Concepts
## Event streams
## Vinyl files
## Globs
## Node Streams
## Regex
## Plugins
### What does a good plugin look like?
<h3>What does a good plugin look like?</h3><div class="highlight highlight-js"><pre><span class="pl-c">// through2 is a thin wrapper around node transform streams</span>
<span class="pl-k">var</span> through <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>through2<span class="pl-pds">&apos;</span></span>);
<span class="pl-k">var</span> gutil <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>gulp-util<span class="pl-pds">&apos;</span></span>);
<span class="pl-k">var</span> PluginError <span class="pl-k">=</span> gutil.<span class="pl-c1">PluginError</span>;

<span class="pl-c">// Consts</span>
<span class="pl-k">const</span> <span class="pl-c1">PLUGIN_NAME</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&apos;</span>gulp-prefixer<span class="pl-pds">&apos;</span></span>;

<span class="pl-k">function</span> <span class="pl-en">prefixStream</span>(<span class="pl-smi">prefixText</span>) {
  <span class="pl-k">var</span> stream <span class="pl-k">=</span> <span class="pl-c1">through</span>();
  stream.<span class="pl-c1">write</span>(prefixText);
  <span class="pl-k">return</span> stream;
}

<span class="pl-c">// Plugin level function(dealing with files)</span>
<span class="pl-k">function</span> <span class="pl-en">gulpPrefixer</span>(<span class="pl-smi">prefixText</span>) {

  <span class="pl-k">if</span> (<span class="pl-k">!</span>prefixText) {
    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">PluginError</span>(<span class="pl-c1">PLUGIN_NAME</span>, <span class="pl-s"><span class="pl-pds">&apos;</span>Missing prefix text!<span class="pl-pds">&apos;</span></span>);
  }
  prefixText <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Buffer</span>(prefixText); <span class="pl-c">// allocate ahead of time</span>

  <span class="pl-c">// Creating a stream through which each file will pass</span>
  <span class="pl-k">return</span> through.<span class="pl-c1">obj</span>(<span class="pl-k">function</span>(<span class="pl-smi">file</span>, <span class="pl-smi">enc</span>, <span class="pl-smi">cb</span>) {
    <span class="pl-k">if</span> (file.<span class="pl-c1">isNull</span>()) {
      <span class="pl-c">// return empty file</span>
      <span class="pl-k">return</span> <span class="pl-c1">cb</span>(<span class="pl-c1">null</span>, file);
    }
    <span class="pl-k">if</span> (file.<span class="pl-c1">isBuffer</span>()) {
      file.<span class="pl-c1">contents</span> <span class="pl-k">=</span> Buffer.<span class="pl-c1">concat</span>([prefixText, file.<span class="pl-c1">contents</span>]);
    }
    <span class="pl-k">if</span> (file.<span class="pl-c1">isStream</span>()) {
      file.<span class="pl-c1">contents</span> <span class="pl-k">=</span> file.<span class="pl-c1">contents</span>.<span class="pl-c1">pipe</span>(<span class="pl-c1">prefixStream</span>(prefixText));
    }

    <span class="pl-c1">cb</span>(<span class="pl-c1">null</span>, file);

  });

}

<span class="pl-c">// Exporting the plugin main function</span>
<span class="pl-c1">module</span>.<span class="pl-c1">exports</span> <span class="pl-k">=</span> gulpPrefixer;</pre></div>
# Third party
## Through
### https://www.npmjs.com/package/through2
### Creates streams that are both readable and writeable
#### through suggests that files go through two functions
##### Read
##### Write
# Resources
## https://github.com/substack/stream-handbook
### node stream handbook
## https://github.com/wearefractal/vinyl-fs
### vinyl-fs
#### metadata with a file?
## https://github.com/gulpjs/gulp/blob/master/docs/API.md
### gulp docs
### https://github.com/isaacs/node-glob
#### glob options
### https://github.com/gulpjs/gulp/blob/master/docs/API.md
#### Gulp Api
##### gulp.dest
##### gulp.src 
##### ...
### https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
#### Writing a plugin
