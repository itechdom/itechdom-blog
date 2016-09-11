# Concepts
### IO
### Streams
### http://www.tutorialspoint.com/java/java_files_io.htm
### example
import java.io.*;  public  class  CopyFile  {  public  static  void main(String args[])  throws  IOException  {  FileInputStream  in  =  null;  FileOutputStream  out  =  null;  try  {  in  =  new  FileInputStream("input.txt");  out  =  new  FileOutputStream("output.txt");  int c;  while  ((c =  in.read())  !=  -1)  {  out.write(c);  }  }finally  {  if  (in  !=  null)  {  in.close();  }  if  (out  !=  null)  {  out.close();  }  }  }  }
### Stdin Example
import java.io.*;  public  class  ReadConsole  {  public  static  void main(String args[])  throws  IOException  {  InputStreamReader cin =  null;  try  { cin =  new  InputStreamReader(System.in);  System.out.println("Enter characters, 'q' to quit.");  char c;  do  { c =  (char) cin.read();  System.out.print(c);  }  while(c !=  'q');  }finally  {  if  (cin !=  null)  { cin.close();  }  }  }  }
### New java 8 syntax
### Streams

[Java 8](http://www.java8.org/) has a nice [stream](http://blog.hartveld.com/2013/03/jdk-8-33-stream-api.html) and lambda syntax. You could write code like this:



final ListString> filtered = list.stream()
    .filter(s -> s.startsWith("s"))
    .map(s -> s.toUpperCase())
    .collect(Collectors.toList());



Instead of this:



final ListString> filtered = new ArrayList();
for (String str : list) {
    if (str.startsWith("s") {
        filtered.add(str.toUpperCase());
    }
}



This allows you to write more fluent code, which is more readable.
### Exceptions
### http://www.tutorialspoint.com/java/java_exceptions.htm
### java.lang.Exception
### Packages
### http://www.tutorialspoint.com/java/java_packages.htm
### Data Structures
*   Enumeration

*   BitSet

*   Vector

*   Stack

*   Dictionary

*   Hashtable

*   Properties
### http://www.tutorialspoint.com/java/java_data_structures.htm
### Collections
### Why not vectors for example?
The collections framework was designed to meet several goals.

*   The framework had to be high-performance. The implementations for the fundamental collections (dynamic arrays, linked lists, trees, and hashtables) are highly efficient.

*   The framework had to allow different types of collections to work in a similar manner and with a high degree of interoperability.

*   Extending and/or adapting a collection had to be easy.
### http://www.tutorialspoint.com/java/java_collections.htm
### Generics
### http://www.tutorialspoint.com/java/java_generics.htm
### What if I want to implement a method that's not tied to a type
### Serialization
### http://www.tutorialspoint.com/java/java_serialization.htm
### Storing object in a file
### Networking
### http://www.tutorialspoint.com/java/java_networking.htm
### Multi-threading
### http://www.tutorialspoint.com/java/java_multithreading.htm
### DI
### https://www.objc.io/issues/11-android/dependency-injection-in-java/
### https://github.com/cxxr/better-java#dependency-injection
### We use @inject annotation
### There are tools that generate code at compile time or runtime
### Annotations
### @inject
### How to create a runtime annotation
### An Example of Runtime Annotation Processing

I’d like to finish up by showing a simple example of how one might define and process a runtime annotation. Let’s say that you were an exceptionally impatient person and were tired of typing out fully qualified static constants in your Android codebase, constants like these:

SELECT ALL`public class CrimeActivity {
    public static final String ACTION_VIEW_CRIME = 
        “com.bignerdranch.android.criminalintent.CrimeActivity.ACTION_VIEW_CRIME”;
}` 



You could use a runtime annotation to do this work for you. First, you’d create the annotation class:

SELECT ALL`@Retention(RetentionPolicy.RUNTIME)
@Target( { ElementType.FIELD })
public @interface ServiceConstant { }` 



This code declares an annotation named `ServiceConstant`. The code is itself annotated with two annotations: `@Retention`, and `@Target`. `@Retention` says how long the annotation will stick around. Here, we say that we want to see it at runtime. If we wanted this annotation to be processed at compile time only, we could have specified `RetentionPolicy.SOURCE`.

The other annotation, `@Target`, says where you can put the annotation in your source code. Any number of values can be provided. Our annotation is only valid for fields, so we have just provided `ElementType.FIELD`.

Once the annotation is defined, we write some code to look for it and populate the annotated field automatically:

SELECT ALL`public static void populateConstants(Class klass) {
    String packageName = klass.getPackage().getName();
    for (Field field : klass.getDeclaredFields()) {
        if (Modifier.isStatic(field.getModifiers()) && 
                field.isAnnotationPresent(ServiceConstant.class)) {
            String value = packageName + "." + field.getName();
            try {
                field.set(null, value);
                Log.i(TAG, "Setup service constant: " + value + "");
            } catch (IllegalAccessException iae) {
                Log.e(TAG, "Unable to setup constant for field " + 
                        field.getName() +
                        " in class " + klass.getName());
            }
        }
    }
}` 



Finally, we add the annotation to our code, and call our magic method:

SELECT ALL`public class CrimeActivity {
    @ServiceConstant
    public static final String ACTION_VIEW_CRIME;

    static {
        ServiceUtils.populateConstants(CrimeActivity.class);
    }
}`
### Reflection API
### https://github.com/google/guava/wiki/ReflectionExplained
### Guava's reflection
### General Guidelines
### Don't use nulls, but return empty collections
### Use immutable with final
### http://google.github.io/styleguide/javaguide.html#s6-programming-practices
### Google Java Styleguide
### Code quality
### https://github.com/cxxr/better-java#code-quality
### Basics
### Access Modifiers
### public,private,static,abstract ...
### Static
public  class  ExampleMinNumber{  public  static  void main(String[] args)  {  int a =  11;  int b =  6;  int c = minFunction(a, b);  System.out.println("Minimum Value = "  + c);  }  /** returns the minimum of two numbers */  public  static  int minFunction(int n1,  int n2)  {  int min;  if  (n1 > n2) min = n2;  else min = n1;  return min;  }  }
### Abstract
### A class that can't be instantiated
### A method that's abstract within it would have to be extended in sub-classes
### Operators
### Bitwise operators
## The Bitwise Operators:

Java defines several bitwise operators, which can be applied to the integer types, long, int, short, char, and byte.

Bitwise operator works on bits and performs bit-by-bit operation. Assume if a = 60; and b = 13; now in binary format they will be as follows:

a = 0011 1100

b = 0000 1101

-----------------

a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a  = 1100 0011

The following table lists the bitwise operators:

Assume integer variable A holds 60 and variable B holds 13 then:

[Show Examples](http://www.tutorialspoint.com/java/java_bitwise_operators_examples.htm)







SR.NO

Operator and Description





1

**& (bitwise and)**

Binary AND Operator copies a bit to the result if it exists in both operands.

**Example:** (A & B) will give 12 which is 0000 1100





2

**| (bitwise or)**

Binary OR Operator copies a bit if it exists in either operand.

**Example:** (A | B) will give 61 which is 0011 1101





3

**^ (bitwise XOR)**

Binary XOR Operator copies the bit if it is set in one operand but not both.

**Example:** (A ^ B) will give 49 which is 0011 0001





4

**~ (bitwise compliment)**

Binary Ones Complement Operator is unary and has the effect of 'flipping' bits.

**Example:** (~A ) will give -61 which is 1100 0011 in 2's complement form due to a signed binary number.





5

**





6

**>> (right shift)**

Binary Right Shift Operator. The left operands value is moved right by the number of bits specified by the right operand.

**Example:** A >> 2 will give 15 which is 1111





7

**>>> (zero fill right shift)**

Shift right zero fill operator. The left operands value is moved right by the number of bits specified by the right operand and shifted values are filled up with zeros.

**Example:** A >>>2 will give 15 which is 0000 1111






### Data types
### Primitive
### http://www.tutorialspoint.com/java/java_basic_datatypes.htm
### Object
### OOP
### Generics
### Interfaces
### Classes
### Enums
### Methods
### Inner classes
### http://www.tutorialspoint.com/java/java_innerclasses.htm
### Decision Making
### Ternary operators
## The ? : Operator:

We have covered **conditional operator ? :** in previous chapter which can be used to replace **if...else** statements. It has the following general form:

Exp1  ?  Exp2  :  Exp3;

Where Exp1, Exp2, and Exp3 are expressions. Notice the use and placement of the colon.

To determine the value of whole expression, initially exp1 is evaluated

*   If the value of exp1 is true, then the value of Exp2 will be the value of the whole expression.
*   If the value of exp1 is false, then Exp3 is evaluated and its value becomes the value of the entire expression.
### Types as classes
### Number
### Character
### Arrays
### You can use [ ] literal
### Or you can use the new operator
### It has to have a type
# Core
### 8.0
### http://www.javacodegeeks.com/2014/03/8-new-features-for-java-8.html
### summary of the new changes
# Resources
### https://en.wikipedia.org/wiki/Java_(programming_language)#Versions
### Meta Resource
### https://github.com/cxxr/better-java
### http://www.tutorialspoint.com/java/
### https://spring.io/guides/gs/gradle/
### bulding java projects with gradle
# Third Party
### Guava
[Guava](https://github.com/google/guava) is Google's excellent here's-what-Java-is-missing library. It's almost hard to distill everything that I like about this library, but I'm going to try.
### https://github.com/google/guava
### Gson
### https://github.com/google/gson
### Tuples
### https://github.com/cxxr/better-java#java-tuples
### Functional Java
### http://www.javaslang.io/
### ORM
### http://www.jooq.org/
### Gradle
### http://gradle.org/getting-started-gradle-java/
### Maven
### is the repository for all the external libraries
### Web Servers
### Tomcat
### Jetty
