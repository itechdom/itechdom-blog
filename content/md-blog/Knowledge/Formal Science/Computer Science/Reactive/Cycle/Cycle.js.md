# Projects
# Resources
### Cycle-core
### https://github.com/cyclejs/cycle-core
### Cycle.js main website
### http://cycle.js.org/
### Docs Page
<ul style="box-sizing: border-box; margin-bottom: 0px; margin-left: 0px; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 24px; line-height: 38.4px;"><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;"><a href="http://cycle.js.org/getting-started.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(36, 36, 45);">Getting Started</a></strong></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/dialogue.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Dialogue Abstraction</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/observables.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Observables</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/basic-examples.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Basic examples</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/model-view-intent.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Model-View-Intent</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/components.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Components</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/drivers.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Drivers</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/documentation.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Documentation</a></li><li style="box-sizing: border-box;"><a href="http://cycle.js.org/community.html" style="box-sizing: border-box; color: rgb(36, 36, 45); text-decoration: inherit; border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(36, 36, 45);">Community</a></li></ul>
### http://cycle.js.org/getting-started.html
### Examples
### https://github.com/cyclejs/cycle-examples
### Meta Resources
### https://github.com/vic/awesome-cyclejs
# Concepts
### Small Core. uses Observables
### Drivers
### For any side effects
### Human and Computer
### are functions
### Framework Strucutre
<ul><li>Cycle.run takes a main function and a driver<br></li><li>The dom driver goes through and returns this:</li></ul><div><div>&#xA0; &#xA0; return {</div><div>&#xA0; &#xA0; &#xA0; observable: rootElem$,</div><div>&#xA0; &#xA0; &#xA0; namespace: [],</div><div>&#xA0; &#xA0; &#xA0; select: makeElementSelector(rootElem$),</div><div>&#xA0; &#xA0; &#xA0; events: makeEventsSelector(rootElem$, []),</div><div>&#xA0; &#xA0; &#xA0; dispose: () =&gt; disposable.dispose(),</div><div>&#xA0; &#xA0; &#xA0; isolateSource,</div><div>&#xA0; &#xA0; &#xA0; isolateSink,</div><div>&#xA0; &#xA0; }</div></div><div><br></div><div><ul><li>The cycle run goes through these steps: it ties both main and drivers together</li></ul><div><div>&#xA0; let sinkProxies = makeSinkProxies(drivers)</div><div>&#xA0; let sources = callDrivers(drivers, sinkProxies)</div><div>&#xA0; let sinks = main(sources)</div><div>&#xA0; let subscription = replicateMany(sinks, sinkProxies).subscribe()</div><div>&#xA0; let sinksWithDispose = attachDisposeToSinks(sinks, subscription)</div><div>&#xA0; let sourcesWithDispose = attachDisposeToSources(sources)</div><div>&#xA0; return {sources: sourcesWithDispose, sinks: sinksWithDispose}</div></div></div><div><br></div><div><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">This is where Cycle.js comes in: you only need to specify<code style="box-sizing: border-box; color: rgb(36, 36, 45); background-color: rgb(245, 245, 245);">main()

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; color: rgb(36, 36, 45); background-color: rgb(245, 245, 245);">domDriver()

```

, and give it to the Cycle.js<code style="box-sizing: border-box; color: rgb(36, 36, 45); background-color: rgb(245, 245, 245);">run()

```

&#xA0;command which connects them circularly.&#xA0;</p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">This is how the name &#x201C;<em style="box-sizing: border-box;">Cycle.js</em>&#x201D; came to be. It is a framework that solves the cyclic dependency of Observables which emerge during dialogues (mutual observations) between the Human and the Computer.</p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">It takes something and wraps it in RxJS.Observable</p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;"><br></p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">we use start with to initiate something between main and drivers</p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;"><br></p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">isolateSink and isolateSource are to not make one component pollute another</p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;"><br></p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;"><br></p><p style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;"><br></p><div class="highlight" style="box-sizing: border-box; color: white; font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px; background-color: rgb(51, 51, 51);"></div></div>
# Paradigms
# Pain Points
<em style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">Sinks</em><span style="color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">&#xA0;are instructions from&#xA0;</span><code style="box-sizing: border-box; color: rgb(36, 36, 45); font-size: 19px; line-height: 30.4px; white-space: normal; background-color: rgb(245, 245, 245);">main()

```

<span style="color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">&#xA0;to drivers to perform side effects, and&#xA0;</span><em style="box-sizing: border-box; color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">sources</em><span style="color: rgb(36, 36, 45); font-family: &apos;Source Sans Pro&apos;, Calibri, Helvetica, sans-serif; font-size: 19px; line-height: 30.4px;">&#xA0;are readable side effects. HTTP requests are sinks, and HTTP responses are sources</span>
### Sinks
### Whatever goes to the user
### Sources
### Driver sources we listen to
