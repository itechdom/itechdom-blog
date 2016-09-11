# Concepts
### Differences with JavaScript


## Literals









JavaScript

Elm





`3`

`3`





`3.1415`

`3.1415`





`"Hello world!"`

`"Hello world!"`





Multiline strings not widely supported

`"""multiline string"""`





`'Hello world!'`

Cannot use single quotes for strings





No distinction between characters and strings

`'a'`





`true`

`True`





`[1,2,3]`

`[1,2,3]`













## Objects / Records









JavaScript

Elm





`{ x: 3, y: 4 }`

`{ x = 3, y = 4 }`





`point.x`

`point.x`





`point.x = 42`

`{ point | x 













## Functions









JavaScript

Elm





`function(x,y) { return x + y; }`

`\x y -> x + y`





`Math.max(3, 4)`

`max 3 4`





`Math.min(1, Math.pow(2, 4))`

`min 1 (2^4)`





`numbers.map(Math.sqrt)`

`List.map sqrt numbers`





`points.map(function(p) { return p.x })`

`List.map .x points`













## Control Flow









JavaScript

Elm





`3 > 2 ? 'cat' : 'dog'`

`if 3 > 2 then "cat" else "dog"`





`var x = 42; ...`

`let x = 42 in ...`





`return 42`

Everything is an expression, no need for return













## Strings









JavaScript

Elm





`'abc' + '123'`

`"abc" ++ "123"`





`'abc'.length`

`String.length "abc"`





`'abc'.toUpperCase()`

`String.toUpper "abc"`





`'abc' + 123`

`"abc" ++ toString 123`










### records
you can define a record like this:

bill = {name = "gates"}

access with:

bill.name

or

.name bill

to update

{ bill | name  "Nye" }  


  


It is important to notice that we do not make _destructive_ updates. In other words, when we update some fields of `bill` we actually create a new record rather than overwriting the existing one. Elm makes this efficient by sharing as much content as possible. If you update one of ten fields, the new record will share all of the nine unchanged values.  

### Contracts
fortyTwo : Int  fortyTwo = 42

  


  

### type annotation
### to rule out runtime errors
### you can define your own type?
view : Widget -> Element

view widget =

    case widget of

      ScatterPlot points ->

          viewScatterPlot points

  


      LogData logs ->

          flow down (map viewLog logs)

  


      TimePlot occurances ->

          viewTimePlot occurances
### Immutability
### Signals and Addresses
### Functions
import Graphics.Element exposing (..)

import Keyboard

main : Signal Element

main =

  Signal.map show(Keyboard.arrows)

we omit the parentheses for the method nam

also show is actually under Graphics.Element.show
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


# Learn by Example

Walk through a sequence of small examples, building skills one at a time by reading and modifying Elm code in the [online editor](http://elm-lang.org/try).

Remember to check the [syntax reference](http://elm-lang.org/docs/syntax) and [docs](http://elm-lang.org/docs) when you see new syntax or features!







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





### Tasks

*   HTTP
    *   [zip codes](http://elm-lang.org/examples/zip-codes)
    *   [flickr](http://elm-lang.org/examples/flickr)




### https://pragmaticstudio.com/blog/2014/12/19/getting-started-with-elm
### third part tutorials
# Project Starters
### https://github.com/evancz/elm-architecture-tutorial/
### Archeticture






1\. Model - a full definition of the application's state







2\. Update - a way to step the application state forward







3\. View - a way to visualize our application state with HTML







4\. Inputs - the signals necessary to manage events






### Application Skeleton
-- MODEL

type alias Model = { ... }

-- UPDATE

type Action = Reset | ...

update : Action -> Model -> Model
update action model =
  case action of
    Reset -> ...
    ...

-- VIEW

view : Model -> Html
view =
  ...
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






1\. Model - a full definition of the application's state







2\. Update - a way to step the application state forward







3\. View - a way to visualize our application state with HTML







4\. Inputs - the signals necessary to manage events






### Update
### Moves our application forward
### Model
### Definition of application state
### VIew
### a way to visualize our application state with HTML

### Inputs
### Signals
### Application Skeleton
-- MODEL

type alias Model = { ... }

-- UPDATE

type Action = Reset | ...

update : Action -> Model -> Model
update action model =
  case action of
    Reset -> ...
    ...

-- VIEW

view : Model -> Html
view =
  ...
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
{ model | red 

it will return a the whole object

this is not OR  

point = { x = 3, y = 4 } -- create a record  point.x -- access field  map .x [point,{x=0,y=0}] -- field access function { point - x } -- remove field { point | z = 12 } -- add field { point - x | z = point.x } -- rename field { point - x | x = 6 } -- update field { point | x  6 } -- nicer way to update a field { point | x  1 , y  1 } -- batch update fields  dist {x,y} = sqrt (x^2 + y^2) -- pattern matching on fields \{x,y} -> (x,y) lib = { id x = x } -- polymorphic fields (lib.id 42 == 42) (lib.id [] == []) type alias Location = { line:Int, column:Int }


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
