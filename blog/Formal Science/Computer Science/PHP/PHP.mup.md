#Core
#7.0
#https://blog.engineyard.com/2015/what-to-expect-php-7
#Resources
#https://en.wikipedia.org/wiki/PHP
#Implementations
* <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">While Zend PHP is still the most popular implementation, several other implementations have been developed. Some of these are&nbsp;<a href="https://en.wikipedia.org/wiki/Compiler" title="Compiler" style="color: rgb(11, 0, 128); background: none;" target="_blank">compilers</a>&nbsp;or support&nbsp;<a href="https://en.wikipedia.org/wiki/JIT_compilation" title="JIT compilation" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;" target="_blank">JIT compilation</a>, and hence offer performance benefits over Zend PHP at the expense of lacking full PHP compatibility. Alternative implementations include the following:</p><ul style="margin-top: 0.3em; margin-bottom: 0px; margin-left: 1.6em; list-style-image: url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%225%22%20height%3D%2213%22%3E%0A%3Ccircle%20cx%3D%222.5%22%20cy%3D%229.5%22%20r%3D%222.5%22%20fill%3D%22%2300528c%22%2F%3E%0A%3C%2Fsvg%3E%0A); color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"><li style="margin-bottom: 0.1em;"><a href="https://en.wikipedia.org/wiki/HipHop_Virtual_Machine" title="HipHop Virtual Machine" style="color: rgb(11, 0, 128); background: none;" target="_blank">HipHop Virtual Machine</a>&nbsp;(HHVM)&nbsp;– developed at Facebook and available as open source, it converts PHP code into a high-level bytecode (commonly known as an&nbsp;<a href="https://en.wikipedia.org/wiki/Intermediate_language" title="Intermediate language" style="color: rgb(11, 0, 128); background: none;" target="_blank">intermediate language</a>), which is then translated into x86-64 machine code dynamically at runtime by a&nbsp;<a href="https://en.wikipedia.org/wiki/Just-in-time_compiler" title="Just-in-time compiler" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;" target="_blank">just-in-time</a>&nbsp;(JIT) compiler, resulting in up to 6× performance improvements.<sup id="cite_ref-112" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;"><a href="https://en.wikipedia.org/wiki/PHP#cite_note-112" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;" target="_blank">[112]</a></sup></li><li style="margin-bottom: 0.1em;"><a href="https://en.wikipedia.org/wiki/Parrot_virtual_machine" title="Parrot virtual machine" style="color: rgb(11, 0, 128); background: none;" target="_blank">Parrot</a>&nbsp;– a virtual machine designed to run dynamic languages efficiently; Pipp transforms the PHP source code into the&nbsp;<a href="https://en.wikipedia.org/wiki/Parrot_intermediate_representation" title="Parrot intermediate representation" style="color: rgb(11, 0, 128); background: none;" target="_blank">Parrot intermediate representation</a>, which is then translated into the Parrot's bytecode and executed by the virtual machine.</li><li style="margin-bottom: 0.1em;"><a href="https://en.wikipedia.org/wiki/Phalanger_(compiler)" title="Phalanger (compiler)" style="color: rgb(11, 0, 128); background: none;" target="_blank">Phalanger</a>&nbsp;– compiles PHP into&nbsp;<a href="https://en.wikipedia.org/wiki/Common_Intermediate_Language" title="Common Intermediate Language" style="color: rgb(11, 0, 128); background: none;" target="_blank">Common Intermediate Language</a>&nbsp;(CIL) bytecode</li><li style="margin-bottom: 0.1em;"><a href="https://en.wikipedia.org/wiki/HipHop_for_PHP" title="HipHop for PHP" style="color: rgb(11, 0, 128); background: none;" target="_blank">HipHop</a>&nbsp;– developed at Facebook and available as open source, it transforms the PHP scripts into&nbsp;<a href="https://en.wikipedia.org/wiki/C%2B%2B" title="C++" style="color: rgb(11, 0, 128); background: none;" target="_blank">C++</a>&nbsp;code and then compiles the resulting code, reducing the server load up to 50%. In early 2013, Facebook deprecated it in favor of HHVM due to multiple reasons, including deployment difficulties and lack of support for the whole PHP language, including the&nbsp;<tt style="font-family: monospace, Courier;">create_function()</tt>&nbsp;and&nbsp;<tt style="font-family: monospace, Courier;">eval()</tt>&nbsp;constructs.<sup id="cite_ref-113" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;"><a href="https://en.wikipedia.org/wiki/PHP#cite_note-113" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;" target="_blank">[113]</a></sup></li></ul>
#PHP Doc Page
* <ul class="chunklist chunklist_set" style="margin-bottom: 1.5rem; margin-left: 1.5rem; font-family: 'Fira Sans', 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; background-color: rgb(242, 242, 242);"><li><a href="https://php.net/manual/en/getting-started.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Getting Started</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/introduction.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Introduction</a></li><li><a href="https://php.net/manual/en/tutorial.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">A simple tutorial</a></li></ul></li><li><a href="https://php.net/manual/en/install.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation and Configuration</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/install.general.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">General Installation Considerations</a></li><li><a href="https://php.net/manual/en/install.unix.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation on Unix systems</a></li><li><a href="https://php.net/manual/en/install.macosx.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation on Mac OS X</a></li><li><a href="https://php.net/manual/en/install.windows.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation on Windows systems</a></li><li><a href="https://php.net/manual/en/install.cloud.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation on Cloud Computing platforms</a></li><li><a href="https://php.net/manual/en/install.fpm.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">FastCGI Process Manager (FPM)</a></li><li><a href="https://php.net/manual/en/install.pecl.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation of PECL extensions</a></li><li><a href="https://php.net/manual/en/install.problems.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Problems?</a></li><li><a href="https://php.net/manual/en/configuration.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Runtime Configuration</a></li></ul></li><li><a href="https://php.net/manual/en/langref.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Language Reference</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/language.basic-syntax.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Basic syntax</a></li><li><a href="https://php.net/manual/en/language.types.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Types</a></li><li><a href="https://php.net/manual/en/language.variables.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Variables</a></li><li><a href="https://php.net/manual/en/language.constants.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Constants</a></li><li><a href="https://php.net/manual/en/language.expressions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Expressions</a></li><li><a href="https://php.net/manual/en/language.operators.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Operators</a></li><li><a href="https://php.net/manual/en/language.control-structures.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Control Structures</a></li><li><a href="https://php.net/manual/en/language.functions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Functions</a></li><li><a href="https://php.net/manual/en/language.oop5.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Classes and Objects</a></li><li><a href="https://php.net/manual/en/language.namespaces.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Namespaces</a></li><li><a href="https://php.net/manual/en/language.errors.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Errors</a></li><li><a href="https://php.net/manual/en/language.exceptions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Exceptions</a></li><li><a href="https://php.net/manual/en/language.generators.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Generators</a></li><li><a href="https://php.net/manual/en/language.references.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">References Explained</a></li><li><a href="https://php.net/manual/en/reserved.variables.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Predefined Variables</a></li><li><a href="https://php.net/manual/en/reserved.exceptions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Predefined Exceptions</a></li><li><a href="https://php.net/manual/en/reserved.interfaces.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Predefined Interfaces and Classes</a></li><li><a href="https://php.net/manual/en/context.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Context options and parameters</a></li><li><a href="https://php.net/manual/en/wrappers.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Supported Protocols and Wrappers</a></li></ul></li><li><a href="https://php.net/manual/en/security.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Security</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/security.intro.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Introduction</a></li><li><a href="https://php.net/manual/en/security.general.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">General considerations</a></li><li><a href="https://php.net/manual/en/security.cgi-bin.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installed as CGI binary</a></li><li><a href="https://php.net/manual/en/security.apache.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installed as an Apache module</a></li><li><a href="https://php.net/manual/en/security.filesystem.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Filesystem Security</a></li><li><a href="https://php.net/manual/en/security.database.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Database Security</a></li><li><a href="https://php.net/manual/en/security.errors.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Error Reporting</a></li><li><a href="https://php.net/manual/en/security.globals.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Using Register Globals</a></li><li><a href="https://php.net/manual/en/security.variables.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">User Submitted Data</a></li><li><a href="https://php.net/manual/en/security.magicquotes.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Magic Quotes</a></li><li><a href="https://php.net/manual/en/security.hiding.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Hiding PHP</a></li><li><a href="https://php.net/manual/en/security.current.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Keeping Current</a></li></ul></li><li><a href="https://php.net/manual/en/features.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Features</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/features.http-auth.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">HTTP authentication with PHP</a></li><li><a href="https://php.net/manual/en/features.cookies.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Cookies</a></li><li><a href="https://php.net/manual/en/features.sessions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Sessions</a></li><li><a href="https://php.net/manual/en/features.xforms.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Dealing with XForms</a></li><li><a href="https://php.net/manual/en/features.file-upload.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Handling file uploads</a></li><li><a href="https://php.net/manual/en/features.remote-files.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Using remote files</a></li><li><a href="https://php.net/manual/en/features.connection-handling.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Connection handling</a></li><li><a href="https://php.net/manual/en/features.persistent-connections.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Persistent Database Connections</a></li><li><a href="https://php.net/manual/en/features.safe-mode.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Safe Mode</a></li><li><a href="https://php.net/manual/en/features.commandline.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Command line usage</a>&nbsp;— Using PHP from the command line</li><li><a href="https://php.net/manual/en/features.gc.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Garbage Collection</a></li><li><a href="https://php.net/manual/en/features.dtrace.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">DTrace Dynamic Tracing</a></li></ul></li><li><a href="https://php.net/manual/en/funcref.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Function Reference</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/refs.basic.php.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Affecting PHP's Behaviour</a></li><li><a href="https://php.net/manual/en/refs.utilspec.audio.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Audio Formats Manipulation</a></li><li><a href="https://php.net/manual/en/refs.remote.auth.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Authentication Services</a></li><li><a href="https://php.net/manual/en/refs.utilspec.cmdline.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Command Line Specific Extensions</a></li><li><a href="https://php.net/manual/en/refs.compression.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Compression and Archive Extensions</a></li><li><a href="https://php.net/manual/en/refs.creditcard.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Credit Card Processing</a></li><li><a href="https://php.net/manual/en/refs.crypto.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Cryptography Extensions</a></li><li><a href="https://php.net/manual/en/refs.database.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Database Extensions</a></li><li><a href="https://php.net/manual/en/refs.calendar.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Date and Time Related Extensions</a></li><li><a href="https://php.net/manual/en/refs.fileprocess.file.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">File System Related Extensions</a></li><li><a href="https://php.net/manual/en/refs.international.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Human Language and Character Encoding Support</a></li><li><a href="https://php.net/manual/en/refs.utilspec.image.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Image Processing and Generation</a></li><li><a href="https://php.net/manual/en/refs.remote.mail.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Mail Related Extensions</a></li><li><a href="https://php.net/manual/en/refs.math.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Mathematical Extensions</a></li><li><a href="https://php.net/manual/en/refs.utilspec.nontext.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Non-Text MIME Output</a></li><li><a href="https://php.net/manual/en/refs.fileprocess.process.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Process Control Extensions</a></li><li><a href="https://php.net/manual/en/refs.basic.other.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Other Basic Extensions</a></li><li><a href="https://php.net/manual/en/refs.remote.other.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Other Services</a></li><li><a href="https://php.net/manual/en/refs.search.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Search Engine Extensions</a></li><li><a href="https://php.net/manual/en/refs.utilspec.server.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Server Specific Extensions</a></li><li><a href="https://php.net/manual/en/refs.basic.session.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Session Extensions</a></li><li><a href="https://php.net/manual/en/refs.basic.text.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Text Processing</a></li><li><a href="https://php.net/manual/en/refs.basic.vartype.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Variable and Type Related Extensions</a></li><li><a href="https://php.net/manual/en/refs.webservice.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Web Services</a></li><li><a href="https://php.net/manual/en/refs.utilspec.windows.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Windows Only Extensions</a></li><li><a href="https://php.net/manual/en/refs.xml.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">XML Manipulation</a></li></ul></li><li><a href="https://php.net/manual/en/internals2.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">PHP at the Core: A Hacker's Guide</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/internals2.preface.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Preface</a></li><li><a href="https://php.net/manual/en/internals2.memory.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Memory management</a></li><li><a href="https://php.net/manual/en/internals2.variables.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Working with Variables</a></li><li><a href="https://php.net/manual/en/internals2.funcs.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Writing Functions</a></li><li><a href="https://php.net/manual/en/internals2.classes.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Writing Classes</a></li><li><a href="https://php.net/manual/en/internals2.resources.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Working with Resources</a></li><li><a href="https://php.net/manual/en/internals2.ini.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Working with INI settings</a></li><li><a href="https://php.net/manual/en/internals2.streams.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Working with streams</a></li><li><a href="https://php.net/manual/en/internals2.counter.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">The "counter" Extension - A Continuing Example</a></li><li><a href="https://php.net/manual/en/internals2.buildsys.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">The PHP 5 build system</a></li><li><a href="https://php.net/manual/en/internals2.structure.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Extension structure</a></li><li><a href="https://php.net/manual/en/internals2.pdo.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">PDO Driver How-To</a></li><li><a href="https://php.net/manual/en/internals2.faq.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Extension FAQs</a></li><li><a href="https://php.net/manual/en/internals2.apiref.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Zend Engine 2 API reference</a></li><li><a href="https://php.net/manual/en/internals2.opcodes.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Zend Engine 2 Opcodes</a></li><li><a href="https://php.net/manual/en/internals2.ze1.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Zend Engine 1</a></li></ul></li><li><a href="https://php.net/manual/en/faq.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">FAQ</a>&nbsp;— FAQ: Frequently Asked Questions<ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/faq.general.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">General Information</a></li><li><a href="https://php.net/manual/en/faq.mailinglist.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Mailing lists</a></li><li><a href="https://php.net/manual/en/faq.obtaining.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Obtaining PHP</a></li><li><a href="https://php.net/manual/en/faq.databases.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Database issues</a></li><li><a href="https://php.net/manual/en/faq.installation.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Installation</a></li><li><a href="https://php.net/manual/en/faq.build.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Build Problems</a></li><li><a href="https://php.net/manual/en/faq.using.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Using PHP</a></li><li><a href="https://php.net/manual/en/faq.passwords.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Password Hashing</a>&nbsp;— Safe Password Hashing</li><li><a href="https://php.net/manual/en/faq.html.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">PHP and HTML</a></li><li><a href="https://php.net/manual/en/faq.com.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">PHP and COM</a></li><li><a href="https://php.net/manual/en/faq.migration5.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 4 to PHP 5</a></li><li><a href="https://php.net/manual/en/faq.misc.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Miscellaneous Questions</a></li></ul></li><li><a href="https://php.net/manual/en/appendices.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Appendices</a><ul class="chunklist chunklist_set chunklist_children" style="margin-bottom: 1.5rem; margin-left: 1.5rem; list-style-type: disc;"><li><a href="https://php.net/manual/en/history.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">History of PHP and Related Projects</a></li><li><a href="https://php.net/manual/en/migration70.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.6.x to PHP 7.0.x</a></li><li><a href="https://php.net/manual/en/migration56.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.5.x to PHP 5.6.x</a></li><li><a href="https://php.net/manual/en/migration55.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.4.x to PHP 5.5.x</a></li><li><a href="https://php.net/manual/en/migration54.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.3.x to PHP 5.4.x</a></li><li><a href="https://php.net/manual/en/migration53.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.2.x to PHP 5.3.x</a></li><li><a href="https://php.net/manual/en/migration52.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.1.x to PHP 5.2.x</a></li><li><a href="https://php.net/manual/en/migration51.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 5.0.x to PHP 5.1.x</a></li><li><a href="https://php.net/manual/en/migration5.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Migrating from PHP 4 to PHP 5.0.x</a></li><li><a href="https://php.net/manual/en/oop4.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Classes and Objects (PHP 4)</a></li><li><a href="https://php.net/manual/en/debugger.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Debugging in PHP</a></li><li><a href="https://php.net/manual/en/configure.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Configure options</a></li><li><a href="https://php.net/manual/en/ini.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">php.ini directives</a></li><li><a href="https://php.net/manual/en/extensions.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Extension List/Categorization</a></li><li><a href="https://php.net/manual/en/aliases.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Function Aliases</a></li><li><a href="https://php.net/manual/en/reserved.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Reserved Words</a></li><li><a href="https://php.net/manual/en/resource.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Resource Types</a></li><li><a href="https://php.net/manual/en/filters.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Available Filters</a></li><li><a href="https://php.net/manual/en/transports.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Supported Socket Transports</a></li><li><a href="https://php.net/manual/en/types.comparisons.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">PHP type comparison tables</a></li><li><a href="https://php.net/manual/en/tokens.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">List of Parser Tokens</a></li><li><a href="https://php.net/manual/en/userlandnaming.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Userland Naming Guide</a></li><li><a href="https://php.net/manual/en/about.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">About the manual</a></li><li><a href="https://php.net/manual/en/cc.license.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Creative Commons Attribution 3.0</a></li><li><a href="https://php.net/manual/en/indexes.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Index listing</a></li><li><a href="https://php.net/manual/en/doc.changelog.php" style="border-bottom-width: 1px; border-bottom-style: solid; color: rgb(51, 102, 153);" target="_blank">Changelog</a></li></ul></li></ul>
#Project Starters