# Concepts
## Traits
## Higher Order functions
## Functional
## Lang features
<div>SEAMLESS JAVA INTEROP<br></div><div>Scala runs on the JVM, so Java and Scala stacks can be freely mixed for totally seamless integration.</div><div><br></div><div>TYPE INFERENCE</div><div>So the type system doesn&#x2019;t feel so static. Don&#x2019;t work for the type system. Let the type system work for you!</div><div><br></div><div>CONCURRENCY</div><div>&amp; DISTRIBUTION</div><div>Use data-parallel operations on collections, use actors for concurrency and distribution, or futures for asynchronous programming.</div><div><br></div><div>TRAITS</div><div>Combine the flexibility of Java-style interfaces with the power of classes. Think principled multiple-inheritance.</div><div><br></div><div>PATTERN MATCHING</div><div>Think &#x201C;switch&#x201D; on steroids. Match against class hierarchies, sequences, and more.</div><div><br></div><div>HIGHER-ORDER FUNCTIONS</div><div>Functions are first-class objects. Compose them with guaranteed type safety. Use them anywhere, pass them to anything.</div>
## Actors
### Currently Akka actors
## Classes 
### case classes
#### used as a value object?
#### no need for new to initialize an object
### object
#### a static class?
## Collections
### by default immutable
### Seq
#### a type of collections
#### http://www.scala-lang.org/api/current/index.html#scala.collection.Seq
## lambdas
### =>
# Resources
## http://www.scala-lang.org/documentation/
### Scala Docs
## sbt
### build tool
## Activiator
## http://www.tutorialspoint.com/scala/scala_basic_syntax.htm
### tutorials point
## http://aperiodic.net/phil/scala/s-99/
### 99 scala problems
## https://github.com/search?l=Scala&o=desc&q=scala&s=stars&type=Repositories&utf8=%E2%9C%93
### top list of github repos
# Project Starters
## https://github.com/csoma/Scala-starter
### scala-starter
## https://github.com/scalatra/scalatra-sbt-prototype
### Scalatara web framework
# Third Party
## play framework
## scalatara
## akka
<div>Build powerful concurrent &amp; distributed applications</div><div>more easily. Akka is a toolkit and runtime</div><div>for building highly concurrent,</div><div>distributed, and resilient</div><div>message-driven applications</div><div>on the JVM.</div>
### Scala actors are deprecated in favor of akka
## spray
### https://github.com/spray/spray
#### Rest framework
### https://drive.google.com/open?id=0B9tPYCpuqoIrTEcyUUpLb1BPY2s
#### my spray road
## spark
### https://github.com/mesos/spark
## twitter scala http services
### https://github.com/twitter/finatra
## Sqeyrel, sql wrapper
### https://github.com/squeryl/squeryl
## Di in Scala
### https://github.com/adamw/macwire
## Scala-Android
### http://macroid.github.io/ScalaOnAndroid.html
## scalafx examples
### https://github.com/scalafx/ScalaFX-Tutorials
## scalafx
### http://www.scalafx.org/docs/home/
## Exercises and examples
### https://github.com/fpinscala/fpinscala
## functional programming extension
### https://github.com/scalaz/scalaz
## sbt
### build tool
# Pain Point
## What's the reverse arrow -> in Scala loops
The left-arrow &lt;- operator is called a generator, so named because it&apos;s generating individual values from a range.<div><br></div><div><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>Following is the example of for loop with range using i to j syntax:</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span><br></span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&lt;code&gt;object Test {</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0;def main(args: Array[String]) {</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0; &#xA0; var a = 0;</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0; &#xA0; // for loop execution with a range</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0; &#xA0; for( a &lt;- 1 to 10){</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0; &#xA0; &#xA0; &#xA0;println( &quot;Value of a: &quot; + a );</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0; &#xA0; }</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>&#xA0; &#xA0;}</span></font></p><p><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span>}</span></font></p><p><span>&lt;/code&gt;</span></p></div>
## Blocks vs Functions
### http://stackoverflow.com/questions/19007611/understanding-scala-blocks
#### blocks similar to anonymous classes in java
#### apply method is what's called internally