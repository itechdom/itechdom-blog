# Concepts
### Streams
### https://nodejs.org/api/stream.html
### api for stream
### FRP
### https://blog.risingstack.com/functional-reactive-programming-with-the-power-of-nodejs-streams/
### Deep vs Shallow Copy
A deep copy copies all fields, and makescopies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers. Shallow Copy.Shallow copy is a bit-wise copy of an object.Oct 8, 2008
### Event loop
## Nodejs is Non-BlockingWhat are the things that block?* Reads/Writes on the Database* Calls to other web services* In other web frameworks, we create a separate thread for each request.* Nodejs uses only one thread!## Events    An event can be, for example:* Incoming Connection from the client* Incoming Data from the client* Server close event.* event event event.## Events (Continue)Let's look at our server, what are the events our server can have?* request* connection* closehttps://nodejs.org/api/http.html#http_event_request## Block NodeThe only way you can block your application is that you don't end the event callback.```var http = require('http');server = http.createServer();server.on('connection',function(req,res){    res.writeHead("hello");    res.write("hi there");    console.log("If you don't call res.end node will stop the whole application");    console.log("This is a very common mistake");    });server.listen(1337, '127.0.0.1');```
### Non-Blocking io
### Core Modules
Table of ContentsAbout these DocsSynopsisAssertion TestingBufferC/C++ AddonsChild ProcessesClusterConsoleCryptoDebuggerDNSDomainEventsFile SystemGlobalsHTTPHTTPSModulesNetOSPathProcessPunycodeQuery StringsReadlineREPLSmallocStreamString DecoderTimersTLS/SSLTTYUDP/DatagramURLUtilitiesVMZLIB
### Process
### Buffer
### Implementing C++ modules
### https://nodejs.org/api/addons.html
### Archeticture
Node.js provides an event-driven architecture and a non-blocking I/O API that optimizes an application's throughput and scalability. These technologies are commonly used for real-time web applications.
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
learnyounodeLearn the basics of node: asynchronous i/o, http.npm install -g learnyounodeHow to npmLearn how to use and create npm modules.npm install -g how-to-npmstream-adventureLearn to compose streaming interfaces with .pipe().npm install -g stream-adventurejavascriptingLearn the basics of JavaScript. No previous programming experience required.npm install -g javascriptinggit-itLearn Git and GitHub basics.npm install -g git-itScope Chains & ClosuresLearn the details of Scope, Scope Chains, Closures, and Garbage Collection.npm install -g scope-chains-closures
### http://www.technology-ebay.de/the-teams/mobile-de/blog/nodejs-real-world
### Node.js in Real World
# Pain Points
### Does requiring a model provide a copy of the exported object or modifies the global one?
### Asynchronous vs Callbacks
### Buffer Vs. Heap?
In V8 null, undefined, true and false internally are heap allocated objects. If you are comming from Java you can say that true and false in V8 are more like Boolean.TRUE andBoolean.FALSE in Java.There is an important difference between real local variables and variables that are captured by closures or shadowed by eval/with. Captures variables are stored in a special heap allocated structure called Context and are accessed indirectly. For more details about real vs. context allocates variables see my answer to a different questionV8 has two compilers: non-optimizing (aka full) and optimizing one:Non-optimizing compiler can't store floating point numbers and integers beyond 31-bit (32-bit on x64) on the stack it always boxes them into HeapNumbers. It does not try to do register allocation and stores real local variables on the stack.Optimizing compiler is much smarter. It does register allocation (linear scan) and can keep full 32-bit integers and floating point numbers on the stack and in the registers (including XMM registers).Speaking of JVM: it can perform so called stack allocation and allocate a non-escaping object on the stack instead of the heap. A more generic optimization (scalar replacement) can sometimes completely eliminate allocation of non-escaping object and explode it into separate fields.
### it says that buffer is allocated outside the V8 heap
### I am assuming that means that V8 allocated one heap for all its objects
# Third Party
### Package management
### NPM
### Frameworks
FrameworksServer frameworks: Express.js, Socket.IO, Koa.js, Hapi.js, Total.js, Nodal[44][45][46]MVC frameworks: Meteor, Derby, Sails, Mean, MeanJS, Tower.js, Nombo, Geddy, Compound, Yahoo! Mojito
### JSDom + Server Side rendering
### https://github.com/cheeriojs/cheerio
