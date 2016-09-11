# Concepts
### Traits
### Higher Order functions
### Functional
### Lang features
SEAMLESS JAVA INTEROP  


Scala runs on the JVM, so Java and Scala stacks can be freely mixed for totally seamless integration.

TYPE INFERENCE

So the type system doesn’t feel so static. Don’t work for the type system. Let the type system work for you!

CONCURRENCY

& DISTRIBUTION

Use data-parallel operations on collections, use actors for concurrency and distribution, or futures for asynchronous programming.

TRAITS

Combine the flexibility of Java-style interfaces with the power of classes. Think principled multiple-inheritance.

PATTERN MATCHING

Think “switch” on steroids. Match against class hierarchies, sequences, and more.

HIGHER-ORDER FUNCTIONS

Functions are first-class objects. Compose them with guaranteed type safety. Use them anywhere, pass them to anything.
### Actors
### Currently Akka actors
### Classes 
### case classes
### used as a value object?
### no need for new to initialize an object
### object
### a static class?
### Collections
### by default immutable
### Seq
### a type of collections
### http://www.scala-lang.org/api/current/index.html#scala.collection.Seq
### lambdas
### =>
# Resources
### http://www.scala-lang.org/documentation/
### Scala Docs
### sbt
### build tool
### Activiator
### http://www.tutorialspoint.com/scala/scala_basic_syntax.htm
### tutorials point
### http://aperiodic.net/phil/scala/s-99/
### 99 scala problems
### https://github.com/search?l=Scala&o=desc&q=scala&s=stars&type=Repositories&utf8=%E2%9C%93
### top list of github repos
# Project Starters
### https://github.com/csoma/Scala-starter
### scala-starter
### https://github.com/scalatra/scalatra-sbt-prototype
### Scalatara web framework
# Third Party
### play framework
### scalatara
### akka
Build powerful concurrent & distributed applications

more easily. Akka is a toolkit and runtime

for building highly concurrent,

distributed, and resilient

message-driven applications

on the JVM.
### Scala actors are deprecated in favor of akka
### spray
### https://github.com/spray/spray
### Rest framework
### https://drive.google.com/open?id=0B9tPYCpuqoIrTEcyUUpLb1BPY2s
### my spray road
### spark
### https://github.com/mesos/spark
### twitter scala http services
### https://github.com/twitter/finatra
### Sqeyrel, sql wrapper
### https://github.com/squeryl/squeryl
### Di in Scala
### https://github.com/adamw/macwire
### Scala-Android
### http://macroid.github.io/ScalaOnAndroid.html
### scalafx examples
### https://github.com/scalafx/ScalaFX-Tutorials
### scalafx
### http://www.scalafx.org/docs/home/
### Exercises and examples
### https://github.com/fpinscala/fpinscala
### functional programming extension
### https://github.com/scalaz/scalaz
### sbt
### build tool
# Pain Point
### What's the reverse arrow -> in Scala loops
The left-arrow 

Following is the example of for loop with range using i to j syntax:

  


object Test {

   def main(args: Array[String]) {

      var a = 0;

      // for loop execution with a range

      for( a 

         println( "Value of a: " + a );

      }

   }

}




### Blocks vs Functions
### http://stackoverflow.com/questions/19007611/understanding-scala-blocks
### blocks similar to anonymous classes in java
### apply method is what's called internally
