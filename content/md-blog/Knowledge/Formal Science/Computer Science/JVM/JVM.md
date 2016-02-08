# Intro
### What's JavaScript
We saw before how we used html and css to display things on the browserthe browser essentially reads the html and css and figure out how to display themexample:p{font-size:80px} 

hello world

with Javascript: we telling the browser to do more things than just display this text or any other html elements:things like: go to javascript and where to find itJavaScript is a programming language with syntax. just like a real language.a programming language commonly used to create interactive websites. Using HTML and CSS only is very limited in their own way. You can use HTML and CSS to achieve a lot of things, but unfortunately this falls short in many Cases. This is when JavaScript comes in handy.
### What does Javascript Do and Where do you find it?
You find it in many places:Slide show images, clicking on something and doing something,Creating online games,creating Mobile apps (New)this slide show is created by JavaScript
### How is JavaScript written: in Statements 
we load javascript same way we load css files. The browser reads the script file line by line. these are essentially instructions. If it succeeds, the browser will show no error. If it fails we can examine the error in the consoleHow does the browser read those statments: Sequantially, line by line.The rules for valid format and combinations of instructions is called a computer language, sometimes referred to as itssyntax, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.as you go, you will be able to gather different concepts into a knowledgeI write very, very detailed instructions for a very, very dumb machine
### Write gibberish statement and see if the browser shows an error
For accessing the command line. type CMD+SHIFT+ the letter i
### showing and hiding images as we click
# Concepts
### Archeticture Image
### http://www.tutorialspoint.com/android/images/architecture.jpg
### Linux Based
### Main Libraries
### Java Based
Android LibrariesThis category encompasses those Java-based libraries that are specific to Android development. Examples of libraries in this category include the application framework libraries in addition to those that facilitate user interface building, graphics drawing and database access. A summary of some key core Android libraries available to the Android developer is as follows −android.app − Provides access to the application model and is the cornerstone of all Android applications.android.content − Facilitates content access, publishing and messaging between applications and application components.android.database − Used to access data published by content providers and includes SQLite database management classes.android.opengl − A Java interface to the OpenGL ES 3D graphics rendering API.android.os − Provides applications with access to standard operating system services including messages, system services and inter-process communication.android.text − Used to render and manipulate text on a device display.android.view − The fundamental building blocks of application user interfaces.android.widget − A rich collection of pre-built user interface components such as buttons, labels, list views, layout managers, radio buttons etc.android.webkit − A set of classes intended to allow web-browsing capabilities to be built into applications.
### VM
### Dalvik
### Application Components
There are following four main components that can be used within an Android application:ComponentsDescriptionActivitiesThey dictate the UI and handle the user interaction to the smart phone screenServicesThey handle background processing associated with an application.Broadcast ReceiversThey handle communication between Android OS and applications.Content ProvidersThey handle data and database management issues.Additional ComponentsThere are additional components which will be used in the construction of above mentioned entities, their logic, and wiring between them. These components are −ComponentsDescriptionFragmentsRepresents a portion of user interface in an Activity.ViewsUI elements that are drawn on-screen including buttons, lists forms etc.LayoutsView hierarchies that control screen format and appearance of the views.IntentsMessages wiring components together.ResourcesExternal elements, such as strings, constants and drawable pictures.ManifestConfiguration file for the application.
### Activities
### Converted by Dalvik and run
### Has a life cycle
### Equvilant to a process running by the JVM
### Services
### a separate process running that has a life cycle
### Resources
### Broadcast Recievers
### notifications
### Content Provider
### share content with other apps
### including db
### Fragments
### Sub-Activity
### has a life cycle
### one activity can have many fragments
### Intent/ Filters
An Android Intent is an abstract description of an operation to be performed. It can be used with startActivity to launch an Activity, broadcastIntent to send it to any interested BroadcastReceiver components, and startService(Intent) or bindService(Intent, ServiceConnection, int) to communicate with a background Service.
### used to signify some intent or action to be performed
# Java
### Core
### Variables and Box Analogy
Variable Name: Box LabelInside the box is the valuevalues can be either a number or a string. A String is called that because it's a string of chars.Example: var a = 2----------------          2           ----------------if you want to get what's inside the box "a"you just do this:a ! that simple
### Data Types
String, Number For now
### Store variables and display them
Write a program that will create different variables and use Alert to display those values
### Number (Math) Expressions and String Expressions
Don't be alarmed, this is just+ - * /String Expressions is just adding Strings together. This is when the difference between a text and a number comes in. If you add two strings together you join them.
### life time supply example
Reference an HTML element and then apply a style
### If statments and logic
Comparisions and LogicWrite it out as words first the convert it to JavaScript untill you get used to itIf bananas are greater than 5 then display the resultif bananas > 5 {alert "you need more bananas"}else (any other case){alert "you have enough bananas"}
### Check the supply of Bananas and display something
### Functions
Functions are like recepies that are repeated in your application. When you make hard boiled eggs what do you do? this could be like a function? a list of instructions that we store in a recepie that yield some resultthis is how we tell the browser to store it:for example function a ( )take a valuemultiply it with 2return the value to whoever called itingridents are the variables we pass to the function the food that's made is what the function returnslist of examplessometimes we buy food that's already made so we don't have to make anything.sometimes you call function without knowing what they contain, which is something we do all the time in programmingthink of functions as factories that have a collection of statmentsit could take a box and modify it then return a new boxIt's like a belt, on one end there's processing, on the other there's a boxSome factories don't accept boxes, they produce them.you can package it as you likeExamplevar a = "hello"alert "hello"Instead of writing this every time, we can store it in a box (variable) and retrieve it lateby doing thisfunction BoxLabel ( ){var a = "help"alert a}BoxLabel ( )How do I make functions even more powerfull, make them a little more useful, abstract, lets say you want to add two numbers together and you want the user to supply the numbers and you get the resultsthis is usefull, because it make it easy to call that box and make it easier for people to reuse it for any two numbers.Example:function addTwoNumbers(a,b){return a+b} results =  addTwoNumbers(1,2)alert results
### Store the functions to calculate the bananas to make your program simpler
### Global Scope and Function Scope
whatever boxes we have in the factory (function), we can't access outside of it.function {a = 2}
### Loops
sometimes we need to repeat statements instead of copying and pasting them so if I wanted to write hello 20 times, I would do something like thislog hellolog hellolog hellowhat if we
### Arrays
Numbered Shelfs and contains boxes 0,1,2,3,4 ... etc
### Objects
think of objects as any entity that has properties, a person is an object, a car is an object. Anything that you can describe could be an object.This how we create objects in JS{name: "hello"age: 21}We move to a more complex example here, we have a box and inside of that box is a Person! WHAAAT?!!!!Each person has name, age
### Array Of Objects
Box with people on Shelves
# Project Starters
### https://github.com/AndroidBootstrap/android-bootstrap
### Seems to include many open source projects. Although it has its own way of doing things
