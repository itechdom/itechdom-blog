# Concepts
## File System
### Permissions
#### Groups
##### owner
###### u
##### group
###### g
##### All users
###### o or a
#### Types
##### r
##### w
##### x
#### How to read
##### They are in order rwxrwxrwx
###### Owner
###### Group
###### All
###### -
####### is special permission
#### How to modify
##### Chmod
###### permission group
####### + or - to add or delete
######## r or w or x
##### You can also use a number
r = 4<div>w = 2</div><div>x = 1</div><div><br></div><div>you can add them up together like so:</div><div><br></div><div>chmod u+_rwxr___ | chmod u+740</div>
#### How do I  know who is the owner or group or all
##### are scripts executed by the owner considered owner permission 
###### IE: node or python ...
##### you own the file system, you assign programs to write/read/execute
<span>so brew can&apos;t modify a folder unless you change the permission, nor it will accept a sudo.</span>
#### Advanced Permission
<p><strong><span><span>Advanced Permissions</span></span></strong></p><p><span><span>The special permissions flag can be marked with any of the following:</span></span></p><ul><li><span><span><strong>_</strong>&#xA0;- no special permissions</span></span></li><li><span><span><em><strong>d</strong></em>&#xA0;- directory</span></span></li><li><span><span><em><strong>l</strong>&#xA0;</em>- The file or directory is a symbolic link</span></span></li><li><span><span><em><strong>s</strong></em>&#xA0;- This indicated the setuid/setgid permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a&#xA0;<strong>s</strong>&#xA0;in the read portion of the owner or group permissions.</span></span></li><li><span><span><em><strong>t</strong></em>&#xA0;- This indicates the sticky bit permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a&#xA0;<strong>t</strong>&#xA0;in the executable portion of the all users permissions</span></span></li></ul>
## Kernel
## Drivers
## Memory Model
## IPC
## Kernel Mode
## User Mode
## Execution Environment
### Remember the point that your program get executed in
## Processes/Threads
## Security
## System Calls
## Shells
### Command Line
#### Command Line Road
##### https://drive.google.com/open?id=0B9tPYCpuqoIrVHZGNTNOYW0xUWs
### An interface to the OS
## Virtualization
<p>Linux Operating System has primarily three components</p><ul class="list"><li><p><b>Kernel</b>&#xA0;- Kernel is the core part of Linux. It is responsible for all major activities of this operating system. It is consists of various modules and it interacts directly with the underlying hardware. Kernel provides the required abstraction to hide low level hardware details to system or application programs.</p></li><li><p><b>System Library</b>&#xA0;- System libraries are special functions or programs using which application programs or system utilities accesses Kernel&apos;s features. These libraries implements most of the functionalities of the operating system and do not requires kernel module&apos;s code access rights.</p></li><li><p><b>System Utility</b>&#xA0;- System Utility programs are responsible to do specialized, individual level tasks.</p></li></ul>
# Resources
## http://www.tutorialspoint.com/operating_system/os_linux.htm
### Tutorials Point
## Arechticture
### http://www.tutorialspoint.com/operating_system/images/linux_os.jpg
## Books
### https://drive.google.com/open?id=0B9tPYCpuqoIrWWFrekFHNDJMWDQ
## Udacity: Advanced OS
### https://www.udacity.com/course/viewer#!/c-ud189/l-3652509443/m-641659207
# Software
## GUI
### KDE
### KDE
#### https://en.wikipedia.org/wiki/KDE
#### https://www.kde.org/
### Gnome
#### https://www.gnome.org/
# Flavors
## https://en.m.wikipedia.org/wiki/Red_Star_OS
### Red Star OS from North Korea
# Programmed in
## Kernel
### C
#### Tutorials Point
##### http://www.tutorialspoint.com/csharp/
#### MSDN
##### https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx
## Userland
### C++
### Python
