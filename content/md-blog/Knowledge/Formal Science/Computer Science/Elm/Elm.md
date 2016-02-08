# Concepts
### Differences with JavaScript
<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;">

## Literals

<div class="comparison" style="overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">

<table style="width: 798px;">

<tbody>

<tr>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">JavaScript</th>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">Elm</th>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`3`</td>

<td style="padding: 6px; width: 400px;">`3`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`3.1415`</td>

<td style="padding: 6px; width: 400px;">`3.1415`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`"Hello world!"`</td>

<td style="padding: 6px; width: 400px;">`"Hello world!"`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;"><span style="color: rgb(203, 203, 203);">Multiline strings not widely supported</span></td>

<td style="padding: 6px; width: 400px;">`"""multiline string"""`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`'Hello world!'`</td>

<td style="padding: 6px; width: 400px;"><span style="color: rgb(203, 203, 203);">Cannot use single quotes for strings</span></td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;"><span style="color: rgb(203, 203, 203);">No distinction between characters and strings</span></td>

<td style="padding: 6px; width: 400px;">`'a'`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`true`</td>

<td style="padding: 6px; width: 400px;">`True`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`[1,2,3]`</td>

<td style="padding: 6px; width: 400px;">`[1,2,3]`</td>

</tr>

</tbody>

</table>

</div>

</div>

<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;">

## Objects / Records

<div class="comparison" style="overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">

<table style="width: 798px;">

<tbody>

<tr>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">JavaScript</th>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">Elm</th>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`{ x: 3, y: 4 }`</td>

<td style="padding: 6px; width: 400px;">`{ x = 3, y = 4 }`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`point.x`</td>

<td style="padding: 6px; width: 400px;">`point.x`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`point.x = 42`</td>

<td style="padding: 6px; width: 400px;">`{ point | x <- 42 }`</td>

</tr>

</tbody>

</table>

</div>

</div>

<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;">

## Functions

<div class="comparison" style="overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">

<table style="width: 798px;">

<tbody>

<tr>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">JavaScript</th>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">Elm</th>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`function(x,y) { return x + y; }`</td>

<td style="padding: 6px; width: 400px;">`\x y -> x + y`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`Math.max(3, 4)`</td>

<td style="padding: 6px; width: 400px;">`max 3 4`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`Math.min(1, Math.pow(2, 4))`</td>

<td style="padding: 6px; width: 400px;">`min 1 (2^4)`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`numbers.map(Math.sqrt)`</td>

<td style="padding: 6px; width: 400px;">`List.map sqrt numbers`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`points.map(function(p) { return p.x })`</td>

<td style="padding: 6px; width: 400px;">`List.map .x points`</td>

</tr>

</tbody>

</table>

</div>

</div>

<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;">

## Control Flow

<div class="comparison" style="overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">

<table style="width: 798px;">

<tbody>

<tr>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">JavaScript</th>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">Elm</th>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`3 > 2 ? 'cat' : 'dog'`</td>

<td style="padding: 6px; width: 400px;">`if 3 > 2 then "cat" else "dog"`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`var x = 42; ...`</td>

<td style="padding: 6px; width: 400px;">`let x = 42 in ...`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`return 42`</td>

<td style="padding: 6px; width: 400px;"><span style="color: rgb(203, 203, 203);">Everything is an expression, no need for return</span></td>

</tr>

</tbody>

</table>

</div>

</div>

<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;">

## Strings

<div class="comparison" style="overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">

<table style="width: 798px;">

<tbody>

<tr>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">JavaScript</th>

<th style="padding: 6px; width: 400px; background: rgb(221, 221, 221);">Elm</th>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`'abc' + '123'`</td>

<td style="padding: 6px; width: 400px;">`"abc" ++ "123"`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`'abc'.length`</td>

<td style="padding: 6px; width: 400px;">`String.length "abc"`</td>

</tr>

<tr style="background: rgb(251, 251, 251);">

<td style="padding: 6px; width: 400px;">`'abc'.toUpperCase()`</td>

<td style="padding: 6px; width: 400px;">`String.toUpper "abc"`</td>

</tr>

<tr>

<td style="padding: 6px; width: 400px;">`'abc' + 123`</td>

<td style="padding: 6px; width: 400px;">`"abc" ++ toString 123`</td>

</tr>

</tbody>

</table>

</div>

</div>
### records
you can define a record like this:

<div>bill = {name = "gates"}</div>

<div>access with:</div>

<div>bill.name</div>

<div>or</div>

<div>.name bill</div>

<div>to update</div>

<div><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ bill | name <-</span> <span class="hljs-string" style="color: rgb(153, 204, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">"Nye"</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span>  
</div>

<div><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">  
</span></div>

<div><span style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;">It is important to notice that we do not make </span>_destructive_<span style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;"> updates. In other words, when we update some fields of </span>`bill`<span style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;"> we actually create a new record rather than overwriting the existing one. Elm makes this efficient by sharing as much content as possible. If you update one of ten fields, the new record will share all of the nine unchanged values.</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">  
</span></div>
### Contracts
<span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">fortyTwo</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">:</span> <span class="hljs-type" style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">Int</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);"></span> <span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">fortyTwo</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">=</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">42</span>

<div><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">  
</span></div>

<div><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">  
</span></div>
### type annotation
### to rule out runtime errors
### you can define your own type?
<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">view : Widget -> Element</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">view widget =</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">    case widget of</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">      ScatterPlot points -></span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">          viewScatterPlot points</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">  
</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">      LogData logs -></span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">          flow down (map viewLog logs)</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">  
</span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">      TimePlot occurances -></span></font></div>

<div><font color="#66cccc" face="Source Code Mono, monospace" size="3"><span style="line-height: normal; white-space: pre;">          viewTimePlot occurances</span></font></div>
### Immutability
### Signals and Addresses
### Functions
<div>import Graphics.Element exposing (..)</div>

<div>import Keyboard</div>

<div>main : Signal Element</div>

<div>main =</div>

<div>  Signal.map show(Keyboard.arrows)</div>

<div>we omit the parentheses for the method nam</div>

<div>also show is actually under Graphics.Element.show</div>
# Packages
### Signal
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Signal
### Website
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0
# Resources
### Complete Guide
# Complete Guide

*   [Core Language](http://elm-lang.org/guide/core-language)
    *   [Values](http://elm-lang.org/guide/core-language#values)
    *   [Functions](http://elm-lang.org/guide/core-language#functions)
    *   [If Expressions](http://elm-lang.org/guide/core-language#if-expressions)
    *   [Lists](http://elm-lang.org/guide/core-language#lists)
    *   [Tuples](http://elm-lang.org/guide/core-language#tuples)
    *   [Records](http://elm-lang.org/guide/core-language#records)
*   [Model The Problem](http://elm-lang.org/guide/model-the-problem)
    *   [Contracts](http://elm-lang.org/guide/model-the-problem#contracts)
    *   [Enumerations](http://elm-lang.org/guide/model-the-problem#enumerations)
    *   [State Machines](http://elm-lang.org/guide/model-the-problem#state-machines)
    *   [Tagged Unions](http://elm-lang.org/guide/model-the-problem#tagged-unions)
    *   [Banishing NULL](http://elm-lang.org/guide/model-the-problem#banishing-null)
    *   [Recursive Data Structures](http://elm-lang.org/guide/model-the-problem#recursive-data-structures)
*   [**Architecture**](https://github.com/evancz/elm-architecture-tutorial/)
    *   [**Components**](https://github.com/evancz/elm-architecture-tutorial/#example-1-a-counter)
    *   [**Components with HTTP**](https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer)
    *   [**Components with Animation**](https://github.com/evancz/elm-architecture-tutorial/#example-8-animation)
*   [Reactivity](http://elm-lang.org/guide/reactivity)
    *   [Signals](http://elm-lang.org/guide/reactivity#signals)
    *   [Tasks](http://elm-lang.org/guide/reactivity#tasks)
*   [Interop](http://elm-lang.org/guide/interop)
    *   [HTML Embedding](http://elm-lang.org/guide/interop#html-embedding)
    *   [Ports](http://elm-lang.org/guide/interop#ports)
### Examples
<div class="content" style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 600px; margin: 0px auto;">

# Learn by Example

Walk through a sequence of small examples, building skills one at a time by reading and modifying Elm code in the [online editor](http://elm-lang.org/try).

Remember to check the [syntax reference](http://elm-lang.org/docs/syntax) and [docs](http://elm-lang.org/docs) when you see new syntax or features!

</div>

<div style="color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 600px; margin: 0px auto;">

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### Core

*   functions
    *   [use them](http://elm-lang.org/examples/functions)
    *   [infixes](http://elm-lang.org/examples/infix)
    *   [use fewer parens](http://elm-lang.org/examples/forward-apply)
    *   [define your own](http://elm-lang.org/examples/define-functions)
*   recursion
    *   [list length](http://elm-lang.org/examples/length)
    *   [zip](http://elm-lang.org/examples/zip)
    *   [quick sort](http://elm-lang.org/examples/quick-sort)
    *   [merge sort](http://elm-lang.org/examples/merge-sort)
*   union types
    *   [either](http://elm-lang.org/examples/either)
    *   [binary tree](http://elm-lang.org/examples/binary-tree)
    *   [boolean expressions](http://elm-lang.org/examples/boolean-expressions)

</div>

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### HTML

*   basics
    *   [hello world!](http://elm-lang.org/examples/hello-html)
    *   [unordered list](http://elm-lang.org/examples/unordered-list)
    *   [markdown](http://elm-lang.org/examples/markdown)
*   user input
    *   [buttons](http://elm-lang.org/examples/buttons)
    *   [field](http://elm-lang.org/examples/field)
    *   [password](http://elm-lang.org/examples/password)
    *   [checkboxes](http://elm-lang.org/examples/checkboxes)
    *   [radio buttons](http://elm-lang.org/examples/radio-buttons)
*   larger examples
    *   [dynamic list](https://github.com/evancz/elm-architecture-tutorial/)
    *   [sign up](http://elm-lang.org/examples/sign-up)
    *   [todo list](https://github.com/evancz/elm-todomvc)

</div>

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### Visuals

*   2D graphics
    *   [lines](http://elm-lang.org/examples/lines)
    *   [shapes](http://elm-lang.org/examples/shapes)
    *   [text](http://elm-lang.org/examples/collage-text)
    *   [elements](http://elm-lang.org/examples/collage-element)
    *   [transforms](http://elm-lang.org/examples/transforms)
    *   [color](http://elm-lang.org/examples/color)
    *   [linear gradient](http://elm-lang.org/examples/linear-gradient)
    *   [radial gradient](http://elm-lang.org/examples/radial-gradient)
    *   [texture](http://elm-lang.org/examples/texture)
*   layout
    *   [hello world](http://elm-lang.org/examples/hello-element)
    *   [simple layout](http://elm-lang.org/examples/layout-simple)
    *   [fancier layout](http://elm-lang.org/examples/layout-fancy)
    *   [centering](http://elm-lang.org/examples/centering)

</div>

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### Signals

*   mouse
    *   [position](http://elm-lang.org/examples/mouse-position)
    *   [is down](http://elm-lang.org/examples/mouse-is-down)
    *   [clicks](http://elm-lang.org/examples/mouse-clicks)
    *   [yogi](http://elm-lang.org/examples/resize-yogi)
    *   [tracker](http://elm-lang.org/examples/mouse-tracker)
    *   [stamps](http://elm-lang.org/examples/stamps)
*   window
    *   [size](http://elm-lang.org/examples/resize-paint)
    *   [centering](http://elm-lang.org/examples/window-centering)
*   keyboard
    *   [arrows](http://elm-lang.org/examples/arrows)
    *   [wasd](http://elm-lang.org/examples/wasd)
    *   [keys down](http://elm-lang.org/examples/keys)
    *   [key presses](http://elm-lang.org/examples/key-presses)
*   time
    *   [clock](http://elm-lang.org/examples/clock)

</div>

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### Games

*   simple
    *   [mario](http://elm-lang.org/examples/mario)
    *   [adventure](http://elm-lang.org/examples/adventure)
    *   [pong](http://elm-lang.org/examples/pong)
*   community
    *   [Tetris](https://github.com/jcollard/elmtris)
    *   [Breakout](https://github.com/Dobiasd/Breakout#breakout--play-it)
    *   [Maze](https://github.com/Dobiasd/Maze#maze--play-it)
    *   [Concentration](https://github.com/Dobiasd/Demoscene-Concentration)
    *   [Froggy](https://github.com/thSoft/froggy)
    *   [Hedley](https://github.com/Gizra/elm-hedley)

</div>

<div class="examples" style="width: 300px; display: inline-block; vertical-align: top;">

### Tasks

*   HTTP
    *   [zip codes](http://elm-lang.org/examples/zip-codes)
    *   [flickr](http://elm-lang.org/examples/flickr)

</div>

</div>
### https://pragmaticstudio.com/blog/2014/12/19/getting-started-with-elm
### third part tutorials
# Project Starters
### https://github.com/evancz/elm-architecture-tutorial/
### Archeticture
<table class="highlight tab-size js-file-line-container" data-tab-size="8" style="box-sizing: border-box; tab-size: 8; font-family: Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 13px; line-height: 18.2000007629395px; background-color: rgb(255, 255, 255);">

<tbody style="box-sizing: border-box;">

<tr style="box-sizing: border-box;">

<td id="LC6" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">1\. Model - a full definition of the application's state</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC7" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">2\. Update - a way to step the application state forward</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC8" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">3\. View - a way to visualize our application state with HTML</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC9" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">4\. Inputs - the signals necessary to manage events</span></td>

</tr>

</tbody>

</table>
### Application Skeleton
<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- MODEL</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">type alias</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span> }

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- UPDATE</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">type</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Action</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Reset</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">update</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Action</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">update</span> action model <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">case</span> action <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span>
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Reset</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- VIEW</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">view</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Html</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">view</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span></pre>
### https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer
### I stopped here
### Pattern
### Update
### Moves our application forward
### Model
### Definition of application state
### VIew
### a way to visualize our application state with HTML

### Inputs/Actions
### Signals
### https://github.com/evancz/elm-todomvc
### todo mvc
<table class="highlight tab-size js-file-line-container" data-tab-size="8" style="box-sizing: border-box; tab-size: 8; font-family: Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 13px; line-height: 18.2000007629395px; background-color: rgb(255, 255, 255);">

<tbody style="box-sizing: border-box;">

<tr style="box-sizing: border-box;">

<td id="LC6" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">1\. Model - a full definition of the application's state</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC7" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">2\. Update - a way to step the application state forward</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC8" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">3\. View - a way to visualize our application state with HTML</span></td>

</tr>

<tr style="box-sizing: border-box;">

<td id="LC9" class="blob-code blob-code-inner js-file-line" style="box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">4\. Inputs - the signals necessary to manage events</span></td>

</tr>

</tbody>

</table>
### Update
### Moves our application forward
### Model
### Definition of application state
### VIew
### a way to visualize our application state with HTML

### Inputs
### Signals
### Application Skeleton
<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- MODEL</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">type alias</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span> }

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- UPDATE</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">type</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Action</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Reset</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">update</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Action</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">update</span> action model <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">case</span> action <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span>
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Reset</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span>

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">-- VIEW</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">view</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Model</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">Html</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">view</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
  <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">...</span></pre>
# Pain points
### What the hell are all these arrows
### Simple
### a:List String -> int
### this is a type annotation
### prevents runtime errors
### function a
### takes a list of strings
### returns an int
### String -> Int -> Task
### Takes String and Int and returns a task
### Tagged Unions
### putting a bunch of types together
### http://elm-lang.org/guide/model-the-problem
### http://elm-lang.org/examples/checkboxes
### one of the examples
### updating a record, shortcut? but what's Model here is it to specify the type?
<div>{ model | red <- bool }</div>

<div>it will return a the whole object</div>

<div>this is not OR  

<div><span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">point</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">= { x =</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">3</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">, y =</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">4</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- create a record</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);"></span> <span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">point</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">.x</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- access field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);"></span> <span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">map</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">.x [point,{x=</span><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">0</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">,y=</span><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">0</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}]</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- field access function</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point - x }</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- remove field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point | z =</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">12</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- add field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point - x | z = point.x }</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- rename field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point - x | x =</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">6</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- update field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point | x <-</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">6</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- nicer way to update a field</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{ point | x <- point.x +</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">1</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">, y <- point.y +</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">1</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">}</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- batch update fields</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);"></span> <span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">dist</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">{x,y} = sqrt (x^</span><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">2</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">+ y^</span><span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">2</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">)</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- pattern matching on fields</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">\{x,y} -> (x,y)</span> <span class="hljs-title" style="color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">lib</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">= { id x = x }</span> <span class="hljs-comment" style="color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">-- polymorphic fields</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">(lib.id</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">42</span> <span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">==</span> <span class="hljs-number" style="color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;">42</span><span style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);">) (lib.id [] == [])</span> <span class="hljs-typedef" style="color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;"><span class="hljs-keyword" style="color: rgb(204, 153, 204);">type</span> <span class="hljs-keyword" style="color: rgb(204, 153, 204);">alias</span> <span class="hljs-type">Location</span> = <span class="hljs-container">{ <span class="hljs-title" style="color: rgb(102, 204, 204);">line</span>:<span class="hljs-type">Int</span>, <span class="hljs-title" style="color: rgb(102, 204, 204);">column</span>:<span class="hljs-type">Int</span> }</span></span></div>

</div>
### Elm-Views
### What's address
### I know it's a signal
### How is it routing to an action/update?
### Let ... in syntax?
### Let Expressions

    let n = 42
        (a,b) = (3,4)
        {x,y} = { x=3, y=4 }
        square n = n * n
    in
        square a + square b

Let-expressions are indentation sensitive. Each definition should align with the one above it.
### Signal.forwardTo
### just to forward signals?
### Is main: port: reserved?
