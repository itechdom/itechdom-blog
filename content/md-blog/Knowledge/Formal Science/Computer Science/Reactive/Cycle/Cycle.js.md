# Projects
# Resources
## Cycle-core
### https://github.com/cyclejs/cycle-core
## Cycle.js main website
### http://cycle.js.org/
## Docs Page
### http://cycle.js.org/getting-started.html
<ul><li><strong><a href="http://cycle.js.org/getting-started.html">Getting Started</a></strong></li><li><a href="http://cycle.js.org/dialogue.html">Dialogue Abstraction</a></li><li><a href="http://cycle.js.org/observables.html">Observables</a></li><li><a href="http://cycle.js.org/basic-examples.html">Basic examples</a></li><li><a href="http://cycle.js.org/model-view-intent.html">Model-View-Intent</a></li><li><a href="http://cycle.js.org/components.html">Components</a></li><li><a href="http://cycle.js.org/drivers.html">Drivers</a></li><li><a href="http://cycle.js.org/documentation.html">Documentation</a></li><li><a href="http://cycle.js.org/community.html">Community</a></li></ul>
## Examples
### https://github.com/cyclejs/cycle-examples
## Meta Resources
### https://github.com/vic/awesome-cyclejs
# Concepts
## Small Core. uses Observables
## Drivers
### For any side effects
## Human and Computer
### are functions
## Framework Strucutre
<ul><li>Cycle.run takes a main function and a driver<br></li><li>The dom driver goes through and returns this:</li></ul><div><div>&#xA0; &#xA0; return {</div><div>&#xA0; &#xA0; &#xA0; observable: rootElem$,</div><div>&#xA0; &#xA0; &#xA0; namespace: [],</div><div>&#xA0; &#xA0; &#xA0; select: makeElementSelector(rootElem$),</div><div>&#xA0; &#xA0; &#xA0; events: makeEventsSelector(rootElem$, []),</div><div>&#xA0; &#xA0; &#xA0; dispose: () =&gt; disposable.dispose(),</div><div>&#xA0; &#xA0; &#xA0; isolateSource,</div><div>&#xA0; &#xA0; &#xA0; isolateSink,</div><div>&#xA0; &#xA0; }</div></div><div><br></div><div><ul><li>The cycle run goes through these steps: it ties both main and drivers together</li></ul><div><div>&#xA0; let sinkProxies = makeSinkProxies(drivers)</div><div>&#xA0; let sources = callDrivers(drivers, sinkProxies)</div><div>&#xA0; let sinks = main(sources)</div><div>&#xA0; let subscription = replicateMany(sinks, sinkProxies).subscribe()</div><div>&#xA0; let sinksWithDispose = attachDisposeToSinks(sinks, subscription)</div><div>&#xA0; let sourcesWithDispose = attachDisposeToSources(sources)</div><div>&#xA0; return {sources: sourcesWithDispose, sinks: sinksWithDispose}</div></div></div><div><br></div><div><p>This is where Cycle.js comes in: you only need to specify<code>main()</code>&#xA0;and&#xA0;<code>domDriver()</code>, and give it to the Cycle.js<code>run()</code>&#xA0;command which connects them circularly.&#xA0;</p><p>This is how the name &#x201C;<em>Cycle.js</em>&#x201D; came to be. It is a framework that solves the cyclic dependency of Observables which emerge during dialogues (mutual observations) between the Human and the Computer.</p><p>It takes something and wraps it in RxJS.Observable</p><p><br></p><p>we use start with to initiate something between main and drivers</p><p><br></p><p>isolateSink and isolateSource are to not make one component pollute another</p><p><br></p><p><br></p><p><br></p><div class="highlight"></div></div>
# Paradigms
# Pain Points
## Sinks
### Whatever goes to the user
## Sources
### Driver sources we listen to
<em>Sinks</em><span>&#xA0;are instructions from&#xA0;</span><code>main()</code><span>&#xA0;to drivers to perform side effects, and&#xA0;</span><em>sources</em><span>&#xA0;are readable side effects. HTTP requests are sinks, and HTTP responses are sources</span>
