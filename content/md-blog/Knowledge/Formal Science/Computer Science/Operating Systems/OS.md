# Interfaces
### Bash
### https://en.wikipedia.org/wiki/Bash_(Unix_shell)
### resources
### https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly
### Everyday use
## Everyday use

*   In Bash, use **Tab** to complete arguments or list all available commands and **ctrl-r** to search through command history (after pressing, type to search, press **ctrl-r** repeatedly to cycle through more matches, press **Enter** to execute the found command, or hit the right arrow to put the result in the current line to allow editing).

*   In Bash, use **ctrl-w** to delete the last word, and **ctrl-u** to delete all the way back to the start of the line. Use **alt-b** and **alt-f** to move by word, **ctrl-a** to move cursor to beginning of line, **ctrl-e** to move cursor to end of line, **ctrl-k** to kill to the end of the line, **ctrl-l** to clear the screen. See `man readline` for all the default keybindings in Bash. There are a lot. For example **alt-.** cycles through previous arguments, and **alt-*** expands a glob.

*   Alternatively, if you love vi-style key-bindings, use `set -o vi` (and `set -o emacs` to put it back).

*   For editing long commands, after setting your editor (for example `export EDITOR=vim`), **ctrl-x** **ctrl-e** will open the current command in an editor for multi-line editing. Or in vi style, **escape-v**.

*   To see recent commands, `history`. There are also many abbreviations such as `!$` (last argument) and `!!` last command, though these are often easily replaced with **ctrl-r** and **alt-.**.

*   To go back to the previous working directory: `cd -`

*   If you are halfway through typing a command but change your mind, hit **alt-#** to add a `#` at the beginning and enter it as a comment (or use **ctrl-a**, **#**, **enter**). You can then return to it later via command history.

*   Use `xargs` (or `parallel`). It's very powerful. Note you can control how many items execute per line (`-L`) as well as parallelism (`-P`). If you're not sure if it'll do the right thing, use `xargs echo`first. Also, `-I{}` is handy. Examples:

<div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      find <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span> -name <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>*.py<span class="pl-pds" style="box-sizing: border-box;">'</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> xargs grep some_function
      cat hosts <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> xargs -I{} ssh root@{} hostname</pre>

</div>

*   `pstree -p` is a helpful display of the process tree.

*   Use `pgrep` and `pkill` to find or signal processes by name (`-f` is helpful).

*   Know the various signals you can send processes. For example, to suspend a process, use `kill -STOP [pid]`. For the full list, see `man 7 signal`

*   Use `nohup` or `disown` if you want a background process to keep running forever.

*   Check what processes are listening via `netstat -lntp` or `ss -plat` (for TCP; add `-u` for UDP).

*   See also `lsof` for open sockets and files.

*   See `uptime` or `w` to know the how long the system has been running.

*   Use `alias` to create shortcuts for commonly used commands. For example, `alias ll='ls -latr'` creates a new alias `ll`.

*   In Bash scripts, use `set -x` (or the variant `set -v`, which logs raw input, including unexpanded variables and comments) for debugging output. Use strict modes unless you have a good reason not to: Use `set -e` to abort on errors (nonzero exit code). Use `set -u` to detect unset variable usages. Consider `set -o pipefail` too, to on errors within pipes, too (though read up on it more if you do, as this topic is a bit subtle). For more involved scripts, also use `trap` on EXIT or ERR. A useful habit is to start a script like this, which will make it detect and abort on common errors and print a message:

<div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">set</span> -euo pipefail
      <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">trap</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>echo 'error: Script failed: see failed command above'<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ERR</pre>

</div>

*   In Bash scripts, subshells (written with parentheses) are convenient ways to group commands. A common example is to temporarily move to a different working directory, e.g.

<div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># do something in current dir</span>
      (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cd</span> /some/other/dir <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&&</span> other-command)
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># continue in original dir</span></pre>

</div>

*   In Bash, note there are lots of kinds of variable expansion. Checking a variable exists: `${name:?error message}`. For example, if a Bash script requires a single argument, just write`input_file=${1:?usage: $0 input_file}`. Arithmetic expansion: `i=$(( (i + 1) % 5 ))`. Sequences: `{1..10}`. Trimming of strings: `${var%suffix}` and `${var#prefix}`. For example if`var=foo.pdf`, then `echo ${var%.pdf}.txt` prints `foo.txt`.

*   Brace expansion using `{`...`}` can reduce having to re-type similar text and automate combinations of items. This is helpful in examples like `mv foo.{txt,pdf} some-dir` (which moves both files), `cp somefile{,.bak}` (which expands to `cp somefile somefile.bak`) or `mkdir -p test-{a,b,c}/subtest-{1,2,3}` (which expands all possible combinations and creates a directory tree).

*   The output of a command can be treated like a file via `<(some command)`. For example, compare local `/etc/hosts` with a remote one:

<div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      diff /etc/hosts <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;"><(</span>ssh somehost cat /etc/hosts<span class="pl-pds" style="box-sizing: border-box;">)</span></span></pre>

</div>

*   Know about "here documents" in Bash, as in `cat <<EOF ...`.

*   In Bash, redirect both standard output and standard error via: `some-command >logfile 2>&1` or`some-command &>logfile`. Often, to ensure a command does not leave an open file handle to standard input, tying it to the terminal you are in, it is also good practice to add `</dev/null`.

*   Use `man ascii` for a good ASCII table, with hex and decimal values. For general encoding info,`man unicode`, `man utf-8`, and `man latin1` are helpful.

*   Use `screen` or [`tmux`](https://tmux.github.io/) to multiplex the screen, especially useful on remote ssh sessions and to detach and re-attach to a session. A more minimal alternative for session persistence only is`dtach`.

*   In ssh, knowing how to port tunnel with `-L` or `-D` (and occasionally `-R`) is useful, e.g. to access web sites from a remote server.

*   It can be useful to make a few optimizations to your ssh configuration; for example, this`~/.ssh/config` contains settings to avoid dropped connections in certain network environments, uses compression (which is helpful with scp over low-bandwidth connections), and multiplex channels to the same server with a local control file:

          TCPKeepAlive=yes
          ServerAliveInterval=15
          ServerAliveCountMax=6
          Compression=yes
          ControlMaster auto
          ControlPath /tmp/%r@%h:%p
          ControlPersist yes

*   A few other options relevant to ssh are security sensitive and should be enabled with care, e.g. per subnet or host or in trusted networks: `StrictHostKeyChecking=no`, `ForwardAgent=yes`

*   To get the permissions on a file in octal form, which is useful for system configuration but not available in `ls` and easy to bungle, use something like

<div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      stat -c <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">'</span>%A %a %n<span class="pl-pds" style="box-sizing: border-box;">'</span></span> /etc/timezone</pre>

</div>

*   For interactive selection of values from the output of another command, use [`percol`](https://github.com/mooz/percol) or [`fzf`](https://github.com/junegunn/fzf).

*   For interaction with files based on the output of another command (like `git`), use `fpp`([PathPicker](https://github.com/facebook/PathPicker)).

*   For a simple web server for all files in the current directory (and subdirs), available to anyone on your network, use: `python -m SimpleHTTPServer 7777` (for port 7777 and Python 2) and `python -m http.server 7777` (for port 7777 and Python 3).

*   For running a command with privileges, use `sudo` (for root) or `sudo -u` (for another user). Use`su` or `sudo bash` to actually run a shell as that user. Use `su -` to simulate a fresh login as root or another user.
### http://cli.learncodethehardway.org/book/
### How to Learn
### man bash
### KDE
### https://en.wikipedia.org/wiki/KDE
### https://www.kde.org/
### Gnome
### https://www.gnome.org/
# Operating Systems
*   [Operating systems](https://en.m.wikipedia.org/wiki/Operating_systems "Operating systems") – set of software that manages computer hardware resources and provides common services for computer programs
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
Program is loaded through an OS loader, There's a memory footprint created which contains:

<div>Heap (dynamic memory allocation), Stack (managing function calls) and Global Data (Access to global data).</div>

<div>Applications can request more resources during running.</div>
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
Everything is handled usually by mapping. There are two main concepts:

<div>guest OS: whatever you install on your virutal box</div>

<div>Host OS: your main OS.</div>
### Solutions
### Docker
**Docker** is an [open-source](https://en.wikipedia.org/wiki/Open-source "Open-source") project that automates the deployment of [applications](https://en.wikipedia.org/wiki/Application_software "Application software") inside [software containers](https://en.wikipedia.org/wiki/Software_container "Software container"), by providing an additional layer of abstraction and automation of [operating-system-level virtualization](https://en.wikipedia.org/wiki/Operating-system-level_virtualization "Operating-system-level virtualization") on [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [Mac OS](https://en.wikipedia.org/wiki/Mac_OS "Mac OS") and [Windows](https://en.wikipedia.org/wiki/Windows "Windows").<sup id="cite_ref-SYS-CON_Media_2-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[2]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-SYS-CON_Media-2)</sup>

According to industry analyst firm 451 Research, "Docker is a tool that can package an application and its dependencies in a virtual container that can run on any Linux server. This helps enable flexibility and portability on where the application can run, whether [on premises](https://en.wikipedia.org/wiki/On-premises_software "On-premises software"), public cloud, private cloud, bare metal, etc."<sup id="cite_ref-Linux_3-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[3]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Linux-3)</sup>
### Archeticture
### https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Docker-linux-interfaces.svg/400px-Docker-linux-interfaces.svg.png
### Overview
Docker implements a high-level [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") to provide lightweight containers that run processes in isolation.<sup id="cite_ref-infoq-201303_5-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[5]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-infoq-201303-5)</sup>

It uses resource isolation features of the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") such as [cgroups](https://en.wikipedia.org/wiki/Cgroups "Cgroups") and kernel [namespaces](https://en.wikipedia.org/wiki/Linux_namespaces "Linux namespaces") to allow independent "containers" to run within a single Linux instance, avoiding the overhead of starting and maintaining [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine").<sup id="cite_ref-6" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[6]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-6)</sup>

Building on top of facilities provided by the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") (primarily cgroups and namespaces), a Docker container, unlike a virtual machine, does not require or include a separate operating system.<sup id="cite_ref-Linux_3-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[3]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Linux-3)</sup> Instead, it relies on the kernel's functionality and uses resource isolation (CPU, memory, block I/O, network, etc.) and [separate namespaces](https://en.wikipedia.org/wiki/Namespace_isolation "Namespace isolation") to isolate the application's view of the operating system. Docker accesses the Linux kernel's virtualization features either directly using the <span style="font-family: monospace, monospace;">libcontainer</span>library, which is available since Docker 0.9, or indirectly via <span style="font-family: monospace, monospace;">[libvirt](https://en.wikipedia.org/wiki/Libvirt "Libvirt")</span>, LXC ([Linux Containers](https://en.wikipedia.org/wiki/Linux_Containers "Linux Containers")) or <span style="font-family: monospace, monospace;">[systemd-nspawn](https://en.wikipedia.org/wiki/Systemd-nspawn "Systemd-nspawn")</span>.<sup id="cite_ref-docker-blog-201403_4-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[4]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-docker-blog-201403-4)</sup><sup id="cite_ref-infoq-201403_7-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[7]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-infoq-201403-7)</sup>

By using containers, resources can be isolated, services restricted, and processes provisioned to have an almost completely private view of the operating system with their own process ID space, file system structure, and network interfaces. Multiple containers share the same kernel, but each container can be constrained to only use a defined amount of resources such as CPU, memory and I/O.

Using Docker to create and manage containers may simplify the creation of highly [distributed systems](https://en.wikipedia.org/wiki/Distributed_system "Distributed system"), by allowing multiple applications, worker tasks and other processes to run autonomously on a single physical machine or across multiple virtual machines. This allows the deployment of nodes to be performed as the resources become available or when more nodes are needed, allowing a [platform as a service](https://en.wikipedia.org/wiki/Platform_as_a_service "Platform as a service") (PaaS)-style of deployment and scaling for systems like [Apache Cassandra](https://en.wikipedia.org/wiki/Apache_Cassandra "Apache Cassandra"),[MongoDB](https://en.wikipedia.org/wiki/MongoDB "MongoDB") or [Riak](https://en.wikipedia.org/wiki/Riak "Riak"). Docker also simplifies the creation and operation of task or workload queues and other distributed systems.<sup id="cite_ref-CloudAve_8-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[8]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-CloudAve-8)</sup><sup id="cite_ref-Iron.io_9-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;">[[9]](https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Iron.io-9)</sup>
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
[http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-io-for-creating-an-isolated-environment](http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-io-for-creating-an-isolated-environment)

<div>

f your purpose is the isolation, I think docker is what you want.

Vagrant is a virtual machine manager, it allows you to script the virtual machine configuration as well as the provisioning. However, it is still a virtual machine depending on Virtual Box (or others) with a huge overhead. It requires you to have a hard drive file that can be huge, it takes a lot of ram, and performance can be not very good.

Docker on the other hand uses kernel cgroup and namespacing via lxc. It means that you are using the same kernel as the host and the same file system. You can use Dockerfile with the `docker build` command in order to handle the provisioning and configuration of your container. You have example at [docs.docker.com](https://docs.docker.com/) on how to make your Dockerfile, it is very intuitive.

The only reason you could want to use vagrant is if you need to do BSD, Windows or other non-linux development on your ubuntu box. Otherwise, go for Docker.

</div>
### VirtuallBox
### Kernel
### Standards
### POSIX
**POSIX**<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> (</span><span class="nowrap" style="white-space: nowrap; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"><span class="IPA nopopups">[/<span style="border-bottom-width: 1px; border-bottom-style: dotted;"><span title="/ˈ/ primary stress follows">ˈ</span><span title="'p' in 'pie'">p</span><span title="/ɒ/ short 'o' in 'body'">ɒ</span><span title="'z' in 'Zion'">z</span><span title="/ɪ/ short 'i' in 'bid'">ɪ</span><span title="'k' in 'kind'">k</span><span title="'s' in 'sigh'">s</span></span>/](https://en.wikipedia.org/wiki/Help:IPA_for_English "Help:IPA for English")</span></span><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> </span><span title="English pronunciation respelling" class="Unicode" style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">[_**<span class="smallcaps"><span class="SMALLCAPS" style="font-variant: small-caps;"><span class="NOCAPS" style="text-transform: lowercase;">poz</span></span></span>**-iks_](https://en.wikipedia.org/wiki/Wikipedia:Pronunciation_respelling_key "Wikipedia:Pronunciation respelling key")</span><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">), an acronym for </span>**Portable Operating System Interface**<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">,</span><sup id="cite_ref-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;">[[1]](https://en.wikipedia.org/wiki/POSIX#cite_note-1)</sup><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> is a family of </span>[standards](https://en.wikipedia.org/wiki/Standardization "Standardization")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> specified by the </span>[IEEE Computer Society](https://en.wikipedia.org/wiki/IEEE_Computer_Society "IEEE Computer Society")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> for maintaining compatibility between </span>[operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">. POSIX defines the </span>[application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> (API), along with command line </span>[shells](https://en.wikipedia.org/wiki/Unix_shell "Unix shell")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> and utility interfaces, for software compatibility with variants of </span>[Unix](https://en.wikipedia.org/wiki/Unix "Unix")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> and other operating systems.</span><sup id="cite_ref-FAQ_2-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;">[[2]](https://en.wikipedia.org/wiki/POSIX#cite_note-FAQ-2)</sup><sup id="cite_ref-IET_3-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;">[[3]](https://en.wikipedia.org/wiki/POSIX#cite_note-IET-3)</sup>
### https://en.wikipedia.org/wiki/POSIX
### A family of standards  to provide compatibility with different operating systems
### Compatible OSs
### https://en.wikipedia.org/wiki/POSIX#POSIX-oriented_operating_systems
