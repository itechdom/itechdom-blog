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
### Intent/ Filters
An Android Intent is an abstract description of an operation to be performed. It can be used with startActivity to launch an Activity, broadcastIntent to send it to any interested BroadcastReceiver components, and startService(Intent) or bindService(Intent, ServiceConnection, int) to communicate with a background Service.
### used to signify some intent or action to be performed
### Fragments
### Sub-Activity
### has a life cycle
### one activity can have many fragments
### Similar to directives
### reusable and modular
### Android Manifest
# Java
### Core
# in scala
### http://macroid.github.io/index.html
### https://github.com/pfn/android-sdk-plugin
### android-sdk-plugin
### https://github.com/lihaoyi/scala.rx
### scala.rx
# Project Starters
### https://github.com/AndroidBootstrap/android-bootstrap
### Seems to include many open source projects. Although it has its own way of doing things
