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
### ES Next
### DOM
### http://domenlightenment.com/#1.1
### Everything inherits from Node
## 1.4 Properties and methods for working nodes

Like we have been discussing all node objects (e.g _Element_, _Attr_, _Text_ etc...) inherit properties and methods from a primary _Node_ object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM. In addtion to the properties and methods provided by the node interface there are a great deal of other relevant properties and methods that are provided by sub node interfaces such as the _document_, _HTMLElement_, or _HTML*Element_ interface.

Below I list out the most common _Node_ properties and methods inherited by all node objects including the relevant inherited properties for working with nodes from sub-node interfaces.

Node Properties:

*   _childNodes_
*   _firstChild_
*   _lastChild_
*   _nextSibling_
*   _nodeName_
*   _nodeType_
*   _nodeValue_
*   _parentNode_
*   _previousSibling_

Node Methods:

*   _appendChild()_
*   _cloneNode()_
*   _compareDocumentPosition()_
*   _contains()_
*   _hasChildNodes()_
*   _insertBefore()_
*   _isEqualNode()_
*   _removeChild()_
*   _replaceChild()_

Document Methods:

*   _document.createElement()_
*   _document.createTextNode()_

HTML * Element Properties:

*   _innerHTML_
*   _outerHTML_
*   _textContent_
*   _innerText_
*   _outerText_
*   _firstElementChild_
*   _lastElementChild_
*   _nextElementChild_
*   _previousElementChild_
*   _children_

HTML element Methods:

*   _insertAdjacentHTML()_
### HTML ELEMENT
### TEXT NODE
### Events
## 11.2 DOM event types

In the tables below I detail the most common pre-defined events that can be attached to _Element_ nodes, the_document_ object, and the _window_ object. Of course not all events are directly applicable to the node or object it can be attached too. That is, just because you can attach the event without error, and most likley invoke the event (i.e. bubbling events like _onchange_ to _window_), does not mean that adding something like_window.onchange _is logical given that this event, by design was not meant for the _window_ object.

**User interface events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_load_

_Event_,_UIEvent_

fires when an asset (HTML page, image, CSS, frameset,__, or JS file) is loaded.

_Element_, _Document_,_window_,_XMLHttpRequest_,_XMLHttpRequestUpload_

No

No





_unload_

_UIEvent_

fires when user agent removes the resource (document, element, defaultView) or any depending resources (images, CSS file, etc.)

_window_, __,__

No

No





_abort_

_Event_,_UIEvent_

Fires when an resource (object/image) is stopped from loading before completely loaded

_Element_,_XMLHttpRequest_,_XMLHttpRequestUpload_

Yes

No





_error_

_Event_,_UIEvent_

Fires when a resource failed to load, or has been loaded but cannot be interpreted according to its semantics, such as an invalid image, a script execution error, or non-well-formed XML

_Element_,_XMLHttpRequest_,_XMLHttpRequestUpload_

Yes

No





_resize_

_UIEvent_

Fires when a document view has been resized. This event type is dispatched after all effects for that occurrence of resizing of that particular event target have been executed by the user agent

_window_, __,__

Yes

No





_scroll_

_UIEvent_

Fires when a user scrolls a document or an element.

_Element_, _Document_,_window_

Yes

No





_contextmenu_

_MouseEvent_

fires by right clicking an element

_Element_

Yes

Yes







**Focus events**







Event Type

Event Interface

Description

Events Targets

Bubbles

Cancelable









_blur_

_FocusEvent_

Fires when an element loses focus either via the mouse or tabbing

_Element_ (except__ and__ ),_Document_

No

No





_focus_

_FocusEvent_

Fires when an element receives focus

_Element_ (except__ and__ ),_Document_

No

No





_focusin_

_FocusEvent_

Fires when an event target is about to receive focus but before the focus is shifted. This event occurs right before the focus event

_Element_

Yes

No





_focusout_

_FocusEvent_

Fires when an event target is about to lose focus but before the focus is shifted. This event occurs right before the blur event

_Element_

Yes

No







**Form events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_change_

specific to HTML forms

Fires when a control loses the input focus and its value has been modified since gaining focus

_Element_

Yes

No





_reset_

specific to HTML forms

Fires when a form is reset

_Element_

Yes

No





_submit_

specific to HTML forms

Fires when a form is submitted

_Element_

Yes

Yes





_select_

specific to HTML forms

Fires when a user selects some text in a text field, including input and textarea

_Element_

Yes

No







**Mouse events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_click_

_MouseEvent_

Fires when mouse pointer is clicked (or user presses enter key) over an element. A click is defined as a mousedown and mouseup over the same screen location. The sequence of these events is _mousedown_>_mouseup_>_click_. Depending upon the environment configuration, the click event may be dispatched if one or more of the event types mouseover, mousemove, and mouseout occur between the press and release of the pointing device button. The click event may also be followed by the dblclick event

_Element_,_Document_,_window_

Yes

Yes





_dblclick_

_MouseEvent_

Fires when a mouse pointer is clicked twice over an element. The definition of a double click depends on the environment configuration, except that the event target must be the same between _mousedown_, _mouseup_, and _dblclick_. This event type must be dispatched after the event typeclick if a click and double click occur simultaneously, and after the event type _mouseup_ otherwise

_Element_,_Document_,_window_

Yes

Yes





_mousedown_

_MouseEvent_

Fires when mouse pointer is pressed over an element

_Element_,_Document_,_window_

Yes

Yes





_mouseenter_

_MouseEvent_

Fires when mouse pointer is moved onto the boundaries of an element or one of its descendent elements. This event type is similar to mouseover, but differs in that it does not bubble, and must not be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements

_Element_,_Document_,_window_

No

No





_mouseleave_

_MouseEvent_

Fires when mouse pointer is moved off of the boundaries of an element and all of its descendent elements. This event type is similar to mouseout, but differs in that does not bubble, and that it must not be dispatched until the pointing device has left the boundaries of the element and the boundaries of all of its children

_Element_,_Document_,_window_

No

No





_mousemove_

_MouseEvent_

Fires when mouse pointer is moved while it is over an element. The frequency rate of events while the pointing device is moved is implementation-, device-, and platform-specific, but multiple consecutive mousemove events should be fired for sustained pointer-device movement, rather than a single event for each instance of mouse movement. Implementations are encouraged to determine the optimal frequency rate to balance responsiveness with performance

_Element_,_Document_,_window_

Yes

No





_mouseout_

_MouseEvent_

Fires when mouse pointer is moved off of the boundaries of an element. This event type is similar to _mouseleave_, but differs in that does bubble, and that it must be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements

_Element_,_Document_,_window_

Yes

Yes





_mouseup_

_MouseEvent_

Fires when mouse pointer button is released over an element

_Element_,_Document_,_window_

Yes

Yes





_mouseover_

_MouseEvent_

Fires when mouse pointer is moved over an element

_Element_,_Document_,_window_

Yes

Yes







**Wheel events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_wheel_(browsers use_mousewheel_but the specification uses _wheel_)

_WheelEvent_

Fires when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action. Depending on the platform and input device, diagonal wheel deltas may be delivered either as a singlewheel event with multiple non-zero axes or as separate wheel events for each non-zero axis. Some helpful details about browser support can be found [here](http://www.quirksmode.org/dom/events/scroll.html).

_Element_,_Document_,_Window_

Yes

Yes







**Keyboard events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_keydown_

_KeyboardEvent_

Fires when a key is initially pressed. This is sent after any key mapping is performed, but before any input method editors receive the keypress. This is sent for any key, even if it doesn't generate a character code.

_Element_,_Document_

Yes

Yes





_keypress_

_KeyboardEvent_

Fires when a key is initially pressed, but only if that key normally produces a character value. This is sent after any key mapping is performed, but before any input method editors receive the keypress.

_Element_,_Document_

Yes

Yes





_keyup_

_KeyboardEvent_

Fires when a key is released. This is sent after any key mapping is performed, and always follows thecorresponding_keydown_ and _keypress_ events.

_Element_,_Document_

Yes

Yes







**Touch events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_touchstart_

_TouchEvent_

Fires event to indicate when the user places a touch point on the touch surface

_Element_,_Document_,_window_

Yes

Yes





_touchend_

_TouchEvent_

Fires event to indicate when the user removes a touch poin[t](http://www.w3.org/TR/2011/WD-touch-events-20110505/#dfn-touch-point) from the touch surface, also including cases where the touch point physically leaves the touch surface, such as being dragged off of the screen

_Element_,_Document_,_window_

Yes

Yes





_touchmove_

_TouchEvent_

Fires event to indicate when the user moves a touch point along the touch surface

_Element_,_Document_,_window_

Yes

Yes





_touchenter_

_TouchEvent_

Fires event to indicate when a touch point moves onto the interactive area defined by a DOM element

_Element_,_Document_,_window_

No

?





_toucheleave_

_TouchEvent_

Fires event to indicate when a touch point moves off the interactive area defined by a DOM element

_Element_,_Document_,_window_

No

?





_touchcancel_

_TouchEvent_

Fires event to indicate when a touch point has been disrupted in an implementation-specific manner, such as a synchronous event or action originating from the UA canceling the touch, or the touch point leaving the document window into a non-document area which is capable of handling user interactions.

_Element_,_Document_,_window_

Yes

No









### Notes

Touch events are typically only supported iOS, Andorid, and Blackberry browsers or browsers (e.g. chrome) that can switch on touch modes



**Window, __, and frame specific events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_afterprint_

?

Fires on the object immediately after its associated document prints or previews for printing

_window_,__,__

No

No





_beforeprint_

?

Fires on the object before its associated document prints or previews for printing

_window_,__,__

No

No





_beforeunload_

?

Fires prior to a document being unloaded

_window_,__,__

No

Yes





_hashchange_

_HashChangeEvent_

Fires when there are changes to the portion of a URL that follows the number sign (#)

_window_,__,__

No

No





_messsage_

?

Fires when the user sends a cross-document message or a message is sent from a _Worker_ with _postMessage_

_window_,__,__

No

No





_offline_

_NavigatorOnLine_

Fires when browser is working offline

_window_,__,__

No

No





_online_

_NavigatorOnLine_

Fires when browser is working online

_window_,__,__

No

No





_pagehide_

_PageTransitionEvent_

Fires when traversing from a session history entry

_window_,__,__

No

No





_pageshow_

_PageTransitionEvent_

The pagehide event is fired when traversing from a session history entry

_window_,__,__

No

No







**Document specific events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_readystatechange_

_Event_

Fires event when _readyState_ is changed

_Document_,_XMLHttpRequest_

No

No





_DOMContentLoaded_

_Event_

Fires when a webpage has been parsed, but before all resources have been fully downloaded

_Document_

Yes

No







**Drag events**







Event Type

Event Interface

Description

Event Targets

Bubbles

Cancelable









_drag_

_DragEvent_

Fires on the source object continuously during a drag operation.

_Element_,_Document_,_window_

Yes

Yes





_dragstart_

_DragEvent_

Fires on the source object when the user starts to drag a text selection or selected object. The ondragstart event is the first to fire when the user starts to drag the mouse.

_Element_,_Document_,_window_

Yes

Yes





_dragend_

_DragEvent_

Fires on the source object when the user releases the mouse at the close of a drag operation. The ondragend event is the final drag event to fire, following the ondragleave event, which fires on the target object.

_Element_,_Document_,_window_

Yes

No





_dragenter_

_DragEvent_

Fires on the target element when the user drags the object to a valid drop target.

_Element_,_Document_,_window_

Yes

Yes





_dragleave_

_DragEvent_

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

_Element_,_Document_,_window_

Yes

No





_dragover_

_DragEvent_

Fires on the target element continuously while the user drags the object over a valid drop target. The ondragover event fires on the target object after the ondragenter event has fired.

_Element_,_Document_,_window_

Yes

Yes





_drop_

_DragEvent_

Fires on the target object when the mouse button is released during a drag-and-drop operation. The ondrop event fires before the ondragleave and ondragend events.

_Element_,_Document_,_window_

Yes

Yes






### Event Flow
### Stopping Event propagation
### http://domenlightenment.com/#11
### Animations
### Animate.css
### JS Engines
### https://drive.google.com/open?id=0B9tPYCpuqoIrWEViYkVCRzQ0Y0k
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
### Web Workers
### http://www.sitepoint.com/parallel-javascript-with-paralleljs/
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
The debounce function can be a game-changer when it comes to event-fueled performance.  If you aren't using a debouncing function with a `scroll`, `resize`, `key*`event, you're probably doing it wrong.  Here's a `debounce`function to keep your code efficient:

// Returns a function, that, as long as it continues to be invoked, will not
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
window.addEventListener('resize', myEfficientFn);

The `debounce` function will not allow a callback to be used more than once per given time frame.  This is especially important when assigning a callback function to frequently-firing events.
### poll
## [`poll`](https://davidwalsh.name/javascript-polling)

As I mentioned with the `debounce` function, sometimes you don't get to plug into an event to signify a desired state -- if the event doesn't exist, you need to check for your desired state at intervals:

function poll(fn, callback, errback, timeout, interval) {
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
);

Polling has long been useful on the web and will continue to be in the future!
### once
## [`once`](https://davidwalsh.name/javascript-once)

There are times when you prefer a given functionality only happen once, similar to the way you'd use an `onload`event.  This code provides you said functionality:

function once(fn, context) { 
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
canOnlyFireOnce(); // nada

The `once` function ensures a given function can only be called once, thus prevent duplicate initialization!
### Comparision
### http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
### double equal will attempt to convert types before comparing
### Triple won't do conversion, and if the types don't match, it will return false
### Might be faster if it doesn't convert
### Data Structures
### https://github.com/thejameskyle/itsy-bitsy-data-structures/blob/master/itsy-bitsy-data-structures.js#L1256
# Thrid Party
### jQuery
jQuery is a library, think of a library as a collection of factories (functions) that produce certain results. You have to learn how to use the library: to reduce time, follow best practices that other people wrote.

jQuery has a special syntax the dollar sign, that makes it extremely easy to do DOM manipulation, binding events, create image sliders, 

Learning jQuery will save you time and effort in writing a lot of code to manipulate DOM. Although there are new libraries coming up, It's used heavily by web developers. 
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:

Facebook

twitter

google

foursquare

etc
### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let's see how we do that

$.ajax

{

}
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
The simpilest way to explain Travis CI is that it runs your program's tests every time you commit to GitHub (This can be configured in many ways, and you can always disables builds on some branches). The point of this is that you can often discover very quickly if your commit broke something, and fix it before it becomes a problem. I would reccomend running Travis CI on every GitHub repo that you have unit tests in and is using a programming language supported by Travis CI. Since setting up Travis CI is very easy, I don't normally see a good reason not to use it, unless you don't care if you have passing tests in your program. Feel free to leave a comment if you have any more questions. You can read more about Travis CI [here](http://docs.travis-ci.com/).
### https://travis-ci.org/
### ci
### Aurelia
### Framework
### Falore
### https://netflix.github.io/falcor/starter/what-is-falcor.html
### Represent you model the same way on the client and server
### Animation Framework
### http://www.sequencejs.com/
### https://github.com/VerbalExpressions/JSVerbalExpressions
### EASY regex
### Batch updates to DOM regularly
### https://github.com/changbenny/leopard/blob/master/readme.md
### Mobx
### https://github.com/mobxjs/mobx/blob/master/README.md
### mindmap
### https://github.com/MOMIND/MOMIND
# Design Patterns
[JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#designpatternsjavascript)

*   [Constructor Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#constructorpatternjavascript)
*   [Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript)
*   [Revealing Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#revealingmodulepatternjavascript)
*   [Singleton Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#singletonpatternjavascript)
*   [Observer Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#observerpatternjavascript)
*   [Mediator Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#mediatorpatternjavascript)
*   [Prototype Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#prototypepatternjavascript)
*   [Command Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#commandpatternjavascript)
*   [Facade Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#facadepatternjavascript)
*   [Factory Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#factorypatternjavascript)
*   [Mixin Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#mixinpatternjavascript)
*   [Decorator Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#decoratorpatternjavascript)
*   [Flyweight Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#detailflyweight)
### https://carldanley.com/javascript-design-patterns/
### https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#constructorpatternjavascript
### flyweight
### decorator
### iterator
### http://www.dofactory.com/javascript/iterator-design-pattern
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
Side effects may include, but are not limited to

*   changing the file system
*   inserting a record into a database
*   making an http call
*   mutations
*   printing to the screen / logging
*   obtaining user input
*   querying the DOM
*   accessing system state
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
    // 12

you split off a function into two functions
### loadash currying
### What's the purpose of currying
    var getChildren = function(x) {
      return x.childNodes;
    };

    var allTheChildren = map(getChildren);
### we can pass functions to others
### Somtimes called partial application
### As apposed to this
Giving a function fewer arguments than it expects is typically called _partial application_. Partially applying a function can remove a lot of boiler plate code. Consider what the above `allTheChildren` function would be with the uncurried `map` from lodash[note the arguments are in a different order](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html#fn_note the arguments are in a different order):

    var allTheChildren = function(elements) {
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
[lodash](https://lodash.com/), [underscore](http://underscorejs.org/), and [ramda](http://ramdajs.com/).
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
### Javascript the good parts
### https://read.amazon.com/?asin=B0026OR2ZY
### Lessons Learned
### language Designers make mistakes sometimes
### Javascript is
### First lambda language to go mainstream
### Functions are first class object
### prototypal inheritance from self
### functions from scheme
### regex from perl
### The bad parts
### All global variable are all tossed in a global object
### NAN is a result of an operation that can't return a number
### it's not equal to anything, including itself
### Infinity is any value above a particular number
### Of course there's no linker in javascript
### every script tag represent a compilation unit
### when var is declared inside of a function
### it declares its private variables
### blocks don't create a new scope
### Except ES6?
### typeof
### returns object
### when it's null
### or array
### Good parts
### One number type
### 64 bit floating point
In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **floating point** is the formulaic representation that approximates a [real number](https://en.wikipedia.org/wiki/Real_number "Real number") so as to support a [trade-off](https://en.wikipedia.org/wiki/Trade-off "Trade-off") between range and [precision](https://en.wikipedia.org/wiki/Accuracy_and_precision "Accuracy and precision"). A number is, in general, represented approximately to a fixed number of [significant digits](https://en.wikipedia.org/wiki/Significant_figures "Significant figures") (the [significand](https://en.wikipedia.org/wiki/Significand "Significand")) and scaled using an [exponent](https://en.wikipedia.org/wiki/Exponentiation "Exponentiation"); the base for the scaling is normally two, ten, or sixteen. A number that can be represented exactly is of the following form:



![\text{significand} \times \text{base}^\text{exponent},](https://upload.wikimedia.org/math/3/6/5/36552dfc74d3e1dbf191093a9f646d16.png)



where significand ∈ **[Z](https://en.wikipedia.org/wiki/Integer "Integer")**, base ∈ **[N](https://en.wikipedia.org/wiki/Natural_number "Natural number")**, and exponent ∈ **Z**.

For example:



![1.2345 = \underbrace{12345}_\text{significand} \times \underbrace{10}_\text{base}\!\!\!\!\!\!^{\overbrace{-4}^\text{exponent}}](https://upload.wikimedia.org/math/a/a/e/aae450e17208a35ad0363c9b82b5240f.png)



The term _floating point_ refers to the fact that a number's [radix point](https://en.wikipedia.org/wiki/Radix_point "Radix point") (_decimal point_, or, more commonly in computers, _binary point_) can "float"; that is, it can be placed anywhere relative to the significant digits of the number. This position is indicated as the exponent component, and thus the floating-point representation can be thought of as a kind of [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation "Scientific notation").
### https://en.wikipedia.org/wiki/Floating_point
### how to represent floating points
### is equal to
### 8 bytes
### each byte represents something in the number
### that means
### 1
### 1.0
### is the same
### Strings
### Javascript came out when unicode was 16 bit character
### so all characters are 16 bit wide
### no char in javascript
### make a string with one character
### http://unicode-table.com/en/
### unicode character table
### https://en.wikipedia.org/wiki/Unicode
### unicode standard
[Unicode can be implemented](https://en.wikipedia.org/wiki/Comparison_of_Unicode_encodings "Comparison of Unicode encodings") by different [character encodings](https://en.wikipedia.org/wiki/Character_encoding "Character encoding"). The most commonly used encodings are [UTF-8](https://en.wikipedia.org/wiki/UTF-8 "UTF-8"), [UTF-16](https://en.wikipedia.org/wiki/UTF-16 "UTF-16") and the now-obsolete [UCS-2](https://en.wikipedia.org/wiki/UCS-2 "UCS-2"). UTF-8 uses one [byte](https://en.wikipedia.org/wiki/Byte "Byte") for any [ASCII](https://en.wikipedia.org/wiki/ASCII "ASCII") character, all of which have the same code values in both UTF-8 and ASCII encoding, and up to four bytes for other characters. UCS-2 uses a 16-bit [code unit](https://en.wikipedia.org/wiki/Code_unit "Code unit") (two [8-bit bytes](https://en.wikipedia.org/wiki/Octet_(computing) "Octet (computing)")) for each character but cannot encode every character in the current Unicode standard. UTF-16 extends UCS-2, using one 16-bit unit for the characters that were representable in UCS-2 and two 16-bit units (4 × 8 bit) to handle each of the additional characters.
### chain && to avoid type error exception
if(flight.equiment && flight.equipment.mode)
### objects
### get passed by reference
### number , strings, booleans
### are immutable objects
### other objects are mutable
### prototype
var animal = { eats: true }  


var rabbit = { jumps: true }

rabbit.__proto__ = animal  // inherit

alert(rabbit.eats) // true

var wild_rabbit = {attack:true};

wild_rabbit.__proto__ = rabbit;

that means wild_rabbit here will inherit animal, rabbit properties.

If you inspect the object, you will see __proto__ chained all the way to animal
### http://javascript.info/tutorial/inheritance
### objects are linked with
### to object.prototype
### delegation
### looks for property in the whole prototype chain
### if not found
### returns undefined
### reflection
### Do object.hasOwnProperty
### to test if an object has that key
### instead of on the portotypal chain
### or typeof
### delete
### can be used to delete a property from an object
### which sometimes will reveal the prototypally inherited function
### scope
### controls the visibility and lifetime of a variable
### provide automatic memory management
### factory pattern is favored over new keyword
### because the returned object literal has access to the outer scope
### functional pattern
### creates a spec object that maps in the constructor function 
### if we need to inherit, we just call the parent class inside the function
### and then add to that the previliged methods you want
### important: read 1078 in js the good parts
### Copying
### shallow
### new array references the old array's elements
### deep
### copy each element and create a new array
### functions inherit from Function.prototype
### which is linked to object.prototype
### functions have this and argument passed to it
### arguments isn't an array
### it's an array like object with length key
### methods
### that get their this from the object context
### are called public methods
### a closure doesn't have access to the outer this
### to circumvent that we use that
### using constructor functions isn't recomended
### because if you forgot 'new'
### the context of the object will be bound to global
### avoid creating functions in loops
### module pattern
### we create a priviliged function or (object) that has access to outer scope but gets returned instead
### if you want to enable cascade (composable) functions
### make methods that return this
### Curry
### produce a new function by combining a function and an argument
var add1 = add.curry(1);

console.log(add1(6));
### we need to use array.slice
### to make arguments into an array
### memoization
### storing a function to optamize recursion
### in the fibonaci example
### Arrays
### Inherit from Array.prototype
### it provides usefull functions
### at the end of the day it's still an object
### length property is the uniqeness to the array
### increasing length doesn't allocate more space
### Shrinking length will delete the higher indexed elements
### because it's an object
### not a traditional array
### regex
### capturing groups
### stores a value found in an array (given how many matches are found)
### flags
### g
### match globally
### match multiple times
### i
### case insensitve
### m
### multiline
### Examples
### Defining function method
### pain point
### What do you mean when you say literal
### a notation that provides a value
### https://github.com/concertcoder/leaky-ionic-app
### Leaky ionic apps
### Artificial intellegence
### https://github.com/karpathy/convnetjs
### neural netwrok
### http://js.cytoscape.org/
### graph theory
### http://flexboxfroggy.com/
### flexbox learning game
### http://www.varav.in/posts/2016/05/25/dungeon.html
### how to create a proceduarly generated dungeon
### gDoc.js
### https://github.com/jadeallencook/gDoc.js/blob/master/README.md
### Everything about virtual machines
### https://github.com/a0viedo/demystifying-js-engines/blob/master/README.md
# Programmed in
### Coffee
### Clojure
### Ruby
### TypeScript
### Elm
### WebAssembly
