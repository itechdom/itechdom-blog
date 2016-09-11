# Concepts
A way for a server to interact with executables.
### https://en.wikipedia.org/wiki/Common_Gateway_Interface
### Almost a middleware between the server and the browser
### Servers hand control to the CGI script, then CGI will handle the output
### Code Example
## Syntax[[edit](https://en.wikipedia.org/w/index.php?title=Common_Gateway_Interface&action=edit&section=3 "Edit section: Syntax")]

The following [Perl](https://en.wikipedia.org/wiki/Perl "Perl") program shows all the environment variables passed by the Web server:



#!/usr/bin/perl

=head1 DESCRIPTION

printenv — a CGI program that just prints its environment

=cut
print "Content-type: text/plain\n\n";

for my $var ( sort keys %ENV ) {
 printf "%s = \"%s\"\n", $var, $ENV{$var};
}




If a Web browser issues a request for the environment variables at `http://example.com/cgi-bin/printenv.pl/foo/bar?var1=value1&var2=with%20percent%20encoding`, a 64-bit [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") web server running [cygwin](https://en.wikipedia.org/wiki/Cygwin "Cygwin") returns the following information:



 COMSPEC="C:\Windows\system32\cmd.exe"
 DOCUMENT_ROOT="C:/Program Files (x86)/Apache Software Foundation/Apache2.2/htdocs"
 GATEWAY_INTERFACE="CGI/1.1"
 HOME="/home/SYSTEM"
 HTTP_ACCEPT="text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
 HTTP_ACCEPT_CHARSET="ISO-8859-1,utf-8;q=0.7,*;q=0.7"
 HTTP_ACCEPT_ENCODING="gzip, deflate"
 HTTP_ACCEPT_LANGUAGE="en-us,en;q=0.5"
 HTTP_CONNECTION="keep-alive"
 HTTP_HOST="example.com"
 HTTP_USER_AGENT="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0"
 PATH="/home/SYSTEM/bin:/bin:/cygdrive/c/progra~2/php:/cygdrive/c/windows/system32:..."
 PATHEXT=".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC"
 PATH_INFO="/foo/bar"
 PATH_TRANSLATED="C:\Program Files (x86)\Apache Software Foundation\Apache2.2\htdocs\foo\bar"
 QUERY_STRING="var1=value1&var2=with%20percent%20encoding"
 REMOTE_ADDR="127.0.0.1"
 REMOTE_PORT="63555"
 REQUEST_METHOD="GET"
 REQUEST_URI="/cgi-bin/printenv.pl/foo/bar?var1=value1&var2=with%20percent%20encoding"
 SCRIPT_FILENAME="C:/Program Files (x86)/Apache Software Foundation/Apache2.2/cgi-bin/printenv.pl"
 SCRIPT_NAME="/cgi-bin/printenv.pl"
 SERVER_ADDR="127.0.0.1"
 SERVER_ADMIN="(server admin's email address)"
 SERVER_NAME="127.0.0.1"
 SERVER_PORT="80"
 SERVER_PROTOCOL="HTTP/1.1"
 SERVER_SIGNATURE=""
 SERVER_SOFTWARE="Apache/2.2.19 (Win32) PHP/5.2.17"
 SYSTEMROOT="C:\Windows"
 TERM="cygwin"
 WINDIR="C:\Windows"


### Alternatives
## Alternatives[[edit](https://en.wikipedia.org/w/index.php?title=Common_Gateway_Interface&action=edit&section=6 "Edit section: Alternatives")]

Calling a command generally means the invocation of a newly created [process](https://en.wikipedia.org/wiki/Process_(computing) "Process (computing)") on the server. Starting the process can consume much more time and memory than the actual work of generating the output, especially when the program still needs to be [interpreted](https://en.wikipedia.org/wiki/Interpret "Interpret") or [compiled](https://en.wikipedia.org/wiki/Compiler "Compiler"). If the command is called often, the resulting workload can quickly overwhelm the server.

The [overhead](https://en.wikipedia.org/wiki/Computational_overhead "Computational overhead") involved in interpretation may be reduced by using compiled CGI programs, such as those in [C](https://en.wikipedia.org/wiki/C_(programming_language) "C (programming language)")/[C++](https://en.wikipedia.org/wiki/C%2B%2B "C++"), rather than using [Perl](https://en.wikipedia.org/wiki/Perl "Perl") or other interpreted languages. The overhead involved in process creation can be reduced by techniques such as [FastCGI](https://en.wikipedia.org/wiki/FastCGI "FastCGI") that "prefork" interpreter processes, or by running the application code entirely within the web server, using extension modules such as mod_php.

Several approaches can be adopted for remedying this:

*   The popular Web servers developed their own extension mechanisms that allows third-party software to run inside the web server itself, such as [Apache modules](https://en.wikipedia.org/wiki/Apache_modules "Apache modules"), [NSAPI](https://en.wikipedia.org/wiki/Netscape_Server_Application_Programming_Interface "Netscape Server Application Programming Interface") plugins and [ISAPI](https://en.wikipedia.org/wiki/ISAPI "ISAPI") plugins.
*   [Simple Common Gateway Interface](https://en.wikipedia.org/wiki/Simple_Common_Gateway_Interface "Simple Common Gateway Interface") or SCGI
*   [FastCGI](https://en.wikipedia.org/wiki/FastCGI "FastCGI") allows a single, long-running process to handle more than one user request while keeping close to the CGI programming model, retaining the simplicity while eliminating the overhead of creating a new process for each request. Unlike converting an application to a web server plug-in, FastCGI applications remain independent of the web server.
*   Replacement of the architecture for dynamic websites can also be used. This is the approach taken by [Java EE](https://en.wikipedia.org/wiki/Java_EE "Java EE"), which runs Java code in a Java servlet container in order to serve dynamic content and optionally static content. This approach replaces the overhead of generating and destroying processes with the much lower overhead of generating and destroying [threads](https://en.wikipedia.org/wiki/Thread_(computer_science) "Thread (computer science)"), and also exposes the programmer to the library that comes with [Java Platform, Standard Edition](https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition "Java Platform, Standard Edition") on which the version of Java EE in use is based.

The optimal configuration for any Web application depends on application-specific details, amount of traffic, and complexity of the transaction; these tradeoffs need to be analyzed to determine the best implementation for a given task and time budget.
### CGI libraries
### http://www.gnu.org/software/cgicc/
