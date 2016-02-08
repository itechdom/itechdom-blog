# Projects
# Resources
### Cycle-core
### https://github.com/cyclejs/cycle-core
### Cycle.js main website
### http://cycle.js.org/
### Docs Page
*   **[Getting Started](http://cycle.js.org/getting-started.html)**
*   [Dialogue Abstraction](http://cycle.js.org/dialogue.html)
*   [Observables](http://cycle.js.org/observables.html)
*   [Basic examples](http://cycle.js.org/basic-examples.html)
*   [Model-View-Intent](http://cycle.js.org/model-view-intent.html)
*   [Components](http://cycle.js.org/components.html)
*   [Drivers](http://cycle.js.org/drivers.html)
*   [Documentation](http://cycle.js.org/documentation.html)
*   [Community](http://cycle.js.org/community.html)
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
*   Cycle.run takes a main function and a driver  

*   The dom driver goes through and returns this:



    return {

      observable: rootElem$,

      namespace: [],

      select: makeElementSelector(rootElem$),

      events: makeEventsSelector(rootElem$, []),

      dispose: () => disposable.dispose(),

      isolateSource,

      isolateSink,

    }





*   The cycle run goes through these steps: it ties both main and drivers together



  let sinkProxies = makeSinkProxies(drivers)

  let sources = callDrivers(drivers, sinkProxies)

  let sinks = main(sources)

  let subscription = replicateMany(sinks, sinkProxies).subscribe()

  let sinksWithDispose = attachDisposeToSinks(sinks, subscription)

  let sourcesWithDispose = attachDisposeToSources(sources)

  return {sources: sourcesWithDispose, sinks: sinksWithDispose}







This is where Cycle.js comes in: you only need to specify`main()` and `domDriver()`, and give it to the Cycle.js`run()` command which connects them circularly. 

This is how the name “_Cycle.js_” came to be. It is a framework that solves the cyclic dependency of Observables which emerge during dialogues (mutual observations) between the Human and the Computer.

It takes something and wraps it in RxJS.Observable

we use start with to initiate something between main and drivers

isolateSink and isolateSource are to not make one component pollute another


# Paradigms
# Pain Points
_Sinks_ are instructions from `main()` to drivers to perform side effects, and _sources_ are readable side effects. HTTP requests are sinks, and HTTP responses are sources
### Sinks
### Whatever goes to the user
### Sources
### Driver sources we listen to
