# Concepts
<ul class="nav nav-list primary left-menu"><li class="heading">C++ Object Oriented<br></li></ul><ul class="nav nav-list primary left-menu"><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_classes_objects.htm" target="_blank">C++ Classes &amp; Objects</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_inheritance.htm" target="_blank">C++ Inheritance</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_overloading.htm" target="_blank">C++ Overloading</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_polymorphism.htm" target="_blank">C++ Polymorphism</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_data_abstraction.htm" target="_blank">C++ Abstraction</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_data_encapsulation.htm" target="_blank">C++ Encapsulation</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_interfaces.htm" target="_blank">C++ Interfaces</a></li></ul><ul class="nav nav-list primary left-menu"><li class="heading">C++ Advanced</li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm" target="_blank">C++ Files and Streams</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm" target="_blank">C++ Exception Handling</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm" target="_blank">C++ Dynamic Memory</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_namespaces.htm" target="_blank">C++ Namespaces</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_templates.htm" target="_blank">C++ Templates</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_preprocessor.htm" target="_blank">C++ Preprocessor</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_signal_handling.htm" target="_blank">C++ Signal Handling</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_multithreading.htm" target="_blank">C++ Multithreading</a></li><li><a href="http://www.tutorialspoint.com/cplusplus/cpp_web_programming.htm" target="_blank">C++ Web Programming</a></li><li><div><br></div></li></ul><ul class="nav nav-list primary left-menu"></ul>
## .h and .cpp
### header files are included instead of cpp
# Pain Points
## references 
## Pointers
## << with cout
### binary shift
### http://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Companion/cxx_crib/input_output.html
<h3>Overloading &lt;&lt; and &gt;&gt;</h3><span>The above is verbose so a more elegant way is provided. The C++ language does&#xA0;</span><i>not</i><span>&#xA0;include an I/O system, but one of its core concepts is that it is extendible. Although its operator set cannot be increased, the meanings of operators depend on the context in which they are used. When applied to new objects the meaning can be redefined. So, the left shift operator &lt;&lt; has, in the standard I/O library, been overloaded to be the put function when its left hand argument is an input stream. Hence:-</span><pre>cout &lt;&lt;  &quot;x = &quot;;
</pre><span>is the same as</span><pre>put(cout,&quot;x = &quot;);
</pre><span>The side effect is to output the right hand variable and the expression produces a value that is an output stream (technically its a&#xA0;</span><a href="http://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Companion/glossary/reference.html">reference</a><span>&#xA0;to an output stream, but it amounts to the same thing). This value can be used again as the left hand size of a &lt;&lt;. So to call the put functions 3 times as before:-</span><pre>cout &lt;&lt; &quot;x = &quot; &lt;&lt; x &lt;&lt; &quot;\n&quot;;
</pre><span>because the &lt;&lt; operator is evaluated left to right. It take a little getting used to for a FORTRAN programmer, but after a while you get used to seeing this as a cout object with a stream of values flowing into it.</span><p>As you might expect, input simply reverses the sign on the flow, so to read 3 numbers from the input stream and store them in x, y, z:-</p><pre>cin &gt;&gt; x &gt;&gt; y &gt;&gt; z;
</pre>
# Resources
## https://en.wikipedia.org/wiki/C%2B%2B
## Sample Codes
### github examples
#### https://github.com/sinairv/Cpp-Tutorial-Samples
#### https://github.com/sftrabbit/CppSamples-Samples
## tutorial point 
### http://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm
## top trending repos
### https://github.com/search?l=C%2B%2B&q=c%2B%2B&type=Repositories&utf8=%E2%9C%93
# Third Party
## https://github.com/cocos2d/cocos2d-x
### cocos2d
## https://github.com/facebook/proxygen
### proxygen http server
## https://github.com/chenshuo/muduo
### multi-threaded server library
## https://github.com/ipkn/crow
### web framework inspired by flask
## https://github.com/d5/node.native
### node.native library for c++
## https://github.com/beark/ftl
### fp
