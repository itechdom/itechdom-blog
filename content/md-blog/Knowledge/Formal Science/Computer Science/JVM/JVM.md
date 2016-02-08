# Intro
### What's JavaScript
> <span id="docs-internal-guid-d499e770-7436-1deb-17ec-631fa62e6aa6">  
> </span>

<span id="docs-internal-guid-d499e770-7436-1deb-17ec-631fa62e6aa6">

1.  <div style="margin-left: -20px;">

    <div data-dobid="dfn" style="display: inline;">We saw before how we used html and css to display things on the browser</div>

    </div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">the browser essentially reads the html and css and figure out how to display them</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">example:</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;"><style></span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">p{</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">font-size:80px</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">}</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;"></style></span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;"> <p>hello world</p></span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">with Javascript: we telling the browser to do more things than just display this text or any other html elements:</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">things like: go to javascript and where to find it</span></font></div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

<div>JavaScript is a programming language with syntax. just like a real language.</div>

2.  <div class="lr_dct_sf_sen vk_txt" style="padding-top: 10px; font-weight: lighter !important;">

    <div style="margin-left: 20px;">

    <div style="margin-left: -20px;">

    <div data-dobid="dfn" style="display: inline;">a programming language commonly used to create interactive websites. Using HTML and CSS only is very limited in their own way. You can use HTML and CSS to achieve a lot of things, but unfortunately this falls short in many Cases. This is when JavaScript comes in handy.</div>

    </div>

    </div>

    </div>

<div><font color="#222222" face="arial, sans-serif" size="2"><span style="line-height: 15.6000003814697px;">  
</span></font></div>

</span>
### What does Javascript Do and Where do you find it?
<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_You find it in many places:_</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;"></span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_Slide show images, _</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_clicking on something and doing something,_</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_Creating online games,_</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_creating Mobile apps (New)_</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">_this slide show is created by JavaScript_</span></div>

<div><span style="font-size: 15px; font-family: Verdana; color: rgb(0, 0, 0); font-weight: bold; vertical-align: baseline; white-space: pre-wrap;"></span></div>
### How is JavaScript written: in Statements 
<div>we load javascript same way we load css files. </div>

<div>The browser reads the script file line by line. these are essentially instructions. If it succeeds, the browser will show no error. If it fails we can examine the error in the console</div>

How does the browser read those statments: Sequantially, line by line.

<div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The rules for valid format and combinations of instructions is called a </span>_computer language_<span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">, sometimes referred to as its</span>_syntax_<span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.</span>  
</div>

<div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">  
</span></div>

<div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">as you go, you will be able to gather different concepts into a knowledge</span></div>

<div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">  
</span></div>

<div><span style="font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">  
</span></div>

<div>

<table style="margin: 0px; padding: 0px; border: 0px; font-size: 12px; vertical-align: baseline; font-family: Tahoma, Geneva, Arial, sans-serif; line-height: 12px; background-color: rgb(255, 255, 255);">

<tbody style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">

<tr style="margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">

<td class="answercell" style="margin: 0px; padding: 0px; border: 0px; vertical-align: top;">

<div class="post-text" itemprop="text" style="margin: 0px 5px 5px 0px; padding: 0px; border: 0px; font-size: 14px; vertical-align: baseline; width: 660px; word-wrap: break-word; line-height: 18.2000007629395px;">

I write very, very detailed instructions for a very, very dumb machine

</div>

</td>

</tr>

</tbody>

</table>

</div>
### Write gibberish statement and see if the browser shows an error
For accessing the command line. type CMD+SHIFT+ the letter i
### showing and hiding images as we click
# Concepts
### Archeticture Image
### http://www.tutorialspoint.com/android/images/architecture.jpg
### Linux Based
### Main Libraries
### Java Based
## Android Libraries

This category encompasses those Java-based libraries that are specific to Android development. Examples of libraries in this category include the application framework libraries in addition to those that facilitate user interface building, graphics drawing and database access. A summary of some key core Android libraries available to the Android developer is as follows −

*   **android.app** − Provides access to the application model and is the cornerstone of all Android applications.

*   **android.content** − Facilitates content access, publishing and messaging between applications and application components.

*   **android.database** − Used to access data published by content providers and includes SQLite database management classes.

*   **android.opengl** − A Java interface to the OpenGL ES 3D graphics rendering API.

*   **android.os** − Provides applications with access to standard operating system services including messages, system services and inter-process communication.

*   **android.text** − Used to render and manipulate text on a device display.

*   **android.view** − The fundamental building blocks of application user interfaces.

*   **android.widget** − A rich collection of pre-built user interface components such as buttons, labels, list views, layout managers, radio buttons etc.

*   **android.webkit** − A set of classes intended to allow web-browsing capabilities to be built into applications.
### VM
### Dalvik
### Application Components
There are following four main components that can be used within an Android application:

<table class="table table-bordered" style="box-sizing: border-box; border-collapse: collapse; width: 604px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); color: rgb(49, 49, 49); font-family: 'Open Sans', Arial, sans-serif; line-height: 22px;">

<tbody style="box-sizing: border-box;">

<tr style="box-sizing: border-box;">

<th style="box-sizing: border-box; line-height: 1.42857143; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); width: 150px; background: rgb(238, 238, 238);">Components</th>

<th style="box-sizing: border-box; line-height: 1.42857143; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); background: rgb(238, 238, 238);">Description</th>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Activities</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">They dictate the UI and handle the user interaction to the smart phone screen</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Services</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">They handle background processing associated with an application.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Broadcast Receivers</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">They handle communication between Android OS and applications.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Content Providers</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">They handle data and database management issues.</td>

</tr>

</tbody>

</table>

<div>

## Additional Components

There are additional components which will be used in the construction of above mentioned entities, their logic, and wiring between them. These components are −

<table class="table table-bordered" style="box-sizing: border-box; border-collapse: collapse; width: 604px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); color: rgb(49, 49, 49); font-family: 'Open Sans', Arial, sans-serif; line-height: 22px;">

<tbody style="box-sizing: border-box;">

<tr style="box-sizing: border-box;">

<th style="box-sizing: border-box; line-height: 1.42857143; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); background: rgb(238, 238, 238);">Components</th>

<th style="box-sizing: border-box; line-height: 1.42857143; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); background: rgb(238, 238, 238);">Description</th>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Fragments</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Represents a portion of user interface in an Activity.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Views</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">UI elements that are drawn on-screen including buttons, lists forms etc.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Layouts</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">View hierarchies that control screen format and appearance of the views.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Intents</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Messages wiring components together.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Resources</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">External elements, such as strings, constants and drawable pictures.</td>

</tr>

<tr style="box-sizing: border-box;">

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Manifest</td>

<td style="box-sizing: border-box; line-height: 1.42857143; border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221);">Configuration file for the application.  

</td>

</tr>

</tbody>

</table>

</div>
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
<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;">An Android </span>**Intent**<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;"> is an abstract description of an operation to be performed. It can be used with </span>**startActivity**<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;"> to launch an Activity, </span>**broadcastIntent**<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;"> to send it to any interested BroadcastReceiver components, and </span>**startService(Intent)**<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;"> or </span>**bindService(Intent, ServiceConnection, int) **<span style="color: rgb(0, 0, 0); font-family: 'Open Sans', Arial, sans-serif; line-height: 24px; text-align: justify;">to communicate with a background Service.</span>
### used to signify some intent or action to be performed
# Java
### Core
### Variables and Box Analogy
Variable Name: Box Label

<div>Inside the box is the value</div>

<div>values can be either a number or a string. A String is called that because it's a string of chars.</div>

<div>Example: </div>

<div>var a = 2</div>

<div>----------------</div>

<div>          2           </div>

<div>----------------</div>

<div>if you want to get what's inside the box "a"</div>

<div>you just do this:</div>

<div>a ! that simple</div>
### Data Types
String, Number For now
### Store variables and display them
Write a program that will create different variables and use Alert to display those values
### Number (Math) Expressions and String Expressions
<div>Don't be alarmed, this is just  
</div>

<div>+ - * /</div>

<div>String Expressions is just adding Strings together. This is when the difference between a text and a number comes in. If you add two strings together you join them.</div>
### life time supply example
Reference an HTML element and then apply a style
### If statments and logic
Comparisions and Logic

<div>Write it out as words first the convert it to JavaScript untill you get used to it</div>

<div>If bananas are greater than 5 then display the result</div>

<div>if bananas > 5 {</div>

<div>

> <div>alert "you need more bananas"</div>

</div>

<div>}</div>

<div>else (any other case){</div>

<div>alert "you have enough bananas"</div>

<div>}</div>
### Check the supply of Bananas and display something
### Functions
<div>Functions are like recepies that are repeated in your application. When you make hard boiled eggs what do you do? this could be like a function? a list of instructions that we store in a recepie that yield some result</div>

<div>this is how we tell the browser to store it:</div>

<div>for example function a ( )</div>

<div>take a value</div>

<div>multiply it with 2</div>

<div>return the value to whoever called it</div>

<div>ingridents are the variables we pass to the function </div>

<div>the food that's made is what the function returns</div>

<div>list of examples</div>

<div>sometimes we buy food that's already made so we don't have to make anything.</div>

<div>sometimes you call function without knowing what they contain, which is something we do all the time in programming</div>

<div>think of functions as factories that have a collection of statments</div>

<div>it could take a box and modify it then return a new box</div>

<div>It's like a belt, on one end there's processing, on the other there's a box</div>

<div>Some factories don't accept boxes, they produce them.</div>

<div>you can package it as you like</div>

<div>Example</div>

<div>var a = "hello"</div>

<div>alert "hello"</div>

<div>Instead of writing this every time, we can store it in a box (variable) and retrieve it late</div>

<div>by doing this</div>

<div>function BoxLabel ( ){</div>

<div>var a = "help"</div>

<div>alert a</div>

<div>}</div>

<div>BoxLabel ( )</div>

<div>How do I make functions even more powerfull, make them a little more useful, abstract, lets say you want to add two numbers together and you want the user to supply the numbers and you get the results</div>

<div>this is usefull, because it make it easy to call that box and make it easier for people to reuse it for any two numbers.</div>

<div>  
Example:</div>

<div>function addTwoNumbers(a,b){</div>

<div>return a+b</div>

<div>}</div>

<div>results =  addTwoNumbers(1,2)</div>

<div>alert results</div>
### Store the functions to calculate the bananas to make your program simpler
### Global Scope and Function Scope
whatever boxes we have in the factory (function), we can't access outside of it.

<div>function {</div>

<div>a = 2  
</div>

<div>}</div>
### Loops
sometimes we need to repeat statements instead of copying and pasting them 

<div>so if I wanted to write hello 20 times, I would do something like this</div>

<div>log hello</div>

<div>log hello</div>

<div>log hello</div>

<div>what if we </div>
### Arrays
Numbered Shelfs and contains boxes 0,1,2,3,4 ... etc
### Objects
<div>think of objects as any entity that has properties, a person is an object, a car is an object. Anything that you can describe could be an object.</div>

<div>This how we create objects in JS</div>

<div>{</div>

<div>name: "hello"</div>

<div>age: 21</div>

<div>}</div>

We move to a more complex example here, we have a box and inside of that box is a Person! WHAAAT?!!!!

<div>Each person has name, age</div>
### Array Of Objects
Box with people on Shelves
# Project Starters
### https://github.com/AndroidBootstrap/android-bootstrap
### Seems to include many open source projects. Although it has its own way of doing things
