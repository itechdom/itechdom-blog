# Concepts
### Key Bindings
### Moving
*   In Bash, use **ctrl-w** to delete the last word, and **ctrl-u** to delete all the way back to the start of the line. Use **alt-b** and **alt-f** to move by word, **ctrl-a** to move cursor to beginning of line, **ctrl-e** to move cursor to end of line, **ctrl-k** to kill to the end of the line, **ctrl-l** to clear the screen. See `man readline` for all the default keybindings in Bash. There are a lot. For example **alt-.** cycles through previous arguments, and **alt-*** expands a glob.
### set to vi style
*   Alternatively, if you love vi-style key-bindings, use `set -o vi` (and `set -o emacs` to put it back)
### going back to a previous command
*   If you are halfway through typing a command but change your mind, hit **alt-#** to add a `#` at the beginning and enter it as a comment (or use **ctrl-a**, **#**, **enter**). You can then return to it later via command history.
### commands
### check which processes are listening to what
*   Check what processes are listening via `netstat -lntp` or `ss -plat` (for TCP; add `-u` for UDP).
### man
### encoding info
*   Use `man ascii` for a good ASCII table, with hex and decimal values. For general encoding info,`man unicode`, `man utf-8`, and `man latin1` are helpful.
### Help page
### sed
*   Know basic `awk` and `sed` for simple data munging. For example, summing all numbers in the third column of a text file: `awk '{ x += $3 } END { print x }'`. This is probably 3X faster and 3X shorter than equivalent Python.
### http://www.grymoire.com/Unix/Sed.html#uh-0
### stream editor
### >>
### append output to file
### >
### overwrite or create file from output
### Find by pattern
find .  -name 'grunt-*' -exec rm -r {} +
### Print Tree
find . -type d | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"
### or use
### tree program
### brew install tree
### apt-get install tree
### grep
### find
*   To locate a file by name in the current directory, `find . -iname '*something*'` (or similar). To find a file anywhere by name, use `locate something` (but bear in mind `updatedb` may not have indexed recently created files).
### ag
*   For general searching through source or data files (more advanced than `grep -r`), use [`ag`](https://github.com/ggreer/the_silver_searcher).
### std in/out
### std error
### tee
*   Know about `tee` to copy from stdin to a file and also to stdout, as in `ls -al | tee file.txt`.
### rename files according to a pattern
*   To rename many files at once according to a pattern, use `rename`. For complex renames, [`repren`](https://github.com/jlevy/repren)may help.



      # Recover backup files foo.bak -> foo:
      rename 's/\.bak$//' *.bak
      # Full rename of filenames, directories, and contents foo -> bar:
      repren --full --preserve-case --from foo --to bar 


### split files into pieces
*   To split files into pieces, see `split` (to split by size) and `csplit` (to split by a pattern).
### work with compressed files
*   Use `zless`, `zmore`, `zcat`, and `zgrep` to operate on compressed files.

## [](https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly#system-debugging)
### Diff and Patch
*   The standard tools for patching source code are `diff` and `patch`. See also `diffstat` for summary statistics of a diff and `sdiff` for a side-by-side diff. Note `diff -r` works for entire directories. Use `diff -r tree1 tree2 | diffstat` for a summary of changes. Use `vimdiff` to compare and edit files.
### http://www.computerhope.com/unix/udiff.htm
### prints two files next to each other and compares them
### patch will add the diffed file
### http://linux.about.com/od/commands/l/blcmdl1_patch.htm
### file: identify type of a file
### Cat
### Variables
*   In Bash, note there are lots of kinds of variable expansion. Checking a variable exists: `${name:?error message}`. For example, if a Bash script requires a single argument, just write`input_file=${1:?usage: $0 input_file}`. Arithmetic expansion: `i=$(( (i + 1) % 5 ))`. Sequences: `{1..10}`. Trimming of strings: `${var%suffix}` and `${var#prefix}`. For example if`var=foo.pdf`, then `echo ${var%.pdf}.txt` prints `foo.txt`.

*   Brace expansion using `{`...`}` can reduce having to re-type similar text and automate combinations of items. This is helpful in examples like `mv foo.{txt,pdf} some-dir` (which moves both files), `cp somefile{,.bak}` (which expands to `cp somefile somefile.bak`) or `mkdir -p test-{a,b,c}/subtest-{1,2,3}` (which expands all possible combinations and creates a directory tree).
### SSH
*   It can be useful to make a few optimizations to your ssh configuration; for example, this`~/.ssh/config` contains settings to avoid dropped connections in certain network environments, uses compression (which is helpful with scp over low-bandwidth connections), and multiplex channels to the same server with a local control file:

          TCPKeepAlive=yes
          ServerAliveInterval=15
          ServerAliveCountMax=6
          Compression=yes
          ControlMaster auto
          ControlPath /tmp/%r@%h:%p
          ControlPersist yes
### debugging
### web
*   For web debugging, `curl` and `curl -I` are handy, or their `wget` equivalents, or the more modern [`httpie`](https://github.com/jakubroztocil/httpie).
### cpu/disk
*   To know current cpu/disk status, the classic tools are `top` (or the better `htop`), `iostat`, and`iotop`. Use `iostat -mxz 15` for basic CPU and detailed per-partition disk stats and performance insight.
### Quick overview
*   For a quick overview of what's happening on a system, `dstat` is especially useful. For broadest overview with details, use [`glances`](https://github.com/nicolargo/glances).
### Alternative Java Debugging
*   Java system debugging is a different kettle of fish, but a simple trick on Oracle's and some other JVMs is that you can run `kill -3 ` and a full stack trace and heap summary (including generational garbage collection details, which can be highly informative) will be dumped to stderr/logs. The JDK's `jps`, `jstat`, `jstack`, `jmap` are useful. [SJK tools](https://github.com/aragozin/jvm-tools) are more advanced.
### Current folder usage
*   For looking at why a disk is full, `ncdu` saves time over the usual commands like `du -sh *`.
### network
### Network connection
*   For network connection details, use `netstat` and `ss`.
### netstat
### How to read netstat
I can imagine that anyone seeing this for the first time must be instantly freaking out over all the 'LISTENING' entries - their machine must be infested with trojans! But if they know a little more about Netstat, they'll calm down again. Now, read and learn:

*   In lines saying 'ESTABLISHED', you need the remote port to identify what has connected to the remote site.
*   In lines saying 'LISTENING', you need the local port to identify what is listening there.
*   Each outbound TCP connection also causes a LISTENING entry on the same port.
*   Most UDP listening ports are duplicates from a listening TCP port. Ignore them unless they don't have a TCP twin.
*   TIME_WAIT entries are not important.
*   If it says 0.0.0.0 on the Local Address column, it means that port is listening on all 'network interfaces' (i.e. your computer, your modem(s) and your network card(s)).
*   If it says 127.0.0.1 on the Local Address column, it means that port is ONLY listening for connections from your PC itself, not from the Internet or network. No danger there.
*   If it displays your online IP on the Local Address column, it means that port is ONLY listening for connections from the Internet.
*   If it displays your local network IP on the Local Address column, it means that port is ONLY listening for connections from the local network.
### https://sites.google.com/site/xiangyangsite/home/technical-tips/linux-unix/networks-related-commands-on-linux/how-to-read-netstat--an-results
### which processing is hogging
*   To find which socket or process is using bandwidth, try `iftop` or `nethogs`.
### More serious network
*   For more serious network debugging, `wireshark`, `tshark`, or `ngrep`.
### Check server performance
*   The `ab` tool (comes with Apache) is helpful for quick-and-dirty checking of web server performance. For more complex load testing, try `siege`.
### Know current running processes status
*   Know about `strace` and `ltrace`. These can be helpful if a program is failing, hanging, or crashing, and you don't know why, or if you want to get a general idea of performance. Note the profiling option (`-c`), and the ability to attach to a running process (`-p`).
### Connect to a running process with gdb
*   Know how to connect to a running process with `gdb` and get its stack traces.
### /proc
*   Use `/proc`. It's amazingly helpful sometimes when debugging live problems. Examples:`/proc/cpuinfo`, `/proc/meminfo`, `/proc/cmdline`, `/proc/xxx/cwd`, `/proc/xxx/exe`, `/proc/xxx/fd/`,`/proc/xxx/smaps` (where `xxx` is the process id or pid).
### Why something went wrong in the past
*   When debugging why something went wrong in the past, `sar` can be very helpful. It shows historic statistics on CPU, memory, network, etc.
### Deeper systems and performance analysis
*   For deeper systems and performance analyses, look at `stap` ([SystemTap](https://sourceware.org/systemtap/wiki)), [`perf`](http://en.wikipedia.org/wiki/Perf_(Linux)), and [`sysdig`](https://github.com/draios/sysdig).
### Check OS name
*   Check what OS you're on with `uname` or `uname -a` (general Unix/kernel info) or `lsb_release -a`(Linux distro info).
### When something is acting really funny
*   Use `dmesg` whenever something's acting really funny (it could be hardware or driver issues).

## [](https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly#one-liners)
### MAC ONLY
## MacOS X only

These are items relevant _only_ on MacOS.

*   Package management with `brew` (Homebrew) and/or `port` (MacPorts). These can be used to install on MacOS many of the above commands.

*   Copy output of any command to a desktop app with `pbcopy` and paste input from one with`pbpaste`.

*   To enable the Option key in Mac OS Terminal as an alt key (such as used in the commands above like **alt-b**, **alt-f**, etc.), open Preferences -> Profiles -> Keyboard and select "Use Option as Meta key".

*   To open a file with a desktop app, use `open` or `open -a /Applications/Whatever.app`.

*   Spotlight: Search files with `mdfind` and list metadata (such as photo EXIF info) with `mdls`.

*   Be aware MacOS is based on BSD Unix, and many commands (for example `ps`, `ls`, `tail`,`awk`, `sed`) have many subtle variations from Linux, which is largely influenced by System V-style Unix and GNU tools. You can often tell the difference by noting a man page has the heading "BSD General Commands Manual." In some cases GNU versions can be installed, too (such as`gawk` and `gsed` for GNU awk and sed). If writing cross-platform Bash scripts, avoid such commands (for example, consider Python or `perl`) or test carefully.
### Obsecure but useful
## Obscure but useful

*   `expr`: perform arithmetic or boolean operations or evaluate regular expressions

*   `m4`: simple macro processor

*   `yes`: print a string a lot

*   `cal`: nice calendar

*   `env`: run a command (useful in scripts)

*   `printenv`: print out environment variables (useful in debugging and scripts)

*   `look`: find English words (or lines in a file) beginning with a string

*   `cut`, `paste` and `join`: data manipulation

*   `fmt`: format text paragraphs

*   `pr`: format text into pages/columns

*   `fold`: wrap lines of text

*   `column`: format text fields into aligned, fixed-width columns or tables

*   `expand` and `unexpand`: convert between tabs and spaces

*   `nl`: add line numbers

*   `seq`: print numbers

*   `bc`: calculator

*   `factor`: factor integers

*   [`gpg`](https://gnupg.org/): encrypt and sign files

*   `toe`: table of terminfo entries

*   `nc`: network debugging and data transfer

*   `socat`: socket relay and tcp port forwarder (similar to `netcat`)

*   [`slurm`](https://github.com/mattthias/slurm): network trafic visualization

*   `dd`: moving data between files or devices

*   `file`: identify type of a file

*   `tree`: display directories and subdirectories as a nesting tree; like `ls` but recursive

*   `stat`: file info

*   `time`: execute and time a command

*   `watch`: run a command repeatedly, showing results and/or highlighting changes

*   `tac`: print files in reverse

*   `shuf`: random selection of lines from a file

*   `comm`: compare sorted files line by line

*   `pv`: monitor the progress of data through a pipe

*   `hd` and `bvi`: dump or edit binary files

*   `strings`: extract text from binary files

*   `tr`: character translation or manipulation

*   `iconv` or `uconv`: conversion for text encodings

*   `split` and `csplit`: splitting files

*   `sponge`: read all input before writing it, useful for reading from then writing to the same file, e.g.,`grep -v something some-file | sponge some-file`

*   `units`: unit conversions and calculations; converts furlongs per fortnight to twips per blink (see also `/usr/share/units/definitions.units`)

*   `apg`: generates random passwords

*   `7z`: high-ratio file compression

*   `ldd`: dynamic library info

*   `nm`: symbols from object files

*   `ab`: benchmarking web servers

*   `strace`: system call debugging

*   `mtr`: better traceroute for network debugging

*   `cssh`: visual concurrent shell

*   `rsync`: sync files and folders over SSH or in local file system

*   `wireshark` and `tshark`: packet capture and network debugging

*   `ngrep`: grep for the network layer

*   `host` and `dig`: DNS lookups

*   `lsof`: process file descriptor and socket info

*   `dstat`: useful system stats

*   [`glances`](https://github.com/nicolargo/glances): high level, multi-subsystem overview

*   `iostat`: Disk usage stats

*   `mpstat`: CPU usage stats

*   `vmstat`: Memory usage stats

*   `htop`: improved version of top

*   `last`: login history

*   `w`: who's logged on

*   `id`: user/group identity info

*   `sar`: historic system stats

*   `iftop` or `nethogs`: network utilization by socket or process

*   `ss`: socket statistics

*   `dmesg`: boot and system error messages

*   `sysctl`: view and configure Linux kernel parameters at run time

*   `hdparm`: SATA/ATA disk manipulation/performance

*   `lsb_release`: Linux distribution info

*   `lsblk`: list block devices: a tree view of your disks and disk paritions

*   `lshw`, `lscpu`, `lspci`, `lsusb`, `dmidecode`: hardware information, including CPU, BIOS, RAID, graphics, devices, etc.

*   `lsmod` and `modinfo`: List and show details of kernel modules.

*   `fortune`, `ddate`, and `sl`: um, well, it depends on whether you consider steam locomotives and Zippy quotations "useful"

## [](https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly#macos-x-only)
### COOL One Liners
## One-liners

A few examples of piecing together commands:

*   It is remarkably helpful sometimes that you can do set intersection, union, and difference of text files via `sort`/`uniq`. Suppose `a` and `b` are text files that are already uniqued. This is fast, and works on files of arbitrary size, up to many gigabytes. (Sort is not limited by memory, though you may need to use the `-T` option if `/tmp` is on a small root partition.) See also the note about`LC_ALL` above and `sort`'s `-u` option (left out for clarity below).



      cat a b | sort | uniq > c   # c is a union b
      cat a b | sort | uniq -d > c   # c is a intersect b
      cat a b b | sort | uniq -u > c   # c is set difference a - b



*   Use `grep . *` to visually examine all contents of all files in a directory, e.g. for directories filled with config settings, like `/sys`, `/proc`, `/etc`.

*   Summing all numbers in the third column of a text file (this is probably 3X faster and 3X less code than equivalent Python):



      awk '{ x += $3 } END { print x }' myfile



*   If want to see sizes/dates on a tree of files, this is like a recursive `ls -l` but is easier to read than`ls -lR`:



      find . -type f -ls



*   Say you have a text file, like a web server log, and a certain value that appears on some lines, such as an `acct_id` parameter that is present in the URL. If you want a tally of how many requests for each `acct_id`:



      cat access.log | egrep -o 'acct_id=[0-9]+' | cut -d= -f2 | sort | uniq -c | sort -rn



*   To continuously monitor changes, use `watch`, e.g. check changes to files in a directory with`watch -d -n 2 'ls -rtlh | tail'` or to network settings while troubleshooting your wifi settings with `watch -d -n 2 ifconfig`.

*   Run this function to get a random tip from this document (parses Markdown and extracts an item):



      function taocl() {
        curl -s https://raw.githubusercontent.com/jlevy/the-art-of-command-line/master/README.md |
          pandoc -f markdown -t html |
          xmlstarlet fo --html --dropdtd |
          xmlstarlet sel -t -v "(html/body/ul/li[count(p)>0])[$RANDOM mod last()+1]" |
          xmlstarlet unesc | fmt -80
      }


### BASICS


# Learn Command Line the Hard way

*   [Preface](http://cli.learncodethehardway.org/book/preface.html)
*   [Introduction: Shut Up And Shell](http://cli.learncodethehardway.org/book/introduction.html)
*   [The Setup](http://cli.learncodethehardway.org/book/ex1.html)
*   [Paths, Folders, Directories (pwd)](http://cli.learncodethehardway.org/book/ex2.html)
*   [What's Your Computer's Name? (hostname)](http://cli.learncodethehardway.org/book/ex3.html)
*   [Make A Directory (mkdir)](http://cli.learncodethehardway.org/book/ex4.html)
*   [Change Directory (cd)](http://cli.learncodethehardway.org/book/ex5.html)
*   [List Directory (ls)](http://cli.learncodethehardway.org/book/ex6.html)
*   [Remove Directory (rmdir)](http://cli.learncodethehardway.org/book/ex7.html)
*   [Moving Around (pushd, popd)](http://cli.learncodethehardway.org/book/ex8.html)
*   [Making Empty Files (Touch, New-Item)](http://cli.learncodethehardway.org/book/ex9.html)
*   [Copy A File (cp)](http://cli.learncodethehardway.org/book/ex10.html)
*   [Moving A File (mv)](http://cli.learncodethehardway.org/book/ex11.html)
*   [View A File (less, MORE)](http://cli.learncodethehardway.org/book/ex12.html)
*   [Stream A File (cat)](http://cli.learncodethehardway.org/book/ex13.html)
*   [Removing A File (rm)](http://cli.learncodethehardway.org/book/ex14.html)
*   [Pipes And Redirection](http://cli.learncodethehardway.org/book/ex15.html)
*   [Wildcard Matching](http://cli.learncodethehardway.org/book/ex16.html)
*   [Finding Files (find, DIR -R)](http://cli.learncodethehardway.org/book/ex17.html)
*   [Looking Inside Files (grep, select-string)](http://cli.learncodethehardway.org/book/ex18.html)
*   [Getting Command Help (man, HELP)](http://cli.learncodethehardway.org/book/ex19.html)
*   [Finding Help (apropos, HELP)](http://cli.learncodethehardway.org/book/ex20.html)
*   [What's In Your Environment (env, echo, Env:)](http://cli.learncodethehardway.org/book/ex21.html)
*   [Changing Environment Variables (export, Env:)](http://cli.learncodethehardway.org/book/ex22.html)
*   [Exiting Your Terminal (exit)](http://cli.learncodethehardway.org/book/ex23.html)
*   [Next Steps](http://cli.learncodethehardway.org/book/next.html)
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



      find . -name '*.py' | xargs grep some_function
      cat hosts | xargs -I{} ssh root@{} hostname



*   `pstree -p` is a helpful display of the process tree.

*   Use `pgrep` and `pkill` to find or signal processes by name (`-f` is helpful).

*   Know the various signals you can send processes. For example, to suspend a process, use `kill -STOP [pid]`. For the full list, see `man 7 signal`

*   Use `nohup` or `disown` if you want a background process to keep running forever.

*   Check what processes are listening via `netstat -lntp` or `ss -plat` (for TCP; add `-u` for UDP).

*   See also `lsof` for open sockets and files.

*   See `uptime` or `w` to know the how long the system has been running.

*   Use `alias` to create shortcuts for commonly used commands. For example, `alias ll='ls -latr'` creates a new alias `ll`.

*   In Bash scripts, use `set -x` (or the variant `set -v`, which logs raw input, including unexpanded variables and comments) for debugging output. Use strict modes unless you have a good reason not to: Use `set -e` to abort on errors (nonzero exit code). Use `set -u` to detect unset variable usages. Consider `set -o pipefail` too, to on errors within pipes, too (though read up on it more if you do, as this topic is a bit subtle). For more involved scripts, also use `trap` on EXIT or ERR. A useful habit is to start a script like this, which will make it detect and abort on common errors and print a message:



      set -euo pipefail
      trap "echo 'error: Script failed: see failed command above'" ERR



*   In Bash scripts, subshells (written with parentheses) are convenient ways to group commands. A common example is to temporarily move to a different working directory, e.g.



      # do something in current dir
      (cd /some/other/dir && other-command)
      # continue in original dir



*   In Bash, note there are lots of kinds of variable expansion. Checking a variable exists: `${name:?error message}`. For example, if a Bash script requires a single argument, just write`input_file=${1:?usage: $0 input_file}`. Arithmetic expansion: `i=$(( (i + 1) % 5 ))`. Sequences: `{1..10}`. Trimming of strings: `${var%suffix}` and `${var#prefix}`. For example if`var=foo.pdf`, then `echo ${var%.pdf}.txt` prints `foo.txt`.

*   Brace expansion using `{`...`}` can reduce having to re-type similar text and automate combinations of items. This is helpful in examples like `mv foo.{txt,pdf} some-dir` (which moves both files), `cp somefile{,.bak}` (which expands to `cp somefile somefile.bak`) or `mkdir -p test-{a,b,c}/subtest-{1,2,3}` (which expands all possible combinations and creates a directory tree).

*   The output of a command can be treated like a file via `

      diff /etc/hosts ssh somehost cat /etc/hosts)



*   Know about "here documents" in Bash, as in `cat logfile 2>&1` or`some-command &>logfile`. Often, to ensure a command does not leave an open file handle to standard input, tying it to the terminal you are in, it is also good practice to add `

      stat -c '%A %a %n' /etc/timezone



*   For interactive selection of values from the output of another command, use [`percol`](https://github.com/mooz/percol) or [`fzf`](https://github.com/junegunn/fzf).

*   For interaction with files based on the output of another command (like `git`), use `fpp`([PathPicker](https://github.com/facebook/PathPicker)).

*   For a simple web server for all files in the current directory (and subdirs), available to anyone on your network, use: `python -m SimpleHTTPServer 7777` (for port 7777 and Python 2) and `python -m http.server 7777` (for port 7777 and Python 3).

*   For running a command with privileges, use `sudo` (for root) or `sudo -u` (for another user). Use`su` or `sudo bash` to actually run a shell as that user. Use `su -` to simulate a fresh login as root or another user.
# Pain Points
# Third Party
### https://github.com/robbyrussell/oh-my-zsh
### all of zsh configs
# Resources
### http://zsh.sourceforge.net/Intro/intro_1.html
### zsh manual
### http://www.zsh.org/
### zsh website
### https://github.com/robbyrussell/oh-my-zsh
### ohmyzsh
### https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins
### plugins
### https://github.com/robbyrussell/oh-my-zsh/wiki/themes
### themes
