# Concepts
C++ Object OrientedC++ Classes & ObjectsC++ InheritanceC++ OverloadingC++ PolymorphismC++ AbstractionC++ EncapsulationC++ InterfacesC++ AdvancedC++ Files and StreamsC++ Exception HandlingC++ Dynamic MemoryC++ NamespacesC++ TemplatesC++ PreprocessorC++ Signal HandlingC++ MultithreadingC++ Web Programming
### .h and .cpp
### header files are included instead of cpp
# Pain Points
### references 
### Pointers
### << with cout
Overloading << and >>The above is verbose so a more elegant way is provided. The C++ language does not include an I/O system, but one of its core concepts is that it is extendible. Although its operator set cannot be increased, the meanings of operators depend on the context in which they are used. When applied to new objects the meaning can be redefined. So, the left shift operator << has, in the standard I/O library, been overloaded to be the put function when its left hand argument is an input stream. Hence:-cout <<  "x = ";
is the same asput(cout,"x = ");
The side effect is to output the right hand variable and the expression produces a value that is an output stream (technically its a reference to an output stream, but it amounts to the same thing). This value can be used again as the left hand size of a <<. So to call the put functions 3 times as before:-cout << "x = " << x << "\n";
because the << operator is evaluated left to right. It take a little getting used to for a FORTRAN programmer, but after a while you get used to seeing this as a cout object with a stream of values flowing into it.As you might expect, input simply reverses the sign on the flow, so to read 3 numbers from the input stream and store them in x, y, z:-cin >> x >> y >> z;

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
