# Concepts
Linux Operating System has primarily three components

*   **Kernel** - Kernel is the core part of Linux. It is responsible for all major activities of this operating system. It is consists of various modules and it interacts directly with the underlying hardware. Kernel provides the required abstraction to hide low level hardware details to system or application programs.

*   **System Library** - System libraries are special functions or programs using which application programs or system utilities accesses Kernel's features. These libraries implements most of the functionalities of the operating system and do not requires kernel module's code access rights.

*   **System Utility** - System Utility programs are responsible to do specialized, individual level tasks.
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
r = 4

w = 2

x = 1

you can add them up together like so:

chmod u+_rwxr___ | chmod u+740
### How do I  know who is the owner or group or all
### are scripts executed by the owner considered owner permission 
### IE: node or python ...
### you own the file system, you assign programs to write/read/execute
so brew can't modify a folder unless you change the permission, nor it will accept a sudo.
### Advanced Permission
**Advanced Permissions**

The special permissions flag can be marked with any of the following:

*   **_** - no special permissions
*   _**d**_ - directory
*   _**l** _- The file or directory is a symbolic link
*   _**s**_ - This indicated the setuid/setgid permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a **s** in the read portion of the owner or group permissions.
*   _**t**_ - This indicates the sticky bit permissions. This is not set displayed in the special permission part of the permissions display, but is represented as a **t** in the executable portion of the all users permissions
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
## Shared libraries

When you write a program, you rely on many pieces of code that someone else has already written to perform routine or specialized functions for you. These pieces of code are stored in shared libraries. To use them, you link them with your code, either when you build the program or when you run the program.
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
