# Concepts
## Archeticture Image
### http://www.tutorialspoint.com/android/images/architecture.jpg
### Linux Based
## Main Libraries
### Java Based
<h2>Android Libraries</h2><p>This category encompasses those Java-based libraries that are specific to Android development. Examples of libraries in this category include the application framework libraries in addition to those that facilitate user interface building, graphics drawing and database access. A summary of some key core Android libraries available to the Android developer is as follows &#x2212;</p><ul class="list"><li><p><b>android.app</b>&#xA0;&#x2212; Provides access to the application model and is the cornerstone of all Android applications.</p></li><li><p><b>android.content</b>&#xA0;&#x2212; Facilitates content access, publishing and messaging between applications and application components.</p></li><li><p><b>android.database</b>&#xA0;&#x2212; Used to access data published by content providers and includes SQLite database management classes.</p></li><li><p><b>android.opengl</b>&#xA0;&#x2212; A Java interface to the OpenGL ES 3D graphics rendering API.</p></li><li><p><b>android.os</b>&#xA0;&#x2212; Provides applications with access to standard operating system services including messages, system services and inter-process communication.</p></li><li><p><b>android.text</b>&#xA0;&#x2212; Used to render and manipulate text on a device display.</p></li><li><p><b>android.view</b>&#xA0;&#x2212; The fundamental building blocks of application user interfaces.</p></li><li><p><b>android.widget</b>&#xA0;&#x2212; A rich collection of pre-built user interface components such as buttons, labels, list views, layout managers, radio buttons etc.</p></li><li><p><b>android.webkit</b>&#xA0;&#x2212; A set of classes intended to allow web-browsing capabilities to be built into applications.</p></li></ul>
## VM
### Dalvik
## Application Components
<p>There are following four main components that can be used within an Android application:</p><table class="table table-bordered"><tbody><tr><th>Components</th><th>Description</th></tr><tr><td>Activities</td><td>They dictate the UI and handle the user interaction to the smart phone screen</td></tr><tr><td>Services</td><td>They handle background processing associated with an application.</td></tr><tr><td>Broadcast Receivers</td><td>They handle communication between Android OS and applications.</td></tr><tr><td>Content Providers</td><td>They handle data and database management issues.</td></tr></tbody></table><br><div><h2>Additional Components</h2><p>There are additional components which will be used in the construction of above mentioned entities, their logic, and wiring between them. These components are &#x2212;</p><table class="table table-bordered"><tbody><tr><th>Components</th><th>Description</th></tr><tr><td>Fragments</td><td>Represents a portion of user interface in an Activity.</td></tr><tr><td>Views</td><td>UI elements that are drawn on-screen including buttons, lists forms etc.</td></tr><tr><td>Layouts</td><td>View hierarchies that control screen format and appearance of the views.</td></tr><tr><td>Intents</td><td>Messages wiring components together.</td></tr><tr><td>Resources</td><td>External elements, such as strings, constants and drawable pictures.</td></tr><tr><td>Manifest</td><td>Configuration file for the application.<br><br></td></tr></tbody></table></div>
### Activities
#### Converted by Dalvik and run
##### Has a life cycle
#### Equvilant to a process running by the JVM
### Services
#### a separate process running that has a life cycle
### Resources
### Broadcast Recievers
#### notifications
### Content Provider
#### share content with other apps
##### including db
### Intent/ Filters
#### used to signify some intent or action to be performed
<span>An Android&#xA0;</span><b>Intent</b><span>&#xA0;is an abstract description of an operation to be performed. It can be used with&#xA0;</span><b>startActivity</b><span>&#xA0;to launch an Activity,&#xA0;</span><b>broadcastIntent</b><span>&#xA0;to send it to any interested BroadcastReceiver components, and&#xA0;</span><b>startService(Intent)</b><span>&#xA0;or&#xA0;</span><b>bindService(Intent, ServiceConnection, int)&#xA0;</b><span>to communicate with a background Service.</span>
### Fragments
#### Sub-Activity
##### has a life cycle
#### one activity can have many fragments
#### Similar to directives
#### reusable and modular
## Android Manifest
# Java
## Core
# Project Starters
## https://github.com/AndroidBootstrap/android-bootstrap
### Seems to include many open source projects. Although it has its own way of doing things
