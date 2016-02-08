# Concepts
### Decorators
### great example
def get_text(name):

   return "lorem ipsum, {0} dolor sit amet".format(name)

  


def p_decorate(func):

   def func_wrapper(name):

       return "{0}".format(func(name))

   return func_wrapper

  


my_get_text = p_decorate(get_text)

  


print my_get_text("John")
### add behavior to existing function without modifying their behavior
### Routing
### http://flask.pocoo.org/docs/0.10/quickstart/#routing
### Accessing Request Data
### http://flask.pocoo.org/docs/0.10/quickstart/#accessing-request-data
# Starter Projects
# Resources
### Python site Doc
The [_Glossary_](https://docs.python.org/3.5/glossary.html#glossary) is also worth going through.



*   [1\. Whetting Your Appetite](https://docs.python.org/3.5/tutorial/appetite.html)
*   [2\. Using the Python Interpreter](https://docs.python.org/3.5/tutorial/interpreter.html)
    *   [2.1\. Invoking the Interpreter](https://docs.python.org/3.5/tutorial/interpreter.html#invoking-the-interpreter)
        *   [2.1.1\. Argument Passing](https://docs.python.org/3.5/tutorial/interpreter.html#argument-passing)
        *   [2.1.2\. Interactive Mode](https://docs.python.org/3.5/tutorial/interpreter.html#interactive-mode)
    *   [2.2\. The Interpreter and Its Environment](https://docs.python.org/3.5/tutorial/interpreter.html#the-interpreter-and-its-environment)
        *   [2.2.1\. Source Code Encoding](https://docs.python.org/3.5/tutorial/interpreter.html#source-code-encoding)
*   [3\. An Informal Introduction to Python](https://docs.python.org/3.5/tutorial/introduction.html)
    *   [3.1\. Using Python as a Calculator](https://docs.python.org/3.5/tutorial/introduction.html#using-python-as-a-calculator)
        *   [3.1.1\. Numbers](https://docs.python.org/3.5/tutorial/introduction.html#numbers)
        *   [3.1.2\. Strings](https://docs.python.org/3.5/tutorial/introduction.html#strings)
        *   [3.1.3\. Lists](https://docs.python.org/3.5/tutorial/introduction.html#lists)
    *   [3.2\. First Steps Towards Programming](https://docs.python.org/3.5/tutorial/introduction.html#first-steps-towards-programming)
*   [4\. More Control Flow Tools](https://docs.python.org/3.5/tutorial/controlflow.html)
    *   [4.1. if Statements](https://docs.python.org/3.5/tutorial/controlflow.html#if-statements)
    *   [4.2. for Statements](https://docs.python.org/3.5/tutorial/controlflow.html#for-statements)
    *   [4.3\. The range() Function](https://docs.python.org/3.5/tutorial/controlflow.html#the-range-function)
    *   [4.4. break and continue Statements, and elseClauses on Loops](https://docs.python.org/3.5/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)
    *   [4.5. pass Statements](https://docs.python.org/3.5/tutorial/controlflow.html#pass-statements)
    *   [4.6\. Defining Functions](https://docs.python.org/3.5/tutorial/controlflow.html#defining-functions)
    *   [4.7\. More on Defining Functions](https://docs.python.org/3.5/tutorial/controlflow.html#more-on-defining-functions)
        *   [4.7.1\. Default Argument Values](https://docs.python.org/3.5/tutorial/controlflow.html#default-argument-values)
        *   [4.7.2\. Keyword Arguments](https://docs.python.org/3.5/tutorial/controlflow.html#keyword-arguments)
        *   [4.7.3\. Arbitrary Argument Lists](https://docs.python.org/3.5/tutorial/controlflow.html#arbitrary-argument-lists)
        *   [4.7.4\. Unpacking Argument Lists](https://docs.python.org/3.5/tutorial/controlflow.html#unpacking-argument-lists)
        *   [4.7.5\. Lambda Expressions](https://docs.python.org/3.5/tutorial/controlflow.html#lambda-expressions)
        *   [4.7.6\. Documentation Strings](https://docs.python.org/3.5/tutorial/controlflow.html#documentation-strings)
        *   [4.7.7\. Function Annotations](https://docs.python.org/3.5/tutorial/controlflow.html#function-annotations)
    *   [4.8\. Intermezzo: Coding Style](https://docs.python.org/3.5/tutorial/controlflow.html#intermezzo-coding-style)
*   [5\. Data Structures](https://docs.python.org/3.5/tutorial/datastructures.html)
    *   [5.1\. More on Lists](https://docs.python.org/3.5/tutorial/datastructures.html#more-on-lists)
        *   [5.1.1\. Using Lists as Stacks](https://docs.python.org/3.5/tutorial/datastructures.html#using-lists-as-stacks)
        *   [5.1.2\. Using Lists as Queues](https://docs.python.org/3.5/tutorial/datastructures.html#using-lists-as-queues)
        *   [5.1.3\. List Comprehensions](https://docs.python.org/3.5/tutorial/datastructures.html#list-comprehensions)
        *   [5.1.4\. Nested List Comprehensions](https://docs.python.org/3.5/tutorial/datastructures.html#nested-list-comprehensions)
    *   [5.2\. The del statement](https://docs.python.org/3.5/tutorial/datastructures.html#the-del-statement)
    *   [5.3\. Tuples and Sequences](https://docs.python.org/3.5/tutorial/datastructures.html#tuples-and-sequences)
    *   [5.4\. Sets](https://docs.python.org/3.5/tutorial/datastructures.html#sets)
    *   [5.5\. Dictionaries](https://docs.python.org/3.5/tutorial/datastructures.html#dictionaries)
    *   [5.6\. Looping Techniques](https://docs.python.org/3.5/tutorial/datastructures.html#looping-techniques)
    *   [5.7\. More on Conditions](https://docs.python.org/3.5/tutorial/datastructures.html#more-on-conditions)
    *   [5.8\. Comparing Sequences and Other Types](https://docs.python.org/3.5/tutorial/datastructures.html#comparing-sequences-and-other-types)
*   [6\. Modules](https://docs.python.org/3.5/tutorial/modules.html)
    *   [6.1\. More on Modules](https://docs.python.org/3.5/tutorial/modules.html#more-on-modules)
        *   [6.1.1\. Executing modules as scripts](https://docs.python.org/3.5/tutorial/modules.html#executing-modules-as-scripts)
        *   [6.1.2\. The Module Search Path](https://docs.python.org/3.5/tutorial/modules.html#the-module-search-path)
        *   [6.1.3\. “Compiled” Python files](https://docs.python.org/3.5/tutorial/modules.html#compiled-python-files)
    *   [6.2\. Standard Modules](https://docs.python.org/3.5/tutorial/modules.html#standard-modules)
    *   [6.3\. The dir() Function](https://docs.python.org/3.5/tutorial/modules.html#the-dir-function)
    *   [6.4\. Packages](https://docs.python.org/3.5/tutorial/modules.html#packages)
        *   [6.4.1\. Importing * From a Package](https://docs.python.org/3.5/tutorial/modules.html#importing-from-a-package)
        *   [6.4.2\. Intra-package References](https://docs.python.org/3.5/tutorial/modules.html#intra-package-references)
        *   [6.4.3\. Packages in Multiple Directories](https://docs.python.org/3.5/tutorial/modules.html#packages-in-multiple-directories)
*   [7\. Input and Output](https://docs.python.org/3.5/tutorial/inputoutput.html)
    *   [7.1\. Fancier Output Formatting](https://docs.python.org/3.5/tutorial/inputoutput.html#fancier-output-formatting)
        *   [7.1.1\. Old string formatting](https://docs.python.org/3.5/tutorial/inputoutput.html#old-string-formatting)
    *   [7.2\. Reading and Writing Files](https://docs.python.org/3.5/tutorial/inputoutput.html#reading-and-writing-files)
        *   [7.2.1\. Methods of File Objects](https://docs.python.org/3.5/tutorial/inputoutput.html#methods-of-file-objects)
        *   [7.2.2\. Saving structured data with json](https://docs.python.org/3.5/tutorial/inputoutput.html#saving-structured-data-with-json)
*   [8\. Errors and Exceptions](https://docs.python.org/3.5/tutorial/errors.html)
    *   [8.1\. Syntax Errors](https://docs.python.org/3.5/tutorial/errors.html#syntax-errors)
    *   [8.2\. Exceptions](https://docs.python.org/3.5/tutorial/errors.html#exceptions)
    *   [8.3\. Handling Exceptions](https://docs.python.org/3.5/tutorial/errors.html#handling-exceptions)
    *   [8.4\. Raising Exceptions](https://docs.python.org/3.5/tutorial/errors.html#raising-exceptions)
    *   [8.5\. User-defined Exceptions](https://docs.python.org/3.5/tutorial/errors.html#user-defined-exceptions)
    *   [8.6\. Defining Clean-up Actions](https://docs.python.org/3.5/tutorial/errors.html#defining-clean-up-actions)
    *   [8.7\. Predefined Clean-up Actions](https://docs.python.org/3.5/tutorial/errors.html#predefined-clean-up-actions)
*   [9\. Classes](https://docs.python.org/3.5/tutorial/classes.html)
    *   [9.1\. A Word About Names and Objects](https://docs.python.org/3.5/tutorial/classes.html#a-word-about-names-and-objects)
    *   [9.2\. Python Scopes and Namespaces](https://docs.python.org/3.5/tutorial/classes.html#python-scopes-and-namespaces)
        *   [9.2.1\. Scopes and Namespaces Example](https://docs.python.org/3.5/tutorial/classes.html#scopes-and-namespaces-example)
    *   [9.3\. A First Look at Classes](https://docs.python.org/3.5/tutorial/classes.html#a-first-look-at-classes)
        *   [9.3.1\. Class Definition Syntax](https://docs.python.org/3.5/tutorial/classes.html#class-definition-syntax)
        *   [9.3.2\. Class Objects](https://docs.python.org/3.5/tutorial/classes.html#class-objects)
        *   [9.3.3\. Instance Objects](https://docs.python.org/3.5/tutorial/classes.html#instance-objects)
        *   [9.3.4\. Method Objects](https://docs.python.org/3.5/tutorial/classes.html#method-objects)
        *   [9.3.5\. Class and Instance Variables](https://docs.python.org/3.5/tutorial/classes.html#class-and-instance-variables)
    *   [9.4\. Random Remarks](https://docs.python.org/3.5/tutorial/classes.html#random-remarks)
    *   [9.5\. Inheritance](https://docs.python.org/3.5/tutorial/classes.html#inheritance)
        *   [9.5.1\. Multiple Inheritance](https://docs.python.org/3.5/tutorial/classes.html#multiple-inheritance)
    *   [9.6\. Private Variables](https://docs.python.org/3.5/tutorial/classes.html#private-variables)
    *   [9.7\. Odds and Ends](https://docs.python.org/3.5/tutorial/classes.html#odds-and-ends)
    *   [9.8\. Exceptions Are Classes Too](https://docs.python.org/3.5/tutorial/classes.html#exceptions-are-classes-too)
    *   [9.9\. Iterators](https://docs.python.org/3.5/tutorial/classes.html#iterators)
    *   [9.10\. Generators](https://docs.python.org/3.5/tutorial/classes.html#generators)
    *   [9.11\. Generator Expressions](https://docs.python.org/3.5/tutorial/classes.html#generator-expressions)
*   [10\. Brief Tour of the Standard Library](https://docs.python.org/3.5/tutorial/stdlib.html)
    *   [10.1\. Operating System Interface](https://docs.python.org/3.5/tutorial/stdlib.html#operating-system-interface)
    *   [10.2\. File Wildcards](https://docs.python.org/3.5/tutorial/stdlib.html#file-wildcards)
    *   [10.3\. Command Line Arguments](https://docs.python.org/3.5/tutorial/stdlib.html#command-line-arguments)
    *   [10.4\. Error Output Redirection and Program Termination](https://docs.python.org/3.5/tutorial/stdlib.html#error-output-redirection-and-program-termination)
    *   [10.5\. String Pattern Matching](https://docs.python.org/3.5/tutorial/stdlib.html#string-pattern-matching)
    *   [10.6\. Mathematics](https://docs.python.org/3.5/tutorial/stdlib.html#mathematics)
    *   [10.7\. Internet Access](https://docs.python.org/3.5/tutorial/stdlib.html#internet-access)
    *   [10.8\. Dates and Times](https://docs.python.org/3.5/tutorial/stdlib.html#dates-and-times)
    *   [10.9\. Data Compression](https://docs.python.org/3.5/tutorial/stdlib.html#data-compression)
    *   [10.10\. Performance Measurement](https://docs.python.org/3.5/tutorial/stdlib.html#performance-measurement)
    *   [10.11\. Quality Control](https://docs.python.org/3.5/tutorial/stdlib.html#quality-control)
    *   [10.12\. Batteries Included](https://docs.python.org/3.5/tutorial/stdlib.html#batteries-included)
*   [11\. Brief Tour of the Standard Library – Part II](https://docs.python.org/3.5/tutorial/stdlib2.html)
    *   [11.1\. Output Formatting](https://docs.python.org/3.5/tutorial/stdlib2.html#output-formatting)
    *   [11.2\. Templating](https://docs.python.org/3.5/tutorial/stdlib2.html#templating)
    *   [11.3\. Working with Binary Data Record Layouts](https://docs.python.org/3.5/tutorial/stdlib2.html#working-with-binary-data-record-layouts)
    *   [11.4\. Multi-threading](https://docs.python.org/3.5/tutorial/stdlib2.html#multi-threading)
    *   [11.5\. Logging](https://docs.python.org/3.5/tutorial/stdlib2.html#logging)
    *   [11.6\. Weak References](https://docs.python.org/3.5/tutorial/stdlib2.html#weak-references)
    *   [11.7\. Tools for Working with Lists](https://docs.python.org/3.5/tutorial/stdlib2.html#tools-for-working-with-lists)
    *   [11.8\. Decimal Floating Point Arithmetic](https://docs.python.org/3.5/tutorial/stdlib2.html#decimal-floating-point-arithmetic)
*   [12\. Virtual Environments and Packages](https://docs.python.org/3.5/tutorial/venv.html)
    *   [12.1\. Introduction](https://docs.python.org/3.5/tutorial/venv.html#introduction)
    *   [12.2\. Creating Virtual Environments](https://docs.python.org/3.5/tutorial/venv.html#creating-virtual-environments)
    *   [12.3\. Managing Packages with pip](https://docs.python.org/3.5/tutorial/venv.html#managing-packages-with-pip)
*   [13\. What Now?](https://docs.python.org/3.5/tutorial/whatnow.html)
*   [14\. Interactive Input Editing and History Substitution](https://docs.python.org/3.5/tutorial/interactive.html)
    *   [14.1\. Tab Completion and History Editing](https://docs.python.org/3.5/tutorial/interactive.html#tab-completion-and-history-editing)
    *   [14.2\. Alternatives to the Interactive Interpreter](https://docs.python.org/3.5/tutorial/interactive.html#alternatives-to-the-interactive-interpreter)
*   [15\. Floating Point Arithmetic: Issues and Limitations](https://docs.python.org/3.5/tutorial/floatingpoint.html)
    *   [15.1\. Representation Error](https://docs.python.org/3.5/tutorial/floatingpoint.html#representation-error)
*   [16\. Appendix](https://docs.python.org/3.5/tutorial/appendix.html)
    *   [16.1\. Interactive Mode](https://docs.python.org/3.5/tutorial/appendix.html#interactive-mode)
        *   [16.1.1\. Error Handling](https://docs.python.org/3.5/tutorial/appendix.html#error-handling)
        *   [16.1.2\. Executable Python Scripts](https://docs.python.org/3.5/tutorial/appendix.html#executable-python-scripts)
        *   [16.1.3\. The Interactive Startup File](https://docs.python.org/3.5/tutorial/appendix.html#the-interactive-startup-file)
        *   [16.1.4\. The Customization Modules](https://docs.python.org/3.5/tutorial/appendix.html#the-customization-modules)


### http://thecodeship.com/patterns/guide-to-python-function-decorators/
### best explanation of decorator
# Third Party
