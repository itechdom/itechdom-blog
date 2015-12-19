# Core
## Asm.js
### https://drive.google.com/open?id=0B9tPYCpuqoIrSmZzXzVxT2RCOEE
## ES 
### 5
### 6/2015
#### Concepts
##### Decorators
##### Underscore stuff
##### Classes
#### Resources
##### https://github.com/ericdouglas/ES6-Learning
##### My presentaion
### 7
#### Async
##### Await
##### https://jakearchibald.com/2014/es7-async-functions/
## DOM
### http://domenlightenment.com/#1.1
### Everything inherits from Node
#### HTML ELEMENT
#### TEXT NODE
<h2 id="1.4">1.4 Properties and methods for working nodes</h2><p>Like we have been discussing all node objects (e.g&#xA0;<em>Element</em>,&#xA0;<em>Attr</em>,&#xA0;<em>Text</em>&#xA0;etc...) inherit properties and methods from a primary&#xA0;<em>Node</em>&#xA0;object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM. In addtion to the properties and methods provided by the node interface there are a great deal of other relevant properties and methods that are provided by sub node interfaces such as the&#xA0;<em>document</em>,&#xA0;<em>HTMLElement</em>, or&#xA0;<em>HTML*Element</em>&#xA0;interface.</p><p>Below I list out the most common&#xA0;<em>Node</em>&#xA0;properties and methods inherited by all node objects including the relevant inherited properties for working with nodes from sub-node interfaces.</p><span>Node Properties:</span><ul><li><em>childNodes</em></li><li><em>firstChild</em></li><li><em>lastChild</em></li><li><em>nextSibling</em></li><li><em>nodeName</em></li><li><em>nodeType</em></li><li><em>nodeValue</em></li><li><em>parentNode</em></li><li><em>previousSibling</em></li></ul><span>Node Methods:</span><ul><li><em>appendChild()</em></li><li><em>cloneNode()</em></li><li><em>compareDocumentPosition()</em></li><li><em>contains()</em></li><li><em>hasChildNodes()</em></li><li><em>insertBefore()</em></li><li><em>isEqualNode()</em></li><li><em>removeChild()</em></li><li><em>replaceChild()</em></li></ul><p>Document Methods:</p><ul><li><em>document.createElement()</em></li><li><em>document.createTextNode()</em></li></ul><p>HTML * Element Properties:</p><ul><li><em>innerHTML</em></li><li><em>outerHTML</em></li><li><em>textContent</em></li><li><em>innerText</em></li><li><em>outerText</em></li><li><em>firstElementChild</em></li><li><em>lastElementChild</em></li><li><em>nextElementChild</em></li><li><em>previousElementChild</em></li><li><em>children</em></li></ul><p>HTML element Methods:</p><ul><li><em>insertAdjacentHTML()</em></li></ul>
# Thrid Party
## jQuery
jQuery is a library, think of a library as a collection of factories (functions) that produce certain results. You have to learn how to use the library: to reduce time, follow best practices that other people wrote.<div><br></div><div>jQuery has a special syntax the dollar sign, that makes it extremely easy to do DOM manipulation, binding events, create image sliders,&#xA0;</div><div><br></div><div>Learning jQuery will save you time and effort in writing a lot of code to manipulate DOM. Although there are new libraries coming up, It&apos;s used heavily by web developers.&#xA0;</div>
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:<div><br></div><div>Facebook</div><div>twitter</div><div>google</div><div>foursquare</div><div>etc</div>
#### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let&apos;s see how we do that<div><br></div><div>$.ajax</div><div>{</div><div><br></div><div><br></div><div><br></div><div>}</div>
## Angularjs
### 1.0
#### Concepts
##### Dependency Injection
##### Directives
##### Modules
##### Two- Way Binding
###### Scopes
##### Providers
###### Services
###### Factories
### 2.0
## RxJS
### https://drive.google.com/open?id=0B9tPYCpuqoIrc1dpTGJKaTFKRUE
## React
## Famous.io
### Concepts
#### Webgl + DOM Rendering
## Webpack
### https://drive.google.com/open?id=0B9tPYCpuqoIrVUhpN3FQQ3k4MnM
## Gulp
## Babel
### https://babeljs.io/
## ESlint
### Linter for ES2015
## continuous integration
### https://en.wikipedia.org/wiki/Continuous_integration#Software
### Travis-ci
#### https://travis-ci.org/
#### ci
<span>The simpilest way to explain Travis CI is that it runs your program&apos;s tests every time you commit to GitHub (This can be configured in many ways, and you can always disables builds on some branches). The point of this is that you can often discover very quickly if your commit broke something, and fix it before it becomes a problem. I would reccomend running Travis CI on every GitHub repo that you have unit tests in and is using a programming language supported by Travis CI. Since setting up Travis CI is very easy, I don&apos;t normally see a good reason not to use it, unless you don&apos;t care if you have passing tests in your program. Feel free to leave a comment if you have any more questions. You can read more about Travis CI&#xA0;</span><a href="http://docs.travis-ci.com/">here</a><span>.</span>
## Aurelia
### Framework
## Falore
### https://netflix.github.io/falcor/starter/what-is-falcor.html
### Represent you model the same way on the client and server
# Concepts
## Isomorphic
## Lexical scoping
### http://stackoverflow.com/questions/1047454/what-is-lexical-scope
#### great example of lexical vs. dynamic scoping
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
#### Closures remembers the environment it was created in
# Design Patterns
## https://carldanley.com/javascript-design-patterns/
<h2>Modern Day JavaScript Design Patterns</h2><p>Below is a list of each JavaScript design pattern I&apos;ve had the opportunity to write about with breakdowns on various aspects of that pattern such as their advantages and disadvantages. Browse away!</p><p><a href="http://carldanley.com/js-module-pattern/">The Module Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-revealing-module-pattern/">The Revealing Module Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-singleton-pattern/">The Singleton Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-observer-pattern/">The Observer Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-mediator-pattern/">The Mediator Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-prototype-pattern/">The Prototype Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-facade-pattern/">The Facade Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-factory-pattern/">The Factory Pattern</a></p>
# Paradigms
## Functional
## Functional Reactive
### RxJS
## OOP
# Resources
## JS in one Pic
### http://coodict.github.io/javascript-in-one-pic/
## You don't Know JS
### https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md
## Functional Programming
### Relies on the idea of function from math
#### One input and one output
#### no side effects
##### side effects are
<p>Side effects may include, but are not limited to</p><ul><li>changing the file system</li><li>inserting a record into a database</li><li>making an http call</li><li>mutations</li><li>printing to the screen / logging</li><li>obtaining user input</li><li>querying the DOM</li><li>accessing system state</li></ul>
### https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch6.html
### Currying
<pre><code class="lang-js"><span class="hljs-keyword">var</span> add = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">y</span>) </span>{
    <span class="hljs-keyword">return</span> x + y;
  };
};

<span class="hljs-keyword">var</span> increment = add(<span class="hljs-number">1</span>);
<span class="hljs-keyword">var</span> addTen = add(<span class="hljs-number">10</span>);

increment(<span class="hljs-number">2</span>);
<span class="hljs-comment">// 3</span>

addTen(<span class="hljs-number">2</span>);
<span class="hljs-comment">// 12</span></code></pre><pre>you split off a function into two functions</pre>
#### loadash currying
#### What's the purpose of currying
<pre><code class="lang-js"><span class="hljs-keyword">var</span> getChildren = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
  <span class="hljs-keyword">return</span> x.childNodes;
};

<span class="hljs-keyword">var</span> allTheChildren = map(getChildren);</code></pre>
##### we can pass functions to others
##### Somtimes called partial application
##### As apposed to this
<p>Giving a function fewer arguments than it expects is typically called&#xA0;<em>partial application</em>. Partially applying a function can remove a lot of boiler plate code. Consider what the above&#xA0;<code>allTheChildren</code>&#xA0;function would be with the uncurried&#xA0;<code>map</code>&#xA0;from lodash<span><a href="https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html#fn_note the arguments are in a different order" id="reffn_note the arguments are in a different order">note the arguments are in a different order</a></span>:</p><pre><code class="lang-js"><span class="hljs-keyword">var</span> allTheChildren = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">elements</span>) </span>{
  <span class="hljs-keyword">return</span> _.map(elements, getChildren);
};</code></pre>
###### so it's better because we split off our application into reusable components
### Immutable state
### Pain Points
#### What's the purpose of using closures?
<pre><code class="lang-js"><span class="hljs-comment">//pure</span>
<span class="hljs-keyword">var</span> signUp = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">Db, Email, attrs</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};</code></pre><div><code class="lang-js"><br></code></div>
##### is it to be able to execute that function later
### Popular functional Programming Libraries
<a href="https://lodash.com/" target="_blank">lodash</a><span>,&#xA0;</span><a href="http://underscorejs.org/" target="_blank">underscore</a><span>, and&#xA0;</span><a href="http://ramdajs.com/" target="_blank">ramda</a><span>.</span>
### Higher order function
#### A function that takes other functions
### Compose
#### select two or more functions functions and call them together together within your body
<pre><code class="lang-js"><span class="hljs-keyword">var</span> toUpperCase = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x.toUpperCase(); };
<span class="hljs-keyword">var</span> exclaim = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x + <span class="hljs-string">&apos;!&apos;</span>; };
<span class="hljs-keyword">var</span> shout = compose(exclaim, toUpperCase);

shout(<span class="hljs-string">&quot;send in the clowns&quot;</span>);
<span class="hljs-comment">//=&gt; &quot;SEND IN THE CLOWNS!&quot;</span></code></pre>
#### Pointfree
<pre><code class="lang-js"><span class="hljs-comment">//not pointfree because we mention the data: word</span>
<span class="hljs-keyword">var</span> snakeCase = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">word</span>) </span>{
  <span class="hljs-keyword">return</span> word.toLowerCase().replace(<span class="hljs-regexp">/\s+/ig</span>, <span class="hljs-string">&apos;_&apos;</span>);
};

<span class="hljs-comment">//pointfree</span>
<span class="hljs-keyword">var</span> snakeCase = compose(replace(<span class="hljs-regexp">/\s+/ig</span>, <span class="hljs-string">&apos;_&apos;</span>), toLowerCase);</code></pre>
#### relies on category theory
# Programmed in
## Coffee
## Clojure
## Ruby
## TypeScript
## Elm
