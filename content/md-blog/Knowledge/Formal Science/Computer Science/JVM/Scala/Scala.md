#apply method is what's called internally
#http://stackoverflow.com/questions/19007611/understanding-scala-blocks
#Blocks vs Functions
#What's the reverse arrow -> in Scala loops
The left-arrow <- operator is called a generator, so named because it's generating individual values from a range.<br><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">Following is the example of for loop with range using i to j syntax:</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;"><br></font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">```
object Test {</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp;def main(args: Array[String]) {</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp; &nbsp; var a = 0;</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp; &nbsp; // for loop execution with a range</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp; &nbsp; for( a <- 1 to 10){</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;println( "Value of a: " + a );</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp; &nbsp; }</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">&nbsp; &nbsp;}</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><font color="#000000" face="Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif"><span style="font-size: 15px; line-height: 24px;">}</font><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><span style="font-size: 15px; line-height: 24px; color: rgb(0, 0, 0); font-family: Verdana, Geneva, Tahoma, Arial, Helvetica, sans-serif;">```

#Pain Point
#blocks similar to anonymous classes in java
#build tool
#sbt
#https://github.com/scalaz/scalaz
#functional programming extension
#https://github.com/fpinscala/fpinscala
#Exercises and examples
#http://www.scalafx.org/docs/home/
#scalafx
#https://github.com/scalafx/ScalaFX-Tutorials
#scalafx examples
#http://macroid.github.io/ScalaOnAndroid.html
#Scala-Android
#akka
Build powerful concurrent &amp; distributed applicationsmore easily. Akka is a toolkit and runtimefor building highly concurrent,distributed, and resilientmessage-driven applicationson the JVM.
#Di in Scala
#https://github.com/squeryl/squeryl
#Sqeyrel, sql wrapper
#https://github.com/twitter/finatra
#twitter scala http services
#https://github.com/mesos/spark
#spark
#my spray road
#https://drive.google.com/open?id=0B9tPYCpuqoIrTEcyUUpLb1BPY2s
#Rest framework
#https://github.com/spray/spray
#spray
#Scala actors are deprecated in favor of akka
#Third Party
#play framework
#scalatara
#https://github.com/adamw/macwire
#Scalatara web framework
#Project Starters
#https://github.com/csoma/Scala-starter
#scala-starter
#https://github.com/scalatra/scalatra-sbt-prototype
#a type of collections
#Traits
#Higher Order functions
#Functional
#Lang features
SEAMLESS JAVA INTEROP<br>Scala runs on the JVM, so Java and Scala stacks can be freely mixed for totally seamless integration.<br>TYPE INFERENCESo the type system doesn’t feel so static. Don’t work for the type system. Let the type system work for you!<br>CONCURRENCY&amp; DISTRIBUTIONUse data-parallel operations on collections, use actors for concurrency and distribution, or futures for asynchronous programming.<br>TRAITSCombine the flexibility of Java-style interfaces with the power of classes. Think principled multiple-inheritance.<br>PATTERN MATCHINGThink “switch” on steroids. Match against class hierarchies, sequences, and more.<br>HIGHER-ORDER FUNCTIONSFunctions are first-class objects. Compose them with guaranteed type safety. Use them anywhere, pass them to anything.
#Actors
#Currently Akka actors
#Classes 
#case classes
#used as a value object?
#no need for new to initialize an object
#object
#a static class?
#=>
#lambdas
#http://www.scala-lang.org/api/current/index.html#scala.collection.Seq
#Collections
#Seq
#by default immutable
#Concepts
#top list of github repos
#http://www.scala-lang.org/documentation/
#Scala Docs
#sbt
#build tool
#Resources
#http://www.tutorialspoint.com/scala/scala_basic_syntax.htm
#tutorials point
#http://aperiodic.net/phil/scala/s-99/
#99 scala problems
#https://github.com/search?l=Scala&o=desc&q=scala&s=stars&type=Repositories&utf8=%E2%9C%93
#Activiator
