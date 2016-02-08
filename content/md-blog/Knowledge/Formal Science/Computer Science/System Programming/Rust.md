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
