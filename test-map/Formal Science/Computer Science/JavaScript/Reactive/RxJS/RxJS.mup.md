#Projects
#Isomorphic
#Teachnologies
#Wiredup
#Gulp
#Webpack
#Babel
#ES6
#ES7?
#React
#React Ui Builder
#Rx-React
#https://github.com/fdecampredon/rx-react
#Potentially replaced by
#Virtual-dom
#https://github.com/Matt-Esch/virtual-dom
#RxJS
#Expressjs
#Concepts
#Shared rendering between server and client
#Reactive Programming
#Featues
#Fully isolated components regardless of where they live 
#Ui Builder
#Resources
#book
#http://xgrommx.github.io/rx-book/
#http://channikhabra.github.io/frp-with-rxjs-jschannel-conf/#/
#Slidedeck for explaining RxJS
#Examples
#https://github.com/Reactive-Extensions/RxJS/tree/master/examples
#main github repo
#Concepts
#Observables
#http://xgrommx.github.io/rx-book/content/observable/index.html
#Maintains a list of objects (observers) and notifies them when the event happens
#http://xgrommx.github.io/rx-book/content/guidelines/introduction/index.html
#basic example worth checking out
#Observers
#http://xgrommx.github.io/rx-book/content/observer/index.html
#Schedulers
#http://xgrommx.github.io/rx-book/content/schedulers/index.html
#API
#http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/scheduling_and_concurrency.html
#Explanation
#Subjects
#http://xgrommx.github.io/rx-book/content/subjects/index.html
#API
#http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html
#Explanation
#Acts as a proxy, takes a source and emits it to its subscribers
#Nice Example
<p style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; orphans: 3; widows: 3; margin-bottom: 0.85em; font-size: 16px; letter-spacing: 0.2px; line-height: 27.2px;">The following example illustrates the proxy and broadcast nature of a&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject</code>. We first create a source sequence which produces an integer every 1 second. We then create a&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject</code>, and pass it as an observer to the source so that it will receive all the values pushed out by this source sequence. After that, we create another two subscriptions, this time with the subject as the source. The&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">subSubject1</code>&nbsp;and&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">subSubject2</code>&nbsp;subscriptions will then receive any value passed down (from the source) by the&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject</code>.</p><pre style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 16px; page-break-inside: avoid; direction: ltr; border: none; overflow: auto; word-wrap: normal; margin-bottom: 1.275em; padding: 0.85em 1em; letter-spacing: 0.2px; line-height: 27.2px; background: rgb(247, 247, 247);"><code class="lang-js" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border-style: none; border-width: initial; margin: 0px; display: inline; max-width: initial; overflow: initial; line-height: inherit; white-space: pre; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: 0px 0px; background-repeat: initial;"><span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// Every second</span>
<span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">var</span> source = Rx.Observable.interval(<span class="hljs-number" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">1000</span>);

<span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">var</span> subject = <span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">new</span> Rx.Subject();

<span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">var</span> subSource = source.subscribe(subject);

<span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">var</span> subSubject1 = subject.subscribe(
    x =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'Value published to observer #1: '</span> + x),
    e =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'onError: '</span> + e.message),
    () =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'onCompleted'</span>));

<span class="hljs-keyword" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(137, 89, 168);">var</span> subSubject2 = subject.subscribe(
    x =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'Value published to observer #2: '</span> + x),
    e =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'onError: '</span> + e.message),
    () =&gt; <span class="hljs-built_in" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">console</span>.log(<span class="hljs-string" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(113, 140, 0);">'onCompleted'</span>));

setTimeout(() =&gt; {
    <span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// Clean up</span>
    subject.onCompleted();
    subSubject1.dispose();
    subSubject2.dispose();
}, <span class="hljs-number" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(245, 135, 31);">5000</span>);

<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #1: 0</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #2: 0</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #1: 1</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #2: 1</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #1: 2</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #2: 2</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #1: 3</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; Value published to observer #2: 3</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; onCompleted</span>
<span class="hljs-comment" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(142, 144, 140);">// =&gt; onCompleted</span></code></pre>
#Types of Subjects
<h2 id="different-types-of-subjects" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; position: relative; orphans: 3; widows: 3; page-break-after: avoid; margin-top: 1.275em; margin-bottom: 0.85em; font-size: 1.75em; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.2px;">Different types of Subjects</h2><p style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; orphans: 3; widows: 3; margin-bottom: 0.85em; font-size: 16px; letter-spacing: 0.2px; line-height: 27.2px;">The&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject</code>&nbsp;object in the RxJS library is a basic implementation, but you can create your own using the&nbsp;<a href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md#rxsubjectcreateobserver-observable" target="_blank" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(65, 131, 196); background: 0px 0px;"><code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject.create</code></a>&nbsp;method. There are other implementations of Subjects that offer different functionalities. All of these types store some (or all of) values pushed to them via onNext, and broadcast it back to its observers. In this way, they convert a Cold Observable into a Hot one. This means that if you Subscribe to any of these more than once (i.e. subscribe -&gt; unsubscribe -&gt; subscribe again), you will see at least one of the same value again. For more information on hot and cold observables, see the last section of the&nbsp;<a href="https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating.md" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(65, 131, 196); background: 0px 0px;">Creating and Subscribing to Simple Observable Sequences</a>&nbsp;topic.</p><p style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; orphans: 3; widows: 3; font-size: 16px; letter-spacing: 0.2px; line-height: 27.2px; margin-bottom: 0px !important;"><a href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md" target="_blank" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(65, 131, 196); background: 0px 0px;"><code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">ReplaySubject</code></a>&nbsp;stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values that it has published, even though your subscription might have come in after certain values have been pushed out.&nbsp;<a href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md" target="_blank" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(65, 131, 196); background: 0px 0px;"><code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">BehaviourSubject</code></a>&nbsp;is similar to&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">ReplaySubject</code>, except that it only stored the last value it published.&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">BehaviourSubject</code>&nbsp;also requires a default value upon initialization. This value is sent to observers when no other value has been received by the subject yet. This means that all subscribers will receive a value instantly on&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">subscribe</code>, unless the&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">Subject</code>&nbsp;has already completed.&nbsp;<a href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/asyncsubject.md" target="_blank" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; color: rgb(65, 131, 196); background: 0px 0px;"><code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">AsyncSubject</code></a>&nbsp;is similar to the Replay and Behavior subjects, however it will only store the last value, and only publish it when the sequence is completed. You can use the&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">AsyncSubject</code>&nbsp;type for situations when the source observable is hot and might complete before any observer can subscribe to it. In this case,&nbsp;<code style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 0.85em; page-break-inside: avoid; direction: ltr; border: none; padding: 0.2em; margin: 0px; background-color: rgb(247, 247, 247);">AsyncSubject</code>&nbsp;can still provide the last value and publish it to any future subscribers.</p>
#Reply
#Behavior
#Async
#Notification
#http://xgrommx.github.io/rx-book/content/notification/index.html
#onNext
#onError
#onCompleted
#Frameworks
#WiredUp
#https://github.com/itechdom/rx-examples.git
#You load a components and that components wires other components related to it
#Easy Loading of components with ES6 classes and import statements
#Concepts
#Components directly facing the DOM
#Visualize your program
#Custom Elements
#Virtual DOM
#UI Builder
#There's a React One
#https://github.com/ipselon/react-ui-builder
#Components export all actions 
#Paradigms
#Functional Reactive
