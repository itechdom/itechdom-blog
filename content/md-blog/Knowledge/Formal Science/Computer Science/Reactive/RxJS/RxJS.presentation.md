# Intro to RxJS
Osama AlghanmiFront End Developer @ <i>EffectiveUI</i><i class="fa fa-github"></i>itechdom<i class="fa fa-twitter"></i>@itechdom
### 1.Start with an example
<div class="fragment"> Let's see how we can display a list of tweets, filter it by hashtags. </div><div class="fragment">

```

var tweets = getTweets( );tweets.filter(t => t.username === me.username).filter(t => hasTag(selectedHTag, t.text)).forEach(t => render);

```

</div><div class="fragment"><i class="fa fa-lightbulb-o"></i> functional means: <b>Non-mutating, Stateless, Composable</b></div>
### 2. Harsh Reality
<div class="fragment">In the previous example, getTweets is asynchronous</div><div class="fragment">Easy! The solution is:</div><div class="fragment"></div>
### 4.What about Promises?
<div class="fragment">Promises serve almost the same purpose as RxJS Observables</div><div class="fragment">Problems with Promises:</div><div class="fragment">Chaining Promises</div><div class="fragment">Canceling Promises</div>
### 3. Cute!!
<div class="fragment"></div>
# RxJS to the rescue!
### 1. Observables
<div class="fragment">Building blocks of FRP in RxJS</div><div class="fragment">First class objects to represent Asynchronous Data</div><div class="fragment">Operators with fabulous Functional Grammar</div><div class="fragment">Interoperable with other sync/async data</div><div class="fragment"><i class="fa fa-lightbulb-o"></i> An Observable is an event stream which can emit zero or more events, and may or may not finish. If it finishes, then it does so by either emitting an error or a special “complete” event.</div>
### 1. Arrays Are iterable
<div class="fragment"><code class="js">Array  .of(1, 2, 3, 4, 5)  .map(x => x * x)  .filter(x => x%2 === 0)  .reduce((x, acc) => x + acc)

```

</div>
### 2.Observables are iterables
<div class="fragment">

```

Observable  .of(1, 2, 3, 4, 5)  .map(x => x * x)  .filter(x => x%2 === 0)  .reduce((x, acc) => x + acc)

```

</div><div class="fragment"><i class="fa fa-lightbulb-o"></i> Remember: we return a new Observable every time we do any transformation</div>
### 3.Observables are lazy
<code class="js">let users_ = getUsersObservable();let notJohnConners_ =   users_    .map(user => user.fullName)    .map(name => name.first + ' ' + name.last)    .filter(x => x === 'John Connor');notJohnConners_.subscribe( (user) => console.log('New user arrived: ', user), (error) => console.log('Error Occured', error), () => console.log('All Done'))

```


### 4.You can make anything into an observable
### 1.Arrays
<code class="js">var a = [1, 2, 3, 4, 5];var a$ = Observable.from(a);var b$ = Observable.of(1, 2, 3);

```

    
### 2.Promises
<code class="js">var a = iPromiseOfSomething();var a_ = Observable.fromPromise(a);

```


### 3.Events
<pre class="fragment"><code class="js">var result = document               .getElementById('result');var source = Rx.Observable.fromEvent(result, 'click');var observer = Rx.Observer.create(    function (x) {        console.log('Next: ' + x);    },    function (err) {        console.log('Error: ' + err);    },    function () {        console.log('Completed');    });source.subscribe(observer)

```

<pre class="fragment"><i class="fa fa-lightbulb-o"></i> Rx will truncate multiple arguments from events, you can use the selector function to combine all of them</b>
### 4.Callbacks
<code class="js">writeFile = require('fs').writeFile;wf_ = Observable      .fromNodeCallback(writeFile);

```


### 5.Custom Observables
<div class="fragment">Similar to resolve and reject in Promises</div><div class="fragment">We can create custom observables</div><div class="fragment">We have three functions: OnNext, OnComplete, OnError</div><div class="fragment"><code class="js">var source = Rx.Observable.create(function (observer) {  observer.onNext(42);  observer.onCompleted();  return function () {    console.log('disposed');  }});var subscription = source.subscribe(  function (x) { console.log('onNext: %s', x); },  function (e) { console.log('onError: %s', e); },  function () { console.log('onCompleted'); });subscription.dispose();

```

</div>
### 5. You can combine multiple Observables
<code class="js">var api1 = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow";var api2 = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Computer%20Science";var promise1 = $.get(api1);var promise2 = $.get(api2);var source1 = Rx.Observable.fromPromise(promise1);var source2= Rx.Observable.fromPromise(promise2);var combined = Rx.Observable.concat(source1,source2);

```


# Reactive Programming
<div class="fragment">RxJS is Based on the observer and iterator patterns</div><div class="fragment">Reactive can be explained as: </div><div class="fragment">Module Foo and Module Bar</div><div class="fragment">Module Bar is said to be reactive when it listens to modules Foo's changes</div><div class="fragment">Foo doesn't know that Bar exists!</div>
### 1. Imperative Programming

### 2. Reactive Programming

# Excercise


```

test('querying over events', function () {  var results = 0;  var e = new EventEmitter();  Observable.fromEvent(e, 'click')    .filter(function (click) { return click.x === click.y })    .map(function (click) { return __ + __; })    .subscribe(function (x) { results = x; });  e.emit('click', {x: 100, y: 50});  e.emit('click', {x: 75,  y: 75});  e.emit('click', {x: 40,  y: 80});  equal(results, 150);// fill in the __ inside map});

```


# How I use it
### 1.Node Example

# Questions?
# Resources
The introduction to Reactive Programming you’ve been missing: a thorough introduction to RxJS by Cycle.js author Andre Staltz.Introduction to Rx: an online book focused on Rx.NET, but most concepts map directly to RxJS.ReactiveX.io: official cross-language documentation site for ReactiveX.Learn Rx: an interactive tutorial with arrays and Observables, by Jafar Husain.RxJS lessons at Egghead.ioRxJS GitBookRxMarbles: interactive diagrams of RxJS operators, built with Cycle.js.Async JavaScript at Netflix: video of Jafar Husain introducing RxJS.
# Topics we didn't cover
### 1.Schedulers
Explanation:http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/scheduling_and_concurrency.htmlAPI Docs:http://xgrommx.github.io/rx-book/content/schedulers/index.html
### 2.Subjects
Explanation:http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html API Docs:http://xgrommx.github.io/rx-book/content/subjects/index.html
### 3.Notification
Explanation:http://xgrommx.github.io/rx-book/content/notification/index.html
### 4.Hot vs Cold Observables
Docs:https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
### 5. Marble Diagrams
Visualize all Observable operators:http://rxmarbles.com/
