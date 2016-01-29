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
<pre class="editor editor-colors"><div class="line"><span class="source js"><span>fs</span><span class="meta delimiter method period js"><span>.</span></span><span>createReadStream</span><span class="meta brace round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation string begin js"><span>&apos;</span></span><span>ex.txt</span><span class="punctuation string end js"><span>&apos;</span></span></span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;</span><span class="meta delimiter method period js"><span>.</span></span><span>pipe</span><span class="meta brace round js"><span>(</span></span><span>through2</span><span class="meta brace round js"><span>(</span></span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&#xA0;</span><span class="punctuation begin js"><span>(</span></span><span class="variable function js"><span>chunk</span></span><span>,&#xA0;</span><span class="variable function js"><span>enc</span></span><span>,&#xA0;</span><span class="variable function js"><span>callback</span></span><span class="punctuation end js"><span>)</span></span></span><span>&#xA0;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;&#xA0;</span><span class="keyword control js"><span>for</span></span><span>&#xA0;</span><span class="meta brace round js"><span>(</span></span><span class="storage modifier js"><span>var</span></span><span>&#xA0;i&#xA0;</span><span class="keyword operator js"><span>=</span></span><span>&#xA0;</span><span class="constant numeric js"><span>0</span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&#xA0;i&#xA0;</span><span class="keyword operator js"><span>&lt;</span></span><span>&#xA0;chunk</span><span class="meta delimiter method period js"><span>.</span></span><span class="support constant js"><span>length</span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&#xA0;i</span><span class="keyword operator js"><span>++</span></span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</span><span class="keyword control js"><span>if</span></span><span>&#xA0;</span><span class="meta brace round js"><span>(</span></span><span>chunk</span><span class="meta brace square js"><span>[</span></span><span>i</span><span class="meta brace square js"><span>]</span></span><span>&#xA0;</span><span class="keyword operator js"><span>==</span></span><span>&#xA0;</span><span class="constant numeric js"><span>97</span></span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;chunk</span><span class="meta brace square js"><span>[</span></span><span>i</span><span class="meta brace square js"><span>]</span></span><span>&#xA0;</span><span class="keyword operator js"><span>=</span></span><span>&#xA0;</span><span class="constant numeric js"><span>122</span></span><span>&#xA0;</span><span class="comment line double-slash js"><span class="punctuation comment js"><span>//</span></span><span>&#xA0;swap&#xA0;&apos;a&apos;&#xA0;for&#xA0;&apos;z&apos;</span><span>&#xA0;</span></span></span></div><div class="line"><span class="source js">&#xA0;</span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;&#xA0;</span><span class="variable language js"><span>this</span></span><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>push</span></span><span class="meta brace round js"><span>(</span></span><span>chunk</span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js">&#xA0;</span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;&#xA0;callback</span><span class="meta brace round js"><span>(</span><span>)</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;&#xA0;</span><span class="meta brace curly js"><span>}</span></span><span class="meta brace round js"><span>)</span><span>)</span></span></span></div><div class="line"><span class="source js"><span>&#xA0;&#xA0;</span><span class="meta delimiter method period js"><span>.</span></span><span>pipe</span><span class="meta brace round js"><span>(</span></span><span>fs</span><span class="meta delimiter method period js"><span>.</span></span><span>createWriteStream</span><span class="meta brace round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation string begin js"><span>&apos;</span></span><span>out.txt</span><span class="punctuation string end js"><span>&apos;</span></span></span><span class="meta brace round js"><span>)</span><span>)</span></span></span></div></pre>
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
