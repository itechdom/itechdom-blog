# Chromium
### Blink
Contents

1.  [**1 **Blink's Mission:](http://www.chromium.org/blink#TOC-Blink-s-Mission:)
2.  [**2 **Participating](http://www.chromium.org/blink#participating)
    1.  [**2.1 **Discussions](http://www.chromium.org/blink#TOC-Discussions)
    2.  [**2.2 **Watching for new features](http://www.chromium.org/blink#TOC-Watching-for-new-features)
    3.  [**2.3 **Committing and reviewing code](http://www.chromium.org/blink#TOC-Committing-and-reviewing-code)
    4.  [**2.4 **Developing Blink](http://www.chromium.org/blink#TOC-Developing-Blink)
    5.  [**2.5 **How do I port Blink to my platform?](http://www.chromium.org/blink#TOC-How-do-I-port-Blink-to-my-platform-)
3.  [**3 **Web Platform Changes: Guidelines](http://www.chromium.org/blink#new-features)
    1.  [**3.1 **Scope](http://www.chromium.org/blink#TOC-Scope)
    2.  [**3.2 **Policy for shipping and removing web platform API features](http://www.chromium.org/blink#TOC-Policy-for-shipping-and-removing-web-platform-API-features)
    3.  [**3.3 **Trivial Changes](http://www.chromium.org/blink#trivial-changes)
    4.  [**3.4 **Vendor Prefixes](http://www.chromium.org/blink#vendor-prefixes)
4.  [**4 **Web Platform Changes: Process](http://www.chromium.org/blink#TOC-Web-Platform-Changes:-Process)
    1.  [**4.1 **Launch Process: New Features](http://www.chromium.org/blink#launch-process)
    2.  [**4.2 **Launch Process: Deprecation](http://www.chromium.org/blink#TOC-Launch-Process:-Deprecation)
    3.  [**4.3 **API Owners](http://www.chromium.org/blink#TOC-API-Owners)
    4.  [**4.4 **API Review](http://www.chromium.org/blink#api-review)
    5.  [**4.5 **Feature Dashboard](http://www.chromium.org/blink#TOC-Feature-Dashboard)
    6.  [**4.6 **Guiding Principles for Process](http://www.chromium.org/blink#TOC-Guiding-Principles-for-Process)
5.  [**5 **Testing](http://www.chromium.org/blink#testing)
6.  [**6 **Architectural Changes](http://www.chromium.org/blink#architectural-changes)
7.  [**7 **Sub Teams](http://www.chromium.org/blink#TOC-Sub-Teams)
8.  [**8 **Binding TeamLayout TeamMemory TeamPaint TeamStyle TeamWeb Components TeamAnimation TeamWorker Team](http://www.chromium.org/blink#TOC-Binding-TeamLayout-TeamMemory-TeamPaint-TeamStyle-TeamWeb-Components-TeamAnimation-TeamWorker-Team)
9.  [**9 **Developer FAQ](http://www.chromium.org/blink#TOC-Developer-FAQ)
10.  [**10 **Subpage Listing](http://www.chromium.org/blink#TOC-Subpage-Listing)
### Concepts
### Lives in Content Module (part of chromium)
High-level overview

The "content" module is located in src\content, and is the core code needed to render a page using a multi-process sandboxed browser. It includes all the web platform features (i.e. HTML5) and GPU acceleration. It does not include Chrome features, i.e. extensions/autofill/spelling etc. The goal is that any embedder should be able to build a browser by starting with content, and then pick and choose Chrome features.
### http://www.chromium.org/developers/content-module
### It's an abstraction that blink is built on
### Chromium Archeticture
### https://docs.google.com/drawings/d/13yo_bSgwVdOUJFCIeVLL_rmtQ2SqElmxouC81q46GAk/edit?hl=en_US
### How to build Chromium
### Clang
### https://chromium.googlesource.com/chromium/src/+/master/docs/clang.md
### Ninja
### https://chromium.googlesource.com/chromium/src/+/master/docs/ninja_build.md
### Blink debugging
# JS engine
### Chakara
### V8
### javascript interpreter
### https://code.google.com/p/v8/
### home page
# Resources
### the chromium project
### http://www.chromium.org/developers
### https://en.wikipedia.org/wiki/Comparison_of_web_browser_engines
### different browser engines
### https://github.com/nwjs/blink
### unofficial mirror
### https://bitbucket.org/chromiumembedded/cef
### best way to use blink is with Chromium embedded framework
### http://www.chromium.org/blink/getting-started-with-blink-debugging
# Programmed in
### Coffee
### Clojure
### Ruby
### TypeScript
### Elm
### WebAssembly
