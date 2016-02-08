# Core
### Asm.js
### https://drive.google.com/open?id=0B9tPYCpuqoIrSmZzXzVxT2RCOEE
### ES 
### ES5
### ES6/2015
### Concepts
### Decorators
### Underscore stuff
### Classes
### Resources
### https://github.com/ericdouglas/ES6-Learning
### My presentaion
### https://ponyfoo.com/articles/es6-destructuring-in-depth
### ES7
### Async
### Await
### https://jakearchibald.com/2014/es7-async-functions/
### DOM
### http://domenlightenment.com/#1.1
### Everything inherits from Node
1.4 Properties and methods for working nodesLike we have been discussing all node objects (e.g Element, Attr, Text etc...) inherit properties and methods from a primary Node object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM. In addtion to the properties and methods provided by the node interface there are a great deal of other relevant properties and methods that are provided by sub node interfaces such as the document, HTMLElement, or HTML*Element interface.Below I list out the most common Node properties and methods inherited by all node objects including the relevant inherited properties for working with nodes from sub-node interfaces.Node Properties:childNodesfirstChildlastChildnextSiblingnodeNamenodeTypenodeValueparentNodepreviousSiblingNode Methods:appendChild()cloneNode()compareDocumentPosition()contains()hasChildNodes()insertBefore()isEqualNode()removeChild()replaceChild()Document Methods:document.createElement()document.createTextNode()HTML * Element Properties:innerHTMLouterHTMLtextContentinnerTextouterTextfirstElementChildlastElementChildnextElementChildpreviousElementChildchildrenHTML element Methods:insertAdjacentHTML()
### HTML ELEMENT
### TEXT NODE
### Events
11.2 DOM event typesIn the tables below I detail the most common pre-defined events that can be attached to Element nodes, thedocument object, and the window object. Of course not all events are directly applicable to the node or object it can be attached too. That is, just because you can attach the event without error, and most likley invoke the event (i.e. bubbling events like onchange to window), does not mean that adding something likewindow.onchange is logical given that this event, by design was not meant for the window object.User interface eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelableloadEvent,UIEventfires when an asset (HTML page, image, CSS, frameset,, or JS file) is loaded.Element, Document,window,XMLHttpRequest,XMLHttpRequestUploadNoNounloadUIEventfires when user agent removes the resource (document, element, defaultView) or any depending resources (images, CSS file, etc.)window, ,NoNoabortEvent,UIEventFires when an resource (object/image) is stopped from loading before completely loadedElement,XMLHttpRequest,XMLHttpRequestUploadYesNoerrorEvent,UIEventFires when a resource failed to load, or has been loaded but cannot be interpreted according to its semantics, such as an invalid image, a script execution error, or non-well-formed XMLElement,XMLHttpRequest,XMLHttpRequestUploadYesNoresizeUIEventFires when a document view has been resized. This event type is dispatched after all effects for that occurrence of resizing of that particular event target have been executed by the user agentwindow, ,YesNoscrollUIEventFires when a user scrolls a document or an element.Element, Document,windowYesNocontextmenuMouseEventfires by right clicking an elementElementYesYesFocus eventsEvent TypeEvent InterfaceDescriptionEvents TargetsBubblesCancelableblurFocusEventFires when an element loses focus either via the mouse or tabbingElement (except and ),DocumentNoNofocusFocusEventFires when an element receives focusElement (except and ),DocumentNoNofocusinFocusEventFires when an event target is about to receive focus but before the focus is shifted. This event occurs right before the focus eventElementYesNofocusoutFocusEventFires when an event target is about to lose focus but before the focus is shifted. This event occurs right before the blur eventElementYesNoForm eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelablechangespecific to HTML formsFires when a control loses the input focus and its value has been modified since gaining focusElementYesNoresetspecific to HTML formsFires when a form is resetElementYesNosubmitspecific to HTML formsFires when a form is submittedElementYesYesselectspecific to HTML formsFires when a user selects some text in a text field, including input and textareaElementYesNoMouse eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelableclickMouseEventFires when mouse pointer is clicked (or user presses enter key) over an element. A click is defined as a mousedown and mouseup over the same screen location. The sequence of these events is mousedown>mouseup>click. Depending upon the environment configuration, the click event may be dispatched if one or more of the event types mouseover, mousemove, and mouseout occur between the press and release of the pointing device button. The click event may also be followed by the dblclick eventElement,Document,windowYesYesdblclickMouseEventFires when a mouse pointer is clicked twice over an element. The definition of a double click depends on the environment configuration, except that the event target must be the same between mousedown, mouseup, and dblclick. This event type must be dispatched after the event typeclick if a click and double click occur simultaneously, and after the event type mouseup otherwiseElement,Document,windowYesYesmousedownMouseEventFires when mouse pointer is pressed over an elementElement,Document,windowYesYesmouseenterMouseEventFires when mouse pointer is moved onto the boundaries of an element or one of its descendent elements. This event type is similar to mouseover, but differs in that it does not bubble, and must not be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elementsElement,Document,windowNoNomouseleaveMouseEventFires when mouse pointer is moved off of the boundaries of an element and all of its descendent elements. This event type is similar to mouseout, but differs in that does not bubble, and that it must not be dispatched until the pointing device has left the boundaries of the element and the boundaries of all of its childrenElement,Document,windowNoNomousemoveMouseEventFires when mouse pointer is moved while it is over an element. The frequency rate of events while the pointing device is moved is implementation-, device-, and platform-specific, but multiple consecutive mousemove events should be fired for sustained pointer-device movement, rather than a single event for each instance of mouse movement. Implementations are encouraged to determine the optimal frequency rate to balance responsiveness with performanceElement,Document,windowYesNomouseoutMouseEventFires when mouse pointer is moved off of the boundaries of an element. This event type is similar to mouseleave, but differs in that does bubble, and that it must be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elementsElement,Document,windowYesYesmouseupMouseEventFires when mouse pointer button is released over an elementElement,Document,windowYesYesmouseoverMouseEventFires when mouse pointer is moved over an elementElement,Document,windowYesYesWheel eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelablewheel(browsers usemousewheelbut the specification uses wheel)WheelEventFires when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action. Depending on the platform and input device, diagonal wheel deltas may be delivered either as a singlewheel event with multiple non-zero axes or as separate wheel events for each non-zero axis. Some helpful details about browser support can be found here.Element,Document,WindowYesYesKeyboard eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelablekeydownKeyboardEventFires when a key is initially pressed. This is sent after any key mapping is performed, but before any input method editors receive the keypress. This is sent for any key, even if it doesn't generate a character code.Element,DocumentYesYeskeypressKeyboardEventFires when a key is initially pressed, but only if that key normally produces a character value. This is sent after any key mapping is performed, but before any input method editors receive the keypress.Element,DocumentYesYeskeyupKeyboardEventFires when a key is released. This is sent after any key mapping is performed, and always follows thecorrespondingkeydown and keypress events.Element,DocumentYesYesTouch eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelabletouchstartTouchEventFires event to indicate when the user places a touch point on the touch surfaceElement,Document,windowYesYestouchendTouchEventFires event to indicate when the user removes a touch point from the touch surface, also including cases where the touch point physically leaves the touch surface, such as being dragged off of the screenElement,Document,windowYesYestouchmoveTouchEventFires event to indicate when the user moves a touch point along the touch surfaceElement,Document,windowYesYestouchenterTouchEventFires event to indicate when a touch point moves onto the interactive area defined by a DOM elementElement,Document,windowNo?toucheleaveTouchEventFires event to indicate when a touch point moves off the interactive area defined by a DOM elementElement,Document,windowNo?touchcancelTouchEventFires event to indicate when a touch point has been disrupted in an implementation-specific manner, such as a synchronous event or action originating from the UA canceling the touch, or the touch point leaving the document window into a non-document area which is capable of handling user interactions.Element,Document,windowYesNoNotesTouch events are typically only supported iOS, Andorid, and Blackberry browsers or browsers (e.g. chrome) that can switch on touch modesWindow, , and frame specific eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelableafterprint?Fires on the object immediately after its associated document prints or previews for printingwindow,,NoNobeforeprint?Fires on the object before its associated document prints or previews for printingwindow,,NoNobeforeunload?Fires prior to a document being unloadedwindow,,NoYeshashchangeHashChangeEventFires when there are changes to the portion of a URL that follows the number sign (#)window,,NoNomesssage?Fires when the user sends a cross-document message or a message is sent from a Worker with postMessagewindow,,NoNoofflineNavigatorOnLineFires when browser is working offlinewindow,,NoNoonlineNavigatorOnLineFires when browser is working onlinewindow,,NoNopagehidePageTransitionEventFires when traversing from a session history entrywindow,,NoNopageshowPageTransitionEventThe pagehide event is fired when traversing from a session history entrywindow,,NoNoDocument specific eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelablereadystatechangeEventFires event when readyState is changedDocument,XMLHttpRequestNoNoDOMContentLoadedEventFires when a webpage has been parsed, but before all resources have been fully downloadedDocumentYesNoDrag eventsEvent TypeEvent InterfaceDescriptionEvent TargetsBubblesCancelabledragDragEventFires on the source object continuously during a drag operation.Element,Document,windowYesYesdragstartDragEventFires on the source object when the user starts to drag a text selection or selected object. The ondragstart event is the first to fire when the user starts to drag the mouse.Element,Document,windowYesYesdragendDragEventFires on the source object when the user releases the mouse at the close of a drag operation. The ondragend event is the final drag event to fire, following the ondragleave event, which fires on the target object.Element,Document,windowYesNodragenterDragEventFires on the target element when the user drags the object to a valid drop target.Element,Document,windowYesYesdragleaveDragEventFires on the target object when the user moves the mouse out of a valid drop target during a drag operation.Element,Document,windowYesNodragoverDragEventFires on the target element continuously while the user drags the object over a valid drop target. The ondragover event fires on the target object after the ondragenter event has fired.Element,Document,windowYesYesdropDragEventFires on the target object when the mouse button is released during a drag-and-drop operation. The ondrop event fires before the ondragleave and ondragend events.Element,Document,windowYesYes
### Event Flow
### Stopping Event propagation
### http://domenlightenment.com/#11
### JS Engines
### V8
### javascript interpreter
### https://code.google.com/p/v8/
### home page
### Web Engines
### Blink
### http://www.chromium.org/blink#TOC-Blink-s-Mission:
### Resources
### the chromium project
### http://www.chromium.org/developers
### https://en.wikipedia.org/wiki/Comparison_of_web_browser_engines
### different browser engines
### https://github.com/nwjs/blink
### unofficial mirror
### https://bitbucket.org/chromiumembedded/cef
### best way to use blink is with Chromium embedded framework
# Thrid Party
### jQuery
jQuery is a library, think of a library as a collection of factories (functions) that produce certain results. You have to learn how to use the library: to reduce time, follow best practices that other people wrote.jQuery has a special syntax the dollar sign, that makes it extremely easy to do DOM manipulation, binding events, create image sliders, Learning jQuery will save you time and effort in writing a lot of code to manipulate DOM. Although there are new libraries coming up, It's used heavily by web developers. 
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:Facebooktwittergooglefoursquareetc
### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let's see how we do that$.ajax{}
### Angularjs
### 1.0
### Concepts
### Dependency Injection
### Directives
### Modules
### Two- Way Binding
### Scopes
### Providers
### Services
### Factories
### 2.0
### RxJS
### https://drive.google.com/open?id=0B9tPYCpuqoIrc1dpTGJKaTFKRUE
### React
### Famous.io
### Concepts
### Webgl + DOM Rendering
### Webpack
### https://drive.google.com/open?id=0B9tPYCpuqoIrVUhpN3FQQ3k4MnM
### Gulp
### Babel
### https://babeljs.io/
### ESlint
### Linter for ES2015
### continuous integration
### https://en.wikipedia.org/wiki/Continuous_integration#Software
### Travis-ci
The simpilest way to explain Travis CI is that it runs your program's tests every time you commit to GitHub (This can be configured in many ways, and you can always disables builds on some branches). The point of this is that you can often discover very quickly if your commit broke something, and fix it before it becomes a problem. I would reccomend running Travis CI on every GitHub repo that you have unit tests in and is using a programming language supported by Travis CI. Since setting up Travis CI is very easy, I don't normally see a good reason not to use it, unless you don't care if you have passing tests in your program. Feel free to leave a comment if you have any more questions. You can read more about Travis CI here.
### https://travis-ci.org/
### ci
### Aurelia
### Framework
### Falore
### https://netflix.github.io/falcor/starter/what-is-falcor.html
### Represent you model the same way on the client and server
### Animation Framework
### http://www.sequencejs.com/
# Concepts
### Isomorphic
### Lexical scoping
### http://stackoverflow.com/questions/1047454/what-is-lexical-scope
### great example of lexical vs. dynamic scoping
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
### Closures remembers the environment it was created in
### Most Important functions
### https://davidwalsh.name/essential-javascript-functions
### debounce
The debounce function can be a game-changer when it comes to event-fueled performance.  If you aren't using a debouncing function with a scroll, resize, key*event, you're probably doing it wrong.  Here's a debouncefunction to keep your code efficient:// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Usage
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);The debounce function will not allow a callback to be used more than once per given time frame.  This is especially important when assigning a callback function to frequently-firing events.
### poll
pollAs I mentioned with the debounce function, sometimes you don't get to plug into an event to signify a desired state -- if the event doesn't exist, you need to check for your desired state at intervals:function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
            // If the condition is met, we're done! 
            if(fn()) {
                callback();
            }
            // If the condition isn't met but the timeout hasn't elapsed, go again
            else if (Number(new Date())  0;
    },
    function() {
        // Done, success callback
    },
    function() {
        // Error, failure callback
    }
);Polling has long been useful on the web and will continue to be in the future!
### once
onceThere are times when you prefer a given functionality only happen once, similar to the way you'd use an onloadevent.  This code provides you said functionality:function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nadaThe once function ensures a given function can only be called once, thus prevent duplicate initialization!
# Design Patterns
Modern Day JavaScript Design PatternsBelow is a list of each JavaScript design pattern I've had the opportunity to write about with breakdowns on various aspects of that pattern such as their advantages and disadvantages. Browse away!The Module Pattern The Revealing Module Pattern The Singleton Pattern The Observer Pattern The Mediator Pattern The Prototype Pattern The Facade Pattern The Factory Pattern
### https://carldanley.com/javascript-design-patterns/
# Paradigms
### Functional
### Functional Reactive
### RxJS
### OOP
# Resources
### JS in one Pic
### http://coodict.github.io/javascript-in-one-pic/
### You don't Know JS
### https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md
### Functional Programming
### Relies on the idea of function from math
### One input and one output
### no side effects
### side effects are
Side effects may include, but are not limited tochanging the file systeminserting a record into a databasemaking an http callmutationsprinting to the screen / loggingobtaining user inputquerying the DOMaccessing system state
### https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch6.html
### Currying
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12you split off a function into two functions
### loadash currying
### What's the purpose of currying
var getChildren = function(x) {
  return x.childNodes;
};

var allTheChildren = map(getChildren);
### we can pass functions to others
### Somtimes called partial application
### As apposed to this
Giving a function fewer arguments than it expects is typically called partial application. Partially applying a function can remove a lot of boiler plate code. Consider what the above allTheChildren function would be with the uncurried map from lodashnote the arguments are in a different order:var allTheChildren = function(elements) {
  return _.map(elements, getChildren);
};
### so it's better because we split off our application into reusable components
### Immutable state
### Pain Points
### What's the purpose of using closures?
//pure
var signUp = function(Db, Email, attrs) {
  return function() {
    var user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};
### is it to be able to execute that function later
### Popular functional Programming Libraries
lodash, underscore, and ramda.
### http://docs.folktalejs.org/en/latest/index.html
### Suite of libraries to make functional programming easier
### Higher order function
### A function that takes other functions
### Compose
### select two or more functions functions and call them together together within your body
var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");
//=> "SEND IN THE CLOWNS!"
### Pointfree
//not pointfree because we mention the data: word
var snakeCase = function (word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

//pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
### relies on category theory
### http://jsforcats.com/#strings
### Javascript for cats, beginner javascript
### https://www.youtube.com/watch?v=H4sSldXv_S4
### Teaching JS with JS
# Programmed in
### Coffee
### Clojure
### Ruby
### TypeScript
### Elm
### WebAssembly
