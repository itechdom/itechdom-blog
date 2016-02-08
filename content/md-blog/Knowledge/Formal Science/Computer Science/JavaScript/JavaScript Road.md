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
## 1.4 Properties and methods for working nodes

Like we have been discussing all node objects (e.g _Element_, _Attr_, _Text_ etc...) inherit properties and methods from a primary _Node_ object. These properties and methods are the baseline values and functions for manipulating, inspecting, and traversing the DOM. In addtion to the properties and methods provided by the node interface there are a great deal of other relevant properties and methods that are provided by sub node interfaces such as the _document_, _HTMLElement_, or _HTML*Element_ interface.

Below I list out the most common _Node_ properties and methods inherited by all node objects including the relevant inherited properties for working with nodes from sub-node interfaces.

<span style="font-family: Helvetica; font-size: 16px; line-height: normal;">Node Properties:</span>

*   _childNodes_
*   _firstChild_
*   _lastChild_
*   _nextSibling_
*   _nodeName_
*   _nodeType_
*   _nodeValue_
*   _parentNode_
*   _previousSibling_

<span style="font-family: Helvetica; font-size: 16px; line-height: normal;">Node Methods:</span>

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

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_load_</td>

<td style="line-height: 18px;">_Event_,_UIEvent_</td>

<td style="line-height: 18px;">fires when an asset (HTML page, image, CSS, frameset,_<object>_, or JS file) is loaded.</td>

<td style="line-height: 18px;">_Element_, _Document_,_window_,_XMLHttpRequest_,_XMLHttpRequestUpload_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_unload_</td>

<td style="line-height: 18px;">_UIEvent_</td>

<td style="line-height: 18px;">fires when user agent removes the resource (document, element, defaultView) or any depending resources (images, CSS file, etc.)</td>

<td style="line-height: 18px;">_window_, _<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_abort_</td>

<td style="line-height: 18px;">_Event_,_UIEvent_</td>

<td style="line-height: 18px;">Fires when an resource (object/image) is stopped from loading before completely loaded</td>

<td style="line-height: 18px;">_Element_,_XMLHttpRequest_,_XMLHttpRequestUpload_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_error_</td>

<td style="line-height: 18px;">_Event_,_UIEvent_</td>

<td style="line-height: 18px;">Fires when a resource failed to load, or has been loaded but cannot be interpreted according to its semantics, such as an invalid image, a script execution error, or non-well-formed XML</td>

<td style="line-height: 18px;">_Element_,_XMLHttpRequest_,_XMLHttpRequestUpload_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_resize_</td>

<td style="line-height: 18px;">_UIEvent_</td>

<td style="line-height: 18px;">Fires when a document view has been resized. This event type is dispatched after all effects for that occurrence of resizing of that particular event target have been executed by the user agent</td>

<td style="line-height: 18px;">_window_, _<body>_,_<frameset>_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_scroll_</td>

<td style="line-height: 18px;">_UIEvent_</td>

<td style="line-height: 18px;">Fires when a user scrolls a document or an element.</td>

<td style="line-height: 18px;">_Element_, _Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_contextmenu_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">fires by right clicking an element</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">Yes</td>

</tr>

</tbody>

</table>

**Focus events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Events Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_blur_</td>

<td style="line-height: 18px;">_FocusEvent_</td>

<td style="line-height: 18px;">Fires when an element loses focus either via the mouse or tabbing</td>

<td style="line-height: 18px;">_Element_ (except_<body>_ and_<frameseet>_ ),_Document_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_focus_</td>

<td style="line-height: 18px;">_FocusEvent_</td>

<td style="line-height: 18px;">Fires when an element receives focus</td>

<td style="line-height: 18px;">_Element_ (except_<body>_ and_<frameseet>_ ),_Document_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_focusin_</td>

<td style="line-height: 18px;">_FocusEvent_</td>

<td style="line-height: 18px;">Fires when an event target is about to receive focus but before the focus is shifted. This event occurs right before the focus event</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_focusout_</td>

<td style="line-height: 18px;">_FocusEvent_</td>

<td style="line-height: 18px;">Fires when an event target is about to lose focus but before the focus is shifted. This event occurs right before the blur event</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">No</td>

</tr>

</tbody>

</table>

**Form events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_change_</td>

<td style="line-height: 18px;">specific to HTML forms</td>

<td style="line-height: 18px;">Fires when a control loses the input focus and its value has been modified since gaining focus</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_reset_</td>

<td style="line-height: 18px;">specific to HTML forms</td>

<td style="line-height: 18px;">Fires when a form is reset</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_submit_</td>

<td style="line-height: 18px;">specific to HTML forms</td>

<td style="line-height: 18px;">Fires when a form is submitted</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_select_</td>

<td style="line-height: 18px;">specific to HTML forms</td>

<td style="line-height: 18px;">Fires when a user selects some text in a text field, including input and textarea</td>

<td style="line-height: 18px;">_Element_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">No</td>

</tr>

</tbody>

</table>

**Mouse events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_click_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is clicked (or user presses enter key) over an element. A click is defined as a mousedown and mouseup over the same screen location. The sequence of these events is _mousedown_>_mouseup_>_click_. Depending upon the environment configuration, the click event may be dispatched if one or more of the event types mouseover, mousemove, and mouseout occur between the press and release of the pointing device button. The click event may also be followed by the dblclick event</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_dblclick_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when a mouse pointer is clicked twice over an element. The definition of a double click depends on the environment configuration, except that the event target must be the same between _mousedown_, _mouseup_, and _dblclick_. This event type must be dispatched after the event typeclick if a click and double click occur simultaneously, and after the event type _mouseup_ otherwise</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_mousedown_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is pressed over an element</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_mouseenter_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is moved onto the boundaries of an element or one of its descendent elements. This event type is similar to mouseover, but differs in that it does not bubble, and must not be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_mouseleave_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is moved off of the boundaries of an element and all of its descendent elements. This event type is similar to mouseout, but differs in that does not bubble, and that it must not be dispatched until the pointing device has left the boundaries of the element and the boundaries of all of its children</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_mousemove_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is moved while it is over an element. The frequency rate of events while the pointing device is moved is implementation-, device-, and platform-specific, but multiple consecutive mousemove events should be fired for sustained pointer-device movement, rather than a single event for each instance of mouse movement. Implementations are encouraged to determine the optimal frequency rate to balance responsiveness with performance</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_mouseout_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is moved off of the boundaries of an element. This event type is similar to _mouseleave_, but differs in that does bubble, and that it must be dispatched when the pointer device moves from an element onto the boundaries of one of its descendent elements</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_mouseup_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer button is released over an element</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_mouseover_</td>

<td style="line-height: 18px;">_MouseEvent_</td>

<td style="line-height: 18px;">Fires when mouse pointer is moved over an element</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">Yes</td>

</tr>

</tbody>

</table>

**Wheel events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_wheel_(browsers use_mousewheel_but the specification uses _wheel_)</td>

<td style="line-height: 18px;">_WheelEvent_</td>

<td style="line-height: 18px;">Fires when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action. Depending on the platform and input device, diagonal wheel deltas may be delivered either as a singlewheel event with multiple non-zero axes or as separate wheel events for each non-zero axis. Some helpful details about browser support can be found [here](http://www.quirksmode.org/dom/events/scroll.html).</td>

<td style="line-height: 18px;">_Element_,_Document_,_Window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">Yes</td>

</tr>

</tbody>

</table>

**Keyboard events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_keydown_</td>

<td style="line-height: 18px;">_KeyboardEvent_</td>

<td style="line-height: 18px;">Fires when a key is initially pressed. This is sent after any key mapping is performed, but before any input method editors receive the keypress. This is sent for any key, even if it doesn't generate a character code.</td>

<td style="line-height: 18px;">_Element_,_Document_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_keypress_</td>

<td style="line-height: 18px;">_KeyboardEvent_</td>

<td style="line-height: 18px;">Fires when a key is initially pressed, but only if that key normally produces a character value. This is sent after any key mapping is performed, but before any input method editors receive the keypress.</td>

<td style="line-height: 18px;">_Element_,_Document_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_keyup_</td>

<td style="line-height: 18px;">_KeyboardEvent_</td>

<td style="line-height: 18px;">Fires when a key is released. This is sent after any key mapping is performed, and always follows thecorresponding_keydown_ and _keypress_ events.</td>

<td style="line-height: 18px;">_Element_,_Document_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">Yes</td>

</tr>

</tbody>

</table>

**Touch events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_touchstart_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when the user places a touch point on the touch surface</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_touchend_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when the user removes a touch poin[t](http://www.w3.org/TR/2011/WD-touch-events-20110505/#dfn-touch-point) from the touch surface, also including cases where the touch point physically leaves the touch surface, such as being dragged off of the screen</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_touchmove_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when the user moves a touch point along the touch surface</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_touchenter_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when a touch point moves onto the interactive area defined by a DOM element</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">?</td>

</tr>

<tr>

<td style="line-height: 18px;">_toucheleave_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when a touch point moves off the interactive area defined by a DOM element</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">?</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_touchcancel_</td>

<td style="line-height: 18px;">_TouchEvent_</td>

<td style="line-height: 18px;">Fires event to indicate when a touch point has been disrupted in an implementation-specific manner, such as a synchronous event or action originating from the UA canceling the touch, or the touch point leaving the document window into a non-document area which is capable of handling user interactions.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">No</td>

</tr>

</tbody>

</table>

<div class="notes" style="font-size: 0.8em; border-radius: 4px; padding-bottom: 12px; border: 1px solid rgb(207, 226, 243); font-family: Helvetica; line-height: normal;">

### Notes

Touch events are typically only supported iOS, Andorid, and Blackberry browsers or browsers (e.g. chrome) that can switch on touch modes

</div>

**Window, _<body>_, and frame specific events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_afterprint_</td>

<td style="line-height: 18px;">?</td>

<td style="line-height: 18px;">Fires on the object immediately after its associated document prints or previews for printing</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_beforeprint_</td>

<td style="line-height: 18px;">?</td>

<td style="line-height: 18px;">Fires on the object before its associated document prints or previews for printing</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_beforeunload_</td>

<td style="line-height: 18px;">?</td>

<td style="line-height: 18px;">Fires prior to a document being unloaded</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_hashchange_</td>

<td style="line-height: 18px;">_HashChangeEvent_</td>

<td style="line-height: 18px;">Fires when there are changes to the portion of a URL that follows the number sign (#)</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_messsage_</td>

<td style="line-height: 18px;">?</td>

<td style="line-height: 18px;">Fires when the user sends a cross-document message or a message is sent from a _Worker_ with _postMessage_</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_offline_</td>

<td style="line-height: 18px;">_NavigatorOnLine_</td>

<td style="line-height: 18px;">Fires when browser is working offline</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_online_</td>

<td style="line-height: 18px;">_NavigatorOnLine_</td>

<td style="line-height: 18px;">Fires when browser is working online</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_pagehide_</td>

<td style="line-height: 18px;">_PageTransitionEvent_</td>

<td style="line-height: 18px;">Fires when traversing from a session history entry</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_pageshow_</td>

<td style="line-height: 18px;">_PageTransitionEvent_</td>

<td style="line-height: 18px;">The pagehide event is fired when traversing from a session history entry</td>

<td style="line-height: 18px;">_window_,_<body>_,_<frameset>_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">No</td>

</tr>

</tbody>

</table>

**Document specific events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_readystatechange_</td>

<td style="line-height: 18px;">_Event_</td>

<td style="line-height: 18px;">Fires event when _readyState_ is changed</td>

<td style="line-height: 18px;">_Document_,_XMLHttpRequest_</td>

<td style="line-height: 18px;">No</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_DOMContentLoaded_</td>

<td style="line-height: 18px;">_Event_</td>

<td style="line-height: 18px;">Fires when a webpage has been parsed, but before all resources have been fully downloaded</td>

<td style="line-height: 18px;">_Document_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">No</td>

</tr>

</tbody>

</table>

**Drag events**

<table border="0" class="table table-bordered" style="font-size: 0.9em; width: 799px; margin: 32px 0px; font-family: Helvetica; line-height: normal;">

<thead>

<tr>

<th style="line-height: 18px; text-align: center; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Event Type</th>

<th style="line-height: 18px; text-align: center;">Event Interface</th>

<th style="line-height: 18px; text-align: center;">Description</th>

<th style="line-height: 18px; text-align: center;">Event Targets</th>

<th style="line-height: 18px; text-align: center;">Bubbles</th>

<th style="line-height: 18px; text-align: center; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;">Cancelable</th>

</tr>

</thead>

<tbody>

<tr>

<td style="line-height: 18px;">_drag_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the source object continuously during a drag operation.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_dragstart_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the source object when the user starts to drag a text selection or selected object. The ondragstart event is the first to fire when the user starts to drag the mouse.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_dragend_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the source object when the user releases the mouse at the close of a drag operation. The ondragend event is the final drag event to fire, following the ondragleave event, which fires on the target object.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_dragenter_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the target element when the user drags the object to a valid drop target.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px;">_dragleave_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">No</td>

</tr>

<tr>

<td style="line-height: 18px;">_dragover_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the target element continuously while the user drags the object over a valid drop target. The ondragover event fires on the target object after the ondragenter event has fired.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px;">Yes</td>

</tr>

<tr>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">_drop_</td>

<td style="line-height: 18px;">_DragEvent_</td>

<td style="line-height: 18px;">Fires on the target object when the mouse button is released during a drag-and-drop operation. The ondrop event fires before the ondragleave and ondragend events.</td>

<td style="line-height: 18px;">_Element_,_Document_,_window_</td>

<td style="line-height: 18px;">Yes</td>

<td style="line-height: 18px; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;">Yes</td>

</tr>

</tbody>

</table>
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
jQuery is a library, think of a library as a collection of factories (functions) that produce certain results. You have to learn how to use the library: to reduce time, follow best practices that other people wrote.

<div>jQuery has a special syntax the dollar sign, that makes it extremely easy to do DOM manipulation, binding events, create image sliders, </div>

<div>Learning jQuery will save you time and effort in writing a lot of code to manipulate DOM. Although there are new libraries coming up, It's used heavily by web developers. </div>
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:

<div>Facebook</div>

<div>twitter</div>

<div>google</div>

<div>foursquare</div>

<div>etc</div>
### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let's see how we do that

<div>$.ajax</div>

<div>{</div>

<div>}</div>
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
<span style="color: rgb(34, 34, 34); font-size: 15px; line-height: 19.5px;">The simpilest way to explain Travis CI is that it runs your program's tests every time you commit to GitHub (This can be configured in many ways, and you can always disables builds on some branches). The point of this is that you can often discover very quickly if your commit broke something, and fix it before it becomes a problem. I would reccomend running Travis CI on every GitHub repo that you have unit tests in and is using a programming language supported by Travis CI. Since setting up Travis CI is very easy, I don't normally see a good reason not to use it, unless you don't care if you have passing tests in your program. Feel free to leave a comment if you have any more questions. You can read more about Travis CI </span>[here](http://docs.travis-ci.com/)<span style="color: rgb(34, 34, 34); font-size: 15px; line-height: 19.5px;">.</span>
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
The debounce function can be a game-changer when it comes to event-fueled performance.  If you aren't using a debouncing function with a `scroll`, `resize`, `key*`event, you're probably doing it wrong.  Here's a `debounce`function to keep your code efficient:

<pre class=" language-js" prism="1" style="border-right-width: 0px; border-left-width: 0px; border-top-color: rgb(238, 238, 238); border-bottom-color: rgb(238, 238, 238); margin-bottom: 30px; font-size: 16px; tab-size: 4; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; direction: ltr; white-space: pre; word-break: normal; word-wrap: normal; line-height: 1.5; overflow: auto; letter-spacing: 0.16px; padding: 20px 0px !important; background: rgb(245, 242, 240);"><span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// Returns a function, that, as long as it continues to be invoked, will not</span>
<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// be triggered. The function will be called after it stops being called for</span>
<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// N milliseconds. If `immediate` is passed, trigger the function on the</span>
<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// leading edge, instead of the trailing.</span>
<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">debounce</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>func<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> wait<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> immediate<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
	<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> timeout<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
	<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">return</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> context <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> args <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> arguments<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> later <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
			timeout <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">null</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
			<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span>immediate<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> func<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">.</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">apply</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>context<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> args<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> callNow <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> immediate <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">&&</span> <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span>timeout<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">clearTimeout</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>timeout<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		timeout <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">setTimeout</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>later<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> wait<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>callNow<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> func<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">.</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">apply</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>context<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> args<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
	<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>

<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// Usage</span>
<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> myEfficientFn <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">debounce</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
	<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// All the taxing stuff you do</span>
<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> <span class="token number" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 0, 85);">250</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
window<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">.</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">addEventListener</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token string" style="padding: 0px; border: 0px; margin: 0px; color: rgb(102, 153, 0);">'resize'</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> myEfficientFn<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span></pre>

The `debounce` function will not allow a callback to be used more than once per given time frame.  This is especially important when assigning a callback function to frequently-firing events.
### poll
## [`poll`](https://davidwalsh.name/javascript-polling)

As I mentioned with the `debounce` function, sometimes you don't get to plug into an event to signify a desired state -- if the event doesn't exist, you need to check for your desired state at intervals:

<pre class=" language-js" prism="1" style="border-right-width: 0px; border-left-width: 0px; border-top-color: rgb(238, 238, 238); border-bottom-color: rgb(238, 238, 238); margin-bottom: 30px; font-size: 16px; tab-size: 4; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; direction: ltr; white-space: pre; word-break: normal; word-wrap: normal; line-height: 1.5; overflow: auto; letter-spacing: 0.16px; padding: 20px 0px !important; background: rgb(245, 242, 240);"><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">poll</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>fn<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> callback<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> errback<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> timeout<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> interval<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
    <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> endTime <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">Number</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">new</span> <span class="token class-name" style="padding: 0px; border: 0px; margin: 0px;">Date</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">+</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>timeout <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span class="token number" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 0, 85);">2000</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
    interval <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> interval <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span class="token number" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 0, 85);">100</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>

    <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">p</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
            <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// If the condition is met, we're done!</span> 
            <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">if</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">fn</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
                <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">callback</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
            <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span>
            <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// If the condition isn't met but the timeout hasn't elapsed, go again</span>
            <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">else</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">Number</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">new</span> <span class="token class-name" style="padding: 0px; border: 0px; margin: 0px;">Date</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span>  <span class="token number" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 0, 85);">0</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
    <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span>
    <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
        <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// Done, success callback</span>
    <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span>
    <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
        <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// Error, failure callback</span>
    <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span>
<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span></pre>

Polling has long been useful on the web and will continue to be in the future!
### once
## [`once`](https://davidwalsh.name/javascript-once)

There are times when you prefer a given functionality only happen once, similar to the way you'd use an `onload`event.  This code provides you said functionality:

<pre class=" language-js" prism="1" style="border-right-width: 0px; border-left-width: 0px; border-top-color: rgb(238, 238, 238); border-bottom-color: rgb(238, 238, 238); margin-bottom: 30px; font-size: 16px; tab-size: 4; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; direction: ltr; white-space: pre; word-break: normal; word-wrap: normal; line-height: 1.5; overflow: auto; letter-spacing: 0.16px; padding: 20px 0px !important; background: rgb(245, 242, 240);"><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">once</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>fn<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> context<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span> 
	<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> result<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>

	<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">return</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span> 
		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">if</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>fn<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
			result <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> fn<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">.</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">apply</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span>context <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">,</span> arguments<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
			fn <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">null</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
		<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span>

		<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">return</span> result<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
	<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span>

<span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// Usage</span>
<span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">var</span> canOnlyFireOnce <span class="token operator" style="padding: 0px; border: 0px; margin: 0px; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">once</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="padding: 0px; border: 0px; margin: 0px; color: rgb(0, 119, 170);">function</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">{</span>
	console<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">.</span><span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token string" style="padding: 0px; border: 0px; margin: 0px; color: rgb(102, 153, 0);">'Fired!'</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span>

<span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">canOnlyFireOnce</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span> <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// "Fired!"</span>
<span class="token function" style="padding: 0px; border: 0px; margin: 0px; color: rgb(221, 74, 104);">canOnlyFireOnce</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="padding: 0px; border: 0px; margin: 0px; color: rgb(153, 153, 153);">;</span> <span class="token comment" spellcheck="true" style="padding: 0px; border: 0px; margin: 0px; color: rgb(112, 128, 144);">// nada</span></pre>

The `once` function ensures a given function can only be called once, thus prevent duplicate initialization!
# Design Patterns
## Modern Day JavaScript Design Patterns

Below is a list of each JavaScript design pattern I've had the opportunity to write about with breakdowns on various aspects of that pattern such as their advantages and disadvantages. Browse away!

[The Module Pattern](http://carldanley.com/js-module-pattern/)   
[The Revealing Module Pattern](http://carldanley.com/js-revealing-module-pattern/)   
[The Singleton Pattern](http://carldanley.com/js-singleton-pattern/)   
[The Observer Pattern](http://carldanley.com/js-observer-pattern/)   
[The Mediator Pattern](http://carldanley.com/js-mediator-pattern/)   
[The Prototype Pattern](http://carldanley.com/js-prototype-pattern/)   
[The Facade Pattern](http://carldanley.com/js-facade-pattern/)   
[The Factory Pattern](http://carldanley.com/js-factory-pattern/)
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

<pre style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6px; overflow: auto; direction: ltr; margin-bottom: 16px; padding: 16px; line-height: 1.45; border: 0px; border-radius: 3px; word-wrap: normal; letter-spacing: 0.2px; background-color: rgb(247, 247, 247);">you split off a function into two functions</pre>
### loadash currying
### What's the purpose of currying
    var getChildren = function(x) {
      return x.childNodes;
    };

    var allTheChildren = map(getChildren);
### we can pass functions to others
### Somtimes called partial application
### As apposed to this
Giving a function fewer arguments than it expects is typically called _partial application_. Partially applying a function can remove a lot of boiler plate code. Consider what the above `allTheChildren` function would be with the uncurried `map` from lodash<span style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font-size: 12px; line-height: 0; position: relative; vertical-align: baseline; top: -0.5em;">[note the arguments are in a different order](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html#fn_note the arguments are in a different order)</span>:

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
[lodash](https://lodash.com/)<span style="font-size: 16px; letter-spacing: 0.2px; line-height: 25.6px;">, </span>[underscore](http://underscorejs.org/)<span style="font-size: 16px; letter-spacing: 0.2px; line-height: 25.6px;">, and </span>[ramda](http://ramdajs.com/)<span style="font-size: 16px; letter-spacing: 0.2px; line-height: 25.6px;">.</span>
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
