# Intro
# What's JavaScript
# What does Javascript Do and Where do you find it?
### How is JavaScript written: in Statements 
<div>we load javascript same way we load css files.&nbsp;</div><div><br></div><div>The browser reads the script file line by line. these are essentially instructions. If it succeeds, the browser will show no error. If it fails we can examine the error in the console</div><div><br></div>How does the browser read those statments: Sequantially, line by line.<div><br></div><div><br></div><div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The rules for valid format and combinations of instructions is called a&nbsp;</span><em style="box-sizing: border-box; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">computer language</em><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">, sometimes referred to as its</span><em style="box-sizing: border-box; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">syntax</em><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.</span><br></div><div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><br></span></div><div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">as you go, you will be able to gather different concepts into a knowledge</span></div><div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><br></span></div><div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><br></span></div><div><table style="margin: 0px; padding: 0px; border: 0px; font-size: 12px; vertical-align: baseline; font-family: Tahoma, Geneva, Arial, sans-serif; line-height: 12px; background-color: rgb(255, 255, 255);"><tbody style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;"><tr style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;"><td class="answercell" style="margin: 0px; padding: 0px; border: 0px; vertical-align: top;"><div class="post-text" itemprop="text" style="margin: 0px 5px 5px 0px; padding: 0px; border: 0px; font-size: 14px; vertical-align: baseline; width: 660px; word-wrap: break-word; line-height: 18.2000007629395px;"><p style="margin-bottom: 1em; padding: 0px; border: 0px; vertical-align: baseline; clear: both;"><br class="Apple-interchange-newline">I write very, very detailed instructions for a very, very dumb machine</p></div></td></tr></tbody></table></div>
### Write gibberish statement and see if the browser shows an error
For accessing the command line. type CMD+SHIFT+ the letter i
### showing and hiding images as we click
# Core
# Variables and Box Analogy
### Data Types
String, Number For now
### Store variables and display them
Write a program that will create different variables and use Alert to display those values
### Number (Math) Expressions and String Expressions
<div>Don't be alarmed, this is just<br></div><div>+ - * /</div><div><br></div><div><br></div><div>String Expressions is just adding Strings together. This is when the difference between a text and a number comes in. If you add two strings together you join them.</div>
### life time supply example
Reference an HTML element and then apply a style
### If statments and logic
Comparisions and Logic<div><br></div><div>Write it out as words first the convert it to JavaScript untill you get used to it</div><div><br></div><div><br></div><div><br></div><div>If bananas are greater than 5 then display the result</div><div><br></div><div>if bananas &gt; 5 {</div><div><br></div><div><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>alert "you need more bananas"</div></blockquote></div><div><br></div><div>}</div><div><br></div><div><br></div><div>else (any other case){</div><div><br></div><div>alert "you have enough bananas"</div><div><br></div><div>}</div>
### Check the supply of Bananas and display something
### Functions
<div>Functions are like recepies that are repeated in your application. When you make hard boiled eggs what do you do? this could be like a function? a list of instructions that we store in a recepie that yield some result</div><div><br></div><div>this is how we tell the browser to store it:</div><div><br></div><div>for example function a ( )</div><div>take a value</div><div>multiply it with 2</div><div>return the value to whoever called it</div><div><br></div><div>ingridents are the variables we pass to the function&nbsp;</div><div><br></div><div>the food that's made is what the function returns</div><div><br></div><div>list of examples</div><div><br></div><div>sometimes we buy food that's already made so we don't have to make anything.</div><div><br></div><div><br></div><div>sometimes you call function without knowing what they contain, which is something we do all the time in programming</div><div><br></div><div><br></div><div>think of functions as factories that have a collection of statments</div><div>it could take a box and modify it then return a new box</div><div>It's like a belt, on one end there's processing, on the other there's a box</div><div><br></div><div>Some factories don't accept boxes, they produce them.</div><div><br></div><div>you can package it as you like</div><div><br></div><div><br></div><div>Example</div><div><br></div><div>var a = "hello"</div><div>alert "hello"</div><div><br></div><div>Instead of writing this every time, we can store it in a box (variable) and retrieve it late</div><div><br></div><div>by doing this</div><div><br></div><div>function BoxLabel ( ){</div><div><br></div><div>var a = "help"</div><div>alert a</div><div><br></div><div>}</div><div><br></div><div>BoxLabel ( )</div><div><br></div><div>How do I make functions even more powerfull, make them a little more useful, abstract, lets say you want to add two numbers together and you want the user to supply the numbers and you get the results</div><div><br></div><div>this is usefull, because it make it easy to call that box and make it easier for people to reuse it for any two numbers.</div><div><br>Example:</div><div><br></div><div>function addTwoNumbers(a,b){</div><div>return a+b</div><div>}</div><div>&nbsp;</div><div>results = &nbsp;addTwoNumbers(1,2)</div><div><br></div><div>alert results</div>
### Store the functions to calculate the bananas to make your program simpler
### Global Scope and Function Scope
whatever boxes we have in the factory (function), we can't access outside of it.<div><br></div><div>function {</div><div><br></div><div>a = 2<br></div><div><br></div><div>}</div>
### Loops
sometimes we need to repeat statements instead of copying and pasting them&nbsp;<div><br></div><div>so if I wanted to write hello 20 times, I would do something like this</div><div><br></div><div>log hello</div><div>log hello</div><div>log hello</div><div><br></div><div><br></div><div>what if we&nbsp;</div>
### Arrays
Numbered Shelfs and contains boxes 0,1,2,3,4 ... etc
### Objects
<div>think of objects as any entity that has properties, a person is an object, a car is an object. Anything that you can describe could be an object.</div><div><br></div><div>This how we create objects in JS</div><div><br></div><div>{</div><div>name: "hello"</div><div>age: 21</div><div>}</div><div><br></div>We move to a more complex example here, we have a box and inside of that box is a Person! WHAAAT?!!!!<div><br></div><div>Each person has name, age</div>
### Array Of Objects
Box with people on Shelves
### DOM
<ul><li>Show the DOM</li><li>Explain that it's composed of objects</li><li>Explain what interactions is made to manipulate the DOM</li><li>DOM is just a list of elements connected together they call it a tree. Where there are children and parents [insert DOM picture here]</li></ul>
### TODO list
# ES6
# Thrid Party
# jQuery
### API
Is a way to access data in other web systems. Meetup website for example. The web is full of apis that you can leverage:<div><br></div><div>Facebook</div><div>twitter</div><div>google</div><div>foursquare</div><div>etc</div>
### jQuery and Ajax
jQuery has a function called ajax that we call to request data from meetup. Let's see how we do that<div><br></div><div>$.ajax</div><div>{</div><div><br></div><div><br></div><div><br></div><div>}</div>
# Angularjs
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
# RxJS
### Concepts
### Streams
### Observables
### Resources
### Xgroammer book
### http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/index.html
### Projects
### WiredUp
### https://github.com/itechdom/rx-examples.git
### Concepts
### Components directly facing the DOM
### Visualize your program
### Custom Elements
### Virtual DOM
### UI Builder
### There's a React One
### https://github.com/ipselon/react-ui-builder
# React
# Famous.io
### Concepts
### Webgl + DOM Rendering
# Design Patterns
# https://carldanley.com/javascript-design-patterns/
