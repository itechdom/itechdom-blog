# Operating Systems
*   [Operating systems](https://en.m.wikipedia.org/wiki/Operating_systems "Operating systems") – set of software that manages computer hardware resources and provides common services for computer programs
### My OS Road
### https://drive.google.com/open?id=0B9tPYCpuqoIramtYcGVPUngtZjA
# Computer Archeticture
### Software Arecheticture
### Domain Driven Design
### http://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon-ebook/dp/B00BCLEBN8/ref=sr_1_3?s=digital-text&ie=UTF8&qid=1449423098&sr=1-3
### Book
### https://en.wikipedia.org/wiki/Software_architecture
### making early on decision for the structure of systems
### Based on Stakeholders needs
### Activities
## Architecture activities[[edit](https://en.wikipedia.org/w/index.php?title=Software_architecture&action=edit&section=5 "Edit section: Architecture activities")]

There are many activities that a software architect performs. A software architect typically works with project managers, discusses architecturally significant requirements with stakeholders, designs a software architecture, evaluates a design, communicates with designers and stakeholders, documents the architectural design and more.[[22]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-Kruchten_2008-22) There are four core activities in software architecture design.[[23]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-hofmeister07-23) These core architecture activities are performed iteratively and at different stages of the initial software development life-cycle, as well as over the evolution of a system.

**Architectural Analysis** is the process of understanding the environment in which a proposed system or systems will operate and determining the requirements for the system. The input or requirements to the analysis activity can come from any number of stakeholders and include items such as:

*   what the system will do when operational (the functional requirements)
*   how well the system will perform runtime non-functional requirements such as reliability, operability, performance efficiency, security, compatibility defined in [ISO/IEC 25010](https://en.wikipedia.org/wiki/ISO/IEC_25010 "ISO/IEC 25010"):2011 standard [[24]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-ISO25010-24)
*   development-time non-functional requirements such as maintainability and transferability defined in ISO 25010:2011 standard [[24]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-ISO25010-24)
*   business requirements and environmental contexts of a system that may change over time, such as legal, social, financial, competitive, and technology concerns [[25]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-25)

**Architectural Synthesis** or design is the process of creating an architecture. Given the architecturally significant requirements determined by the analysis, the current state of the design and the results of any evaluation activities, the design is created and improved. See [[3]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-SAP2-3):pp.311–326[[23]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-hofmeister07-23) for a discussion of various techniques for improving a current design.

**Architecture Evaluation** is the process of determining how well the current design or a portion of it satisfies the requirements derived during analysis. An evaluation can occur whenever an architect is considering a design decision, it can occur after some portion of the design has been completed, it can occur after the final design has been completed or it can occur after the system has been constructed. Some of the available software architecture evaluation techniques include [Architecture Tradeoff Analysis Method (ATAM)](https://en.wikipedia.org/wiki/Architecture_tradeoff_analysis_method "Architecture tradeoff analysis method") and TARA.[[26]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-woods2012-26) Frameworks for comparing the techniques are discussed in frameworks such as SARA Report [[15]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-SARA-15) and Architecture reviews: practice and experience.[[27]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-27)

**Architecture Evolution** is the process of maintaining and adapting an existing software architecture to meet requirement and environmental changes. As software architecture provides a fundamental structure of a software system, its evolution and maintenance would necessarily impact its fundamental structure. As such, architecture evolution is concerned with adding new functionality as well as maintaining existing functionality and system behaviour.

Architecture requires critical supporting activities. These supporting activities take place throughout the core software architecture process. They include knowledge management and communication, design reasoning and decision making, and documentation.
### Styles and Patterns
### Architectural styles and patterns[[edit](https://en.wikipedia.org/w/index.php?title=Software_architecture&action=edit&section=12 "Edit section: Architectural styles and patterns")]

### 

Main article: [Software Architecture styles and patterns](https://en.wikipedia.org/wiki/Software_Architecture_styles_and_patterns "Software Architecture styles and patterns")

An [architectural pattern](https://en.wikipedia.org/wiki/Architectural_pattern "Architectural pattern") is a general, reusable solution to a commonly occurring problem in software architecture within a given context. Architectural patterns are often documented as software [design patterns](https://en.wikipedia.org/wiki/Design_pattern_(computer_science) "Design pattern (computer science)").

Following traditional building architecture, a 'software architectural style' is a specific method of construction, characterized by the features that make it notable" ([Architectural style](https://en.wikipedia.org/wiki/Architectural_style "Architectural style")). "An architectural style defines: a family of systems in terms of a pattern of structural organization; a vocabulary of components and connectors, with constraints on how they can be combined."[[31]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-SG-31)"Architectural styles are reusable 'packages' of design decisions and constraints that are applied to an architecture to induce chosen desirable qualities."[[32]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-32)

There are many recognized architectural patterns and styles, among them:

*   [Blackboard](https://en.wikipedia.org/wiki/Blackboard_(computing) "Blackboard (computing)")
*   [Client-server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model "Client–server model") (2-tier, [3-tier](https://en.wikipedia.org/wiki/Three-tier_(computing) "Three-tier (computing)"), [n-tier](https://en.wikipedia.org/wiki/N-tier "N-tier"), [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing "Cloud computing") exhibit this style)
*   [Component-based](https://en.wikipedia.org/wiki/Software_componentry "Software componentry")
*   [Data-centric](https://en.wikipedia.org/wiki/Database-centric_architecture "Database-centric architecture")
*   [Event-driven](https://en.wikipedia.org/wiki/Event-driven_architecture "Event-driven architecture") (or [Implicit invocation](https://en.wikipedia.org/wiki/Implicit_invocation "Implicit invocation"))
*   [Layered](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Layered_architecture "Abstraction (computer science)") (or [Multilayered architecture](https://en.wikipedia.org/wiki/Multilayered_architecture "Multilayered architecture"))
*   [Monolithic application](https://en.wikipedia.org/wiki/Monolithic_application "Monolithic application")
*   [Peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer "Peer-to-peer") (P2P)
*   [Pipes and filters](https://en.wikipedia.org/wiki/Pipes_and_filters "Pipes and filters")
*   [Plug-ins](https://en.wikipedia.org/wiki/Plug-in_(computing) "Plug-in (computing)")
*   [Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer "Representational state transfer") (REST)
*   [Rule-based](https://en.wikipedia.org/wiki/Rule-based_system "Rule-based system")
*   [Service-oriented](https://en.wikipedia.org/wiki/Service-oriented_architecture "Service-oriented architecture")
*   [Microservices architecture](https://en.wikipedia.org/wiki/Microservices "Microservices")
*   [Shared nothing architecture](https://en.wikipedia.org/wiki/Shared_nothing_architecture "Shared nothing architecture")
*   [Space-based architecture](https://en.wikipedia.org/wiki/Space-based_architecture "Space-based architecture")

Some treat architectural patterns and architectural styles as the same,[[33]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-MSDN-33) some treat styles as specializations of patterns. What they have in common is both patterns and styles are idioms for architects to use, they "provide a common language"[[33]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-MSDN-33) or "vocabulary"[[31]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-SG-31) with which to describe classes of systems.
### https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns
### further resource
### Reflection
# Reflection (computer programming)



From Wikipedia, the free encyclopedia

[](https://en.wikipedia.org/wiki/Reflection_(computer_programming)#mw-head)[](https://en.wikipedia.org/wiki/Reflection_(computer_programming)#p-search)



In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **reflection** is the ability of a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program") to examine (see [type introspection](https://en.wikipedia.org/wiki/Type_introspection "Type introspection")) and modify its own structure and behavior (specifically the values, meta-data, properties and functions) at [runtime](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)").[[1]](https://en.wikipedia.org/wiki/Reflection_(computer_programming)#cite_note-1)




### Ability of a program to change its behavior on run time
### Example
## Examples[[edit](https://en.wikipedia.org/w/index.php?title=Reflection_(computer_programming)&action=edit&section=4 "Edit section: Examples")]

The following code snippets create an [instance](https://en.wikipedia.org/wiki/Instance_(computer_science) "Instance (computer science)") `foo` of [class](https://en.wikipedia.org/wiki/Class_(computer_science) "Class (computer science)") `Foo`, and invoke its [method](https://en.wikipedia.org/wiki/Method_(computer_science) "Method (computer science)") `hello`. For each [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language"), normal and reflection-based call sequences are shown.

### ECMAScript[[edit](https://en.wikipedia.org/w/index.php?title=Reflection_(computer_programming)&action=edit&section=5 "Edit section: ECMAScript")]

The following is an example in [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript "ECMAScript"), and therefore also applies to [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") and [ActionScript](https://en.wikipedia.org/wiki/ActionScript "ActionScript"):



// Without reflection
new Foo.hello()

// With reflection

// assuming that Foo resides in this
new this['Foo']['hello']()

// or without assumption
new (eval('Foo'))['hello']()

// or simply
eval('new Foo.hello()')


### + agile
### Software architecture and agile development[[edit](https://en.wikipedia.org/w/index.php?title=Software_architecture&action=edit&section=13 "Edit section: Software architecture and agile development")]

Main article: [Agile development](https://en.wikipedia.org/wiki/Agile_development "Agile development")

There are also concerns that software architecture leads to too much [Big Design Up Front](https://en.wikipedia.org/wiki/Big_Design_Up_Front "Big Design Up Front"), especially among proponents of [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development "Agile software development"). A number of methods have been developed to balance the trade-offs of up-front design and agility,[[34]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-Boehm2004-34) including the agile method [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method "Dynamic systems development method") which mandates a "Foundations" phase during which "just enough" architectural foundations are laid. [IEEE Software](https://en.wikipedia.org/wiki/IEEE_Software "IEEE Software") devoted a special issue[[35]](https://en.wikipedia.org/wiki/Software_architecture#cite_note-35) to the interaction between agility and architecture.
### Big design upfront
### Not adaptive
### Behavior Driven Development
# Information Systems
*   [Information systems](https://en.m.wikipedia.org/wiki/Information_systems "Information systems") – study of complementary networks of hardware and software that people and organizations use to collect, filter, process, create, and distribute data
    *   [Business informatics](https://en.m.wikipedia.org/wiki/Business_informatics "Business informatics") – discipline combining information technology (IT), informatics and management concepts.
    *   [Information technology](https://en.m.wikipedia.org/wiki/Outline_of_information_technology "Outline of information technology") –
    *   [Management information systems](https://en.m.wikipedia.org/wiki/Management_information_systems "Management information systems") – provides information that is needed to manage organizations efficiently and effectively
    *   [Health informatics](https://en.m.wikipedia.org/wiki/Health_informatics "Health informatics") – discipline at the intersection of information science, computer science, and health care.
# Software Development
*   [Programming languages](https://en.m.wikipedia.org/wiki/Programming_languages "Programming languages") – artificial language designed to communicate instructions to a machine, particularly a computer
    *   [Programming paradigms](https://en.m.wikipedia.org/wiki/Programming_paradigms "Programming paradigms") – fundamental style of computer programming
        *   [Object-oriented programming](https://en.m.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming") – programming paradigm using "objects" – data structures consisting of data fields and methods together with their interactions – to design applications and computer programs
        *   [Functional programming](https://en.m.wikipedia.org/wiki/Functional_programming "Functional programming") – programming paradigm that treats computation as the evaluation of mathematical functions and avoids state and mutable data
    *   [Program semantics](https://en.m.wikipedia.org/wiki/Program_semantics "Program semantics") – field concerned with the rigorous mathematical study of the meaning of programming languages
    *   [Type theory](https://en.m.wikipedia.org/wiki/Type_theory "Type theory") – any of several formal systems that can serve as alternatives to naive set theory, or the study of such formalisms in general
    *   [Compilers](https://en.m.wikipedia.org/wiki/Compilers "Compilers") – computer program (or set of programs) that transforms source code written in a programming language (the source language) into another computer language (the target language, often having a binary form known as object code)
    *   [Concurrent programming languages](https://en.m.wikipedia.org/wiki/Concurrent_computing#Concurrent_programming_languages "Concurrent computing") – form of computing in which programs are designed as collections of interacting computational processes that may be executed in parallel
### Functional Programming
### https://drive.google.com/open?id=0B9tPYCpuqoIrVUdXYUZ1b1c1SjA
# Human Computer Interaction
*   [Human-computer interaction](https://en.m.wikipedia.org/wiki/Human-computer_interaction "Human-computer interaction") – study, planning, and design of the interaction between people (users) and computers.
    *   [Numerical analysis](https://en.m.wikipedia.org/wiki/Numerical_analysis "Numerical analysis") – study of algorithms that use numerical approximation (as opposed to general symbolic manipulations) for the problems of mathematical analysis (as distinguished from discrete mathematics).
    *   [Algebraic (symbolic) computation](https://en.m.wikipedia.org/wiki/Symbolic_computation "Symbolic computation") – relates to algorithms and software for manipulating mathematical expressions and equations in symbolic form, as opposed to manipulating the approximations of specific numerical quantities represented by those symbols. Software applications that perform symbolic calculations are called computer algebra systems.
    *   [Computational number theory](https://en.m.wikipedia.org/wiki/Computational_number_theory "Computational number theory") – study of algorithms for performing number theoretic computations
    *   [Computational mathematics](https://en.m.wikipedia.org/wiki/Computational_mathematics "Computational mathematics") – involves mathematical research in areas of science where computing plays a central and essential role, emphasizing algorithms, numerical methods, and symbolic methods
    *   [Scientific computing (Computational science)](https://en.m.wikipedia.org/wiki/Scientific_computing "Scientific computing") –
    *   [Computational biology (bioinformatics)](https://en.m.wikipedia.org/wiki/Computational_biology "Computational biology") – involves the development and application of data-analytical and theoretical methods, mathematical modeling and computational simulation techniques to the study of biological, behavioral, and social systems.
    *   [Computational science](https://en.m.wikipedia.org/wiki/Computational_science "Computational science") – subfield of computer science concerned with constructing mathematical models and quantitative analysis techniques and using computers to analyze and solve scientific problems
    *   [Computational chemistry](https://en.m.wikipedia.org/wiki/Computational_chemistry "Computational chemistry") – branch of chemistry that uses principles of computer science to assist in solving chemical problems
    *   [Computational neuroscience](https://en.m.wikipedia.org/wiki/Computational_neuroscience "Computational neuroscience") – study of brain function in terms of the information processing properties of the structures that make up the nervous system.
    *   [Computer-aided engineering](https://en.m.wikipedia.org/wiki/Computer-aided_engineering "Computer-aided engineering") – broad usage of computer software to aid in engineering tasks.
        *   [Finite element analysis](https://en.m.wikipedia.org/wiki/Finite_element_analysis "Finite element analysis") – numerical technique for finding approximate solutions of partial differential equations (PDE) as well as integral equations.
        *   [Computational fluid dynamics](https://en.m.wikipedia.org/wiki/Computational_fluid_dynamics "Computational fluid dynamics") – branch of fluid mechanics that uses numerical methods and algorithms to solve and analyze problems that involve fluid flows.
    *   [Computational economics](https://en.m.wikipedia.org/wiki/Computational_economics "Computational economics") – research discipline at the interface between computer science and economic and management science
    *   [Computational sociology](https://en.m.wikipedia.org/wiki/Computational_sociology "Computational sociology") – branch of sociology that uses computationally intensive methods to analyze and model social phenomena.
    *   [Computational finance](https://en.m.wikipedia.org/wiki/Computational_finance "Computational finance") – cross-disciplinary field which relies on computational intelligence, mathematical finance, numerical methods and computer simulations to make trading, hedging and investment decisions, as well as facilitating the risk management of those decisions
    *   [Humanities computing (Digital Humanities)](https://en.m.wikipedia.org/wiki/Digital_Humanities "Digital Humanities") – area of research, teaching, and creation concerned with the intersection of computing and the disciplines of the humanities
### Computational NueroScience
*   [Computational neuroscience](https://en.m.wikipedia.org/wiki/Computational_neuroscience "Computational neuroscience") – study of brain function in terms of the information processing properties of the structures that make up the nervous system.
### Studies the actual Nuerons in terms of their biological structure and simulate them
### Different from computational Learning theory 
### Software packages simulating Nerves
There are many software packages, such as [GENESIS](https://en.m.wikipedia.org/wiki/GENESIS_(software) "GENESIS (software)") and [NEURON](https://en.m.wikipedia.org/wiki/Neuron_(software) "Neuron (software)"), that allow rapid and systematic _in silico_ modeling of realistic neurons. [Blue Brain](https://en.m.wikipedia.org/wiki/Blue_Brain "Blue Brain"), a project founded by [Henry Markram](https://en.m.wikipedia.org/wiki/Henry_Markram "Henry Markram") from the [École Polytechnique Fédérale de Lausanne](https://en.m.wikipedia.org/wiki/%C3%89cole_Polytechnique_F%C3%A9d%C3%A9rale_de_Lausanne "École Polytechnique Fédérale de Lausanne"), aims to construct a biophysically detailed simulation of a [cortical column](https://en.m.wikipedia.org/wiki/Cortical_column "Cortical column") on the [Blue Gene](https://en.m.wikipedia.org/wiki/Blue_Gene "Blue Gene") [supercomputer](https://en.m.wikipedia.org/wiki/Supercomputer "Supercomputer").
### It's somewhat puzzling how neurons can be uniform while being sparse. Artificial neural networks don't possess such quality
### Challenges
### Overhead in computation, efforts have been done to come up with faster algorithms
# Computer Security
*   [Computer security](https://en.m.wikipedia.org/wiki/Computer_security "Computer security") – branch of computer technology known as information security as applied to computers and networks.
    *   [reliability](https://en.m.wikipedia.org/wiki/High_availability "High availability") – system design approach and associated service implementation that ensures a prearranged level of operational performance will be met during a contractual measurement period.
    *   [Cryptography](https://en.m.wikipedia.org/wiki/Outline_of_cryptography "Outline of cryptography") – practice and study of hiding information.
    *   [Fault-tolerant computing](https://en.m.wikipedia.org/wiki/Fault-tolerant_system "Fault-tolerant system") – property that enables a system (often computer-based) to continue operating properly in the event of the failure of (or one or more faults within) some of its components
### Resources
### http://techcrunch.com/2015/08/10/mapping-israels-cyber-security-startups/?ncid=rss&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+%28TechCrunch%29&utm_content=FaceBook&sr_share=facebook
### Israeli security startups
### I cracked a program for a job Interview
### http://erenyagdiran.github.io/I-was-just-asked-to-crack-a-program-Part-1/
# Resources
### Video Series
### Code Genius
### Code curry
