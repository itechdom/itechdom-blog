# Core
<h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;;">Modules</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;">Special builds can be created that exclude subsets of jQuery functionality. This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used. For example, an app that only used JSONP for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">$.ajax()

```

&#xA0;and did not need to calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;">Any module may be excluded except for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">core

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">selector

```

. To exclude a module, pass its path relative to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">src

```

&#xA0;folder (without the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.js

```

&#xA0;extension).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;">Some example modules that can be excluded are:</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;"><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">ajax</strong>: All AJAX functionality:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">$.ajax()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">$.get()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">$.post()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">$.ajaxSetup()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.load()

```

, transports, and ajax event shorthands such as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.ajaxStart()

```

.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">ajax/xhr</strong>: The XMLHTTPRequest AJAX transport only.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">ajax/script</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&lt;script&gt;

```

&#xA0;AJAX transport only; used to retrieve scripts.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">ajax/jsonp</strong>: The JSONP AJAX transport only; depends on the ajax/script transport.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">css</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.css()

```

&#xA0;method. Also removes&#xA0;<strong style="box-sizing: border-box;">all</strong>&#xA0;modules depending on css (including&#xA0;<strong style="box-sizing: border-box;">effects</strong>,<strong style="box-sizing: border-box;">dimensions</strong>, and&#xA0;<strong style="box-sizing: border-box;">offset</strong>).</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">css/showHide</strong>: Non-animated&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.show()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.hide()

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.toggle()

```

; can be excluded if you use classes or explicit&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.css()

```

&#xA0;calls to set the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">display

```

&#xA0;property. Also removes the&#xA0;<strong style="box-sizing: border-box;">effects</strong>&#xA0;module.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">deprecated</strong>: Methods documented as deprecated but not yet removed.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">dimensions</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.width()

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.height()

```

&#xA0;methods, including&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">inner-

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">outer-

```

&#xA0;variations.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">effects</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.animate()

```

&#xA0;method and its shorthands such as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.slideUp()

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.hide(&quot;slow&quot;)

```

.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">event</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.on()

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.off()

```

&#xA0;methods and all event functionality. Also removes&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">event/alias

```

.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">event/alias</strong>: All event attaching/triggering shorthands like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.click()

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.mouseover()

```

.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">event/focusin</strong>: Cross-browser support for the focusin and focusout events.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">event/trigger</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.trigger()

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.triggerHandler()

```

&#xA0;methods. Used by&#xA0;<strong style="box-sizing: border-box;">alias</strong>&#xA0;and&#xA0;<strong style="box-sizing: border-box;">focusin</strong>modules.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">offset</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.offset()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.position()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.offsetParent()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.scrollLeft()

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.scrollTop()

```

methods.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">wrap</strong>: The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.wrap()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.wrapAll()

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.wrapInner()

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.unwrap()

```

&#xA0;methods.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">core/ready</strong>: Exclude the ready module if you place your scripts at the end of the body. Any ready callbacks bound with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jQuery()

```

&#xA0;will simply be called immediately. However,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jQuery(document).ready()

```

&#xA0;will not be a function and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.on(&quot;ready&quot;, ...)

```

&#xA0;or similar will not be triggered.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">deferred</strong>: Exclude jQuery.Deferred. This also removes jQuery.Callbacks.&#xA0;<em style="box-sizing: border-box;">Note</em>&#xA0;that modules that depend on jQuery.Deferred(AJAX, effects, core/ready) will not be removed and will still expect jQuery.Deferred to be there. Include your own jQuery.Deferred implementation or exclude those modules as well (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">grunt custom:-deferred,-ajax,-effects,-core/ready

```

).</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">exports/global</strong>: Exclude the attachment of global jQuery variables ($ and jQuery) to the window.</li><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">exports/amd</strong>: Exclude the AMD definition.</li></ul><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;">As a special case, you may also replace Sizzle by using a special flag&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">grunt custom:-sizzle

```

.</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;"><li style="box-sizing: border-box;"><strong style="box-sizing: border-box;">sizzle</strong>: The Sizzle selector engine. When this module is excluded, it is replaced by a rudimentary selector engine based on the browser&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">querySelectorAll

```

&#xA0;method that does not support jQuery selector extensions or enhanced semantics. See the&#xA0;<a href="https://github.com/jquery/jquery/blob/master/src/selector-native.js" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">selector-native.js</a>&#xA0;file for details.</li></ul><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;"><em style="box-sizing: border-box;">Note</em>: Excluding Sizzle will also exclude all jQuery selector extensions (such as<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">effects/animatedSelector

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">css/hiddenVisibleSelectors

```

).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;"><em style="box-sizing: border-box;">Note</em>: Removing Sizzle is not supported on the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">compat

```

&#xA0;branch.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif, &apos;Segoe UI Emoji&apos;, &apos;Segoe UI Symbol&apos;; font-size: 16px; line-height: 25.6px;">The build process shows a message for each dependent module it excludes or includes</p>
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
