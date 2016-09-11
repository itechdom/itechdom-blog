# Concepts
### modules/libraries
## Libraries[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=21 "Edit section: Libraries")]

The C programming language uses [libraries](https://en.wikipedia.org/wiki/Library_(computing) "Library (computing)") as its primary method of extension. In C, a library is a set of functions contained within a single "archive" file. Each library typically has a [header file](https://en.wikipedia.org/wiki/Header_file "Header file"), which contains the prototypes of the functions contained within the library that may be used by a program, and declarations of special data types and macro symbols used with these functions. In order for a program to use a library, it must include the library's header file, and the library must be linked with the program, which in many cases requires [compiler flags](https://en.wikipedia.org/wiki/Compiler_flag "Compiler flag") (e.g., `-lm`, shorthand for "math library").[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)

The most common C library is the [C standard library](https://en.wikipedia.org/wiki/C_standard_library "C standard library"), which is specified by the [ISO](https://en.wikipedia.org/wiki/ISO_standard "ISO standard") and [ANSI C](https://en.wikipedia.org/wiki/ANSI_C "ANSI C") standards and comes with every C implementation. (Implementations which target limited environments such as [embedded systems](https://en.wikipedia.org/wiki/Embedded_systems "Embedded systems") may provide only a subset of the standard library.) This library supports stream input and output, memory allocation, mathematics, character strings, and time values. Several separate standard headers (for example, `stdio.h`) specify the interfaces for these and other standard library facilities.

Another common set of C library functions are those used by applications specifically targeted for [Unix](https://en.wikipedia.org/wiki/Unix "Unix") and [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like")systems, especially functions which provide an interface to the [kernel](https://en.wikipedia.org/wiki/Kernel_(computer_science) "Kernel (computer science)"). These functions are detailed in various standards such as [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") and the [Single UNIX Specification](https://en.wikipedia.org/wiki/Single_UNIX_Specification "Single UNIX Specification").

Since many programs have been written in C, there are a wide variety of other libraries available. Libraries are often written in C because C compilers generate efficient [object code](https://en.wikipedia.org/wiki/Object_code "Object code"); programmers then create interfaces to the library so that the routines can be used from higher-level languages like [Java](https://en.wikipedia.org/wiki/Java_(programming_language) "Java (programming language)"), [Perl](https://en.wikipedia.org/wiki/Perl "Perl"), and [Python](https://en.wikipedia.org/wiki/Python_(programming_language) "Python (programming language)").[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)
### Data Types
## Data types[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=16 "Edit section: Data types")]

Main article: [C variable types and declarations](https://en.wikipedia.org/wiki/C_variable_types_and_declarations "C variable types and declarations")

C is often used in low-level systems programming where escapes from the type system may be necessary. The compiler attempts to ensure type correctness of most expressions, but the programmer can override the checks in various ways, either by using a _[type cast](https://en.wikipedia.org/wiki/Type_conversion "Type conversion")_ to explicitly convert a value from one type to another, or by using pointers or unions to reinterpret the underlying bits of a data object in some other way.The [type system](https://en.wikipedia.org/wiki/Type_system "Type system") in C is [static](https://en.wikipedia.org/wiki/Static_typing "Static typing") and [weakly typed](https://en.wikipedia.org/wiki/Weak_typing "Weak typing"), which makes it similar to the type system of [ALGOL](https://en.wikipedia.org/wiki/ALGOL "ALGOL") descendants such as [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language) "Pascal (programming language)"), although C is unrelated to ALGOL.[[32]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-34) There are built-in types for integers of various sizes, both signed and unsigned, [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_number "Floating-point number"), characters, and enumerated types (`enum`). C99 added a [boolean datatype](https://en.wikipedia.org/wiki/Boolean_datatype "Boolean datatype"). There are also derived types including [arrays](https://en.wikipedia.org/wiki/Array_data_type "Array data type"), [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming) "Pointer (computer programming)"), [records](https://en.wikipedia.org/wiki/Record_(computer_science) "Record (computer science)") (`[struct](https://en.wikipedia.org/wiki/Struct_(C_programming_language) "Struct (C programming language)")`), and untagged [unions](https://en.wikipedia.org/wiki/Union_(computer_science) "Union (computer science)")(`union`).

Some find C's declaration syntax unintuitive, particularly for [function pointers](https://en.wikipedia.org/wiki/Function_pointer "Function pointer"). (Ritchie's idea was to declare identifiers in contexts resembling their use: "[declaration reflects use](https://en.wikipedia.org/wiki/Declaration_reflects_use "Declaration reflects use")".)[[33]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-35)

C's _usual arithmetic conversions_ allow for efficient code to be generated, but can sometimes produce unexpected results. For example, a comparison of signed and unsigned integers of equal width requires a conversion of the signed value to unsigned. This can generate unexpected results if the signed value is negative.
### Arrays
### Arrays[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=18 "Edit section: Arrays")]

See also: [C string](https://en.wikipedia.org/wiki/C_string "C string")

[Array](https://en.wikipedia.org/wiki/Array_data_type "Array data type") types in C are traditionally of a fixed, static size specified at compile time. (The more recent C99 standard also allows a form of variable-length arrays.) However, it is also possible to allocate a block of memory (of arbitrary size) at run-time, using the standard library's `malloc` function, and treat it as an array. C's unification of arrays and pointers means that declared arrays and these dynamically allocated simulated arrays are virtually interchangeable.

Since arrays are always accessed (in effect) via pointers, array accesses are typically _not_ checked against the underlying array size, although some compilers may provide [bounds checking](https://en.wikipedia.org/wiki/Bounds_checking "Bounds checking") as an option.[[34]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-AutoTX-10-36) Array bounds violations are therefore possible and rather common in carelessly written code, and can lead to various repercussions, including illegal memory accesses, corruption of data, [buffer overruns](https://en.wikipedia.org/wiki/Buffer_overflow "Buffer overflow"), and run-time exceptions. If bounds checking is desired, it must be done manually.

C does not have a special provision for declaring multidimensional arrays, but rather relies on recursion within the type system to declare arrays of arrays, which effectively accomplishes the same thing. The index values of the resulting "multidimensional array" can be thought of as increasing in [row-major order](https://en.wikipedia.org/wiki/Row-major_order "Row-major order").

Multidimensional arrays are commonly used in numerical algorithms (mainly from applied [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra "Linear algebra")) to store matrices. The structure of the C array is well suited to this particular task. However, since arrays are passed merely as pointers, the bounds of the array must be known fixed values or else explicitly passed to any subroutine that requires them, and dynamically sized arrays of arrays cannot be accessed using double indexing. (A workaround for this is to allocate the array with an additional "row vector" of pointers to the columns.)

C99 introduced "variable-length arrays" which address some, but not all, of the issues with ordinary C arrays.
### bound checking is manual
### Array Pointer Interchangably
### Array–pointer interchangeability[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=19 "Edit section: Array–pointer interchangeability")]

The subscript notation `x[i]` (where `x` designates a pointer) is a [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar "Syntactic sugar") for `*(x+i)`.[[35]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-Raymond1996-37) Taking advantage of the compiler's knowledge of the pointer type, the address that `x + i` points to is not the base address (pointed to by `x`) incremented by `i` bytes, but rather is defined to be the base address incremented by `i` multiplied by the size of an element that `x` points to. Thus, `x[i]` designates the `i+1`th element of the array.

Furthermore, in most expression contexts (a notable exception is as operand of `[sizeof](https://en.wikipedia.org/wiki/Sizeof "Sizeof")`), the name of an array is automatically converted to a pointer to the array's first element. This implies that an array is never copied as a whole when named as an argument to a function, but rather only the address of its first element is passed. Therefore, although function calls in C use [pass-by-value](https://en.wikipedia.org/wiki/Call-by-value "Call-by-value") semantics, arrays are in effect passed by [reference](https://en.wikipedia.org/wiki/Reference_(computer_science) "Reference (computer science)").

The size of an element can be determined by applying the operator `sizeof` to any dereferenced element of `x`, as in `n = sizeof *x` or `n = sizeof x[0]`, and the number of elements in a declared array `A` can be determined as `sizeof A / sizeof A[0]`. The latter only applies to array names: variables declared with subscripts (`int A[20]`). Due to the semantics of C, it is not possible to determine the entire size of arrays through pointers to arrays or those created by dynamic allocation (`[malloc](https://en.wikipedia.org/wiki/Malloc "Malloc")`); code such as `sizeof arr / sizeof arr[0]` (where `arr = A`designates a pointer) will not work since the compiler assumes the size of the pointer itself is being requested.[[36]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-cfaq623-38)[[37]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-cfaq728-39)Since array name arguments to `sizeof` are not converted to pointers, they do not exhibit such ambiguity. However, arrays created by dynamic allocation are initialized to pointers rather than true array variables, so they suffer from the same `sizeof` issues as array pointers.

Thus, despite this apparent equivalence between array and pointer variables, there is still a distinction to be made between them. Even though the name of an array is, in most expression contexts, converted into a pointer (to its first element), this pointer does not itself occupy any storage; the array name is not an [l-value](https://en.wikipedia.org/wiki/Value_(computer_science) "Value (computer science)"), and its address is a constant, unlike a pointer variable. Consequently, what an array "points to" cannot be changed, and it is impossible to assign a new address to an array name. Array contents may be copied, however, by using the `memcpy` function, or by accessing the individual elements.
### char *another = "Literal"
### to make a string
### Pointers
## What Are Pointers?

### 

A **pointer** is a variable whose value is the address of another variable, i.e., direct address of the memory location. Like any variable or constant, you must declare a pointer before you can use it to store any variable address. The general form of a pointer variable declaration is:

type *var-name;

Here, **type** is the pointer's base type; it must be a valid C data type and **var-name** is the name of the pointer variable. The asterisk * you used to declare a pointer is the same asterisk that you use for multiplication. However, in this statement the asterisk is being used to designate a variable as a pointer. Following are the valid pointer declaration:

int  *ip;  /* pointer to an integer */  double  *dp;  /* pointer to a double */  float  *fp;  /* pointer to a float */  char  *ch /* pointer to a character */

The actual data type of the value of all pointers, whether integer, float, character, or otherwise, is the same, a long hexadecimal number that represents a memory address. The only difference between pointers of different data types is the data type of the variable or constant that the pointer points to.



###   


### Pointers[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=17 "Edit section: Pointers")]

C supports the use of [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming) "Pointer (computer programming)"), a type of [reference](https://en.wikipedia.org/wiki/Reference_(computer_science) "Reference (computer science)") that records the address or location of an object or function in memory. Pointers can be _dereferenced_ to access data stored at the address pointed to, or to invoke a pointed-to function. Pointers can be manipulated using assignment or [pointer arithmetic](https://en.wikipedia.org/wiki/Pointer_arithmetic "Pointer arithmetic"). The run-time representation of a pointer value is typically a raw memory address (perhaps augmented by an offset-within-word field), but since a pointer's type includes the type of the thing pointed to, expressions including pointers can be type-checked at compile time. Pointer arithmetic is automatically scaled by the size of the pointed-to data type. Pointers are used for many purposes in C. [Text strings](https://en.wikipedia.org/wiki/String_(computer_science) "String (computer science)") are commonly manipulated using pointers into arrays of characters. [Dynamic memory allocation](https://en.wikipedia.org/wiki/Dynamic_memory_allocation "Dynamic memory allocation") is performed using pointers. Many data types, such as [trees](https://en.wikipedia.org/wiki/Tree_(data_structure) "Tree (data structure)"), are commonly implemented as dynamically allocated `struct` objects linked together using pointers. Pointers to functions are useful for passing functions as arguments to [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function "Higher-order function") (such as [qsort](https://en.wikipedia.org/wiki/Qsort "Qsort") or [bsearch](https://en.wikipedia.org/wiki/Bsearch "Bsearch")) or as [callbacks](https://en.wikipedia.org/wiki/Callback_(computer_science) "Callback (computer science)") to be invoked by event handlers.[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)

A _[null pointer](https://en.wikipedia.org/wiki/Null_pointer "Null pointer") value_ explicitly points to no valid location. Dereferencing a null pointer value is undefined, often resulting in a [segmentation fault](https://en.wikipedia.org/wiki/Segmentation_fault "Segmentation fault"). Null pointer values are useful for indicating special cases such as no "next" pointer in the final node of a [linked list](https://en.wikipedia.org/wiki/Linked_list "Linked list"), or as an error indication from functions returning pointers. In appropriate contexts in source code, such as for assigning to a pointer variable, a _null pointer constant_ can be written as `0`, with or without explicit casting to a pointer type, or as the `NULL` macro defined by several standard headers. In conditional contexts, null pointer values evaluate to false, while all other pointer values evaluate to true.

Void pointers (`void *`) point to objects of unspecified type, and can therefore be used as "generic" data pointers. Since the size and type of the pointed-to object is not known, void pointers cannot be dereferenced, nor is pointer arithmetic on them allowed, although they can easily be (and in many contexts implicitly are) converted to and from any other object pointer type.[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)

Careless use of pointers is potentially dangerous. Because they are typically unchecked, a pointer variable can be made to point to any arbitrary location, which can cause undesirable effects. Although properly used pointers point to safe places, they can be made to point to unsafe places by using invalid [pointer arithmetic](https://en.wikipedia.org/wiki/Pointer_arithmetic "Pointer arithmetic"); the objects they point to may be deallocated and reused ([dangling pointers](https://en.wikipedia.org/wiki/Dangling_pointer "Dangling pointer")); they may be used without having been initialized ([wild pointers](https://en.wikipedia.org/wiki/Wild_pointer "Wild pointer")); or they may be directly assigned an unsafe value using a cast, union, or through another corrupt pointer. In general, C is permissive in allowing manipulation of and conversion between pointer types, although compilers typically provide options for various levels of checking. Some other programming languages address these problems by using more restrictive [reference](https://en.wikipedia.org/wiki/Reference_(computer_science) "Reference (computer science)") types.
### a variable whose value is the address of another
### Why use pointers
### http://stackoverflow.com/questions/5580761/why-use-double-pointer-or-why-use-pointers-to-pointers
### Great explanation
### http://c.learncodethehardway.org/book/ex15.html
### C the hard way
### pointers
### Memory Management
## Memory management[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=20 "Edit section: Memory management")]

One of the most important functions of a programming language is to provide facilities for managing [memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory") and the objects that are stored in memory. C provides three distinct ways to allocate memory for objects:[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)

*   [Static memory allocation](https://en.wikipedia.org/wiki/Static_memory_allocation "Static memory allocation"): space for the object is provided in the binary at compile-time; these objects have an[extent](https://en.wikipedia.org/wiki/Variable_(programming)#Scope_and_extent "Variable (programming)") (or lifetime) as long as the binary which contains them is loaded into memory.
*   [Automatic memory allocation](https://en.wikipedia.org/wiki/Automatic_memory_allocation "Automatic memory allocation"): temporary objects can be stored on the [stack](https://en.wikipedia.org/wiki/Call_stack "Call stack"), and this space is automatically freed and reusable after the block in which they are declared is exited.
*   [Dynamic memory allocation](https://en.wikipedia.org/wiki/Dynamic_memory_allocation "Dynamic memory allocation"): blocks of memory of arbitrary size can be requested at run-time using library functions such as `[malloc](https://en.wikipedia.org/wiki/Malloc "Malloc")` from a region of memory called the [heap](https://en.wikipedia.org/wiki/Dynamic_memory_allocation "Dynamic memory allocation"); these blocks persist until subsequently freed for reuse by calling the library function `[realloc](https://en.wikipedia.org/wiki/Malloc "Malloc")` or `[free](https://en.wikipedia.org/wiki/Malloc "Malloc")`

These three approaches are appropriate in different situations and have various tradeoffs. For example, static memory allocation has little allocation overhead, automatic allocation may involve slightly more overhead, and dynamic memory allocation can potentially have a great deal of overhead for both allocation and deallocation. The persistent nature of static objects is useful for maintaining state information across function calls, automatic allocation is easy to use but stack space is typically much more limited and transient than either static memory or heap space, and dynamic memory allocation allows convenient allocation of objects whose size is known only at run-time. Most C programs make extensive use of all three.

Where possible, automatic or static allocation is usually simplest because the storage is managed by the compiler, freeing the programmer of the potentially error-prone chore of manually allocating and releasing storage. However, many data structures can change in size at runtime, and since static allocations (and automatic allocations before C99) must have a fixed size at compile-time, there are many situations in which dynamic allocation is necessary.[[31]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-bk21st-33)Prior to the C99 standard, variable-sized arrays were a common example of this. (See the article on `[malloc](https://en.wikipedia.org/wiki/Malloc "Malloc")` for an example of dynamically allocated arrays.) Unlike automatic allocation, which can fail at run time with uncontrolled consequences, the dynamic allocation functions return an indication (in the form of a null pointer value) when the required storage cannot be allocated. (Static allocation that is too large is usually detected by the [linker](https://en.wikipedia.org/wiki/Linker_(computing) "Linker (computing)") or [loader](https://en.wikipedia.org/wiki/Loader_(computing) "Loader (computing)"), before the program can even begin execution.)

Unless otherwise specified, static objects contain zero or null pointer values upon program startup. Automatically and dynamically allocated objects are initialized only if an initial value is explicitly specified; otherwise they initially have indeterminate values (typically, whatever [bit pattern](https://en.wikipedia.org/wiki/Bit "Bit") happens to be present in the [storage](https://en.wikipedia.org/wiki/Computer_storage "Computer storage"), which might not even represent a valid value for that type). If the program attempts to access an uninitialized value, the results are undefined. Many modern compilers try to detect and warn about this problem, but both [false positives and false negatives](https://en.wikipedia.org/wiki/Type_I_and_type_II_errors "Type I and type II errors") can occur.

Another issue is that heap memory allocation has to be synchronized with its actual usage in any program in order for it to be reused as much as possible. For example, if the only pointer to a heap memory allocation goes out of scope or has its value overwritten before `[free()](https://en.wikipedia.org/wiki/Malloc "Malloc")` is called, then that memory cannot be recovered for later reuse and is essentially lost to the program, a phenomenon known as a _[memory leak](https://en.wikipedia.org/wiki/Memory_leak "Memory leak")._ Conversely, it is possible for memory to be freed but continue to be referenced, leading to unpredictable results. Typically, the symptoms will appear in a portion of the program far removed from the actual error, making it difficult to track down the problem. (Such issues are ameliorated in languages with [automatic garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)").)
### malloc
### manually allocate memory
### How to compile C program in Mac
*   Download a source archive file to get the source.
*   Unpack the archive to extract the files onto your computer.
*   Run ./configure to setup build configurations.
*   Run make to make it build, just like you've been doing.
*   Run sudo make install to install it onto your computer.

  


  


we can use make "name of the source file"
### valgrind
### great tool to run your program and check for
### memory leaks
### any bad code
### structure of a C program
### include statements
### imports .h file
### which contains all the functions you want to use
### structs
# What it's good for
## Uses[[edit](https://en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=23 "Edit section: Uses")]









[![](https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/50px-Question_book-new.svg.png)](https://en.wikipedia.org/wiki/File:Question_book-new.svg)













[![](https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Tiobe_index.png/420px-Tiobe_index.png)](https://en.wikipedia.org/wiki/File:Tiobe_index.png)



[](https://en.wikipedia.org/wiki/File:Tiobe_index.png "Enlarge")

The [TIOBE index](https://en.wikipedia.org/wiki/TIOBE_index "TIOBE index") graph from 2002 to 2015, showing a comparison of the popularity of various programming languages[[39]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-41)





C is widely used for "[system programming](https://en.wikipedia.org/wiki/System_programming "System programming")", including implementing [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") and [embedded system](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") applications, due to a combination of desirable characteristics such as code portability and efficiency, ability to access specific hardware addresses, ability to [pun types](https://en.wikipedia.org/wiki/Type_punning "Type punning") to match externally imposed data access requirements, and low [run-time](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)") demand on system resources. C can also be used for website programming using [CGI](https://en.wikipedia.org/wiki/Common_Gateway_Interface "Common Gateway Interface") as a "gateway" for information between the Web application, the server, and the browser.[[40]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-AutoTX-11-42)Some reasons for choosing C over [interpreted languages](https://en.wikipedia.org/wiki/Interpreted_language "Interpreted language") are its speed, stability, and near-universal availability.[[41]](https://en.wikipedia.org/wiki/C_(programming_language)#cite_note-AutoTX-12-43)

One consequence of C's wide availability and efficiency is that compilers, libraries, and interpreters of _other_ programming languages are often implemented in C. The primary implementations of [Python](https://en.wikipedia.org/wiki/Python_(programming_language) "Python (programming language)") ([CPython](https://en.wikipedia.org/wiki/CPython "CPython")), [Perl](https://en.wikipedia.org/wiki/Perl "Perl") 5, and [PHP](https://en.wikipedia.org/wiki/PHP "PHP") are all written in C.

Due to its thin layer of abstraction and low overhead, C allows efficient implementations of algorithms and data structures, which is useful for programs that perform a lot of computations. For example, the [GNU Multiple Precision Arithmetic Library](https://en.wikipedia.org/wiki/GNU_Multiple_Precision_Arithmetic_Library "GNU Multiple Precision Arithmetic Library"), the [GNU Scientific Library](https://en.wikipedia.org/wiki/GNU_Scientific_Library "GNU Scientific Library"), [Mathematica](https://en.wikipedia.org/wiki/Mathematica "Mathematica") and [MATLAB](https://en.wikipedia.org/wiki/MATLAB "MATLAB") are completely or partially written in C.

C is sometimes used as an [intermediate language](https://en.wikipedia.org/wiki/Intermediate_language "Intermediate language") by implementations of other languages. This approach may be used for portability or convenience; by using C as an intermediate language, it is not necessary to develop machine-specific code generators. C has some features, such as line-number preprocessor directives and optional superfluous commas at the end of initializer lists, which support compilation of generated code. However, some of C's shortcomings have prompted the development of other C-based languages specifically designed for use as intermediate languages, such as [C--](https://en.wikipedia.org/wiki/C-- "C--").

C has also been widely used to implement [end-user](https://en.wikipedia.org/wiki/End-user_(computer_science) "End-user (computer science)") applications, but much of that development has shifted to newer, higher-level languages.
### Low level
### Replacement for Assembly Language
### Portable
Despite its low-level capabilities, the language was designed to encourage [cross-platform](https://en.wikipedia.org/wiki/Cross-platform "Cross-platform") programming. A standards-compliant and [portably](https://en.wikipedia.org/wiki/Porting "Porting") written C program can be compiled for a very wide variety of computer platforms and operating systems with few changes to its source code. The language has become available on a very wide range of platforms, from embedded [microcontrollers](https://en.wikipedia.org/wiki/Microcontroller "Microcontroller") to [supercomputers](https://en.wikipedia.org/wiki/Supercomputer "Supercomputer").
# Project Starters
# Current Standard
### C11
### C99
# Resources
### https://en.wikipedia.org/wiki/C_(programming_language)
### Blogs
### Web Frameworks in C
### https://medium.com/@lucperkins/web-development-in-c-crazy-or-crazy-like-a-fox-ff723209f8f5#.9rf3jjlq5
### How to c
### https://matt.sh/howto-c
### New C standard
### http://www.c4learn.com/c-programming/c-double-pointer/
### Learn c the hard way
### http://c.learncodethehardway.org/book/ex1.html
# Third Party
### Web Framework
### https://kore.io/
### https://github.com/davidmoreno/onion
# Pain Points
### Lexical Variable Scope
### Pass by
### Value
### it says function parameters is always passed by value
### Pointer
## What Are Pointers?

A **pointer** is a variable whose value is the address of another variable, i.e., direct address of the memory location. Like any variable or constant, you must declare a pointer before you can use it to store any variable address. The general form of a pointer variable declaration is:

type *var-name;

Here, **type** is the pointer's base type; it must be a valid C data type and **var-name** is the name of the pointer variable. The asterisk * you used to declare a pointer is the same asterisk that you use for multiplication. However, in this statement the asterisk is being used to designate a variable as a pointer. Following are the valid pointer declaration:

int  *ip;  /* pointer to an integer */  double  *dp;  /* pointer to a double */  float  *fp;  /* pointer to a float */  char  *ch /* pointer to a character */

The actual data type of the value of all pointers, whether integer, float, character, or otherwise, is the same, a long hexadecimal number that represents a memory address. The only difference between pointers of different data types is the data type of the variable or constant that the pointer points to.
