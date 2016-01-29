# Resources
## https://github.com/petehunt/webpack-howto
# Third Party
## Gulp
### gulp-webpack
#### https://www.npmjs.com/package/gulp-webpack
### Vinyl-Name
#### give names to files
##### https://github.com/shama/vinyl-named
# Concepts
## Loaders
## Modules bundling
<h2>7. Multiple entrypoints</h2><p>Let&apos;s say you have a profile page and a feed page. You don&apos;t want to make the user download the code for the feed if they just want the profile. So make multiple bundles: create one &quot;main module&quot; (called an entrypoint) per page:</p><div class="highlight highlight-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-c1">module</span>.<span class="pl-c1">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> {
    Profile<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>./profile.js<span class="pl-pds">&apos;</span></span>,
    Feed<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>./feed.js<span class="pl-pds">&apos;</span></span>
  },
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>build<span class="pl-pds">&apos;</span></span>,
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>[name].js<span class="pl-pds">&apos;</span></span> <span class="pl-c">// Template based on keys in entry above</span>
  }
};</pre></div><p>For profile, insert&#xA0;<code>&lt;script src=&quot;build/Profile.js&quot;&gt;&lt;/script&gt;</code>&#xA0;into your page. Do a similar thing for feed.</p>
## Optimizing Shared Code
<h2>8. Optimizing common code</h2><p>Feed and Profile share a lot in common (like React and the common stylesheets and components). webpack can figure out what they have in common and make a shared bundle that can be cached between pages:</p><div class="highlight highlight-js"><pre><span class="pl-c">// webpack.config.js</span>

<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>webpack<span class="pl-pds">&apos;</span></span>);

<span class="pl-k">var</span> commonsPlugin <span class="pl-k">=</span>
  <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-c1">CommonsChunkPlugin</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>common.js<span class="pl-pds">&apos;</span></span>);

<span class="pl-c1">module</span>.<span class="pl-c1">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> {
    Profile<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>./profile.js<span class="pl-pds">&apos;</span></span>,
    Feed<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>./feed.js<span class="pl-pds">&apos;</span></span>
  },
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>build<span class="pl-pds">&apos;</span></span>,
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&apos;</span>[name].js<span class="pl-pds">&apos;</span></span> <span class="pl-c">// Template based on keys in entry above</span>
  },
  plugins<span class="pl-k">:</span> [commonsPlugin]
};</pre></div><p>Add&#xA0;<code>&lt;script src=&quot;build/common.js&quot;&gt;&lt;/script&gt;</code>&#xA0;before the script tag you added in the previous step and enjoy the free caching.</p>
## Async loading
<h2>9. Async loading</h2><p>CommonJS is synchronous but webpack provides a way to asynchronously specify dependencies. This is useful for client-side routers, where you want the router on every page, but you don&apos;t want to have to download features until you actually need them.</p><p>Specify the&#xA0;<strong>split point</strong>&#xA0;where you want to load asynchronously. For example:</p><div class="highlight highlight-js"><pre><span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">pathname</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&apos;</span>/feed<span class="pl-pds">&apos;</span></span>) {
  <span class="pl-c1">showLoadingState</span>();
  <span class="pl-c1">require</span>.<span class="pl-c1">ensure</span>([], <span class="pl-k">function</span>() { <span class="pl-c">// this syntax is weird but it works</span>
    <span class="pl-c1">hideLoadingState</span>();
    <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>./feed<span class="pl-pds">&apos;</span></span>).<span class="pl-c1">show</span>(); <span class="pl-c">// when this function is called, the module is guaranteed to be synchronously available.</span>
  });
} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">pathname</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&apos;</span>/profile<span class="pl-pds">&apos;</span></span>) {
  <span class="pl-c1">showLoadingState</span>();
  <span class="pl-c1">require</span>.<span class="pl-c1">ensure</span>([], <span class="pl-k">function</span>() {
    <span class="pl-c1">hideLoadingState</span>();
    <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&apos;</span>./profile<span class="pl-pds">&apos;</span></span>).<span class="pl-c1">show</span>();
  });
}</pre></div><p>webpack will do the rest and generate extra&#xA0;<strong>chunk</strong>&#xA0;files and load them for you.</p><p>webpack will assume that those files are in your root directory when you load then into a html script tag for example. You can use&#xA0;<code>output.publicPath</code>&#xA0;to configure that.</p><div class="highlight highlight-js"><pre><span class="pl-c">// webpack.config.js</span>
output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/home/proj/public/assets<span class="pl-pds">&quot;</span></span>, <span class="pl-c">//path to where webpack will build your stuff</span>
    publicPath<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/assets/<span class="pl-pds">&quot;</span></span> <span class="pl-c">//path that will be considered when requiring your files</span>
}</pre></div>
