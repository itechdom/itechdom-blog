# Core
### Vnext/ Asp.net 5


In summary, with ASP.NET 5 you gain the following foundational improvements:

*   New light-weight and modular HTTP request pipeline
*   Ability to host on IIS or self-host in your own process
*   Built on .NET Core, which supports true side-by-side app versioning
*   Ships entirely as NuGet packages
*   Integrated support for creating and using NuGet packages
*   Single aligned web stack for Web UI and Web APIs
*   Cloud-ready environment-based configuration
*   Built-in support for dependency injection
*   New tooling that simplifies modern web development
*   Build and run cross-platform ASP.NET apps on Windows, Mac and Linux
*   Open source and community focused


### https://github.com/aspnet/Home/blob/dev/README.md
### DNX
The DNX (a .NET Execution Environment) contains the code required to bootstrap and run an application, including the compilation system, SDK tools, and the native CLR hosts.
### Includes compilation, sdk, CLR
### https://github.com/aspnet/dnx
### DOCS
### http://docs.asp.net/en/latest/conceptual-overview/aspnet.html
### .NET
.NET Core is a small version of the .NET framework that is optimized for web apps and supports Linux and Mac environments  


[.NET Framework Conceptual Overview](https://msdn.microsoft.com/en-us/library/zw4w595w(v=vs.100).aspx)



Introduces the .NET Framework architecture and its features.



[Installing the .NET Framework](https://msdn.microsoft.com/en-us/library/5a4x27ek(v=vs.100).aspx)



Provides information about .NET Framework stand-alone executable and Web bootstrapper packages, language packs, and installation requirements.



[Common Language Runtime (CLR)](https://msdn.microsoft.com/en-us/library/8bs2ecf4(v=vs.100).aspx)



Explains the features and benefits of the common language runtime, a run-time environment that manages the execution of code and provides services that simplify the development process.



[Common Type System](https://msdn.microsoft.com/en-us/library/zcx1eb1e(v=vs.100).aspx)



Identifies the types supported by the common language runtime.



[Metadata and Self-Describing Components](https://msdn.microsoft.com/en-us/library/xcd8txaw(v=vs.100).aspx)



Explains how the .NET Framework simplifies component interoperation by allowing compilers to emit additional declarative information, or metadata, into all modules and assemblies.



[Cross-Language Interoperability](https://msdn.microsoft.com/en-us/library/a2c7tshk(v=vs.100).aspx)



Explains how managed objects created in different programming languages can interact with one another.



[Assemblies in the Common Language Runtime](https://msdn.microsoft.com/en-us/library/k3677y81(v=vs.100).aspx)



Defines the concept of assemblies, which are collections of types and resources that form logical units of functionality. Assemblies are the fundamental units of deployment, version control, reuse, activation scoping, and security permissions.



[Application Domains](https://msdn.microsoft.com/en-us/library/2bh4z9hs(v=vs.100).aspx)



Explains how to use application domains to provide isolation between applications.



[.NET Framework Class Library Overview](https://msdn.microsoft.com/en-us/library/hfa3fa08(v=vs.100).aspx)



Introduces the library of types provided by the .NET Framework, which expedites and optimizes the development process and gives you access to system functionality.



[Runtime Hosts](https://msdn.microsoft.com/en-us/library/a51xd4ze(v=vs.100).aspx)



Describes the runtime hosts supported by the .NET Framework, including ASP.NET, Internet Explorer, and shell executables.



[.NET Framework Guidelines and Best Practices](https://msdn.microsoft.com/en-us/library/ms184412(v=vs.100).aspx)



Provides links to topics that describe principles, tips, and techniques for implementing .NET Framework technologies.



[How-to and Walkthrough Directory](https://msdn.microsoft.com/en-us/library/ms184413(v=vs.100).aspx)



Provides links to topics that provide example code, describe how to perform particular tasks, and describe complete scenarios.



[.NET Framework System Requirements](https://msdn.microsoft.com/en-us/library/8z6watww(v=vs.100).aspx)



Provides hardware, operating system, and software requirements for the .NET Framework.


### CLR
The common language runtime is the foundation of the .NET Framework. You can think of the runtime as an agent that manages code at execution time, providing core services such as memory management, thread management, and remoting, while also enforcing strict type safety and other forms of code accuracy that promote security and robustness. In fact, the concept of code management is a fundamental principle of the runtime. Code that targets the runtime is known as managed code, while code that does not target the runtime is known as unmanaged code. The class library is a comprehensive, object-oriented collection of reusable types that you can use to develop applications ranging from traditional command-line or graphical user interface (GUI) applications to applications based on the latest innovations provided by ASP.NET, such as Web Forms and XML Web services.

You can think of the runtime as an agent that manages code at execution time  


Runs your code, Manages your memeory, enbales cross platform support. You program on any language and CLR handles everything for you.

The common language runtime makes it easy to design components and applications whose objects interact across languages. Objects written in different languages can communicate with each other, and their behaviors can be tightly integrated. For example, you can define a class and then use a different language to derive a class from your original class or call a method on the original class. You can also pass an instance of a class to a method of a class written in a different language. This cross-language integration is possible because language compilers and tools that target the runtime use a common type system defined by the runtime, and they follow the runtime's rules for defining new types, as well as for creating, using, persisting, and binding to types.  


  


Registration information and state data are no longer stored in the registry where they can be difficult to establish and maintain. Instead, information about the types you define (and their dependencies) is stored with the code as metadata, making the tasks of component replication and removal much less complicated.  


  




The runtime provides the following benefits:

*   Performance improvements.

*   The ability to easily use components developed in other languages.

*   Extensible types provided by a class library.

*   Language features such as inheritance, interfaces, and overloading for object-oriented programming.

*   Support for explicit free threading that allows creation of multithreaded, scalable applications.

*   Support for structured exception handling.

*   Support for custom attributes.

*   Garbage collection.

*   Use of delegates instead of function pointers for increased type safety and security. For more information about delegates, see [Common Type System](https://msdn.microsoft.com/en-us/library/zcx1eb1e(v=vs.110).aspx).


### Common Type system
The common type system defines how types are declared, used, and managed in the common language runtime, and is also an important part of the runtime's support for cross-language integration. The common type system performs the following functions:

*   Establishes a framework that helps enable cross-language integration, type safety, and high-performance code execution.

*   Provides an object-oriented model that supports the complete implementation of many programming languages.

*   Defines rules that languages must follow, which helps ensure that objects written in different languages can interact with each other.

*   Provides a library that contains the primitive data types (such as [Boolean](https://msdn.microsoft.com/en-us/library/system.boolean(v=vs.110).aspx), [Byte](https://msdn.microsoft.com/en-us/library/system.byte(v=vs.110).aspx), [Char](https://msdn.microsoft.com/en-us/library/system.char(v=vs.110).aspx), [Int32](https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx), and [UInt64](https://msdn.microsoft.com/en-us/library/system.uint64(v=vs.110).aspx)) used in application development.
### You host the runtime
### Class Library
The .NET Framework class library is a collection of reusable types that tightly integrate with the common language runtime. The class library is object oriented, providing types from which your own managed code can derive functionality. This not only makes the .NET Framework types easy to use, but also reduces the time associated with learning new features of the .NET Framework. In addition, third-party components can integrate seamlessly with classes in the .NET Framework.

For example, the .NET Framework collection classes implement a set of interfaces that you can use to develop your own collection classes. Your collection classes will blend seamlessly with the classes in the .NET Framework.

As you would expect from an object-oriented class library, the .NET Framework types enable you to accomplish a range of common programming tasks, including tasks such as string management, data collection, database connectivity, and file access. In addition to these common tasks, the class library includes types that support a variety of specialized development scenarios. For example, you can use the .NET Framework to develop the following types of applications and services:

*   Console applications. See [Building Console Applications](https://msdn.microsoft.com/en-us/library/f492ca1w(v=vs.100).aspx).

*   Windows GUI applications (Windows Forms). See [Windows Forms](https://msdn.microsoft.com/en-us/library/dd30h2yb(v=vs.100).aspx).

*   Windows Presentation Foundation (WPF) applications. See [Introduction to WPF](https://msdn.microsoft.com/en-us/library/aa970268(v=vs.100).aspx).

*   ASP.NET applications. See [ASP.NET Web Pages](https://msdn.microsoft.com/en-us/library/fddycb06(v=vs.100).aspx).

*   Web services. See [ASP.NET Web Services](https://msdn.microsoft.com/en-us/library/t745kdsh(v=vs.100).aspx).

*   Windows services. See [Introduction to Windows Service Applications](https://msdn.microsoft.com/en-us/library/d56de412(v=vs.100).aspx).

*   Service-oriented applications using Windows Communication Foundation (WCF). See [Windows Communication Foundation](https://msdn.microsoft.com/en-us/library/dd456779(v=vs.100).aspx).

*   Workflow-enabled applications using Windows Workflow Foundation (WF). See [Windows Workflow Foundation](https://msdn.microsoft.com/en-us/library/dd489441(v=vs.100).aspx).

For example, the Windows Forms classes are a comprehensive set of reusable types that vastly simplify Windows GUI development. If you write an ASP.NET Web Form application, you can use the Web Forms classes.
### Arechtictural view
### https://i-msdn.sec.s-msft.com/dynimg/IC104620.gif
### QUESTIONS I HAVE
Not sure the steps of execution:

is it :

CLR -> Compiler -> Assembly

or 

Compiler -> CLR -> Assembly ?
# Project Starters
### https://www.nuget.org/packages/Boilerplate.Web.Mvc5/
### https://visualstudiogallery.msdn.microsoft.com/6cf50a48-fc1e-4eaf-9e82-0b2a6705ca7d
# Programmed in
### C#
### Tutorials Point
### http://www.tutorialspoint.com/csharp/
### MSDN
### https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx
### Other
### Vb.net
