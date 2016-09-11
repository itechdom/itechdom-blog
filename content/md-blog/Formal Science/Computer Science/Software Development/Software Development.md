# Concepts
### Patterns
# Design Patterns



In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.

### Uses of Design Patterns

Design patterns can speed up the development process by providing tested, proven development paradigms. Effective software design requires considering issues that may not become visible until later in the implementation. Reusing design patterns helps to prevent subtle issues that can cause major problems and improves code readability for coders and architects familiar with the patterns.

Often, people only understand how to apply certain software design techniques to certain problems. These techniques are difficult to apply to a broader range of problems. Design patterns provide general solutions, documented in a format that doesn't require specifics tied to a particular problem.

In addition, patterns allow developers to communicate using well-known, well understood names for software interactions. Common design patterns can be improved over time, making them more robust than ad-hoc designs.

### [Creational design patterns](https://sourcemaking.com/design_patterns/creational_patterns)

These design patterns are all about class instantiation. This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.

[![Example of Abstract Factory](https://sourcemaking.com/files/v2/content/patterns/Abstract_Factory_example1.svg)](https://sourcemaking.com/design_patterns/abstract_factory)

*   [Abstract Factory](https://sourcemaking.com/design_patterns/abstract_factory "Provides a way to encapsulate a group of individual factories that have a common theme.")  
    Creates an instance of several families of classes
*   [Builder](https://sourcemaking.com/design_patterns/builder "Separate the construction of a complex object from its representation so that the same construction process can create different representations.")  
    Separates object construction from its representation
*   [Factory Method](https://sourcemaking.com/design_patterns/factory_method "Defines a separate method for creating the objects, which subclasses can then override to specify the derived type of product that will be created.")  
    Creates an instance of several derived classes
*   [Object Pool](https://sourcemaking.com/design_patterns/object_pool "Avoid expensive acquisition and release of resources by recycling objects that are no longer in use")  
    Avoid expensive acquisition and release of resources by recycling objects that are no longer in use
*   [Prototype](https://sourcemaking.com/design_patterns/prototype "Being cloned to produce new objects.")  
    A fully initialized instance to be copied or cloned
*   [Singleton](https://sourcemaking.com/design_patterns/singleton "Restricts instantiation of a class to one object.")  
    A class of which only a single instance can exist

### [Structural design patterns](https://sourcemaking.com/design_patterns/structural_patterns)

These design patterns are all about Class and Object composition. Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.

[![](https://sourcemaking.com/files/v2/content/patterns/Decorator_example.svg)](https://sourcemaking.com/design_patterns/decorator)

*   [Adapter](https://sourcemaking.com/design_patterns/adapter "Adapts one interface for a class into one that a client expects.")  
    Match interfaces of different classes
*   [Bridge](https://sourcemaking.com/design_patterns/bridge "Decouples an abstraction from its implementation so that the two can vary independently.")  
    Separates an object’s interface from its implementation
*   [Composite](https://sourcemaking.com/design_patterns/composite "Designed as a composition of one-or-more similar objects, all exhibiting similar functionality.")  
    A tree structure of simple and composite objects
*   [Decorator](https://sourcemaking.com/design_patterns/decorator "Allows new/additional behavior to be added to an existing method of an object dynamically.")  
    Add responsibilities to objects dynamically
*   [Facade](https://sourcemaking.com/design_patterns/facade "Provides a simplified interface to a larger body of code.")  
    A single class that represents an entire subsystem
*   [Flyweight](https://sourcemaking.com/design_patterns/flyweight "When many objects must be manipulated and these cannot afford to have extraneous data, flyweight is appropriate.")  
    A fine-grained instance used for efficient sharing
*   [![](https://sourcemaking.com/files/v2/content/patterns/Proxy_example1.svg)](https://sourcemaking.com/design_patterns/proxy)

    [Private Class Data](https://sourcemaking.com/design_patterns/private_class_data "Restricts accessor/mutator access")  
    Restricts accessor/mutator access
*   [Proxy](https://sourcemaking.com/design_patterns/proxy "Class functioning as an interface to another thing.")  
    An object representing another object

### [Behavioral design patterns](https://sourcemaking.com/design_patterns/behavioral_patterns)

These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

[![](https://sourcemaking.com/files/v2/content/patterns/Interpreter_example1.svg)](https://sourcemaking.com/design_patterns/interpreter)

*   [Chain of responsibility](https://sourcemaking.com/design_patterns/chain_of_responsibility "Source of command objects and a series of processing objects.")  
    A way of passing a request between a chain of objects
*   [Command](https://sourcemaking.com/design_patterns/command "Objects are used to represent actions.")  
    Encapsulate a command request as an object
*   [Interpreter](https://sourcemaking.com/design_patterns/interpreter "The basic idea is to implement a specialized computer language to rapidly solve a defined class of problems.")  
    A way to include language elements in a program
*   [Iterator](https://sourcemaking.com/design_patterns/iterator "Used to access the elements of an aggregate object sequentially without exposing its underlying representation.")  
    Sequentially access the elements of a collection
*   [Mediator](https://sourcemaking.com/design_patterns/mediator "Provides a unified interface to a set of interfaces in a subsystem.")  
    Defines simplified communication between classes
*   [Memento](https://sourcemaking.com/design_patterns/memento "Provides the ability to restore an object to its previous state.")  
    Capture and restore an object's internal state
*   [Null Object](https://sourcemaking.com/design_patterns/null_object "Designed to act as a default value of an object.")  
    Designed to act as a default value of an object
*   [Observer](https://sourcemaking.com/design_patterns/observer "Observes the state of an object in a program.")  
    A way of notifying change to a number of classes
*   [![](https://sourcemaking.com/files/v2/content/patterns/State_example1.svg)](https://sourcemaking.com/design_patterns/state)

    [State](https://sourcemaking.com/design_patterns/state "Represent the state of an object.")  
    Alter an object's behavior when its state changes
*   [Strategy](https://sourcemaking.com/design_patterns/strategy "Algorithms can be selected on-the-fly at runtime.")  
    Encapsulates an algorithm inside a class
*   [Template method](https://sourcemaking.com/design_patterns/template_method "A template method defines the skeleton of an algorithm.")  
    Defer the exact steps of an algorithm to a subclass
*   [Visitor](https://sourcemaking.com/design_patterns/visitor "A way of separating an algorithm from an object structure.")  
    Defines a new operation to a class without change


### Architectural patterns


An **architectural pattern** is a general, reusable solution to a commonly occurring problem in[software architecture](https://en.m.wikipedia.org/wiki/Software_architecture "Software architecture") within a given context.[[1]](https://en.m.wikipedia.org/wiki/Architectural_pattern#cite_note-TMD-1)Architectural patterns are similar to software [design patterns](https://en.m.wikipedia.org/wiki/Design_pattern_(computer_science) "Design pattern (computer science)") but have a broader scope. The architectural patterns address various issues in [software engineering](https://en.m.wikipedia.org/wiki/Software_engineering "Software engineering"), such as [computer hardware](https://en.m.wikipedia.org/wiki/Computer_hardware "Computer hardware")performance limitations, [high availability](https://en.m.wikipedia.org/wiki/High_availability "High availability") and minimization of a [business risk](https://en.m.wikipedia.org/wiki/Business_risk "Business risk"). Some architectural patterns have been implemented within [software frameworks](https://en.m.wikipedia.org/wiki/Software_framework "Software framework").


### https://en.m.wikipedia.org/wiki/Architectural_pattern
### Has all archetictural patterns
### Design patterns
### https://sourcemaking.com/design_patterns
### Comprehensive list of all patterns in software
### Dependency injection
### http://stackoverflow.com/questions/130794/what-is-dependency-injection
### Paradigms






[Programming paradigms](https://en.wikipedia.org/wiki/Programming_paradigm "Programming paradigm")







*   [Action](https://en.wikipedia.org/wiki/Action_language "Action language")
*   [Agent-oriented](https://en.wikipedia.org/wiki/Agent-oriented_programming "Agent-oriented programming")
*   [Array-oriented](https://en.wikipedia.org/wiki/Array_programming "Array programming")
*   [Automata-based](https://en.wikipedia.org/wiki/Automata-based_programming "Automata-based programming")
*   [Concurrent computing](https://en.wikipedia.org/wiki/Concurrent_computing "Concurrent computing")
    *   [Relativistic programming](https://en.wikipedia.org/wiki/Relativistic_programming "Relativistic programming")
*   [Data-driven](https://en.wikipedia.org/wiki/Data-driven_programming "Data-driven programming")
*   [Declarative](https://en.wikipedia.org/wiki/Declarative_programming "Declarative programming") (contrast: [Imperative](https://en.wikipedia.org/wiki/Imperative_programming "Imperative programming"))
    *   [Constraint](https://en.wikipedia.org/wiki/Constraint_programming "Constraint programming")
    *   [Dataflow](https://en.wikipedia.org/wiki/Dataflow_programming "Dataflow programming")
        *   [Flow-based](https://en.wikipedia.org/wiki/Flow-based_programming "Flow-based programming")
        *   Cell-oriented ([spreadsheets](https://en.wikipedia.org/wiki/Spreadsheet "Spreadsheet"))
        *   [Reactive](https://en.wikipedia.org/wiki/Reactive_programming "Reactive programming")
    *   Functional
        *   [Functional logic](https://en.wikipedia.org/wiki/Functional_logic_programming "Functional logic programming")
    *   [Logic](https://en.wikipedia.org/wiki/Logic_programming "Logic programming")
        *   [Abductive logic](https://en.wikipedia.org/wiki/Abductive_logic_programming "Abductive logic programming")
        *   [Answer set](https://en.wikipedia.org/wiki/Answer_set_programming "Answer set programming")
        *   [Concurrent logic](https://en.wikipedia.org/wiki/Concurrent_logic_programming "Concurrent logic programming")
        *   [Constraint logic](https://en.wikipedia.org/wiki/Constraint_logic_programming "Constraint logic programming")
            *   [Concurrent constraint logic](https://en.wikipedia.org/wiki/Concurrent_constraint_logic_programming "Concurrent constraint logic programming")
        *   [Functional logic](https://en.wikipedia.org/wiki/Functional_logic_programming "Functional logic programming")
        *   [Inductive logic](https://en.wikipedia.org/wiki/Inductive_logic_programming "Inductive logic programming")
*   [End-user programming](https://en.wikipedia.org/wiki/End-user_development "End-user development")
*   [Event-driven](https://en.wikipedia.org/wiki/Event-driven_programming "Event-driven programming")
    *   [Service-oriented](https://en.wikipedia.org/wiki/Service-oriented_architecture "Service-oriented architecture")
    *   [Time-driven](https://en.wikipedia.org/wiki/Time-driven_programming "Time-driven programming")
*   [Expression-oriented](https://en.wikipedia.org/wiki/Expression-oriented_programming_language "Expression-oriented programming language")
*   [Feature-oriented](https://en.wikipedia.org/wiki/Feature-oriented_programming "Feature-oriented programming")
*   [Function-level](https://en.wikipedia.org/wiki/Function-level_programming "Function-level programming") (contrast: [Value-level](https://en.wikipedia.org/wiki/Value-level_programming "Value-level programming"))
*   [Generic](https://en.wikipedia.org/wiki/Generic_programming "Generic programming")
*   [Imperative](https://en.wikipedia.org/wiki/Imperative_programming "Imperative programming") (contrast: [Declarative](https://en.wikipedia.org/wiki/Declarative_programming "Declarative programming"))
    *   [Literate](https://en.wikipedia.org/wiki/Literate_programming "Literate programming")
    *   [Procedural](https://en.wikipedia.org/wiki/Procedural_programming "Procedural programming")
*   [Language-oriented](https://en.wikipedia.org/wiki/Language-oriented_programming "Language-oriented programming")
    *   [Natural language programming](https://en.wikipedia.org/wiki/Natural_language_programming "Natural language programming")
    *   [Discipline-specific](https://en.wikipedia.org/wiki/Service-oriented_modeling#Discipline-specific_modeling "Service-oriented modeling")
    *   [Domain-specific](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language")
    *   [Grammar-oriented](https://en.wikipedia.org/wiki/Grammar-oriented_programming "Grammar-oriented programming")
        *   [Dialecting](https://en.wikipedia.org/wiki/Dialecting "Dialecting")
    *   [Intentional](https://en.wikipedia.org/wiki/Intentional_programming "Intentional programming")
*   [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming "Metaprogramming")
    *   [Automatic](https://en.wikipedia.org/wiki/Automatic_programming "Automatic programming")
    *   [Reflective](https://en.wikipedia.org/wiki/Reflection_(computer_programming) "Reflection (computer programming)")
        *   [Attribute-oriented](https://en.wikipedia.org/wiki/Attribute-oriented_programming "Attribute-oriented programming")
    *   [Homoiconic](https://en.wikipedia.org/wiki/Homoiconicity "Homoiconicity")
    *   [Template](https://en.wikipedia.org/wiki/Template_metaprogramming "Template metaprogramming")
        *   [Policy-based](https://en.wikipedia.org/wiki/Policy-based_design "Policy-based design")
*   [Non-structured](https://en.wikipedia.org/wiki/Non-structured_programming "Non-structured programming") (contrast: [Structured](https://en.wikipedia.org/wiki/Structured_programming "Structured programming"))
    *   [Array](https://en.wikipedia.org/wiki/Array_programming "Array programming")
*   [Nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_programming "Nondeterministic programming")
*   [Parallel computing](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing")
    *   [Process-oriented](https://en.wikipedia.org/wiki/Process-oriented_programming "Process-oriented programming")
*   [Point-free style](https://en.wikipedia.org/wiki/Tacit_programming "Tacit programming")
    *   [Concatenative](https://en.wikipedia.org/wiki/Concatenative_programming_language "Concatenative programming language")
*   [Semantic](https://en.wikipedia.org/wiki/Semantic-oriented_programming "Semantic-oriented programming")
*   [Structured](https://en.wikipedia.org/wiki/Structured_programming "Structured programming") (contrast: [Non-structured](https://en.wikipedia.org/wiki/Non-structured_programming "Non-structured programming"))
    *   [Block-structured](https://en.wikipedia.org/wiki/Block_(programming) "Block (programming)")
    *   [Modular](https://en.wikipedia.org/wiki/Modular_programming "Modular programming") (contrast: [Monolithic](https://en.wikipedia.org/wiki/Monolithic_application "Monolithic application"))
    *   [Object-oriented (OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming")
        *   [Class-based](https://en.wikipedia.org/wiki/Class-based_programming "Class-based programming")
        *   [Concurrent](https://en.wikipedia.org/wiki/Concurrent_object-oriented_programming "Concurrent object-oriented programming")
        *   [Prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming "Prototype-based programming")
        *   By [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns "Separation of concerns"):
            *   [Aspect-oriented](https://en.wikipedia.org/wiki/Aspect-oriented_programming "Aspect-oriented programming")
            *   [Role-oriented](https://en.wikipedia.org/wiki/Role-oriented_programming "Role-oriented programming")
            *   [Subject-oriented](https://en.wikipedia.org/wiki/Subject-oriented_programming "Subject-oriented programming")
    *   [Recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science) "Recursion (computer science)")
*   [Value-level](https://en.wikipedia.org/wiki/Value-level_programming "Value-level programming") (contrast: [Function-level](https://en.wikipedia.org/wiki/Function-level_programming "Function-level programming"))
*   [Probabilistic](https://en.wikipedia.org/wiki/Probabilistic_programming_language "Probabilistic programming language")
*   [Concept](https://en.wikipedia.org/wiki/Concept_programming "Concept programming")








### Functional Reactive Programming
### Object Oriented Programming
### Functional Programming
### Tree Talk
### https://github.com/rlt3/tree-talk
### Skills
General skills that help you as a programmer
### Pattern Recognition
recognizing errors

recognizing a pattern in a program and how it runs
### building blocks
Knowing the architecture of software and how to build off of blocks
### Experimentation/ be creative
### Learning From others
### logic/ problem solving
### Learning from mistakes
### Self Teaching
### People Interaction?
### Naming Things/ Conveying complex metaphysical concepts
### types of programming
### Mobile Application Development
### iOS
### Objective-C
### Swift
### PhoneGap
### My iOS Road
### https://drive.google.com/open?id=0B9tPYCpuqoIrQTdkSnlWVmxEUk0
### Android
### Java
### Phonegap
### My Android Road
### https://drive.google.com/open?id=0B9tPYCpuqoIrVTNYWVMwaEpoaVE
### Windows 10 Mobile
### Ubuntu
### Web Programming
### JavaScript
### https://drive.google.com/open?id=0B9tPYCpuqoIrMmVrZGltZ3NRZkU
### System Programming
### https://drive.google.com/open?id=0B9tPYCpuqoIrOC0xc09EMy1fUDg
### Visual Programming
### https://developers.google.com/blockly/
### Blocky By Google
### Scratch
### The idea behind visual programming
### http://removingalldoubt.com/programming/2015/07/30/a-touchy-subject/
### List of programming languages
### https://en.m.wikipedia.org/wiki/Category:Lists_of_programming_languages
### UI should match the physical world
### Data Structures and Algorithms
### Graph
### the internet
### there's usually a data structure on top of the graph?
# Resources
### Video Series
### Code Genius
### Code curry
### Basics
Variables, types, operators/ flow control (and, or,if,else...)

, loops, functions

  

error handling, objects, classes, interface, inheritance


### Wikiversity Courses
### https://en.wikiversity.org/wiki/Introduction_to_Programming
### https://en.wikiversity.org/wiki/Introduction_to_Algorithms
### https://en.wikiversity.org/wiki/Programming_Logic
### http://www.tutorialspoint.com/computer_programming/
### Tutorials Point
### https://en.m.wikipedia.org/wiki/Computer_programming
### Wikipedia intro to computer programming
### https://www.edx.org/course/introduction-computer-science-harvardx-cs50x
### http://www.learnhowtobecome.org/computer-programmer/
### How to Become a programmer
### https://github.com/alehander42/hivemind/blob/master/README.md
### multi-syntax language
### Learn many languages
### https://learnxinyminutes.com/
### Data Structures and Algorithms
### https://github.com/thejameskyle/itsy-bitsy-data-structures/blob/master/itsy-bitsy-data-structures.js
### Super tiny Compilers
### https://github.com/thejameskyle/the-super-tiny-compiler
# Pain Points
### What's an installer?
# third party
### Editors
### Vim
### https://drive.google.com/open?id=0B9tPYCpuqoIrMVBMd1J3RTJ4WEU
