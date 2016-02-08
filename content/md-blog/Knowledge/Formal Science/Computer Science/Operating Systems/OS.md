# Interfaces
### Bash
### https://en.wikipedia.org/wiki/Bash_(Unix_shell)
### resources
### https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly
### Everyday use
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Everyday use</h2><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, use&#xA0;<strong style="box-sizing: border-box;">Tab</strong>&#xA0;to complete arguments or list all available commands and&#xA0;<strong style="box-sizing: border-box;">ctrl-r</strong>&#xA0;to search through command history (after pressing, type to search, press&#xA0;<strong style="box-sizing: border-box;">ctrl-r</strong>&#xA0;repeatedly to cycle through more matches, press&#xA0;<strong style="box-sizing: border-box;">Enter</strong>&#xA0;to execute the found command, or hit the right arrow to put the result in the current line to allow editing).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, use&#xA0;<strong style="box-sizing: border-box;">ctrl-w</strong>&#xA0;to delete the last word, and&#xA0;<strong style="box-sizing: border-box;">ctrl-u</strong>&#xA0;to delete all the way back to the start of the line. Use&#xA0;<strong style="box-sizing: border-box;">alt-b</strong>&#xA0;and&#xA0;<strong style="box-sizing: border-box;">alt-f</strong>&#xA0;to move by word,&#xA0;<strong style="box-sizing: border-box;">ctrl-a</strong>&#xA0;to move cursor to beginning of line,&#xA0;<strong style="box-sizing: border-box;">ctrl-e</strong>&#xA0;to move cursor to end of line,&#xA0;<strong style="box-sizing: border-box;">ctrl-k</strong>&#xA0;to kill to the end of the line,&#xA0;<strong style="box-sizing: border-box;">ctrl-l</strong>&#xA0;to clear the screen. See&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man readline

```

&#xA0;for all the default keybindings in Bash. There are a lot. For example&#xA0;<strong style="box-sizing: border-box;">alt-.</strong>&#xA0;cycles through previous arguments, and&#xA0;<strong style="box-sizing: border-box;">alt-</strong>* expands a glob.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Alternatively, if you love vi-style key-bindings, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -o vi

```

&#xA0;(and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -o emacs

```

&#xA0;to put it back).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For editing long commands, after setting your editor (for example&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">export EDITOR=vim

```

),&#xA0;<strong style="box-sizing: border-box;">ctrl-x</strong>&#xA0;<strong style="box-sizing: border-box;">ctrl-e</strong>&#xA0;will open the current command in an editor for multi-line editing. Or in vi style,&#xA0;<strong style="box-sizing: border-box;">escape-v</strong>.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To see recent commands,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">history

```

. There are also many abbreviations such as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">!$

```

&#xA0;(last argument) and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">!!

```

&#xA0;last command, though these are often easily replaced with&#xA0;<strong style="box-sizing: border-box;">ctrl-r</strong>&#xA0;and&#xA0;<strong style="box-sizing: border-box;">alt-.</strong>.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To go back to the previous working directory:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cd -

```

</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">If you are halfway through typing a command but change your mind, hit&#xA0;<strong style="box-sizing: border-box;">alt-#</strong>&#xA0;to add a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">#

```

&#xA0;at the beginning and enter it as a comment (or use&#xA0;<strong style="box-sizing: border-box;">ctrl-a</strong>,&#xA0;<strong style="box-sizing: border-box;">#</strong>,&#xA0;<strong style="box-sizing: border-box;">enter</strong>). You can then return to it later via command history.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">xargs

```

&#xA0;(or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">parallel

```

). It&apos;s very powerful. Note you can control how many items execute per line (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-L

```

) as well as parallelism (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-P

```

). If you&apos;re not sure if it&apos;ll do the right thing, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">xargs echo

```

first. Also,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-I{}

```

&#xA0;is handy. Examples:</p></li></ul><div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      find <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span> -name <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>*.py<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> xargs grep some_function
      cat hosts <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> xargs -I{} ssh root@{} hostname</div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pstree -p

```

&#xA0;is a helpful display of the process tree.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pgrep

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pkill

```

&#xA0;to find or signal processes by name (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-f

```

&#xA0;is helpful).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know the various signals you can send processes. For example, to suspend a process, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">kill -STOP [pid]

```

. For the full list, see&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man 7 signal

```

</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nohup

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">disown

```

&#xA0;if you want a background process to keep running forever.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Check what processes are listening via&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">netstat -lntp

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ss -plat

```

&#xA0;(for TCP; add&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-u

```

&#xA0;for UDP).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">See also&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsof

```

&#xA0;for open sockets and files.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">See&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">uptime

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

&#xA0;to know the how long the system has been running.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">alias

```

&#xA0;to create shortcuts for commonly used commands. For example,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">alias ll=&apos;ls -latr&apos;

```

&#xA0;creates a new alias&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ll

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash scripts, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -x

```

&#xA0;(or the variant&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -v

```

, which logs raw input, including unexpanded variables and comments) for debugging output. Use strict modes unless you have a good reason not to: Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -e

```

&#xA0;to abort on errors (nonzero exit code). Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -u

```

&#xA0;to detect unset variable usages. Consider&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -o pipefail

```

&#xA0;too, to on errors within pipes, too (though read up on it more if you do, as this topic is a bit subtle). For more involved scripts, also use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">trap

```

&#xA0;on EXIT or ERR. A useful habit is to start a script like this, which will make it detect and abort on common errors and print a message:</p></li></ul><div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">set</span> -euo pipefail
      <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">trap</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>echo &apos;error: Script failed: see failed command above&apos;<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ERR</div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">In Bash scripts, subshells (written with parentheses) are convenient ways to group commands. A common example is to temporarily move to a different working directory, e.g.</li></ul><div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># do something in current dir</span>
      (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cd</span> /some/other/dir <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&amp;&amp;</span> other-command)
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># continue in original dir</span></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, note there are lots of kinds of variable expansion. Checking a variable exists:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${name:?error message}

```

. For example, if a Bash script requires a single argument, just write<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">input_file=${1:?usage: $0 input_file}

```

. Arithmetic expansion:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">i=$(( (i + 1) % 5 ))

```

. Sequences:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{1..10}

```

. Trimming of strings:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${var%suffix}

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${var#prefix}

```

. For example if<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var=foo.pdf

```

, then&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">echo ${var%.pdf}.txt

```

&#xA0;prints&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo.txt

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Brace expansion using&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{

```

...<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">}

```

&#xA0;can reduce having to re-type similar text and automate combinations of items. This is helpful in examples like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mv foo.{txt,pdf} some-dir

```

&#xA0;(which moves both files),&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cp somefile{,.bak}

```

&#xA0;(which expands to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cp somefile somefile.bak

```

) or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mkdir -p test-{a,b,c}/subtest-{1,2,3}

```

&#xA0;(which expands all possible combinations and creates a directory tree).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">The output of a command can be treated like a file via&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&lt;(some command)

```

. For example, compare local&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/etc/hosts

```

&#xA0;with a remote one:</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      diff /etc/hosts <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&lt;(</span>ssh somehost cat /etc/hosts<span class="pl-pds" style="box-sizing: border-box;">)</span></span></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know about &quot;here documents&quot; in Bash, as in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cat &lt;&lt;EOF ...

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, redirect both standard output and standard error via:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">some-command &gt;logfile 2&gt;&amp;1

```

&#xA0;or<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">some-command &amp;&gt;logfile

```

. Often, to ensure a command does not leave an open file handle to standard input, tying it to the terminal you are in, it is also good practice to add&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&lt;/dev/null

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man ascii

```

&#xA0;for a good ASCII table, with hex and decimal values. For general encoding info,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man unicode

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man utf-8

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man latin1

```

&#xA0;are helpful.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">screen

```

&#xA0;or&#xA0;<a href="https://tmux.github.io/" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmux

```

</a>&#xA0;to multiplex the screen, especially useful on remote ssh sessions and to detach and re-attach to a session. A more minimal alternative for session persistence only is<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dtach

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In ssh, knowing how to port tunnel with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-L

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-D

```

&#xA0;(and occasionally&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-R

```

) is useful, e.g. to access web sites from a remote server.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">It can be useful to make a few optimizations to your ssh configuration; for example, this<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">~/.ssh/config

```

&#xA0;contains settings to avoid dropped connections in certain network environments, uses compression (which is helpful with scp over low-bandwidth connections), and multiplex channels to the same server with a local control file:</p></li></ul><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 16px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; background-color: rgb(247, 247, 247);"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin: 0px; word-break: normal; white-space: pre; display: inline; max-width: initial; overflow: initial; line-height: inherit; word-wrap: normal; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">      TCPKeepAlive=yes
      ServerAliveInterval=15
      ServerAliveCountMax=6
      Compression=yes
      ControlMaster auto
      ControlPath /tmp/%r@%h:%p
      ControlPersist yes


```

<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">A few other options relevant to ssh are security sensitive and should be enabled with care, e.g. per subnet or host or in trusted networks:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">StrictHostKeyChecking=no

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ForwardAgent=yes

```

</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To get the permissions on a file in octal form, which is useful for system configuration but not available in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls

```

&#xA0;and easy to bungle, use something like</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      stat -c <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>%A %a %n<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> /etc/timezone</div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For interactive selection of values from the output of another command, use&#xA0;<a href="https://github.com/mooz/percol" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">percol

```

</a>&#xA0;or&#xA0;<a href="https://github.com/junegunn/fzf" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">fzf

```

</a>.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For interaction with files based on the output of another command (like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">git

```

), use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">fpp

```

(<a href="https://github.com/facebook/PathPicker" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">PathPicker</a>).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For a simple web server for all files in the current directory (and subdirs), available to anyone on your network, use:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">python -m SimpleHTTPServer 7777

```

&#xA0;(for port 7777 and Python 2) and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">python -m http.server 7777

```

&#xA0;(for port 7777 and Python 3).</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For running a command with privileges, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sudo

```

&#xA0;(for root) or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sudo -u

```

&#xA0;(for another user). Use<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">su

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sudo bash

```

&#xA0;to actually run a shell as that user. Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">su -

```

&#xA0;to simulate a fresh login as root or another user.</p></li></ul>
### http://cli.learncodethehardway.org/book/
### How to Learn
### man bash
### KDE
### https://en.wikipedia.org/wiki/KDE
### https://www.kde.org/
### Gnome
### https://www.gnome.org/
# Operating Systems
<ul style="margin-bottom: 0px; margin-left: 1em; color: rgb(37, 37, 37); font-family: inherit; font-size: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; border: 0px; font-stretch: inherit; vertical-align: baseline; list-style-position: inside; box-sizing: border-box; background: none;"><li style="line-height: inherit; margin: 0px 0px 10px; padding: 0px; border: 0px; font-family: inherit; font-size: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; vertical-align: baseline; box-sizing: border-box; background: none;"><a href="https://en.m.wikipedia.org/wiki/Operating_systems" title="Operating systems" class="mw-redirect" target="_blank" style="color: rgb(90, 54, 150); margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; vertical-align: baseline; box-sizing: border-box; background: none;">Operating systems</a>&#xA0;&#x2013; set of software that manages computer hardware resources and provides common services for computer programs</li></ul>
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
Program is loaded through an OS loader, There&apos;s a memory footprint created which contains:<div><br></div><div>Heap (dynamic memory allocation), Stack (managing function calls) and Global Data (Access to global data).</div><div><br></div><div>Applications can request more resources during running.</div>
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
Everything is handled usually by mapping. There are two main concepts:<div><br></div><div>guest OS: whatever you install on your virutal box</div><div><br></div><div>Host OS: your main OS.</div>
### Solutions
### Docker
<p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;"><b>Docker</b>&#xA0;is an&#xA0;<a href="https://en.wikipedia.org/wiki/Open-source" title="Open-source" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">open-source</a>&#xA0;project that automates the deployment of&#xA0;<a href="https://en.wikipedia.org/wiki/Application_software" title="Application software" style="color: rgb(11, 0, 128); background: none;">applications</a>&#xA0;inside&#xA0;<a href="https://en.wikipedia.org/wiki/Software_container" title="Software container" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">software containers</a>, by providing an additional layer of abstraction and automation of&#xA0;<a href="https://en.wikipedia.org/wiki/Operating-system-level_virtualization" title="Operating-system-level virtualization" style="color: rgb(11, 0, 128); background: none;">operating-system-level virtualization</a>&#xA0;on&#xA0;<a href="https://en.wikipedia.org/wiki/Linux" title="Linux" style="color: rgb(11, 0, 128); background: none;">Linux</a>,&#xA0;<a href="https://en.wikipedia.org/wiki/Mac_OS" title="Mac OS" style="color: rgb(11, 0, 128); background: none;">Mac OS</a>&#xA0;and&#xA0;<a href="https://en.wikipedia.org/wiki/Windows" title="Windows" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">Windows</a>.<sup id="cite_ref-SYS-CON_Media_2-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-SYS-CON_Media-2" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[2]</a></sup></p><p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">According to industry analyst firm 451 Research, &quot;Docker is a tool that can package an application and its dependencies in a virtual container that can run on any Linux server. This helps enable flexibility and portability on where the application can run, whether&#xA0;<a href="https://en.wikipedia.org/wiki/On-premises_software" title="On-premises software" style="color: rgb(11, 0, 128); background: none;">on premises</a>, public cloud, private cloud, bare metal, etc.&quot;<sup id="cite_ref-Linux_3-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Linux-3" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[3]</a></sup></p>
### Archeticture
### https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Docker-linux-interfaces.svg/400px-Docker-linux-interfaces.svg.png
### Overview
<p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">Docker implements a high-level&#xA0;<a href="https://en.wikipedia.org/wiki/Application_programming_interface" title="Application programming interface" style="color: rgb(11, 0, 128); background: none;">API</a>&#xA0;to provide lightweight containers that run processes in isolation.<sup id="cite_ref-infoq-201303_5-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-infoq-201303-5" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[5]</a></sup></p><p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">It uses resource isolation features of the&#xA0;<a href="https://en.wikipedia.org/wiki/Linux_kernel" title="Linux kernel" style="color: rgb(11, 0, 128); background: none;">Linux kernel</a>&#xA0;such as&#xA0;<a href="https://en.wikipedia.org/wiki/Cgroups" title="Cgroups" style="color: rgb(11, 0, 128); background: none;">cgroups</a>&#xA0;and kernel&#xA0;<a href="https://en.wikipedia.org/wiki/Linux_namespaces" title="Linux namespaces" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">namespaces</a>&#xA0;to allow independent &quot;containers&quot; to run within a single Linux instance, avoiding the overhead of starting and maintaining&#xA0;<a href="https://en.wikipedia.org/wiki/Virtual_machine" title="Virtual machine" style="color: rgb(11, 0, 128); background: none;">virtual machines</a>.<sup id="cite_ref-6" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-6" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[6]</a></sup></p><p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">Building on top of facilities provided by the&#xA0;<a href="https://en.wikipedia.org/wiki/Linux_kernel" title="Linux kernel" style="color: rgb(11, 0, 128); background: none;">Linux kernel</a>&#xA0;(primarily cgroups and namespaces), a Docker container, unlike a virtual machine, does not require or include a separate operating system.<sup id="cite_ref-Linux_3-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Linux-3" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[3]</a></sup>&#xA0;Instead, it relies on the kernel&apos;s functionality and uses resource isolation (CPU, memory, block I/O, network, etc.) and&#xA0;<a href="https://en.wikipedia.org/wiki/Namespace_isolation" title="Namespace isolation" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">separate namespaces</a>&#xA0;to isolate the application&apos;s view of the operating system. Docker accesses the Linux kernel&apos;s virtualization features either directly using the&#xA0;<span style="font-family: monospace, monospace;">libcontainer</span>library, which is available since Docker&#xA0;0.9, or indirectly via&#xA0;<span style="font-family: monospace, monospace;"><a href="https://en.wikipedia.org/wiki/Libvirt" title="Libvirt" style="color: rgb(11, 0, 128); background: none;">libvirt</a></span>, LXC (<a href="https://en.wikipedia.org/wiki/Linux_Containers" title="Linux Containers" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">Linux Containers</a>) or&#xA0;<span style="font-family: monospace, monospace;"><a href="https://en.wikipedia.org/wiki/Systemd-nspawn" title="Systemd-nspawn" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">systemd-nspawn</a></span>.<sup id="cite_ref-docker-blog-201403_4-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-docker-blog-201403-4" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[4]</a></sup><sup id="cite_ref-infoq-201403_7-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-infoq-201403-7" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[7]</a></sup></p><p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">By using containers, resources can be isolated, services restricted, and processes provisioned to have an almost completely private view of the operating system with their own process ID space, file system structure, and network interfaces. Multiple containers share the same kernel, but each container can be constrained to only use a defined amount of resources such as CPU, memory and I/O.</p><p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">Using Docker to create and manage containers may simplify the creation of highly&#xA0;<a href="https://en.wikipedia.org/wiki/Distributed_system" title="Distributed system" class="mw-redirect" style="color: rgb(11, 0, 128); background: none;">distributed systems</a>, by allowing multiple applications, worker tasks and other processes to run autonomously on a single physical machine or across multiple virtual machines. This allows the deployment of nodes to be performed as the resources become available or when more nodes are needed, allowing a&#xA0;<a href="https://en.wikipedia.org/wiki/Platform_as_a_service" title="Platform as a service" style="color: rgb(11, 0, 128); background: none;">platform as a service</a>&#xA0;(PaaS)-style of deployment and scaling for systems like&#xA0;<a href="https://en.wikipedia.org/wiki/Apache_Cassandra" title="Apache Cassandra" style="color: rgb(11, 0, 128); background: none;">Apache Cassandra</a>,<a href="https://en.wikipedia.org/wiki/MongoDB" title="MongoDB" style="color: rgb(11, 0, 128); background: none;">MongoDB</a>&#xA0;or&#xA0;<a href="https://en.wikipedia.org/wiki/Riak" title="Riak" style="color: rgb(11, 0, 128); background: none;">Riak</a>. Docker also simplifies the creation and operation of task or workload queues and other distributed systems.<sup id="cite_ref-CloudAve_8-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-CloudAve-8" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[8]</a></sup><sup id="cite_ref-Iron.io_9-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block;"><a href="https://en.wikipedia.org/wiki/Docker_(software)#cite_note-Iron.io-9" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[9]</a></sup></p>
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
<a href="http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-io-for-creating-an-isolated-environment">http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-io-for-creating-an-isolated-environment</a><div><br></div><div><p style="margin-bottom: 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: rgb(34, 34, 34); line-height: 19.5px;">f your purpose is the isolation, I think docker is what you want.</p><p style="margin-bottom: 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: rgb(34, 34, 34); line-height: 19.5px;">Vagrant is a virtual machine manager, it allows you to script the virtual machine configuration as well as the provisioning. However, it is still a virtual machine depending on Virtual Box (or others) with a huge overhead. It requires you to have a hard drive file that can be huge, it takes a lot of ram, and performance can be not very good.</p><p style="margin-bottom: 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: rgb(34, 34, 34); line-height: 19.5px;">Docker on the other hand uses kernel cgroup and namespacing via lxc. It means that you are using the same kernel as the host and the same file system. You can use Dockerfile with the&#xA0;<code style="margin: 0px; padding: 1px 5px; border: 0px; font-size: 13px; font-family: Consolas, Menlo, Monaco, &apos;Lucida Console&apos;, &apos;Liberation Mono&apos;, &apos;DejaVu Sans Mono&apos;, &apos;Bitstream Vera Sans Mono&apos;, &apos;Courier New&apos;, monospace, sans-serif; white-space: pre-wrap; background-color: rgb(238, 238, 238);">docker build

```

&#xA0;command in order to handle the provisioning and configuration of your container. You have example at&#xA0;<a href="https://docs.docker.com/" style="margin: 0px; padding: 0px; border: 0px; cursor: pointer; color: rgb(12, 101, 165);">docs.docker.com</a>&#xA0;on how to make your Dockerfile, it is very intuitive.</p><p style="margin-bottom: 1em; padding: 0px; border: 0px; font-size: 15px; clear: both; color: rgb(34, 34, 34); line-height: 19.5px;">The only reason you could want to use vagrant is if you need to do BSD, Windows or other non-linux development on your ubuntu box. Otherwise, go for Docker.</p></div>
### VirtuallBox
### Kernel
### Standards
### POSIX
<b style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">POSIX</b><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;(</span><span class="nowrap" style="white-space: nowrap; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"><span class="IPA nopopups"><a href="https://en.wikipedia.org/wiki/Help:IPA_for_English" title="Help:IPA for English" style="color: rgb(11, 0, 128); background: none;">/<span style="border-bottom-width: 1px; border-bottom-style: dotted;"><span title="/&#x2C8;/ primary stress follows">&#x2C8;</span><span title="&apos;p&apos; in &apos;pie&apos;">p</span><span title="/&#x252;/ short &apos;o&apos; in &apos;body&apos;">&#x252;</span><span title="&apos;z&apos; in &apos;Zion&apos;">z</span><span title="/&#x26A;/ short &apos;i&apos; in &apos;bid&apos;">&#x26A;</span><span title="&apos;k&apos; in &apos;kind&apos;">k</span><span title="&apos;s&apos; in &apos;sigh&apos;">s</span></span>/</a></span></span><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;</span><span title="English pronunciation respelling" class="Unicode" style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"><a href="https://en.wikipedia.org/wiki/Wikipedia:Pronunciation_respelling_key" title="Wikipedia:Pronunciation respelling key" style="color: rgb(11, 0, 128); background: none;"><i><b><span class="smallcaps"><span class="SMALLCAPS" style="font-variant: small-caps;"><span class="NOCAPS" style="text-transform: lowercase;">poz</span></span></span></b>-iks</i></a></span><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">), an acronym for&#xA0;</span><b style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">Portable Operating System Interface</b><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">,</span><sup id="cite_ref-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;"><a href="https://en.wikipedia.org/wiki/POSIX#cite_note-1" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[1]</a></sup><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;is a family of&#xA0;</span><a href="https://en.wikipedia.org/wiki/Standardization" title="Standardization" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">standards</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;specified by the&#xA0;</span><a href="https://en.wikipedia.org/wiki/IEEE_Computer_Society" title="IEEE Computer Society" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">IEEE Computer Society</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;for maintaining compatibility between&#xA0;</span><a href="https://en.wikipedia.org/wiki/Operating_system" title="Operating system" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">operating systems</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">. POSIX defines the&#xA0;</span><a href="https://en.wikipedia.org/wiki/Application_programming_interface" title="Application programming interface" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">application programming interface</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;(API), along with command line&#xA0;</span><a href="https://en.wikipedia.org/wiki/Unix_shell" title="Unix shell" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">shells</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;and utility interfaces, for software compatibility with variants of&#xA0;</span><a href="https://en.wikipedia.org/wiki/Unix" title="Unix" style="color: rgb(11, 0, 128); font-family: sans-serif; line-height: 22.3999996185303px; background-image: none; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">Unix</a><span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">&#xA0;and other operating systems.</span><sup id="cite_ref-FAQ_2-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;"><a href="https://en.wikipedia.org/wiki/POSIX#cite_note-FAQ-2" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[2]</a></sup><sup id="cite_ref-IET_3-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; display: inline-block; color: rgb(37, 37, 37); font-family: sans-serif;"><a href="https://en.wikipedia.org/wiki/POSIX#cite_note-IET-3" style="color: rgb(11, 0, 128); white-space: nowrap; background: none;">[3]</a></sup>
### https://en.wikipedia.org/wiki/POSIX
### A family of standards  to provide compatibility with different operating systems
### Compatible OSs
### https://en.wikipedia.org/wiki/POSIX#POSIX-oriented_operating_systems
