# Projects
### Isomorphic
### Teachnologies
### Wiredup
### Gulp
### Webpack
### Babel
### ES6
### ES7?
### React
### React Ui Builder
### Rx-React
### https://github.com/fdecampredon/rx-react
### Potentially replaced by
### Virtual-dom
### https://github.com/Matt-Esch/virtual-dom
### RxJS
### Expressjs
### Concepts
### Shared rendering between server and client
### Reactive Programming
### Featues
### Fully isolated components regardless of where they live 
### Ui Builder
# Resources
### book
### http://xgrommx.github.io/rx-book/
### http://channikhabra.github.io/frp-with-rxjs-jschannel-conf/#/
### Slidedeck for explaining RxJS
### Examples
### https://github.com/Reactive-Extensions/RxJS/tree/master/examples
### main github repo
### Rx Android
### https://github.com/ReactiveX/RxAndroid
### Rx Marbles
### http://rxmarbles.com/
# Concepts
### Observables
### http://xgrommx.github.io/rx-book/content/observable/index.html
### Maintains a list of objects (observers) and notifies them when the event happens
### http://xgrommx.github.io/rx-book/content/guidelines/introduction/index.html
### basic example worth checking out
### Observers
### http://xgrommx.github.io/rx-book/content/observer/index.html
### Schedulers
### http://xgrommx.github.io/rx-book/content/schedulers/index.html
### API
### http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/scheduling_and_concurrency.html
### Explanation
### Subjects
### http://xgrommx.github.io/rx-book/content/subjects/index.html
### API
### http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html
### Explanation
### Acts as a proxy, takes a source and emits it to its subscribers
### Nice Example
The following example illustrates the proxy and broadcast nature of a Subject. We first create a source sequence which produces an integer every 1 second. We then create a Subject, and pass it as an observer to the source so that it will receive all the values pushed out by this source sequence. After that, we create another two subscriptions, this time with the subject as the source. The subSubject1 and subSubject2 subscriptions will then receive any value passed down (from the source) by the Subject.

  


// Every second

var source = Rx.Observable.interval(1000);

  


var subject = new Rx.Subject();

  


var subSource = source.subscribe(subject);

  


var subSubject1 = subject.subscribe(

    x => console.log('Value published to observer #1: ' + x),

    e => console.log('onError: ' + e.message),

    () => console.log('onCompleted'));

  


var subSubject2 = subject.subscribe(

    x => console.log('Value published to observer #2: ' + x),

    e => console.log('onError: ' + e.message),

    () => console.log('onCompleted'));

  


setTimeout(() => {

    // Clean up

    subject.onCompleted();

    subSubject1.dispose();

    subSubject2.dispose();

}, 5000);

  


// => Value published to observer #1: 0

// => Value published to observer #2: 0

// => Value published to observer #1: 1

// => Value published to observer #2: 1

// => Value published to observer #1: 2

// => Value published to observer #2: 2

// => Value published to observer #1: 3

// => Value published to observer #2: 3

// => onCompleted

// => onCompleted
### Types of Subjects
## Different types of Subjects

The `Subject` object in the RxJS library is a basic implementation, but you can create your own using the [`Subject.create`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md#rxsubjectcreateobserver-observable) method. There are other implementations of Subjects that offer different functionalities. All of these types store some (or all of) values pushed to them via onNext, and broadcast it back to its observers. In this way, they convert a Cold Observable into a Hot one. This means that if you Subscribe to any of these more than once (i.e. subscribe -> unsubscribe -> subscribe again), you will see at least one of the same value again. For more information on hot and cold observables, see the last section of the [Creating and Subscribing to Simple Observable Sequences](https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating.md) topic.

[`ReplaySubject`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md) stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values that it has published, even though your subscription might have come in after certain values have been pushed out. [`BehaviourSubject`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md) is similar to `ReplaySubject`, except that it only stored the last value it published. `BehaviourSubject` also requires a default value upon initialization. This value is sent to observers when no other value has been received by the subject yet. This means that all subscribers will receive a value instantly on `subscribe`, unless the `Subject` has already completed. [`AsyncSubject`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/asyncsubject.md) is similar to the Replay and Behavior subjects, however it will only store the last value, and only publish it when the sequence is completed. You can use the `AsyncSubject` type for situations when the source observable is hot and might complete before any observer can subscribe to it. In this case, `AsyncSubject` can still provide the last value and publish it to any future subscribers.
### Reply
### Behavior
### Async
### Notification
### http://xgrommx.github.io/rx-book/content/notification/index.html
### onNext
### onError
### onCompleted
# Frameworks
### WiredUp
### https://github.com/itechdom/rx-examples.git
### You load a components and that components wires other components related to it
### Easy Loading of components with ES6 classes and import statements
### Concepts
### Components directly facing the DOM
### Visualize your program
### Custom Elements
### Virtual DOM
### UI Builder
### There's a React One
### https://github.com/ipselon/react-ui-builder
### Components export all actions 
# Paradigms
### Functional Reactive
