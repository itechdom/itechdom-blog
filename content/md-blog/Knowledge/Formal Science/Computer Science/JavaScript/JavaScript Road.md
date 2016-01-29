# Core
## Asm.js
### https://drive.google.com/open?id=0B9tPYCpuqoIrSmZzXzVxT2RCOEE
## ES 
### ES5
### ES6/2015
#### Concepts
##### Decorators
##### Underscore stuff
##### Classes
#### Resources
##### https://github.com/ericdouglas/ES6-Learning
##### My presentaion
##### https://ponyfoo.com/articles/es6-destructuring-in-depth
### ES7
#### Async
##### Await
##### https://jakearchibald.com/2014/es7-async-functions/
## DOM
### http://domenlightenment.com/#1.1
### Everything inherits from Node
#### HTML ELEMENT
#### TEXT NODE
<h2 id="1.4">1.4 Properties and methods for working nodes</h2><p>Like we have been discussing all node objects (e.g&#xA0;<em>Element</em>,&#xA0;<em>Attr</em>,&#xA0;<em>Text</em>&#xA0;etc...) inherit properties and methods from a primary&#xA0;<em>Node</em>&#xA0;object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM. In addtion to the properties and methods provided by the node interface there are a great deal of other relevant properties and methods that are provided by sub node interfaces such as the&#xA0;<em>document</em>,&#xA0;<em>HTMLElement</em>, or&#xA0;<em>HTML*Element</em>&#xA0;interface.</p><p>Below I list out the most common&#xA0;<em>Node</em>&#xA0;properties and methods inherited by all node objects including the relevant inherited properties for working with nodes from sub-node interfaces.</p><span>Node Properties:</span><ul><li><em>childNodes</em></li><li><em>firstChild</em></li><li><em>lastChild</em></li><li><em>nextSibling</em></li><li><em>nodeName</em></li><li><em>nodeType</em></li><li><em>nodeValue</em></li><li><em>parentNode</em></li><li><em>previousSibling</em></li></ul><span>Node Methods:</span><ul><li><em>appendChild()</em></li><li><em>cloneNode()</em></li><li><em>compareDocumentPosition()</em></li><li><em>contains()</em></li><li><em>hasChildNodes()</em></li><li><em>insertBefore()</em></li><li><em>isEqualNode()</em></li><li><em>removeChild()</em></li><li><em>replaceChild()</em></li></ul><p>Document Methods:</p><ul><li><em>document.createElement()</em></li><li><em>document.createTextNode()</em></li></ul><p>HTML * Element Properties:</p><ul><li><em>innerHTML</em></li><li><em>outerHTML</em></li><li><em>textContent</em></li><li><em>innerText</em></li><li><em>outerText</em></li><li><em>firstElementChild</em></li><li><em>lastElementChild</em></li><li><em>nextElementChild</em></li><li><em>previousElementChild</em></li><li><em>children</em></li></ul><p>HTML element Methods:</p><ul><li><em>insertAdjacentHTML()</em></li></ul>
### Events
<h2 id="11.2">11.2 DOM event types</h2><p>In the tables below I detail the most common pre-defined events that can be attached to&#xA0;<em>Element</em>&#xA0;nodes, the<em>document</em>&#xA0;object, and the&#xA0;<em>window</em>&#xA0;object. Of course not all events are directly applicable to the node or object it can be attached too. That is, just because you can attach the event without error, and most likley invoke the event (i.e. bubbling events like&#xA0;<em>onchange</em>&#xA0;to&#xA0;<em>window</em>), does not mean that adding something like<em>window.onchange&#xA0;</em>is logical given that this event, by design was not meant for the&#xA0;<em>window</em>&#xA0;object.</p><p><strong>User interface events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>load</em></td><td><em>Event</em>,<em>UIEvent</em></td><td>fires when an asset (HTML page, image, CSS, frameset,<em>&lt;object&gt;</em>, or JS file) is loaded.</td><td><em>Element</em>,&#xA0;<em>Document</em>,<em>window</em>,<em>XMLHttpRequest</em>,<em>XMLHttpRequestUpload</em></td><td>No</td><td>No</td></tr><tr><td><em>unload</em></td><td><em>UIEvent</em></td><td>fires when user agent removes the resource (document, element, defaultView) or any depending resources (images, CSS file, etc.)</td><td><em>window</em>,&#xA0;<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>abort</em></td><td><em>Event</em>,<em>UIEvent</em></td><td>Fires when an resource (object/image) is stopped from loading before completely loaded</td><td><em>Element</em>,<em>XMLHttpRequest</em>,<em>XMLHttpRequestUpload</em></td><td>Yes</td><td>No</td></tr><tr><td><em>error</em></td><td><em>Event</em>,<em>UIEvent</em></td><td>Fires when a resource failed to load, or has been loaded but cannot be interpreted according to its semantics, such as an invalid image, a script execution error, or non-well-formed XML</td><td><em>Element</em>,<em>XMLHttpRequest</em>,<em>XMLHttpRequestUpload</em></td><td>Yes</td><td>No</td></tr><tr><td><em>resize</em></td><td><em>UIEvent</em></td><td>Fires when a document view has been resized. This event type is dispatched after all effects for that occurrence of resizing of that particular&#xA0;event target&#xA0;have been executed by the&#xA0;user agent</td><td><em>window</em>,&#xA0;<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>Yes</td><td>No</td></tr><tr><td><em>scroll</em></td><td><em>UIEvent</em></td><td>Fires when a user scrolls a document or an element.</td><td><em>Element</em>,&#xA0;<em>Document</em>,<em>window</em></td><td>Yes</td><td>No</td></tr><tr><td><em>contextmenu</em></td><td><em>MouseEvent</em></td><td>fires by right clicking an element</td><td><em>Element</em></td><td>Yes</td><td>Yes</td></tr></tbody></table><p><strong>Focus events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Events Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>blur</em></td><td><em>FocusEvent</em></td><td>Fires when an element loses focus either via the mouse or tabbing</td><td><em>Element</em>&#xA0;(except<em>&lt;body&gt;</em>&#xA0;and<em>&lt;frameseet&gt;</em>&#xA0;),<em>Document</em></td><td>No</td><td>No</td></tr><tr><td><em>focus</em></td><td><em>FocusEvent</em></td><td>Fires when an element receives focus</td><td><em>Element</em>&#xA0;(except<em>&lt;body&gt;</em>&#xA0;and<em>&lt;frameseet&gt;</em>&#xA0;),<em>Document</em></td><td>No</td><td>No</td></tr><tr><td><em>focusin</em></td><td><em>FocusEvent</em></td><td>Fires when an event target is about to receive focus but before the focus is shifted. This event occurs right before the focus event</td><td><em>Element</em></td><td>Yes</td><td>No</td></tr><tr><td><em>focusout</em></td><td><em>FocusEvent</em></td><td>Fires when an event target is about to lose focus but before the focus is shifted. This event occurs right before the blur event</td><td><em>Element</em></td><td>Yes</td><td>No</td></tr></tbody></table><p><strong>Form events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>change</em></td><td>specific to HTML forms</td><td>Fires when a control loses the input&#xA0;focus&#xA0;and its value has been modified since gaining focus</td><td><em>Element</em></td><td>Yes</td><td>No</td></tr><tr><td><em>reset</em></td><td>specific to HTML forms</td><td>Fires when a form is reset</td><td><em>Element</em></td><td>Yes</td><td>No</td></tr><tr><td><em>submit</em></td><td>specific to HTML forms</td><td>Fires when a form is submitted</td><td><em>Element</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>select</em></td><td>specific to HTML forms</td><td>Fires when a user selects some text in a&#xA0;text field, including input and textarea</td><td><em>Element</em></td><td>Yes</td><td>No</td></tr></tbody></table><p><strong>Mouse events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>click</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is clicked (or user presses enter key) over an element. A click is defined as a mousedown and mouseup over the same screen location. The sequence of these events is&#xA0;<em>mousedown</em>&gt;<em>mouseup</em>&gt;<em>click</em>. Depending upon the environment configuration, the&#xA0;click&#xA0;event&#xA0;may&#xA0;be dispatched if one or more of the event types&#xA0;mouseover,&#xA0;mousemove, and mouseout&#xA0;occur between the press and release of the pointing device button. The&#xA0;click&#xA0;event&#xA0;may&#xA0;also be followed by the&#xA0;dblclick&#xA0;event</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>dblclick</em></td><td><em>MouseEvent</em></td><td>Fires when a mouse pointer is clicked twice over an element. The definition of a double click depends on the environment configuration, except that the event target&#xA0;must&#xA0;be the same between&#xA0;<em>mousedown</em>,&#xA0;<em>mouseup</em>, and&#xA0;<em>dblclick</em>. This event type&#xA0;must&#xA0;be dispatched after the event typeclick&#xA0;if a click and double click occur simultaneously, and after the event type&#xA0;<em>mouseup</em>&#xA0;otherwise</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>mousedown</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is pressed over an element</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>mouseenter</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is moved onto the boundaries of an element or one of its descendent elements. This event type is similar to&#xA0;mouseover, but differs in that it does not bubble, and&#xA0;must not&#xA0;be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>No</td><td>No</td></tr><tr><td><em>mouseleave</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is moved off of the boundaries of an element and all of its descendent elements. This event type is similar to mouseout, but differs in that does not bubble, and that it must not be dispatched until the pointing device has left the boundaries of the element and the boundaries of all of its children</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>No</td><td>No</td></tr><tr><td><em>mousemove</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is moved while it is over an element. The frequency rate of events while the pointing device is moved is implementation-, device-, and platform-specific, but multiple consecutive mousemove events should be fired for sustained pointer-device movement, rather than a single event for each instance of mouse movement. Implementations are encouraged to determine the optimal frequency rate to balance responsiveness with performance</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>No</td></tr><tr><td><em>mouseout</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is moved off of the boundaries of an element. This event type is similar to&#xA0;<em>mouseleave</em>, but differs in that does bubble, and that it must be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>mouseup</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer button is released over an element</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>mouseover</em></td><td><em>MouseEvent</em></td><td>Fires when mouse pointer is moved over an element</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr></tbody></table><p><strong>Wheel events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>wheel</em>(browsers use<em>mousewheel</em>but the specification uses&#xA0;<em>wheel</em>)</td><td><em>WheelEvent</em></td><td>Fires when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action. Depending on the platform and input device, diagonal wheel deltas&#xA0;may&#xA0;be delivered either as a singlewheel&#xA0;event with multiple non-zero axes or as separate&#xA0;wheel&#xA0;events for each non-zero axis. Some helpful details about browser support can be found&#xA0;<a href="http://www.quirksmode.org/dom/events/scroll.html">here</a>.</td><td><em>Element</em>,<em>Document</em>,<em>Window</em></td><td>Yes</td><td>Yes</td></tr></tbody></table><p><strong>Keyboard events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>keydown</em></td><td><em>KeyboardEvent</em></td><td>Fires when a key is initially pressed. This is sent after any key mapping is performed, but before any input method editors receive the keypress. This is sent for any key, even if it doesn&apos;t generate a character code.</td><td><em>Element</em>,<em>Document</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>keypress</em></td><td><em>KeyboardEvent</em></td><td>Fires when a key is initially pressed, but only if that key normally produces a character value. This is sent after any key mapping is performed, but before any input method editors receive the keypress.</td><td><em>Element</em>,<em>Document</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>keyup</em></td><td><em>KeyboardEvent</em></td><td>Fires when a key is released. This is sent after any key mapping is performed, and always follows thecorresponding<em>keydown</em>&#xA0;and&#xA0;<em>keypress</em>&#xA0;events.</td><td><em>Element</em>,<em>Document</em></td><td>Yes</td><td>Yes</td></tr></tbody></table><p><strong>Touch events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>touchstart</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when the user places a&#xA0;touch point&#xA0;on the touch surface</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>touchend</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when the user removes a&#xA0;touch poin<a href="http://www.w3.org/TR/2011/WD-touch-events-20110505/#dfn-touch-point">t</a>&#xA0;from the touch surface, also including cases where the touch point physically leaves the touch surface, such as being dragged off of the screen</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>touchmove</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when the user moves a&#xA0;touch point&#xA0;along the touch surface</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>touchenter</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when a&#xA0;touch point&#xA0;moves onto the interactive area defined by a DOM element</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>No</td><td>?</td></tr><tr><td><em>toucheleave</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when a&#xA0;touch point&#xA0;moves off the interactive area defined by a DOM element</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>No</td><td>?</td></tr><tr><td><em>touchcancel</em></td><td><em>TouchEvent</em></td><td>Fires event to indicate when a touch point has been disrupted in an implementation-specific manner, such as a synchronous event or action originating from the UA canceling the touch, or the touch point leaving the document window into a non-document area which is capable of handling user interactions.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>No</td></tr></tbody></table><div class="notes"><h3>Notes</h3><p>Touch events are typically only supported iOS, Andorid, and Blackberry browsers or browsers (e.g. chrome) that can switch on touch modes</p></div><p><strong>Window,&#xA0;<em>&lt;body&gt;</em>, and frame specific events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>afterprint</em></td><td>?</td><td>Fires on the object immediately after its associated document prints or previews for printing</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>beforeprint</em></td><td>?</td><td>Fires on the object before its associated document prints or previews for printing</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>beforeunload</em></td><td>?</td><td>Fires prior to a document being unloaded</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>Yes</td></tr><tr><td><em>hashchange</em></td><td><em>HashChangeEvent</em></td><td>Fires when there are changes to the portion of a URL that follows the number sign (#)</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>messsage</em></td><td>?</td><td>Fires when the user sends a cross-document message or a message is sent from a&#xA0;<em>Worker</em>&#xA0;with&#xA0;<em>postMessage</em></td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>offline</em></td><td><em>NavigatorOnLine</em></td><td>Fires when browser is working offline</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>online</em></td><td><em>NavigatorOnLine</em></td><td>Fires when browser is working online</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>pagehide</em></td><td><em>PageTransitionEvent</em></td><td>Fires when traversing&#xA0;from&#xA0;a&#xA0;session history entry</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr><tr><td><em>pageshow</em></td><td><em>PageTransitionEvent</em></td><td>The&#xA0;pagehide&#xA0;event is fired when traversing&#xA0;from&#xA0;a&#xA0;session history entry</td><td><em>window</em>,<em>&lt;body&gt;</em>,<em>&lt;frameset&gt;</em></td><td>No</td><td>No</td></tr></tbody></table><p><strong>Document specific events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>readystatechange</em></td><td><em>Event</em></td><td>Fires&#xA0;event when&#xA0;<em>readyState</em>&#xA0;is changed</td><td><em>Document</em>,<em>XMLHttpRequest</em></td><td>No</td><td>No</td></tr><tr><td><em>DOMContentLoaded</em></td><td><em>Event</em></td><td>Fires when a webpage has been parsed, but before all resources have been fully downloaded</td><td><em>Document</em></td><td>Yes</td><td>No</td></tr></tbody></table><p><strong>Drag events</strong></p><table border="0" class="table table-bordered"><thead><tr><th>Event Type</th><th>Event Interface</th><th>Description</th><th>Event Targets</th><th>Bubbles</th><th>Cancelable</th></tr></thead><tbody><tr><td><em>drag</em></td><td><em>DragEvent</em></td><td>Fires on the source object continuously during a drag operation.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>dragstart</em></td><td><em>DragEvent</em></td><td>Fires on the source object when the user starts to drag a text selection or selected object. The&#xA0;ondragstart&#xA0;event is the first to fire when the user starts to drag the mouse.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>dragend</em></td><td><em>DragEvent</em></td><td>Fires on the source object when the user releases the mouse at the close of a drag operation. The ondragend event is the final drag event to fire, following the ondragleave event, which fires on the target object.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>No</td></tr><tr><td><em>dragenter</em></td><td><em>DragEvent</em></td><td>Fires on the target element when the user drags the object to a valid drop target.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>dragleave</em></td><td><em>DragEvent</em></td><td>Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>No</td></tr><tr><td><em>dragover</em></td><td><em>DragEvent</em></td><td>Fires on the target element continuously while the user drags the object over a valid drop target. The&#xA0;ondragover&#xA0;event fires on the target object after the&#xA0;ondragenter&#xA0;event has fired.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr><tr><td><em>drop</em></td><td><em>DragEvent</em></td><td>Fires on the target object when the mouse button is released during a drag-and-drop operation. The ondrop event fires before the ondragleave and ondragend events.</td><td><em>Element</em>,<em>Document</em>,<em>window</em></td><td>Yes</td><td>Yes</td></tr></tbody></table><div class="notes"></div>
#### Event Flow
##### Stopping Event propagation
#### http://domenlightenment.com/#11
## JS Engines
### V8
#### javascript interpreter
#### https://code.google.com/p/v8/
##### home page
## Web Engines
### Blink
#### http://www.chromium.org/blink#TOC-Blink-s-Mission:
#### Resources
##### the chromium project
###### http://www.chromium.org/developers
##### https://en.wikipedia.org/wiki/Comparison_of_web_browser_engines
###### different browser engines
##### https://github.com/nwjs/blink
###### unofficial mirror
##### https://bitbucket.org/chromiumembedded/cef
###### best way to use blink is with Chromium embedded framework
# Thrid Party
## jQuery
jQuery is a library, think of a library as a collection of factories (functions) that produce certain results. You have to learn how to use the library: to reduce time, follow best practices that other people wrote.<div><br></div><div>jQuery has a special syntax the dollar sign, that makes it extremely easy to do DOM manipulation, binding events, create image sliders,&#xA0;</div><div><br></div><div>Learning jQuery will save you time and effort in writing a lot of code to manipulate DOM. Although there are new libraries coming up, It&apos;s used heavily by web developers.&#xA0;</div>
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:<div><br></div><div>Facebook</div><div>twitter</div><div>google</div><div>foursquare</div><div>etc</div>
#### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let&apos;s see how we do that<div><br></div><div>$.ajax</div><div>{</div><div><br></div><div><br></div><div><br></div><div>}</div>
## Angularjs
### 1.0
#### Concepts
##### Dependency Injection
##### Directives
##### Modules
##### Two- Way Binding
###### Scopes
##### Providers
###### Services
###### Factories
### 2.0
## RxJS
### https://drive.google.com/open?id=0B9tPYCpuqoIrc1dpTGJKaTFKRUE
## React
## Famous.io
### Concepts
#### Webgl + DOM Rendering
## Webpack
### https://drive.google.com/open?id=0B9tPYCpuqoIrVUhpN3FQQ3k4MnM
## Gulp
## Babel
### https://babeljs.io/
## ESlint
### Linter for ES2015
## continuous integration
### https://en.wikipedia.org/wiki/Continuous_integration#Software
### Travis-ci
#### https://travis-ci.org/
#### ci
<span>The simpilest way to explain Travis CI is that it runs your program&apos;s tests every time you commit to GitHub (This can be configured in many ways, and you can always disables builds on some branches). The point of this is that you can often discover very quickly if your commit broke something, and fix it before it becomes a problem. I would reccomend running Travis CI on every GitHub repo that you have unit tests in and is using a programming language supported by Travis CI. Since setting up Travis CI is very easy, I don&apos;t normally see a good reason not to use it, unless you don&apos;t care if you have passing tests in your program. Feel free to leave a comment if you have any more questions. You can read more about Travis CI&#xA0;</span><a href="http://docs.travis-ci.com/">here</a><span>.</span>
## Aurelia
### Framework
## Falore
### https://netflix.github.io/falcor/starter/what-is-falcor.html
### Represent you model the same way on the client and server
## Animation Framework
### http://www.sequencejs.com/
# Concepts
## Isomorphic
## Lexical scoping
### http://stackoverflow.com/questions/1047454/what-is-lexical-scope
#### great example of lexical vs. dynamic scoping
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
#### Closures remembers the environment it was created in
## Most Important functions
### https://davidwalsh.name/essential-javascript-functions
### debounce
<p>The debounce function can be a game-changer when it comes to&#xA0;event-fueled performance. &#xA0;If you aren&apos;t using a debouncing function with a&#xA0;<code>scroll</code>,&#xA0;<code>resize</code>,&#xA0;<code>key*</code>event, you&apos;re probably doing it&#xA0;wrong. &#xA0;Here&apos;s a&#xA0;<code>debounce</code>function to keep your code&#xA0;efficient:</p><pre class=" language-js" prism="1"><span class="token comment" spellcheck="true">// Returns a function, that, as long as it continues to be invoked, will not</span>
<span class="token comment" spellcheck="true">// be triggered. The function will be called after it stops being called for</span>
<span class="token comment" spellcheck="true">// N milliseconds. If `immediate` is passed, trigger the function on the</span>
<span class="token comment" spellcheck="true">// leading edge, instead of the trailing.</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> timeout<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
		<span class="token keyword">var</span> later <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> func<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> callNow <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
		timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> func<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Usage</span>
<span class="token keyword">var</span> myEfficientFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment" spellcheck="true">// All the taxing stuff you do</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&apos;resize&apos;</span><span class="token punctuation">,</span> myEfficientFn<span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p>The&#xA0;<code>debounce</code>&#xA0;function will&#xA0;not allow a callback to be used more than once per given time frame. &#xA0;This is especially important&#xA0;when assigning&#xA0;a callback function to frequently-firing events.</p>
### poll
<h2><a href="https://davidwalsh.name/javascript-polling"><code>poll</code></a></h2><p>As I mentioned with the&#xA0;<code>debounce</code>&#xA0;function, sometimes you don&apos;t get to plug into an event to&#xA0;signify a desired state --&#xA0;if the event doesn&apos;t exist, you need to check for your desired&#xA0;state at intervals:</p><pre class=" language-js" prism="1"><span class="token keyword">function</span> <span class="token function">poll</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> errback<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> endTime <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>timeout <span class="token operator">||</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interval <span class="token operator">=</span> interval <span class="token operator">||</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment" spellcheck="true">// If the condition is met, we&apos;re done! </span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment" spellcheck="true">// If the condition isn&apos;t met but the timeout hasn&apos;t elapsed, go again</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment" spellcheck="true">// Done, success callback</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment" spellcheck="true">// Error, failure callback</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p>Polling has long been useful on the web and will continue to be in the future!</p>
### once
<h2><a href="https://davidwalsh.name/javascript-once"><code>once</code></a></h2><p>There are times when you prefer a given functionality only happen once, similar to the way you&apos;d use an&#xA0;<code>onload</code>event. &#xA0;This code&#xA0;provides you said functionality:</p><pre class=" language-js" prism="1"><span class="token keyword">function</span> <span class="token function">once</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token keyword">var</span> result<span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token keyword">if</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
			fn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">// Usage</span>
<span class="token keyword">var</span> canOnlyFireOnce <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&apos;Fired!&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">canOnlyFireOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// &quot;Fired!&quot;</span>
<span class="token function">canOnlyFireOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// nada</span></pre><p>The&#xA0;<code>once</code>&#xA0;function ensures a given function can only be called once, thus prevent duplicate initialization!</p>
# Design Patterns
## https://carldanley.com/javascript-design-patterns/
<h2>Modern Day JavaScript Design Patterns</h2><p>Below is a list of each JavaScript design pattern I&apos;ve had the opportunity to write about with breakdowns on various aspects of that pattern such as their advantages and disadvantages. Browse away!</p><p><a href="http://carldanley.com/js-module-pattern/">The Module Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-revealing-module-pattern/">The Revealing Module Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-singleton-pattern/">The Singleton Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-observer-pattern/">The Observer Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-mediator-pattern/">The Mediator Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-prototype-pattern/">The Prototype Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-facade-pattern/">The Facade Pattern</a>&#xA0;<br><a href="http://carldanley.com/js-factory-pattern/">The Factory Pattern</a></p>
# Resources
## JS in one Pic
### http://coodict.github.io/javascript-in-one-pic/
## You don't Know JS
### https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md
## Functional Programming
### Relies on the idea of function from math
#### One input and one output
#### no side effects
##### side effects are
<p>Side effects may include, but are not limited to</p><ul><li>changing the file system</li><li>inserting a record into a database</li><li>making an http call</li><li>mutations</li><li>printing to the screen / logging</li><li>obtaining user input</li><li>querying the DOM</li><li>accessing system state</li></ul>
### https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch6.html
### Currying
<pre><code class="lang-js"><span class="hljs-keyword">var</span> add = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">y</span>) </span>{
    <span class="hljs-keyword">return</span> x + y;
  };
};

<span class="hljs-keyword">var</span> increment = add(<span class="hljs-number">1</span>);
<span class="hljs-keyword">var</span> addTen = add(<span class="hljs-number">10</span>);

increment(<span class="hljs-number">2</span>);
<span class="hljs-comment">// 3</span>

addTen(<span class="hljs-number">2</span>);
<span class="hljs-comment">// 12</span></code></pre><pre>you split off a function into two functions</pre>
#### loadash currying
#### What's the purpose of currying
<pre><code class="lang-js"><span class="hljs-keyword">var</span> getChildren = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
  <span class="hljs-keyword">return</span> x.childNodes;
};

<span class="hljs-keyword">var</span> allTheChildren = map(getChildren);</code></pre>
##### we can pass functions to others
##### Somtimes called partial application
##### As apposed to this
<p>Giving a function fewer arguments than it expects is typically called&#xA0;<em>partial application</em>. Partially applying a function can remove a lot of boiler plate code. Consider what the above&#xA0;<code>allTheChildren</code>&#xA0;function would be with the uncurried&#xA0;<code>map</code>&#xA0;from lodash<span><a href="https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html#fn_note the arguments are in a different order" id="reffn_note the arguments are in a different order">note the arguments are in a different order</a></span>:</p><pre><code class="lang-js"><span class="hljs-keyword">var</span> allTheChildren = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">elements</span>) </span>{
  <span class="hljs-keyword">return</span> _.map(elements, getChildren);
};</code></pre>
###### so it's better because we split off our application into reusable components
### Immutable state
### Pain Points
#### What's the purpose of using closures?
<pre><code class="lang-js"><span class="hljs-comment">//pure</span>
<span class="hljs-keyword">var</span> signUp = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">Db, Email, attrs</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};</code></pre><div><code class="lang-js"><br></code></div>
##### is it to be able to execute that function later
### Popular functional Programming Libraries
<a href="https://lodash.com/" target="_blank">lodash</a><span>,&#xA0;</span><a href="http://underscorejs.org/" target="_blank">underscore</a><span>, and&#xA0;</span><a href="http://ramdajs.com/" target="_blank">ramda</a><span>.</span>
### http://docs.folktalejs.org/en/latest/index.html
#### Suite of libraries to make functional programming easier
### Higher order function
#### A function that takes other functions
### Compose
#### select two or more functions functions and call them together together within your body
<pre><code class="lang-js"><span class="hljs-keyword">var</span> toUpperCase = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x.toUpperCase(); };
<span class="hljs-keyword">var</span> exclaim = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x + <span class="hljs-string">&apos;!&apos;</span>; };
<span class="hljs-keyword">var</span> shout = compose(exclaim, toUpperCase);

shout(<span class="hljs-string">&quot;send in the clowns&quot;</span>);
<span class="hljs-comment">//=&gt; &quot;SEND IN THE CLOWNS!&quot;</span></code></pre>
#### Pointfree
<pre><code class="lang-js"><span class="hljs-comment">//not pointfree because we mention the data: word</span>
<span class="hljs-keyword">var</span> snakeCase = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">word</span>) </span>{
  <span class="hljs-keyword">return</span> word.toLowerCase().replace(<span class="hljs-regexp">/\s+/ig</span>, <span class="hljs-string">&apos;_&apos;</span>);
};

<span class="hljs-comment">//pointfree</span>
<span class="hljs-keyword">var</span> snakeCase = compose(replace(<span class="hljs-regexp">/\s+/ig</span>, <span class="hljs-string">&apos;_&apos;</span>), toLowerCase);</code></pre>
#### relies on category theory
## http://jsforcats.com/#strings
### Javascript for cats, beginner javascript
## https://www.youtube.com/watch?v=H4sSldXv_S4
### Teaching JS with JS
# Programmed in
## Coffee
## Clojure
## Ruby
## TypeScript
## Elm
## WebAssembly
# Paradigms
## Functional
## Functional Reactive
### RxJS
## OOP
