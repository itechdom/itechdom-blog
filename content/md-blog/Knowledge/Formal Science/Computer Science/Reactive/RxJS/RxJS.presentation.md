# Intro to RxJS
# 1.Start with an example
# 2. Harsh Reality
# 4.What about Promises?
# 3. Cute!!
# RxJS to the rescue!
# 1. Observables
### 1. Arrays Are iterable
<div>&lt;div class="fragment"&gt;<br></div><div>&lt;pre&gt;</div><div>&lt;code class="js"&gt;</div><div>Array</div><div>&nbsp; .of(1, 2, 3, 4, 5)</div><div>&nbsp; .map(x =&gt; x * x)</div><div>&nbsp; .filter(x =&gt; x%2 === 0)</div><div>&nbsp; .reduce((x, acc) =&gt; x + acc)</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div><div>&lt;/div&gt;</div>
### 2.Observables are iterables
<div>&lt;div class="fragment"&gt;<br></div><div><div>&lt;/pre&gt;</div><div>&lt;code&gt;</div><div><div>Observable</div><div>&nbsp; .of(1, 2, 3, 4, 5)</div><div>&nbsp; .map(x =&gt; x * x)</div><div>&nbsp; .filter(x =&gt; x%2 === 0)</div><div>&nbsp; .reduce((x, acc) =&gt; x + acc)</div></div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div></div><div>&lt;/div&gt;</div><div><br></div><div><div>&lt;div class="fragment"&gt;<br></div><div></div></div><div>&lt;pre&gt;</div><div>&lt;i class="fa fa-lightbulb-o"&gt;&lt;/i&gt; Remember:</div><div>&nbsp;we return a new Observable every time we do any transformation</div><div>&lt;/pre&gt;<br></div><div>&lt;/div&gt;</div>
### 3.Observables are lazy
<div>&lt;pre&gt;</div><div>&lt;code class="js"&gt;</div><div>let users_ = getUsersObservable();</div><div><br></div><div>let notJohnConners_ =&nbsp;</div><div>&nbsp; users_</div><div>&nbsp; &nbsp; .map(user =&gt; user.fullName)</div><div>&nbsp; &nbsp; .map(name =&gt; name.first + ' ' + name.last)</div><div>&nbsp; &nbsp; .filter(x =&gt; x === 'John Connor');</div><div><br></div><div>notJohnConners_.subscribe(</div><div>&nbsp;(user) =&gt; console.log('New user arrived: ', user),</div><div>&nbsp;(error) =&gt; console.log('Error Occured', error),</div><div>&nbsp;() =&gt; console.log('All Done')</div><div>)</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div>
### 4.You can make anything into an observable
### 1.Arrays
<div><div>&lt;pre&gt;<br></div></div><div>&lt;code class="js"&gt;</div><div>var a = [1, 2, 3, 4, 5];</div><div>var a$ = Observable.from(a);</div><div>var b$ = Observable.of(1, 2, 3);</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt; &nbsp; &nbsp;</div>
### 2.Promises
<div>&lt;pre&gt;<br></div><div><div>&lt;code class="js"&gt;</div><div><div>var a = iPromiseOfSomething();</div><div>var a_ = Observable.fromPromise(a);</div></div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div></div>
### 3.Events
<div><div>&lt;pre class="fragment"&gt;<br></div></div><div><div>&lt;code class="js"&gt;</div><div><div>var result = document</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.getElementById('result');</div><div>var source =&nbsp;</div><div>Rx.Observable.fromEvent(result, 'click');</div></div><div><br></div><div>var observer = Rx.Observer.create(</div><div>&nbsp; &nbsp; function (x) {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; console.log('Next: ' + x);</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; function (err) {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; console.log('Error: ' + err);</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; function () {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; console.log('Completed');</div><div>&nbsp; &nbsp; }</div><div>);</div><div>source.subscribe(observer)</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div></div><div><div>&lt;pre class="fragment"&gt;</div><div>&lt;i class="fa fa-lightbulb-o"&gt;&lt;/i&gt; Rx will truncate multiple arguments from events,&nbsp;</div><div>you can use the selector function to combine all of them&lt;/b&gt;</div><div>&lt;/pre&gt;</div></div>
### 4.Callbacks
<div>&lt;pre&gt;<br></div><div><div>&lt;code class="js"&gt;</div></div><div>writeFile = require('fs').writeFile;</div><div><br></div><div>wf_ = Observable</div><div>&nbsp; &nbsp; &nbsp; .fromNodeCallback(writeFile);</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div>
### 5.Custom Observables
<ul><li>&lt;div class="fragment"&gt;Similar to resolve and reject in Promises&lt;/div&gt;</li><li>&lt;div class="fragment"&gt;We can create custom observables&lt;/div&gt;</li><li>&lt;div class="fragment"&gt;We have three functions: OnNext, OnComplete, OnError&lt;/div&gt;</li></ul><div>&lt;div class="fragment"&gt;</div><div>&lt;pre&gt;<br></div><div>&lt;code class="js"&gt;</div><div><div>var source = Rx.Observable.create(function (observer) {</div><div>&nbsp; observer.onNext(42);<br></div><div>&nbsp; observer.onCompleted();</div><div><br></div><div>&nbsp; return function () {<br></div><div>&nbsp; &nbsp; console.log('disposed');</div><div>&nbsp; }</div><div>});</div><div>var subscription = source.subscribe(</div><div>&nbsp; function (x) { console.log('onNext: %s', x); },</div><div>&nbsp; function (e) { console.log('onError: %s', e); },</div><div>&nbsp; function () { console.log('onCompleted'); });</div><div><br></div><div><div>subscription.dispose();</div></div></div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div><div>&lt;/div&gt;</div>
### 5. You can combine multiple Observables
<div><div>&lt;pre&gt;</div><div>&lt;code class="js"&gt;</div></div><div>var api1 = "https://en.wikipedia.org/w/api.php?action=query&amp;prop=extracts&amp;format=json&amp;exintro=&amp;titles=Stack%20Overflow";</div><div>var api2 = "https://en.wikipedia.org/w/api.php?action=query&amp;prop=extracts&amp;format=json&amp;exintro=&amp;titles=Computer%20Science";</div><div><br></div><div>var promise1 = $.get(api1);</div><div>var promise2 = $.get(api2);</div><div><br></div><div>var source1 =&nbsp;</div><div>Rx.Observable.fromPromise(promise1);</div><div><br></div><div>var source2=&nbsp;</div><div>Rx.Observable.fromPromise(promise2);</div><div><br></div><div>var combined = Rx.Observable.concat(source1,source2);</div><div>&lt;/code&gt;</div><div>&lt;/pre&gt;</div>
# Reactive Programming
# 1. Imperative Programming
# 2. Reactive Programming
# Excercise
# How I use it
# 1.Node Example
# Questions?
# Resources
# Topics we didn't cover
# 1.Schedulers
# 2.Subjects
# 3.Notification
# 4.Hot vs Cold Observables
# 5. Marble Diagrams
