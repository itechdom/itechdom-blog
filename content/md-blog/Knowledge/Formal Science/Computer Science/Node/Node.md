# Concepts
### Streams
### https://nodejs.org/api/stream.html
### api for stream
### FRP
### https://blog.risingstack.com/functional-reactive-programming-with-the-power-of-nodejs-streams/
### Deep vs Shallow Copy
1.  A deep **copy copies** all fields, and makes**copies** of dynamically allocated memory pointed to by the fields. A deep **copy** occurs when an object is copied along with the objects to which it refers. **Shallow Copy**.**Shallow copy** is a bit-wise **copy** of an object.Oct 8, 2008
### Event loop
## Nodejs is Non-Blocking

What are the things that block?

* Reads/Writes on the Database

* Calls to other web services

* In other web frameworks, we create a separate thread for each request.

* Nodejs uses only one thread!

## Events

An event can be, for example:

* Incoming Connection from the client

* Incoming Data from the client

* Server close event.

* event event event.

## Events (Continue)

Let's look at our server, what are the events our server can have?

* request

* connection

* close

https://nodejs.org/api/http.html#http_event_request

## Block Node

The only way you can block your application is that you don't end the event callback.

```

var http = require('http');

server = http.createServer();

server.on('connection',function(req,res){

    res.writeHead("hello");

    res.write("hi there");

    console.log("If you don't call res.end node will stop the whole application");

    console.log("This is a very common mistake");

});

server.listen(1337, '127.0.0.1');

```
### Non-Blocking io
### Core Modules


## Table of Contents





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


### Process
### Buffer
### Implementing C++ modules
### https://nodejs.org/api/addons.html
### Archeticture
Node.js provides an [event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture "Event-driven architecture") and a [non-blocking I/O](https://en.wikipedia.org/wiki/Non-blocking_I/O "Non-blocking I/O") [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") that optimizes an application's throughput and scalability. These technologies are commonly used for [real-time web](https://en.wikipedia.org/wiki/Real-time_web "Real-time web") applications.
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


#### [learnyounode](https://www.github.com/workshopper/learnyounode)

Learn the basics of node: asynchronous i/o, http.

`npm install -g learnyounode`



#### [How to npm](https://github.com/npm/how-to-npm)

Learn how to use and create npm modules.

`npm install -g how-to-npm`



#### [stream-adventure](https://www.github.com/substack/stream-adventure)

Learn to compose streaming interfaces with `.pipe()`.

`npm install -g stream-adventure`

`



#### [javascripting](https://www.github.com/sethvincent/javascripting)

Learn the basics of JavaScript. No previous programming experience required.

`npm install -g javascripting`



#### [git-it](https://www.github.com/jlord/git-it)

Learn Git and GitHub basics.

`npm install -g git-it`



#### [Scope Chains & Closures](https://www.github.com/jesstelford/scope-chains-closures)

Learn the details of Scope, Scope Chains, Closures, and Garbage Collection.

`npm install -g scope-chains-closures`

`
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


Frameworks



*   Server frameworks: [Express.js](https://en.wikipedia.org/wiki/Express.js "Express.js"), [Socket.IO](https://en.wikipedia.org/wiki/Socket.IO "Socket.IO"), Koa.js, Hapi.js, Total.js, Nodal[[44]](https://en.wikipedia.org/wiki/Node.js#cite_note-44)[[45]](https://en.wikipedia.org/wiki/Node.js#cite_note-45)[[46]](https://en.wikipedia.org/wiki/Node.js#cite_note-46)
*   MVC frameworks: Meteor, Derby, Sails, Mean, MeanJS, Tower.js, Nombo, Geddy, Compound, Yahoo! Mojito
### JSDom + Server Side rendering
### https://github.com/cheeriojs/cheerio
