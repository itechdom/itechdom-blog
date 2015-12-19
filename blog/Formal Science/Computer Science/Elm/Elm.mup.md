# Resources
## http://elm-lang.org/
## http://elm-lang.org/docs
### docs page
## http://elm-lang.org/docs/syntax
### syntax
<p>This syntax reference is a minimal introduction to:</p><ul><li><a href="http://elm-lang.org/docs/syntax#comments">Comments</a></li><li><a href="http://elm-lang.org/docs/syntax#literals">Literals</a></li><li><a href="http://elm-lang.org/docs/syntax#lists">Lists</a></li><li><a href="http://elm-lang.org/docs/syntax#conditionals">Conditionals</a></li><li><a href="http://elm-lang.org/docs/syntax#union-types">Union Types</a></li><li><a href="http://elm-lang.org/docs/syntax#records">Records</a></li><li><a href="http://elm-lang.org/docs/syntax#functions">Functions</a></li><li><a href="http://elm-lang.org/docs/syntax#infix-operators">Infix Operators</a></li><li><a href="http://elm-lang.org/docs/syntax#let-expressions">Let Expressions</a></li><li><a href="http://elm-lang.org/docs/syntax#applying-functions">Applying Functions</a></li><li><a href="http://elm-lang.org/docs/syntax#mapping">Mapping with&#xA0;<code>(&lt;~)</code>&#xA0;and&#xA0;<code>(~)</code></a></li><li><a href="http://elm-lang.org/docs/syntax#modules">Modules</a></li><li><a href="http://elm-lang.org/docs/syntax#type-annotations">Type Annotations</a></li><li><a href="http://elm-lang.org/docs/syntax#type-aliases">Type Aliases</a></li><li><a href="http://elm-lang.org/docs/syntax#javascript-ffi">JavaScript FFI</a></li></ul>
#### Type Alias
##### just an alias for some type
<span class="hljs-typedef"><span class="hljs-keyword">type</span> <span class="hljs-keyword">alias</span> <span class="hljs-type">Name</span> = <span class="hljs-type">String</span></span><span>
</span><span class="hljs-typedef"><span class="hljs-keyword">type</span> <span class="hljs-keyword">alias</span> <span class="hljs-type">Age</span> = <span class="hljs-type">Int</span></span><span>

</span><span class="hljs-title">info</span><span> : (</span><span class="hljs-type">Name</span><span>,</span><span class="hljs-type">Age</span><span>)
</span><span class="hljs-title">info</span><span> = (</span><span class="hljs-string">&quot;Steve&quot;</span><span>, </span><span class="hljs-number">28</span><span>)

</span><span class="hljs-typedef"><span class="hljs-keyword">type</span> <span class="hljs-keyword">alias</span> <span class="hljs-type">Point</span> = <span class="hljs-container">{ <span class="hljs-title">x</span>:<span class="hljs-type">Float</span>, <span class="hljs-title">y</span>:<span class="hljs-type">Float</span> }</span></span><span>

</span><span class="hljs-title">origin</span><span> : </span><span class="hljs-type">Point</span><span>
</span><span class="hljs-title">origin</span><span> = { x=</span><span class="hljs-number">0</span><span>, y=</span><span class="hljs-number">0</span><span> }</span>
## Complete Guide
<h1 id="complete-guide">Complete Guide</h1><ul class="guide content"><li><a href="http://elm-lang.org/guide/core-language" target="_blank">Core Language</a><ul><li><a href="http://elm-lang.org/guide/core-language#values" target="_blank">Values</a></li><li><a href="http://elm-lang.org/guide/core-language#functions" target="_blank">Functions</a></li><li><a href="http://elm-lang.org/guide/core-language#if-expressions" target="_blank">If Expressions</a></li><li><a href="http://elm-lang.org/guide/core-language#lists" target="_blank">Lists</a></li><li><a href="http://elm-lang.org/guide/core-language#tuples" target="_blank">Tuples</a></li><li><a href="http://elm-lang.org/guide/core-language#records" target="_blank">Records</a></li></ul></li><li><a href="http://elm-lang.org/guide/model-the-problem" target="_blank">Model The Problem</a><ul><li><a href="http://elm-lang.org/guide/model-the-problem#contracts" target="_blank">Contracts</a></li><li><a href="http://elm-lang.org/guide/model-the-problem#enumerations" target="_blank">Enumerations</a></li><li><a href="http://elm-lang.org/guide/model-the-problem#state-machines" target="_blank">State Machines</a></li><li><a href="http://elm-lang.org/guide/model-the-problem#tagged-unions" target="_blank">Tagged Unions</a></li><li><a href="http://elm-lang.org/guide/model-the-problem#banishing-null" target="_blank">Banishing NULL</a></li><li><a href="http://elm-lang.org/guide/model-the-problem#recursive-data-structures" target="_blank">Recursive Data Structures</a></li></ul></li><li><a href="https://github.com/evancz/elm-architecture-tutorial/" target="_blank"><b>Architecture</b></a><ul><li><a href="https://github.com/evancz/elm-architecture-tutorial/#example-1-a-counter" target="_blank"><b>Components</b></a></li><li><a href="https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer" target="_blank"><b>Components with HTTP</b></a></li><li><a href="https://github.com/evancz/elm-architecture-tutorial/#example-8-animation" target="_blank"><b>Components with Animation</b></a></li></ul></li><li><a href="http://elm-lang.org/guide/reactivity" target="_blank">Reactivity</a><ul><li><a href="http://elm-lang.org/guide/reactivity#signals" target="_blank">Signals</a></li><li><a href="http://elm-lang.org/guide/reactivity#tasks" target="_blank">Tasks</a></li></ul></li><li><a href="http://elm-lang.org/guide/interop" target="_blank">Interop</a><ul><li><a href="http://elm-lang.org/guide/interop#html-embedding" target="_blank">HTML Embedding</a></li><li><a href="http://elm-lang.org/guide/interop#ports" target="_blank">Ports</a></li></ul></li></ul>
## Examples
### https://github.com/evancz/elm-todomvc
#### todo mvc
##### Update
###### Moves our application forward
##### Model
###### Definition of application state
##### VIew
###### a way to visualize our application state with HTML

##### Inputs
###### Signals
##### Application Skeleton
<pre><span class="pl-c">-- MODEL</span>

<span class="pl-k">type alias </span><span class="pl-c1">Model</span> <span class="pl-k">=</span> { <span class="pl-k">...</span> }


<span class="pl-c">-- UPDATE</span>

<span class="pl-k">type </span><span class="pl-c1">Action</span> <span class="pl-k">=</span> <span class="pl-c1">Reset</span> <span class="pl-k">|</span> <span class="pl-k">...</span>

<span class="pl-en">update</span> <span class="pl-k">:</span> <span class="pl-k">Action</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Model</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Model</span>
<span class="pl-en">update </span>action model <span class="pl-k">=</span>
  <span class="pl-k">case </span>action <span class="pl-k">of</span>
    <span class="pl-c1">Reset</span> <span class="pl-k">-&gt;</span> <span class="pl-k">...</span>
    <span class="pl-k">...</span>


<span class="pl-c">-- VIEW</span>

<span class="pl-en">view</span> <span class="pl-k">:</span> <span class="pl-k">Model</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Html</span>
<span class="pl-en">view </span><span class="pl-k">=</span>
  <span class="pl-k">...</span></pre>
<table class="highlight tab-size js-file-line-container" data-tab-size="8"><tbody><tr><td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  1. Model  - a full definition of the application&apos;s state</span></td></tr><tr><td id="L7" class="blob-num js-line-number" data-line-number="7"></td><td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  2. Update - a way to step the application state forward</span></td></tr><tr><td id="L8" class="blob-num js-line-number" data-line-number="8"></td><td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  3. View   - a way to visualize our application state with HTML</span></td></tr><tr><td id="L9" class="blob-num js-line-number" data-line-number="9"></td><td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  4. Inputs - the signals necessary to manage events</span></td></tr></tbody></table>
## https://pragmaticstudio.com/blog/2014/12/19/getting-started-with-elm
### third part tutorials
# Packages
## Signal
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Signal
## Website
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0
# Concepts
## Differences with JavaScript
<div><h2>Literals</h2><div class="comparison"><table><tbody><tr><th>JavaScript</th><th>Elm</th></tr><tr><td><code>3</code></td><td><code>3</code></td></tr><tr><td><code>3.1415</code></td><td><code>3.1415</code></td></tr><tr><td><code>&quot;Hello world!&quot;</code></td><td><code>&quot;Hello world!&quot;</code></td></tr><tr><td><span>Multiline strings not widely supported</span></td><td><code>&quot;&quot;&quot;multiline string&quot;&quot;&quot;</code></td></tr><tr><td><code>&apos;Hello world!&apos;</code></td><td><span>Cannot use single quotes for strings</span></td></tr><tr><td><span>No distinction between characters and strings</span></td><td><code>&apos;a&apos;</code></td></tr><tr><td><code>true</code></td><td><code>True</code></td></tr><tr><td><code>[1,2,3]</code></td><td><code>[1,2,3]</code></td></tr></tbody></table></div><br></div><div><h2>Objects / Records</h2><div class="comparison"><table><tbody><tr><th>JavaScript</th><th>Elm</th></tr><tr><td><code>{ x: 3, y: 4 }</code></td><td><code>{ x = 3, y = 4 }</code></td></tr><tr><td><code>point.x</code></td><td><code>point.x</code></td></tr><tr><td><code>point.x = 42</code></td><td><code>{ point | x &lt;- 42 }</code></td></tr></tbody></table></div><br></div><div><h2>Functions</h2><div class="comparison"><table><tbody><tr><th>JavaScript</th><th>Elm</th></tr><tr><td><code>function(x,y) { return x + y; }</code></td><td><code>\x y -&gt; x + y</code></td></tr><tr><td><code>Math.max(3, 4)</code></td><td><code>max 3 4</code></td></tr><tr><td><code>Math.min(1, Math.pow(2, 4))</code></td><td><code>min 1 (2^4)</code></td></tr><tr><td><code>numbers.map(Math.sqrt)</code></td><td><code>List.map sqrt numbers</code></td></tr><tr><td><code>points.map(function(p) { return p.x })</code></td><td><code>List.map .x points</code></td></tr></tbody></table></div><br></div><div><h2>Control Flow</h2><div class="comparison"><table><tbody><tr><th>JavaScript</th><th>Elm</th></tr><tr><td><code>3 &gt; 2 ? &apos;cat&apos; : &apos;dog&apos;</code></td><td><code>if 3 &gt; 2 then &quot;cat&quot; else &quot;dog&quot;</code></td></tr><tr><td><code>var x = 42; ...</code></td><td><code>let x = 42 in ...</code></td></tr><tr><td><code>return 42</code></td><td><span>Everything is an expression, no need for return</span></td></tr></tbody></table></div><br></div><div><h2>Strings</h2><div class="comparison"><table><tbody><tr><th>JavaScript</th><th>Elm</th></tr><tr><td><code>&apos;abc&apos; + &apos;123&apos;</code></td><td><code>&quot;abc&quot; ++ &quot;123&quot;</code></td></tr><tr><td><code>&apos;abc&apos;.length</code></td><td><code>String.length &quot;abc&quot;</code></td></tr><tr><td><code>&apos;abc&apos;.toUpperCase()</code></td><td><code>String.toUpper &quot;abc&quot;</code></td></tr><tr><td><code>&apos;abc&apos; + 123</code></td><td><code>&quot;abc&quot; ++ toString 123</code></td></tr></tbody></table></div></div>
## records
you can define a record like this:<div>bill = {name = &quot;gates&quot;}</div><div><br></div><div>access with:</div><div><br></div><div>bill.name</div><div><br></div><div>or</div><div><br></div><div>.name bill</div><div><br></div><div>to update</div><div><br></div><div><span>{ bill | name &lt;- </span><span class="hljs-string">&quot;Nye&quot;</span><span> }</span><br></div><div><span><br></span></div><div><span>It is important to notice that we do not make&#xA0;</span><em>destructive</em><span>&#xA0;updates. In other words, when we update some fields of&#xA0;</span><code>bill</code><span>&#xA0;we actually create a new record rather than overwriting the existing one. Elm makes this efficient by sharing as much content as possible. If you update one of ten fields, the new record will share all of the nine unchanged values.</span><span><br></span></div>
## Contracts
### type annotation
#### to rule out runtime errors
#### you can define your own type?
<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>view : Widget -&gt; Element</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>view widget =</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; case widget of</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; ScatterPlot points -&gt;</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; &#xA0; &#xA0; viewScatterPlot points</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span><br></span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; LogData logs -&gt;</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; &#xA0; &#xA0; flow down (map viewLog logs)</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span><br></span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; TimePlot occurances -&gt;</span></font></div><div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span>&#xA0; &#xA0; &#xA0; &#xA0; &#xA0; viewTimePlot occurances</span></font></div>
<span class="hljs-title">fortyTwo</span><span> : </span><span class="hljs-type">Int</span><span>
</span><span class="hljs-title">fortyTwo</span><span> =
  </span><span class="hljs-number">42</span><div><span class="hljs-number"><br></span></div><div><span class="hljs-number"><br></span></div>
## Immutability
## https://github.com/evancz/elm-architecture-tutorial/
### Archeticture
<table class="highlight tab-size js-file-line-container" data-tab-size="8"><tbody><tr><td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  1. Model  - a full definition of the application&apos;s state</span></td></tr><tr><td id="L7" class="blob-num js-line-number" data-line-number="7"></td><td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  2. Update - a way to step the application state forward</span></td></tr><tr><td id="L8" class="blob-num js-line-number" data-line-number="8"></td><td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  3. View   - a way to visualize our application state with HTML</span></td></tr><tr><td id="L9" class="blob-num js-line-number" data-line-number="9"></td><td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  4. Inputs - the signals necessary to manage events</span></td></tr></tbody></table>
#### Application Skeleton
<pre><span class="pl-c">-- MODEL</span>

<span class="pl-k">type alias </span><span class="pl-c1">Model</span> <span class="pl-k">=</span> { <span class="pl-k">...</span> }


<span class="pl-c">-- UPDATE</span>

<span class="pl-k">type </span><span class="pl-c1">Action</span> <span class="pl-k">=</span> <span class="pl-c1">Reset</span> <span class="pl-k">|</span> <span class="pl-k">...</span>

<span class="pl-en">update</span> <span class="pl-k">:</span> <span class="pl-k">Action</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Model</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Model</span>
<span class="pl-en">update </span>action model <span class="pl-k">=</span>
  <span class="pl-k">case </span>action <span class="pl-k">of</span>
    <span class="pl-c1">Reset</span> <span class="pl-k">-&gt;</span> <span class="pl-k">...</span>
    <span class="pl-k">...</span>


<span class="pl-c">-- VIEW</span>

<span class="pl-en">view</span> <span class="pl-k">:</span> <span class="pl-k">Model</span> <span class="pl-k">-&gt;</span> <span class="pl-k">Html</span>
<span class="pl-en">view </span><span class="pl-k">=</span>
  <span class="pl-k">...</span></pre>
#### https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer
##### I stopped here
#### Pattern
##### Update
###### Moves our application forward
##### Model
###### Definition of application state
##### VIew
###### a way to visualize our application state with HTML

##### Inputs/Actions
###### Signals
## there's the idea that you can create a module that can accept a signal, you can then signal to that module without knowing the internals?
## Signals and Addresses
# Pain points
## What the hell are all these arrows
### Simple
#### a:List String -> int
##### this is a type annotation
###### prevents runtime errors
##### function a
##### takes a list of strings
##### returns an int
#### String -> Int -> Task
##### Takes String and Int and returns a task
## Tagged Unions
### putting a bunch of types together
#### http://elm-lang.org/guide/model-the-problem
#### http://elm-lang.org/examples/checkboxes
##### one of the examples
##### updating a record, shortcut? but what's Model here is it to specify the type?
<div>{ model | red &lt;- bool }</div><div><br></div><div>it will return a the whole object</div><div><br></div><div>this is not OR<br><div><br></div><div><span class="hljs-title">point</span><span> = { x = </span><span class="hljs-number">3</span><span>, y = </span><span class="hljs-number">4</span><span> }       </span><span class="hljs-comment">-- create a record</span><span>

</span><span class="hljs-title">point</span><span>.x                        </span><span class="hljs-comment">-- access field</span><span>
</span><span class="hljs-title">map</span><span> .x [point,{x=</span><span class="hljs-number">0</span><span>,y=</span><span class="hljs-number">0</span><span>}]       </span><span class="hljs-comment">-- field access function</span><span>

{ point - x }                  </span><span class="hljs-comment">-- remove field</span><span>
{ point | z = </span><span class="hljs-number">12</span><span> }             </span><span class="hljs-comment">-- add field</span><span>
{ point - x | z = point.x }    </span><span class="hljs-comment">-- rename field</span><span>
{ point - x | x = </span><span class="hljs-number">6</span><span> }          </span><span class="hljs-comment">-- update field</span><span>

{ point | x &lt;- </span><span class="hljs-number">6</span><span> }             </span><span class="hljs-comment">-- nicer way to update a field</span><span>
{ point | x &lt;- point.x + </span><span class="hljs-number">1</span><span>
        , y &lt;- point.y + </span><span class="hljs-number">1</span><span> }   </span><span class="hljs-comment">-- batch update fields</span><span>

</span><span class="hljs-title">dist</span><span> {x,y} = sqrt (x^</span><span class="hljs-number">2</span><span> + y^</span><span class="hljs-number">2</span><span>)  </span><span class="hljs-comment">-- pattern matching on fields</span><span>
\{x,y} -&gt; (x,y)

</span><span class="hljs-title">lib</span><span> = { id x = x }             </span><span class="hljs-comment">-- polymorphic fields</span><span>
(lib.id </span><span class="hljs-number">42</span><span> == </span><span class="hljs-number">42</span><span>)
(lib.id [] == [])

</span><span class="hljs-typedef"><span class="hljs-keyword">type</span> <span class="hljs-keyword">alias</span> <span class="hljs-type">Location</span> = <span class="hljs-container">{ <span class="hljs-title">line</span>:<span class="hljs-type">Int</span>, <span class="hljs-title">column</span>:<span class="hljs-type">Int</span> }</span></span></div></div>
## Elm-Views
### What's address
#### I know it's a signal
#### How is it routing to an action/update?
## Let ... in syntax?
<h3 id="let-expressions">Let Expressions</h3><pre><code class="lang-elm"><span class="hljs-title">let</span> n = <span class="hljs-number">42</span>
    (a,b) = (<span class="hljs-number">3</span>,<span class="hljs-number">4</span>)
    {x,y} = { x=<span class="hljs-number">3</span>, y=<span class="hljs-number">4</span> }
    square n = n * n
<span class="hljs-title">in</span>
    square a + square b
</code></pre><p>Let-expressions are indentation sensitive. Each definition should align with the one above it.</p>
## Signal.forwardTo
### just to forward signals?
