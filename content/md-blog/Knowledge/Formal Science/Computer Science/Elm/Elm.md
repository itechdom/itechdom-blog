# Concepts
### Differences with JavaScript
LiteralsJavaScriptElm333.14153.1415"Hello world!""Hello world!"Multiline strings not widely supported"""multiline string"""'Hello world!'Cannot use single quotes for stringsNo distinction between characters and strings'a'trueTrue[1,2,3][1,2,3]Objects / RecordsJavaScriptElm{ x: 3, y: 4 }{ x = 3, y = 4 }point.xpoint.xpoint.x = 42{ point | x  x + yMath.max(3, 4)max 3 4Math.min(1, Math.pow(2, 4))min 1 (2^4)numbers.map(Math.sqrt)List.map sqrt numberspoints.map(function(p) { return p.x })List.map .x pointsControl FlowJavaScriptElm3 > 2 ? 'cat' : 'dog'if 3 > 2 then "cat" else "dog"var x = 42; ...let x = 42 in ...return 42Everything is an expression, no need for returnStringsJavaScriptElm'abc' + '123'"abc" ++ "123"'abc'.lengthString.length "abc"'abc'.toUpperCase()String.toUpper "abc"'abc' + 123"abc" ++ toString 123
### records
you can define a record like this:bill = {name = "gates"}access with:bill.nameor.name billto update{ bill | name <- "Nye" }It is important to notice that we do not make destructive updates. In other words, when we update some fields of bill we actually create a new record rather than overwriting the existing one. Elm makes this efficient by sharing as much content as possible. If you update one of ten fields, the new record will share all of the nine unchanged values.
### Contracts
fortyTwo : Int fortyTwo = 42
### type annotation
### to rule out runtime errors
### you can define your own type?
view : Widget -> Elementview widget =    case widget of      ScatterPlot points ->          viewScatterPlot points      LogData logs ->          flow down (map viewLog logs)      TimePlot occurances ->          viewTimePlot occurances
### Immutability
### Signals and Addresses
### Functions
import Graphics.Element exposing (..)import Keyboardmain : Signal Elementmain =  Signal.map show(Keyboard.arrows)we omit the parentheses for the method namalso show is actually under Graphics.Element.show
# Packages
### Signal
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Signal
### Website
### http://package.elm-lang.org/packages/elm-lang/core/3.0.0
# Resources
### Complete Guide
Complete GuideCore LanguageValuesFunctionsIf ExpressionsListsTuplesRecordsModel The ProblemContractsEnumerationsState MachinesTagged UnionsBanishing NULLRecursive Data StructuresArchitectureComponentsComponents with HTTPComponents with AnimationReactivitySignalsTasksInteropHTML EmbeddingPorts
### Examples
Learn by ExampleWalk through a sequence of small examples, building skills one at a time by reading and modifying Elm code in the online editor.Remember to check the syntax reference and docs when you see new syntax or features!Corefunctionsuse theminfixesuse fewer parensdefine your ownrecursionlist lengthzipquick sortmerge sortunion typeseitherbinary treeboolean expressionsHTMLbasicshello world!unordered listmarkdownuser inputbuttonsfieldpasswordcheckboxesradio buttonslarger examplesdynamic listsign uptodo listVisuals2D graphicslinesshapestextelementstransformscolorlinear gradientradial gradienttexturelayouthello worldsimple layoutfancier layoutcenteringSignalsmousepositionis downclicksyogitrackerstampswindowsizecenteringkeyboardarrowswasdkeys downkey pressestimeclockGamessimplemarioadventurepongcommunityTetrisBreakoutMazeConcentrationFroggyHedleyTasksHTTPzip codesflickr
### https://pragmaticstudio.com/blog/2014/12/19/getting-started-with-elm
### third part tutorials
# Project Starters
### https://github.com/evancz/elm-architecture-tutorial/
### Archeticture
1\. Model - a full definition of the application's state 2\. Update - a way to step the application state forward 3\. View - a way to visualize our application state with HTML 4\. Inputs - the signals necessary to manage events
### Application Skeleton
-- MODEL type alias Model = { ... } -- UPDATE type Action = Reset | ... update : Action -> Model -> Model update action model = case action of Reset -> ... ... -- VIEW view : Model -> Html view = ...
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
1\. Model - a full definition of the application's state 2\. Update - a way to step the application state forward 3\. View - a way to visualize our application state with HTML 4\. Inputs - the signals necessary to manage events
### Update
### Moves our application forward
### Model
### Definition of application state
### VIew
### a way to visualize our application state with HTML

### Inputs
### Signals
### Application Skeleton
-- MODEL type alias Model = { ... } -- UPDATE type Action = Reset | ... update : Action -> Model -> Model update action model = case action of Reset -> ... ... -- VIEW view : Model -> Html view = ...
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
{ model | red  (x,y) lib = { id x = x } -- polymorphic fields (lib.id 42 == 42) (lib.id [] == []) type alias Location = { line:Int, column:Int }
### Elm-Views
### What's address
### I know it's a signal
### How is it routing to an action/update?
### Let ... in syntax?
Let Expressionslet n = 42 (a,b) = (3,4) {x,y} = { x=3, y=4 } square n = n * n in square a + square b Let-expressions are indentation sensitive. Each definition should align with the one above it.
### Signal.forwardTo
### just to forward signals?
### Is main: port: reserved?
