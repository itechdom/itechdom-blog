# Concepts
<p style="box-sizing: border-box; color: rgb(0, 0, 0); line-height: 24px; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify; font-family: &apos;Open Sans&apos;, Arial, sans-serif;">Linux Operating System has primarily three components</p><ul class="list" style="box-sizing: border-box; color: rgb(49, 49, 49); font-family: &apos;Open Sans&apos;, Arial, sans-serif; line-height: 22px;"><li style="box-sizing: border-box; line-height: 24px; margin-bottom: 5px; padding: 0px 0px 0px 19px; list-style: none; color: rgb(0, 0, 0); background: url(http://www.tutorialspoint.com/images/icon-bullet.png) 0px 4px no-repeat;"><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><b style="box-sizing: border-box;">Kernel</b>&#xA0;- Kernel is the core part of Linux. It is responsible for all major activities of this operating system. It is consists of various modules and it interacts directly with the underlying hardware. Kernel provides the required abstraction to hide low level hardware details to system or application programs.</p></li><li style="box-sizing: border-box; line-height: 24px; margin-bottom: 5px; padding: 0px 0px 0px 19px; list-style: none; color: rgb(0, 0, 0); background: url(http://www.tutorialspoint.com/images/icon-bullet.png) 0px 4px no-repeat;"><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><b style="box-sizing: border-box;">System Library</b>&#xA0;- System libraries are special functions or programs using which application programs or system utilities accesses Kernel&apos;s features. These libraries implements most of the functionalities of the operating system and do not requires kernel module&apos;s code access rights.</p></li><li style="box-sizing: border-box; line-height: 24px; margin-bottom: 5px; padding: 0px 0px 0px 19px; list-style: none; color: rgb(0, 0, 0); background: url(http://www.tutorialspoint.com/images/icon-bullet.png) 0px 4px no-repeat;"><p style="box-sizing: border-box; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify;"><b style="box-sizing: border-box;">System Utility</b>&#xA0;- System Utility programs are responsible to do specialized, individual level tasks.</p></li></ul>
### File System
### Permissions
### Groups
### owner
### u
### group
### g
### All users
### o or a
### Types
### r
### w
### x
### How to read
### They are in order rwxrwxrwx
### Owner
### Group
### All
### -
### is special permission
### How to modify
### Chmod
### permission group
### + or - to add or delete
### r or w or x
### You can also use a number
r = 4<div>w = 2</div><div>x = 1</div><div><br></div><div>you can add them up together like so:</div><div><br></div><div>chmod u+_rwxr___ | chmod u+740</div>
### How do I  know who is the owner or group or all
### are scripts executed by the owner considered owner permission 
### IE: node or python ...
### you own the file system, you assign programs to write/read/execute
<span style="color: rgb(79, 79, 79); font-family: Helvetica, &apos;Arial Unicode MS&apos;, sans-serif; font-size: 12px; font-weight: bold; line-height: 18px; text-align: center; white-space: pre-wrap; background-color: rgb(224, 224, 224);">so brew can&apos;t modify a folder unless you change the permission, nor it will accept a sudo.</span>
### Advanced Permission
<p style="margin-top: 10px; padding: 0px; line-height: 18px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><strong><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;">Advanced Permissions</span></span></strong></p><p style="margin-top: 10px; padding: 0px; line-height: 18px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;">The special permissions flag can be marked with any of the following:</span></span></p><ul style="margin-top: 10px; margin-left: 0px; line-height: 18px; list-style: none; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><li style="line-height: 19.2px; padding-left: 30px; background: url(&quot;../images/bullet.gif&quot;) 18px 7px no-repeat;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;"><strong>_</strong>&#xA0;- no special permissions</span></span></li><li style="line-height: 19.2px; padding-left: 30px; background: url(&quot;../images/bullet.gif&quot;) 18px 7px no-repeat;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;"><em><strong>d</strong></em>&#xA0;- directory</span></span></li><li style="line-height: 19.2px; padding-left: 30px; background: url(&quot;../images/bullet.gif&quot;) 18px 7px no-repeat;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;"><em><strong>l</strong>&#xA0;</em>- The file or directory is a symbolic link</span></span></li><li style="line-height: 19.2px; padding-left: 30px; background: url(&quot;../images/bullet.gif&quot;) 18px 7px no-repeat;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;"><em><strong>s</strong></em>&#xA0;- This indicated the setuid/setgid permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a&#xA0;<strong>s</strong>&#xA0;in the read portion of the owner or group permissions.</span></span></li><li style="line-height: 19.2px; padding-left: 30px; background: url(&quot;../images/bullet.gif&quot;) 18px 7px no-repeat;"><span style="font-size: 11px;"><span style="font-family: arial, helvetica, sans-serif;"><em><strong>t</strong></em>&#xA0;- This indicates the sticky bit permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a&#xA0;<strong>t</strong>&#xA0;in the executable portion of the all users permissions</span></span></li></ul>
### Kernel
### Drivers
### Memory Model
### IPC
### Inter process communication
### Kernel Mode
### User Mode
### Execution Environment
### Remember the point that your program get executed in
### Processes/Threads
### Security
### System Calls
### Shells
### Command Line
### Command Line Road
### https://drive.google.com/open?id=0B9tPYCpuqoIrVHZGNTNOYW0xUWs
### An interface to the OS
### Virtualization
### Build tools
### make
### https://www.gnu.org/software/make/
### get its info from makefile
### Shared Libraries
<h2 id="N10070" style="margin-top: 5px; margin-bottom: 5px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: HelveticaNeue-Light, &apos;Helvetica Neue Light&apos;, &apos;Helvetica Neue&apos;, Helvetica, Arial; color: rgb(0, 0, 0); font-size: 1.6em !important;">Shared libraries</h2><p style="margin-bottom: 0px; padding: 6px 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.5em; margin-top: 5px !important; font-size: 1.166em !important;">When you write a program, you rely on many pieces of code that someone else has already written to perform routine or specialized functions for you. These pieces of code are stored in shared libraries. To use them, you link them with your code, either when you build the program or when you run the program.</p>
### http://www.ibm.com/developerworks/library/l-lpic1-102-3/
### IBM tutorial
### Statically linked
### Dynamically Linked
### http://www.thegeekstuff.com/2012/06/linux-shared-libraries/
### simpler tutorial 
### Similar to the root node_modules
### Or system packages
# Resources
### http://www.tutorialspoint.com/operating_system/os_linux.htm
### Tutorials Point
### Arechticture
### http://www.tutorialspoint.com/operating_system/images/linux_os.jpg
### Books
### https://drive.google.com/open?id=0B9tPYCpuqoIrWWFrekFHNDJMWDQ
### Udacity: Advanced OS
### https://www.udacity.com/course/viewer#!/c-ud189/l-3652509443/m-641659207
### System utils
### source code
### git clone git://git.sv.gnu.org/coreutils
### http://www.gnu.org/software/coreutils/coreutils.html
# Software
### GUI
### KDE
### KDE
### https://en.wikipedia.org/wiki/KDE
### https://www.kde.org/
### Gnome
### https://www.gnome.org/
# Flavors
### Red Star OS


### https://www.youtube.com/watch?v=j_9QOgg0GRE
### video installing VM
### https://en.m.wikipedia.org/wiki/Red_Star_OS
### Red Star OS from North Korea
# Programmed in
### Kernel
### C
### Tutorials Point
### http://www.tutorialspoint.com/csharp/
### MSDN
### https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx
### Userland
### C++
### Python
