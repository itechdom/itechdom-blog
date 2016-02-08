# Core
### Modules

Special builds can be created that exclude subsets of jQuery functionality. This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used. For example, an app that only used JSONP for `$.ajax()` and did not need to calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.

Any module may be excluded except for `core`, and `selector`. To exclude a module, pass its path relative to the `src` folder (without the `.js` extension).

Some example modules that can be excluded are:

*   **ajax**: All AJAX functionality: `$.ajax()`, `$.get()`, `$.post()`, `$.ajaxSetup()`, `.load()`, transports, and ajax event shorthands such as `.ajaxStart()`.
*   **ajax/xhr**: The XMLHTTPRequest AJAX transport only.
*   **ajax/script**: The `` AJAX transport only; used to retrieve scripts.
*   **ajax/jsonp**: The JSONP AJAX transport only; depends on the ajax/script transport.
*   **css**: The `.css()` method. Also removes **all** modules depending on css (including **effects**,**dimensions**, and **offset**).
*   **css/showHide**: Non-animated `.show()`, `.hide()` and `.toggle()`; can be excluded if you use classes or explicit `.css()` calls to set the `display` property. Also removes the **effects** module.
*   **deprecated**: Methods documented as deprecated but not yet removed.
*   **dimensions**: The `.width()` and `.height()` methods, including `inner-` and `outer-` variations.
*   **effects**: The `.animate()` method and its shorthands such as `.slideUp()` or `.hide("slow")`.
*   **event**: The `.on()` and `.off()` methods and all event functionality. Also removes `event/alias`.
*   **event/alias**: All event attaching/triggering shorthands like `.click()` or `.mouseover()`.
*   **event/focusin**: Cross-browser support for the focusin and focusout events.
*   **event/trigger**: The `.trigger()` and `.triggerHandler()` methods. Used by **alias** and **focusin**modules.
*   **offset**: The `.offset()`, `.position()`, `.offsetParent()`, `.scrollLeft()`, and `.scrollTop()`methods.
*   **wrap**: The `.wrap()`, `.wrapAll()`, `.wrapInner()`, and `.unwrap()` methods.
*   **core/ready**: Exclude the ready module if you place your scripts at the end of the body. Any ready callbacks bound with `jQuery()` will simply be called immediately. However,`jQuery(document).ready()` will not be a function and `.on("ready", ...)` or similar will not be triggered.
*   **deferred**: Exclude jQuery.Deferred. This also removes jQuery.Callbacks. _Note_ that modules that depend on jQuery.Deferred(AJAX, effects, core/ready) will not be removed and will still expect jQuery.Deferred to be there. Include your own jQuery.Deferred implementation or exclude those modules as well (`grunt custom:-deferred,-ajax,-effects,-core/ready`).
*   **exports/global**: Exclude the attachment of global jQuery variables ($ and jQuery) to the window.
*   **exports/amd**: Exclude the AMD definition.

As a special case, you may also replace Sizzle by using a special flag `grunt custom:-sizzle`.

*   **sizzle**: The Sizzle selector engine. When this module is excluded, it is replaced by a rudimentary selector engine based on the browser's `querySelectorAll` method that does not support jQuery selector extensions or enhanced semantics. See the [selector-native.js](https://github.com/jquery/jquery/blob/master/src/selector-native.js) file for details.

_Note_: Excluding Sizzle will also exclude all jQuery selector extensions (such as`effects/animatedSelector` and `css/hiddenVisibleSelectors`).

_Note_: Removing Sizzle is not supported on the `compat` branch.

The build process shows a message for each dependent module it excludes or includes
# Concepts
# Resources
### https://github.com/jquery/jquery
### jquery github
# Thrid Party
### Sizzle
### CSS Selector Engine
### https://github.com/jquery/sizzle
### github page
### http://www.myinkblog.com/sizzle-a-look-at-jquerys-new-css-selector-engine/
### basic examples
