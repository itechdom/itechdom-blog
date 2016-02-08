# Interfaces
### Bash
### https://en.wikipedia.org/wiki/Bash_(Unix_shell)
### resources
### https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly
### Everyday use
Everyday useIn Bash, use Tab to complete arguments or list all available commands and ctrl-r to search through command history (after pressing, type to search, press ctrl-r repeatedly to cycle through more matches, press Enter to execute the found command, or hit the right arrow to put the result in the current line to allow editing).In Bash, use ctrl-w to delete the last word, and ctrl-u to delete all the way back to the start of the line. Use alt-b and alt-f to move by word, ctrl-a to move cursor to beginning of line, ctrl-e to move cursor to end of line, ctrl-k to kill to the end of the line, ctrl-l to clear the screen. See man readline for all the default keybindings in Bash. There are a lot. For example alt-. cycles through previous arguments, and alt-* expands a glob.Alternatively, if you love vi-style key-bindings, use set -o vi (and set -o emacs to put it back).For editing long commands, after setting your editor (for example export EDITOR=vim), ctrl-x ctrl-e will open the current command in an editor for multi-line editing. Or in vi style, escape-v.To see recent commands, history. There are also many abbreviations such as !$ (last argument) and !! last command, though these are often easily replaced with ctrl-r and alt-..To go back to the previous working directory: cd -If you are halfway through typing a command but change your mind, hit alt-# to add a # at the beginning and enter it as a comment (or use ctrl-a, #, enter). You can then return to it later via command history.Use xargs (or parallel). It's very powerful. Note you can control how many items execute per line (-L) as well as parallelism (-P). If you're not sure if it'll do the right thing, use xargs echofirst. Also, -I{} is handy. Examples: find . -name '*.py' | xargs grep some_function cat hosts | xargs -I{} ssh root@{} hostnamepstree -p is a helpful display of the process tree.Use pgrep and pkill to find or signal processes by name (-f is helpful).Know the various signals you can send processes. For example, to suspend a process, use kill -STOP [pid]. For the full list, see man 7 signalUse nohup or disown if you want a background process to keep running forever.Check what processes are listening via netstat -lntp or ss -plat (for TCP; add -u for UDP).See also lsof for open sockets and files.See uptime or w to know the how long the system has been running.Use alias to create shortcuts for commonly used commands. For example, alias ll='ls -latr' creates a new alias ll.In Bash scripts, use set -x (or the variant set -v, which logs raw input, including unexpanded variables and comments) for debugging output. Use strict modes unless you have a good reason not to: Use set -e to abort on errors (nonzero exit code). Use set -u to detect unset variable usages. Consider set -o pipefail too, to on errors within pipes, too (though read up on it more if you do, as this topic is a bit subtle). For more involved scripts, also use trap on EXIT or ERR. A useful habit is to start a script like this, which will make it detect and abort on common errors and print a message: set -euo pipefail trap "echo 'error: Script failed: see failed command above'" ERRIn Bash scripts, subshells (written with parentheses) are convenient ways to group commands. A common example is to temporarily move to a different working directory, e.g. # do something in current dir (cd /some/other/dir && other-command) # continue in original dirIn Bash, note there are lots of kinds of variable expansion. Checking a variable exists: ${name:?error message}. For example, if a Bash script requires a single argument, just writeinput_file=${1:?usage: $0 input_file}. Arithmetic expansion: i=$(( (i + 1) % 5 )). Sequences: {1..10}. Trimming of strings: ${var%suffix} and ${var#prefix}. For example ifvar=foo.pdf, then echo ${var%.pdf}.txt prints foo.txt.Brace expansion using {...} can reduce having to re-type similar text and automate combinations of items. This is helpful in examples like mv foo.{txt,pdf} some-dir (which moves both files), cp somefile{,.bak} (which expands to cp somefile somefile.bak) or mkdir -p test-{a,b,c}/subtest-{1,2,3} (which expands all possible combinations and creates a directory tree).The output of a command can be treated like a file via logfile 2>&1 orsome-command &>logfile. Often, to ensure a command does not leave an open file handle to standard input, tying it to the terminal you are in, it is also good practice to add 
### http://cli.learncodethehardway.org/book/
### How to Learn
### man bash
### KDE
### https://en.wikipedia.org/wiki/KDE
### https://www.kde.org/
### Gnome
### https://www.gnome.org/
# Operating Systems
Operating systems – set of software that manages computer hardware resources and provides common services for computer programs
### Resources
### Udacity: Advanced OS
### https://www.udacity.com/course/viewer#!/c-ud189/l-3652509443/m-641659207
### Summary
### OS manages access to hardware resources, to protect applications from each other
### OS Abstracts a lot of services
### Processor/ CPU
### Apps share the cpu, multiplexing
### CPu Scheduling
### Steps to run a specific program
Program is loaded through an OS loader, There's a memory footprint created which contains:Heap (dynamic memory allocation), Stack (managing function calls) and Global Data (Access to global data).Applications can request more resources during running.
### Program vs Process
A process is a running program.
### Process vs Thread
### Memory
### Address Space distinct to each process
### Interprocess Communication
### File System
### Access to IO devices
### Access to Network
### OS Structure
### The way the OS is structured, the stack in which different layers of services interact
### types
### Monolithic
### https://github.com/arjun024/mkeykernel?lang=c
### one type of Kernel
### https://github.com/SamyPesse/How-to-Make-a-Computer-Operating-System
### How to make an operating system
### Flavors
### DOS
### MS-DOS
### Both developed together but then went their separate ways
### https://en.wikipedia.org/wiki/MS-DOS
### Wikipedia
### PC-DOS
### Windows
### Unix
### Darwin
### Apple's
### Linux
### My Road
### https://drive.google.com/open?id=0B9tPYCpuqoIrWUZ5QU9oczRORk0
### Concepts
### Virtualization
Everything is handled usually by mapping. There are two main concepts:guest OS: whatever you install on your virutal boxHost OS: your main OS.
### Solutions
### Docker
Docker is an open-source project that automates the deployment of applications inside software containers, by providing an additional layer of abstraction and automation of operating-system-level virtualization on Linux, Mac OS and Windows.[2]According to industry analyst firm 451 Research, "Docker is a tool that can package an application and its dependencies in a virtual container that can run on any Linux server. This helps enable flexibility and portability on where the application can run, whether on premises, public cloud, private cloud, bare metal, etc."[3]
### Archeticture
### https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Docker-linux-interfaces.svg/400px-Docker-linux-interfaces.svg.png
### Overview
Docker implements a high-level API to provide lightweight containers that run processes in isolation.[5]It uses resource isolation features of the Linux kernel such as cgroups and kernel namespaces to allow independent "containers" to run within a single Linux instance, avoiding the overhead of starting and maintaining virtual machines.[6]Building on top of facilities provided by the Linux kernel (primarily cgroups and namespaces), a Docker container, unlike a virtual machine, does not require or include a separate operating system.[3] Instead, it relies on the kernel's functionality and uses resource isolation (CPU, memory, block I/O, network, etc.) and separate namespaces to isolate the application's view of the operating system. Docker accesses the Linux kernel's virtualization features either directly using the libcontainerlibrary, which is available since Docker 0.9, or indirectly via libvirt, LXC (Linux Containers) or systemd-nspawn.[4][7]By using containers, resources can be isolated, services restricted, and processes provisioned to have an almost completely private view of the operating system with their own process ID space, file system structure, and network interfaces. Multiple containers share the same kernel, but each container can be constrained to only use a defined amount of resources such as CPU, memory and I/O.Using Docker to create and manage containers may simplify the creation of highly distributed systems, by allowing multiple applications, worker tasks and other processes to run autonomously on a single physical machine or across multiple virtual machines. This allows the deployment of nodes to be performed as the resources become available or when more nodes are needed, allowing a platform as a service (PaaS)-style of deployment and scaling for systems like Apache Cassandra,MongoDB or Riak. Docker also simplifies the creation and operation of task or workload queues and other distributed systems.[8][9]
### Benefit
### Runs the Same everywhere
### Lightweight and better than other virtualization services
### https://www.docker.com/sites/default/files/what-is-docker-diagram.png
### Traditional 
### https://www.docker.com/sites/default/files/what-is-vm-diagram.png
### Containers
### https://hub.docker.com/
### Docker hub
### Resources
### https://www.docker.com/
### Main Website
### https://www.docker.com/whatisdocker
### What's Docker
### Vagrant
### Docker vs Vagrant
http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-io-for-creating-an-isolated-environmentf your purpose is the isolation, I think docker is what you want.Vagrant is a virtual machine manager, it allows you to script the virtual machine configuration as well as the provisioning. However, it is still a virtual machine depending on Virtual Box (or others) with a huge overhead. It requires you to have a hard drive file that can be huge, it takes a lot of ram, and performance can be not very good.Docker on the other hand uses kernel cgroup and namespacing via lxc. It means that you are using the same kernel as the host and the same file system. You can use Dockerfile with the docker build command in order to handle the provisioning and configuration of your container. You have example at docs.docker.com on how to make your Dockerfile, it is very intuitive.The only reason you could want to use vagrant is if you need to do BSD, Windows or other non-linux development on your ubuntu box. Otherwise, go for Docker.
### VirtuallBox
### Kernel
### Standards
### POSIX
POSIX (/ˈpɒzɪks/ poz-iks), an acronym for Portable Operating System Interface,[1] is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems. POSIX defines the application programming interface (API), along with command line shells and utility interfaces, for software compatibility with variants of Unix and other operating systems.[2][3]
### https://en.wikipedia.org/wiki/POSIX
### A family of standards  to provide compatibility with different operating systems
### Compatible OSs
### https://en.wikipedia.org/wiki/POSIX#POSIX-oriented_operating_systems
