# Concepts
### Streams
### https://nodejs.org/api/stream.html
### api for stream
### FRP
### https://blog.risingstack.com/functional-reactive-programming-with-the-power-of-nodejs-streams/
### Deep vs Shallow Copy
1.  <div class="_oDd" data-hveid="36" style="overflow: hidden; padding-bottom: 20px;"><span class="_Tgc" style="font-size: 16px;">A deep **copy copies** all fields, and makes**copies** of dynamically allocated memory pointed to by the fields. A deep **copy** occurs when an object is copied along with the objects to which it refers. **Shallow Copy**.**Shallow copy** is a bit-wise **copy** of an object.</span><span class="_D8e" style="color: rgb(119, 119, 119); font-size: 14px; margin-left: 8px; white-space: nowrap;">Oct 8, 2008</span></div>
### Event loop
<div>## Nodejs is Non-Blocking</div>

<div>What are the things that block?</div>

<div>* Reads/Writes on the Database</div>

<div>* Calls to other web services</div>

<div>* In other web frameworks, we create a separate thread for each request.</div>

<div>* Nodejs uses only one thread!</div>

<div>## Events</div>

<div>An event can be, for example:</div>

<div>* Incoming Connection from the client</div>

<div>* Incoming Data from the client</div>

<div>* Server close event.</div>

<div>* event event event.</div>

<div>## Events (Continue)</div>

<div>Let's look at our server, what are the events our server can have?</div>

<div>* request</div>

<div>* connection</div>

<div>* close</div>

<div>https://nodejs.org/api/http.html#http_event_request</div>

<div>## Block Node</div>

<div>The only way you can block your application is that you don't end the event callback.</div>

<div>```</div>

<div>var http = require('http');</div>

<div>server = http.createServer();</div>

<div>server.on('connection',function(req,res){</div>

<div>    res.writeHead("hello");</div>

<div>    res.write("hi there");</div>

<div>    console.log("If you don't call res.end node will stop the whole application");</div>

<div>    console.log("This is a very common mistake");</div>

<div>});</div>

<div>server.listen(1337, '127.0.0.1');</div>

<div>```</div>
### Non-Blocking io
### Core Modules
<div id="toc" style="box-sizing: border-box; font-family: source-sans-pro, sans-serif; font-size: 18px; line-height: 34px;">

## Table of Contents

</div>

<div id="apicontent" style="box-sizing: border-box; font-family: source-sans-pro, sans-serif; font-size: 18px; line-height: 34px;">

*   [About these Docs](https://nodejs.org/api/documentation.html)
*   [Synopsis](https://nodejs.org/api/synopsis.html)
*   [Assertion Testing](https://nodejs.org/api/assert.html)
*   [Buffer](https://nodejs.org/api/buffer.html)
*   [C/C++ Addons](https://nodejs.org/api/addons.html)
*   [Child Processes](https://nodejs.org/api/child_process.html)
*   [Cluster](https://nodejs.org/api/cluster.html)
*   [Console](https://nodejs.org/api/console.html)
*   [Crypto](https://nodejs.org/api/crypto.html)
*   [Debugger](https://nodejs.org/api/debugger.html)
*   [DNS](https://nodejs.org/api/dns.html)
*   [Domain](https://nodejs.org/api/domain.html)
*   [Events](https://nodejs.org/api/events.html)
*   [File System](https://nodejs.org/api/fs.html)
*   [Globals](https://nodejs.org/api/globals.html)
*   [HTTP](https://nodejs.org/api/http.html)
*   [HTTPS](https://nodejs.org/api/https.html)
*   [Modules](https://nodejs.org/api/modules.html)
*   [Net](https://nodejs.org/api/net.html)
*   [OS](https://nodejs.org/api/os.html)
*   [Path](https://nodejs.org/api/path.html)
*   [Process](https://nodejs.org/api/process.html)
*   [Punycode](https://nodejs.org/api/punycode.html)
*   [Query Strings](https://nodejs.org/api/querystring.html)
*   [Readline](https://nodejs.org/api/readline.html)
*   [REPL](https://nodejs.org/api/repl.html)
*   [Smalloc](https://nodejs.org/api/smalloc.html)
*   [Stream](https://nodejs.org/api/stream.html)
*   [String Decoder](https://nodejs.org/api/string_decoder.html)
*   [Timers](https://nodejs.org/api/timers.html)
*   [TLS/SSL](https://nodejs.org/api/tls.html)
*   [TTY](https://nodejs.org/api/tty.html)
*   [UDP/Datagram](https://nodejs.org/api/dgram.html)
*   [URL](https://nodejs.org/api/url.html)
*   [Utilities](https://nodejs.org/api/util.html)
*   [VM](https://nodejs.org/api/vm.html)
*   [ZLIB](https://nodejs.org/api/zlib.html)

</div>
### Process
### Buffer
### Implementing C++ modules
### https://nodejs.org/api/addons.html
### Archeticture
<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">Node.js provides an </span>[event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture "Event-driven architecture")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> and a </span>[non-blocking I/O](https://en.wikipedia.org/wiki/Non-blocking_I/O "Non-blocking I/O")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> </span>[API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> that optimizes an application's throughput and scalability. These technologies are commonly used for </span>[real-time web](https://en.wikipedia.org/wiki/Real-time_web "Real-time web")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> applications.</span>
### Libuv
### events
### I think there's another library here
### https://github.com/libuv/libuv
### V8
### javascript interpreter
### https://code.google.com/p/v8/
### home page
### Server Side Rendering
### https://github.com/runvnc/angular-on-server/wiki/Running-AngularJS-on-the-server-with-Node.js-and-jsdom
### attempt to render on server side
### how would it work?
### request comes in
### there's a shared route
### server renders a little bit
### client is served
### client renders
### https://github.com/tmpvar/jsdom
### javascript implementation of HTML
### Performance
### http://www.sitepoint.com/5-easy-performance-tweaks-node-js-express/
### Security
### Abusing eval
### sending a request with an eval statement
### http://bishankochher.blogspot.com/2011/12/nodejs-security-good-bad-and-ugly.html
### blog post regarding that
### Resources
### https://nodesecurity.io/resources
### node security team
### https://speakerdeck.com/ckarande/top-overlooked-security-threats-to-node-dot-js-web-applications
# Resources
### Node Api
### https://nodejs.org/api/
### http://nodeschool.io/#workshoppers
### Nodeschool open source workshops
### The list
<div id="learnyounode" class="workshopper" style="padding-bottom: 20px; font-family: 'Source Sans Pro'; font-size: medium; line-height: normal;">

#### [learnyounode](https://www.github.com/workshopper/learnyounode)

Learn the basics of node: asynchronous i/o, http.

`npm install -g learnyounode`</div>

<div id="how-to-npm" class="workshopper" style="padding-bottom: 20px; font-family: 'Source Sans Pro'; font-size: medium; line-height: normal;">

#### [How to npm](https://github.com/npm/how-to-npm)

Learn how to use and create npm modules.

`npm install -g how-to-npm`</div>

<div id="streamadventure" class="workshopper" style="padding-bottom: 20px; font-family: 'Source Sans Pro'; font-size: medium; line-height: normal;">

#### [stream-adventure](https://www.github.com/substack/stream-adventure)

<span data-i18n="workshopper-streamadventure">Learn to compose streaming interfaces with </span>`.pipe()`<span data-i18n="workshopper-streamadventure2">.</span>

`npm install -g stream-adventure`</div>

<div id="streamadventure" class="workshopper" style="padding-bottom: 20px; font-family: 'Source Sans Pro'; font-size: medium; line-height: normal;">`

<div id="javascripting" class="workshopper" style="padding-bottom: 20px; color: rgb(51, 51, 51); font-family: 'Source Sans Pro'; font-size: medium; line-height: normal; white-space: normal; background-color: rgb(255, 255, 255);">

#### [javascripting](https://www.github.com/sethvincent/javascripting)

Learn the basics of JavaScript. No previous programming experience required.

`npm install -g javascripting`</div>

<div id="gitit" class="workshopper" style="padding-bottom: 20px; color: rgb(51, 51, 51); font-family: 'Source Sans Pro'; font-size: medium; line-height: normal; white-space: normal; background-color: rgb(255, 255, 255);">

#### [git-it](https://www.github.com/jlord/git-it)

Learn Git and GitHub basics.

`npm install -g git-it`</div>

<div id="scope-chains-closures" class="workshopper" style="padding-bottom: 20px; color: rgb(51, 51, 51); font-family: 'Source Sans Pro'; font-size: medium; line-height: normal; white-space: normal; background-color: rgb(255, 255, 255);">

#### [Scope Chains & Closures](https://www.github.com/jesstelford/scope-chains-closures)

Learn the details of Scope, Scope Chains, Closures, and Garbage Collection.

`npm install -g scope-chains-closures`</div>

`</div>
### http://www.technology-ebay.de/the-teams/mobile-de/blog/nodejs-real-world
### Node.js in Real World
# Pain Points
### Does requiring a model provide a copy of the exported object or modifies the global one?
### Asynchronous vs Callbacks
### Buffer Vs. Heap?
*   In V8 `null`, `undefined`, `true` and `false` internally are [heap allocated objects](http://code.google.com/p/v8/source/browse/trunk/src/objects.h?r=12408#7887). If you are comming from Java you can say that `true` and `false` in V8 are more like `Boolean.TRUE` and`Boolean.FALSE` in Java.
*   There is an important difference between _real_ local variables and variables that are captured by closures or shadowed by eval/with. Captures variables are stored in a special heap allocated structure called [Context](http://code.google.com/p/v8/source/browse/trunk/src/contexts.h?r=12394#165) and are accessed indirectly. For more details about _real_ vs. context allocates variables see [my answer to a different question](http://stackoverflow.com/questions/5326300/garbage-collection-with-node-js/5328761#5328761)
*   V8 has two compilers: non-optimizing (aka full) and optimizing one:

    *   Non-optimizing compiler can't store floating point numbers and integers beyond 31-bit (32-bit on x64) on the stack it always boxes them into [HeapNumber](http://code.google.com/p/v8/source/browse/trunk/src/objects.h?r=12408#1297)s. It does not try to do register allocation and stores _real_ local variables on the stack.
    *   Optimizing compiler is much smarter. It does register allocation (linear scan) and can keep full 32-bit integers and floating point numbers on the stack and in the registers (including XMM registers).
*   Speaking of JVM: it can perform so called _stack allocation_ and allocate a non-escaping object on the stack instead of the heap. A more generic optimization (_scalar replacement_) can sometimes completely eliminate allocation of non-escaping object and explode it into separate fields.
### it says that buffer is allocated outside the V8 heap
### I am assuming that means that V8 allocated one heap for all its objects
# Third Party
### Package management
### NPM
### Frameworks
<dl style="margin-top: 0.2em; margin-bottom: 0.5em; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">

<dt style="margin-bottom: 0.1em;">Frameworks</dt>

</dl>

*   Server frameworks: [Express.js](https://en.wikipedia.org/wiki/Express.js "Express.js"), [Socket.IO](https://en.wikipedia.org/wiki/Socket.IO "Socket.IO"), Koa.js, Hapi.js, Total.js, Nodal<sup id="cite_ref-44" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[44]](https://en.wikipedia.org/wiki/Node.js#cite_note-44)</sup><sup id="cite_ref-45" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[45]](https://en.wikipedia.org/wiki/Node.js#cite_note-45)</sup><sup id="cite_ref-46" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[46]](https://en.wikipedia.org/wiki/Node.js#cite_note-46)</sup>
*   MVC frameworks: Meteor, Derby, Sails, Mean, MeanJS, Tower.js, Nombo, Geddy, Compound, Yahoo! Mojito
### JSDom + Server Side rendering
### https://github.com/cheeriojs/cheerio
