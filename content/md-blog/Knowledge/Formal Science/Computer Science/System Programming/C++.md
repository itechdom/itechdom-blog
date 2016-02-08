# Concepts
*   C++ Object Oriented  

*   [C++ Classes & Objects](http://www.tutorialspoint.com/cplusplus/cpp_classes_objects.htm)
*   [C++ Inheritance](http://www.tutorialspoint.com/cplusplus/cpp_inheritance.htm)
*   [C++ Overloading](http://www.tutorialspoint.com/cplusplus/cpp_overloading.htm)
*   [C++ Polymorphism](http://www.tutorialspoint.com/cplusplus/cpp_polymorphism.htm)
*   [C++ Abstraction](http://www.tutorialspoint.com/cplusplus/cpp_data_abstraction.htm)
*   [C++ Encapsulation](http://www.tutorialspoint.com/cplusplus/cpp_data_encapsulation.htm)
*   [C++ Interfaces](http://www.tutorialspoint.com/cplusplus/cpp_interfaces.htm)

*   C++ Advanced
*   [C++ Files and Streams](http://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm)
*   [C++ Exception Handling](http://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm)
*   [C++ Dynamic Memory](http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm)
*   [C++ Namespaces](http://www.tutorialspoint.com/cplusplus/cpp_namespaces.htm)
*   [C++ Templates](http://www.tutorialspoint.com/cplusplus/cpp_templates.htm)
*   [C++ Preprocessor](http://www.tutorialspoint.com/cplusplus/cpp_preprocessor.htm)
*   [C++ Signal Handling](http://www.tutorialspoint.com/cplusplus/cpp_signal_handling.htm)
*   [C++ Multithreading](http://www.tutorialspoint.com/cplusplus/cpp_multithreading.htm)
*   [C++ Web Programming](http://www.tutorialspoint.com/cplusplus/cpp_web_programming.htm)
### .h and .cpp
### header files are included instead of cpp
# Pain Points
### references 
### Pointers
### << with cout
### Overloading >

The above is verbose so a more elegant way is provided. The C++ language does _not_ include an I/O system, but one of its core concepts is that it is extendible. Although its operator set cannot be increased, the meanings of operators depend on the context in which they are used. When applied to new objects the meaning can be redefined. So, the left shift operator 

cout 

is the same as

put(cout,"x = ");


The side effect is to output the right hand variable and the expression produces a value that is an output stream (technically its a [reference](http://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Companion/glossary/reference.html) to an output stream, but it amounts to the same thing). This value can be used again as the left hand size of a 

cout 

because the 

As you might expect, input simply reverses the sign on the flow, so to read 3 numbers from the input stream and store them in x, y, z:-

cin >> x >> y >> z;

### binary shift
### http://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Companion/cxx_crib/input_output.html
# Resources
### https://en.wikipedia.org/wiki/C%2B%2B
### Sample Codes
### github examples
### https://github.com/sinairv/Cpp-Tutorial-Samples
### https://github.com/sftrabbit/CppSamples-Samples
### tutorial point 
### http://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm
### top trending repos
### https://github.com/search?l=C%2B%2B&q=c%2B%2B&type=Repositories&utf8=%E2%9C%93
# Third Party
### https://github.com/cocos2d/cocos2d-x
### cocos2d
### https://github.com/facebook/proxygen
### proxygen http server
### https://github.com/chenshuo/muduo
### multi-threaded server library
### https://github.com/ipkn/crow
### web framework inspired by flask
### https://github.com/d5/node.native
### node.native library for c++
### https://github.com/beark/ftl
### fp
