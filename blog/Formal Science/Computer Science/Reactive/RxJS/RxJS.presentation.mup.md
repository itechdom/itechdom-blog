# Projects
## WiredUp
### https://github.com/itechdom/rx-examples.git
### You load a components and that components wires other components related to it
### Easy Loading of components with ES6 classes and import statements
### Concepts
#### Components directly facing the DOM
#### Visualize your program
#### Custom Elements
#### Virtual DOM
#### UI Builder
##### There's a React One
###### https://github.com/ipselon/react-ui-builder
#### Components export all actions 
# Resources
## book
### http://xgrommx.github.io/rx-book/
## http://channikhabra.github.io/frp-with-rxjs-jschannel-conf/#/
### Slidedeck for explaining RxJS
## Examples
### https://github.com/Reactive-Extensions/RxJS/tree/master/examples
#### main github repo
## https://blog.risingstack.com/functional-reactive-programming-with-the-power-of-nodejs-streams/
### node.js examples with rxjs
## https://www.npmjs.com/package/rxjs-examples
### npm module
## https://github.com/Reactive-Extensions/rx-node/blob/master/doc/api/nodejs.md
### rx-node api
# Concepts
## Observables
### http://xgrommx.github.io/rx-book/content/observable/index.html
### Maintains a list of objects (observers) and notifies them when the event happens
## http://xgrommx.github.io/rx-book/content/guidelines/introduction/index.html
### basic example worth checking out
## Observers
### http://xgrommx.github.io/rx-book/content/observer/index.html
## Schedulers
### http://xgrommx.github.io/rx-book/content/schedulers/index.html
#### API
### http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/scheduling_and_concurrency.html
#### Explanation
## Subjects
### http://xgrommx.github.io/rx-book/content/subjects/index.html
#### API
### http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html
#### Explanation
### Acts as a proxy, takes a source and emits it to its subscribers
### Nice Example
<p><span>The following example illustrates the proxy and broadcast nature of a Subject. We first create a source sequence which produces an integer every 1 second. We then create a Subject, and pass it as an observer to the source so that it will receive all the values pushed out by this source sequence. After that, we create another two subscriptions, this time with the subject as the source. The subSubject1 and subSubject2 subscriptions will then receive any value passed down (from the source) by the Subject.</span></p><p><span><br></span></p><p><span>&lt;pre&gt;</span></p><p><span><br></span></p><p><span>&lt;code&gt;</span></p><p><span><br></span></p><p><span>// Every second</span></p><p><span><br></span></p><p><span>var source = Rx.Observable.interval(1000);</span></p><p><span><br></span></p><p><span>var subject = new Rx.Subject();</span></p><p><span><br></span></p><p><span>var subSource = source.subscribe(subject);</span></p><p><span><br></span></p><p><span>var subSubject1 = subject.subscribe(</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; x =&gt; console.log(&apos;Value published to observer #1: &apos; + x),</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; e =&gt; console.log(&apos;onError: &apos; + e.message),</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; () =&gt; console.log(&apos;onCompleted&apos;));</span></p><p><span><br></span></p><p><span>var subSubject2 = subject.subscribe(</span></p><p><span><br></span></p><p><span>&#xA0;x =&gt; console.log(&apos;Value published to observer #2: &apos; + x),</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; e =&gt; console.log(&apos;onError: &apos; + e.message),</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; () =&gt; console.log(&apos;onCompleted&apos;));</span></p><p><span><br></span></p><p><span>setTimeout(() =&gt; {</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; // Clean up</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; subject.onCompleted();</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; subSubject1.dispose();</span></p><p><span><br></span></p><p><span>&#xA0; &#xA0; subSubject2.dispose();</span></p><p><span><br></span></p><p><span>}, 5000);</span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #1: 0</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #2: 0</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #1: 1</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #2: 1</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #1: 2</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #2: 2</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #1: 3</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; Value published to observer #2: 3</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; onCompleted</span></p><p><span><br></span></p><p><span><br></span></p><p><span><br></span></p><p><span>// =&gt; onCompleted</span></p><p><span><br></span></p><p><span>&lt;/code&gt;</span></p><p><span><br></span></p><p><span>&lt;/pre&gt;</span></p>
### Types of Subjects
<h2 id="different-types-of-subjects"><span>Different types of Subjects</span></h2><h2 id="different-types-of-subjects"><span><br></span></h2><h2 id="different-types-of-subjects"><span>The Subject object in the RxJS library is a basic implementation, but you can create your own using the Subject.create method. There are other implementations of Subjects that offer different functionalities. All of these types store some (or all of) values pushed to them via onNext, and broadcast it back to its observers. In this way, they convert a Cold Observable into a Hot one. This means that if you Subscribe to any of these more than once (i.e. subscribe -&gt; unsubscribe -&gt; subscribe again), you will see at least one of the same value again. For more information on hot and cold observables, see the last section of the Creating and Subscribing to Simple Observable Sequences topic.</span></h2><h2 id="different-types-of-subjects"><span><br></span></h2><h2 id="different-types-of-subjects"><span>ReplaySubject stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values that it has published, even though your subscription might have come in after certain values have been pushed out. BehaviourSubject is similar to ReplaySubject, except that it only stored the last value it published. BehaviourSubject also requires a default value upon initialization. This value is sent to observers when no other value has been received by the subject yet. This means that all subscribers will receive a value instantly on subscribe, unless the Subject has already completed. AsyncSubject is similar to the Replay and Behavior subjects, however it will only store the last value, and only publish it when the sequence is completed. You can use the AsyncSubject type for situations when the source observable is hot and might complete before any observer can subscribe to it. In this case, AsyncSubject can still provide the last value and publish it to any future subscribers.</span></h2>
#### Reply
#### Behavior
#### Async
## Notification
### http://xgrommx.github.io/rx-book/content/notification/index.html
### onNext
### onError
### onCompleted
## Node.js streams vs. Event Emitter
<div><span>down vote</span><br></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>accepted</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>You are correct that Rx streams and EventEmitter are very similar, both are implementations of the Observer pattern.</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span><br></span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>The difference is that Rx contains functions for transforming and combining event streams. Imagine for instance that we want to delay each &quot;response event&quot; by 2 seconds. With EventEmitter, you would have to subscribe to that, and manually make a timeout:</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span><br></span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>eventEmitter.on(&apos;response&apos;, function(res) {</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>&#xA0; &#xA0; setTimeout(function() { /* handle res */ }, 2000);</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>});</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>With Rx, you can create a new event stream which is simply the original stream applied to the delay function:</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span><br></span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>responseStream.delay(2000).subscribe(function(res) {</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>&#xA0; &#xA0; /* handle res */</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>});</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>delay() is a simple function, and one of the many others available. There are so many different ways of modifying streams, that it becomes possible to program a lot of application logic just by transforming streams with all the possible functions, instead of relying on low-level logic such as setTimeout.</span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span><br></span></font></div><div><font color="#222426" face="Arial, Helvetica Neue, Helvetica, sans-serif"><span>Also check out this visual and interactive exploration of those functions.</span></font></div>
# Paradigms
## Functional Reactive
### FRP