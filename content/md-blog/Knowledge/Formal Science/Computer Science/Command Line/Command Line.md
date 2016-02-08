# Concepts
### Key Bindings
### Moving
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, use&#xA0;<strong style="box-sizing: border-box;">ctrl-w</strong>&#xA0;to delete the last word, and&#xA0;<strong style="box-sizing: border-box;">ctrl-u</strong>&#xA0;to delete all the way back to the start of the line. Use&#xA0;<strong style="box-sizing: border-box;">alt-b</strong>&#xA0;and&#xA0;<strong style="box-sizing: border-box;">alt-f</strong>&#xA0;to move by word,&#xA0;<strong style="box-sizing: border-box;">ctrl-a</strong>&#xA0;to move cursor to beginning of line,&#xA0;<strong style="box-sizing: border-box;">ctrl-e</strong>&#xA0;to move cursor to end of line,&#xA0;<strong style="box-sizing: border-box;">ctrl-k</strong>&#xA0;to kill to the end of the line,&#xA0;<strong style="box-sizing: border-box;">ctrl-l</strong>&#xA0;to clear the screen. See&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man readline

```

&#xA0;for all the default keybindings in Bash. There are a lot. For example&#xA0;<strong style="box-sizing: border-box;">alt-.</strong>&#xA0;cycles through previous arguments, and&#xA0;<strong style="box-sizing: border-box;">alt-</strong>* expands a glob.</p></li></ul>
### set to vi style
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Alternatively, if you love vi-style key-bindings, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -o vi

```

&#xA0;(and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set -o emacs

```

&#xA0;to put it back)</p></li></ul>
### going back to a previous command
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">If you are halfway through typing a command but change your mind, hit&#xA0;<strong style="box-sizing: border-box;">alt-#</strong>&#xA0;to add a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">#

```

&#xA0;at the beginning and enter it as a comment (or use&#xA0;<strong style="box-sizing: border-box;">ctrl-a</strong>,&#xA0;<strong style="box-sizing: border-box;">#</strong>,&#xA0;<strong style="box-sizing: border-box;">enter</strong>). You can then return to it later via command history.</p></li></ul>
### commands
### check which processes are listening to what
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Check what processes are listening via&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">netstat -lntp

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ss -plat

```

&#xA0;(for TCP; add&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-u

```

&#xA0;for UDP).</p></li><li style="box-sizing: border-box;"></li></ul>
### man
### encoding info
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man ascii

```

&#xA0;for a good ASCII table, with hex and decimal values. For general encoding info,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man unicode

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man utf-8

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">man latin1

```

&#xA0;are helpful.</p></li></ul>
### Help page
### sed
<div><h2 style="font-family: Verdana, sans-serif; padding-left: 20px; font-size: 32px; color: rgb(0, 0, 0);"><a name="uh-1" href="http://www.grymoire.com/Unix/Sed.html#toc-uh-1" style="padding: 10px; line-height: 1.2; color: rgb(218, 165, 32); text-decoration: underline;">The essential command: s for substitution</a></h2><p style="width: 798.844px; font-size: 19.2px; line-height: 1.2; font-family: Verdana, sans-serif;"><i>Sed</i>&#xA0;has several commands, but most people only learn the substitute command:<i>s</i>. The substitute command changes all occurrences of the regular expression into a new value. A simple example is changing &quot;day&quot; in the &quot;old&quot; file to &quot;night&quot; in the &quot;new&quot; file:</p><pre style="font-size: 16px; line-height: 19.2px;">sed s/day/night/ &lt;old &gt;new
</pre><p style="width: 798.844px; font-size: 19.2px; line-height: 1.2; font-family: Verdana, sans-serif;">Or another way (for UNIX beginners),</p><pre style="font-size: 16px; line-height: 19.2px;">sed s/day/night/ old &gt;new
</pre><p style="width: 798.844px; font-size: 19.2px; line-height: 1.2; font-family: Verdana, sans-serif;">and for those who want to test this:</p><pre style="font-size: 16px; line-height: 19.2px;">echo day | sed s/day/night/ 
</pre><p style="width: 798.844px; font-size: 19.2px; line-height: 1.2; font-family: Verdana, sans-serif;">This will output &quot;night&quot;.</p><p style="width: 798.844px; font-size: 19.2px; line-height: 1.2; font-family: Verdana, sans-serif;">I didn&apos;t put quotes around the argument because this example didn&apos;t need them. If you read my earlier tutorial&#xA0;<a href="http://www.grymoire.com/Unix/Quote.html" style="padding: 10px; line-height: 1.2; color: rgb(218, 165, 32); text-decoration: underline; font-weight: bold;">on quotes</a>, you would understand why it doesn&apos;t need quotes. However, I recommend you do use quotes. If you have meta-characters in the command, quotes are necessary. And if you aren&apos;t sure, it&apos;s a good habit, and I will henceforth quote future examples to emphasize the &quot;best practice.&quot; Using the strong (single quote) character, that would be:</p></div>
### http://www.grymoire.com/Unix/Sed.html#uh-0
### stream editor
### >>
### append output to file
### >
### overwrite or create file from output
### Find by pattern
find . &#xA0;-name &apos;grunt-*&apos; -exec rm -r {} +<div><br></div><div>the . and &apos;word*&apos; should search recursively under all directories</div>
### Print Tree
<span style="color: rgb(79, 79, 79); font-family: Helvetica, &apos;Arial Unicode MS&apos;, sans-serif; font-size: 12px; font-weight: bold; line-height: 18px; text-align: center; white-space: pre-wrap; background-color: rgb(224, 224, 224);">find . -type d | sed -e &quot;s/[^-][^\/]*\//  |/g&quot; -e &quot;s/|\([^ ]\)/|-\1/&quot;</span>
### or use
### tree program
### brew install tree
### apt-get install tree
### grep
### find
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To locate a file by name in the current directory,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">find . -iname &apos;*something*&apos;

```

&#xA0;(or similar). To find a file anywhere by name, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">locate something

```

&#xA0;(but bear in mind&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">updatedb

```

&#xA0;may not have indexed recently created files).</p></li></ul>
### ag
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For general searching through source or data files (more advanced than&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">grep -r

```

), use&#xA0;<a href="https://github.com/ggreer/the_silver_searcher" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ag

```

</a>.</p></li></ul>
### std in/out
### std error
### tee
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know about&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tee

```

&#xA0;to copy from stdin to a file and also to stdout, as in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls -al | tee file.txt

```

.</p></li></ul>
### rename files according to a pattern
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">To rename many files at once according to a pattern, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">rename

```

. For complex renames,&#xA0;<a href="https://github.com/jlevy/repren" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">repren

```

</a>may help.</li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># Recover backup files foo.bak -&gt; foo:</span>
      rename <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>s/\.bak$//<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span>.bak
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># Full rename of filenames, directories, and contents foo -&gt; bar:</span>
      repren --full --preserve-<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">case</span> --from foo --to bar </pre></div>
### split files into pieces
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To split files into pieces, see&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">split

```

&#xA0;(to split by size) and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">csplit

```

&#xA0;(to split by a pattern).</p></li></ul>
### work with compressed files
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">zless

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">zmore

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">zcat

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">zgrep

```

&#xA0;to operate on compressed files.</p></li></ul><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-system-debugging" class="anchor" href="https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&amp;utm_medium=email&amp;utm_source=newsletter&amp;utm_term=weekly#system-debugging" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1; background-color: transparent;"></a></h2>
### Diff and Patch
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">The standard tools for patching source code are&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">diff

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">patch

```

. See also&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">diffstat

```

&#xA0;for summary statistics of a diff and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sdiff

```

&#xA0;for a side-by-side diff. Note&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">diff -r

```

&#xA0;works for entire directories. Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">diff -r tree1 tree2 | diffstat

```

&#xA0;for a summary of changes. Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">vimdiff

```

&#xA0;to compare and edit files.</p></li></ul>
### http://www.computerhope.com/unix/udiff.htm
### prints two files next to each other and compares them
### patch will add the diffed file
### http://linux.about.com/od/commands/l/blcmdl1_patch.htm
### file: identify type of a file
### Cat
### Variables
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, note there are lots of kinds of variable expansion. Checking a variable exists:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${name:?error message}

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

&#xA0;(which expands all possible combinations and creates a directory tree).</p></li></ul>
### SSH
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">It can be useful to make a few optimizations to your ssh configuration; for example, this<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">~/.ssh/config

```

&#xA0;contains settings to avoid dropped connections in certain network environments, uses compression (which is helpful with scp over low-bandwidth connections), and multiplex channels to the same server with a local control file:</p></li></ul><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 16px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; background-color: rgb(247, 247, 247);"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin: 0px; word-break: normal; white-space: pre; display: inline; max-width: initial; overflow: initial; line-height: inherit; word-wrap: normal; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">      TCPKeepAlive=yes
      ServerAliveInterval=15
      ServerAliveCountMax=6
      Compression=yes
      ControlMaster auto
      ControlPath /tmp/%r@%h:%p
      ControlPersist yes

```

</pre>
### debugging
### web
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For web debugging,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">curl

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">curl -I

```

&#xA0;are handy, or their&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">wget

```

&#xA0;equivalents, or the more modern&#xA0;<a href="https://github.com/jakubroztocil/httpie" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">httpie

```

</a>.</p></li></ul>
### cpu/disk
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To know current cpu/disk status, the classic tools are&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">top

```

&#xA0;(or the better&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">htop

```

),&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iostat

```

, and<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iotop

```

. Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iostat -mxz 15

```

&#xA0;for basic CPU and detailed per-partition disk stats and performance insight.</p></li></ul>
### Quick overview
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For a quick overview of what&apos;s happening on a system,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dstat

```

&#xA0;is especially useful. For broadest overview with details, use&#xA0;<a href="https://github.com/nicolargo/glances" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">glances

```

</a>.</p></li></ul>
### Alternative Java Debugging
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Java system debugging is a different kettle of fish, but a simple trick on Oracle&apos;s and some other JVMs is that you can run&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">kill -3 &lt;pid&gt;

```

&#xA0;and a full stack trace and heap summary (including generational garbage collection details, which can be highly informative) will be dumped to stderr/logs. The JDK&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jps

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jstat

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jstack

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">jmap

```

&#xA0;are useful.&#xA0;<a href="https://github.com/aragozin/jvm-tools" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">SJK tools</a>&#xA0;are more advanced.</p></li></ul>
### Current folder usage
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For looking at why a disk is full,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ncdu

```

&#xA0;saves time over the usual commands like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">du -sh *

```

.</p></li><li style="box-sizing: border-box;"></li></ul>
### network
### Network connection
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For network connection details, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">netstat

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ss

```

.</p></li></ul>
### netstat
### How to read netstat
<span style="color: rgb(0, 0, 0); line-height: normal; font-family: Fixedsys; font-size: medium;">I can imagine that anyone seeing this for the first time must be instantly freaking out over all the &apos;LISTENING&apos; entries - their machine must be infested with trojans! But if they know a little more about Netstat, they&apos;ll calm down again. Now, read and learn:</span><ul style="color: rgb(0, 0, 0); line-height: normal; font-family: Fixedsys; font-size: medium;"><li>In lines saying &apos;ESTABLISHED&apos;, you need the&#xA0;<u>remote</u>&#xA0;port to identify what has connected to the remote site.</li><li>In lines saying &apos;LISTENING&apos;, you need the&#xA0;<u>local</u>&#xA0;port to identify what is listening there.</li><li>Each outbound TCP connection also causes a LISTENING entry on the same port.</li><li>Most UDP listening ports are duplicates from a listening TCP port. Ignore them unless they don&apos;t have a TCP twin.</li><li>TIME_WAIT entries are not important.</li><li>If it says 0.0.0.0 on the Local Address column, it means that port is listening on all &apos;network interfaces&apos; (i.e. your computer, your modem(s) and your network card(s)).</li><li>If it says 127.0.0.1 on the Local Address column, it means that port is ONLY listening for connections from your PC itself, not from the Internet or network. No danger there.</li><li>If it displays your online IP on the Local Address column, it means that port is ONLY listening for connections from the Internet.</li><li>If it displays your local network IP on the Local Address column, it means that port is ONLY listening for connections from the local network.</li></ul>
### https://sites.google.com/site/xiangyangsite/home/technical-tips/linux-unix/networks-related-commands-on-linux/how-to-read-netstat--an-results
### which processing is hogging
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To find which socket or process is using bandwidth, try&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iftop

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nethogs

```

.</p></li><li style="box-sizing: border-box;"></li></ul>
### More serious network
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For more serious network debugging,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">wireshark

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tshark

```

, or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ngrep

```

.</p></li><li style="box-sizing: border-box;"></li></ul>
### Check server performance
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ab

```

&#xA0;tool (comes with Apache) is helpful for quick-and-dirty checking of web server performance. For more complex load testing, try&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">siege

```

.</p></li><li style="box-sizing: border-box;"></li></ul>
### Know current running processes status
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know about&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strace

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ltrace

```

. These can be helpful if a program is failing, hanging, or crashing, and you don&apos;t know why, or if you want to get a general idea of performance. Note the profiling option (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-c

```

), and the ability to attach to a running process (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-p

```

).</p></li></ul>
### Connect to a running process with gdb
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know how to connect to a running process with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">gdb

```

&#xA0;and get its stack traces.</p></li><li style="box-sizing: border-box;"></li></ul>
### /proc
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc

```

. It&apos;s amazingly helpful sometimes when debugging live problems. Examples:<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/cpuinfo

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/meminfo

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/cmdline

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/xxx/cwd

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/xxx/exe

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/xxx/fd/

```

,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc/xxx/smaps

```

&#xA0;(where&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">xxx

```

&#xA0;is the process id or pid).</p></li></ul>
### Why something went wrong in the past
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">When debugging why something went wrong in the past,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sar

```

&#xA0;can be very helpful. It shows historic statistics on CPU, memory, network, etc.</p></li></ul>
### Deeper systems and performance analysis
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For deeper systems and performance analyses, look at&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">stap

```

&#xA0;(<a href="https://sourceware.org/systemtap/wiki" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">SystemTap</a>),&#xA0;<a href="http://en.wikipedia.org/wiki/Perf_(Linux)" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">perf

```

</a>, and&#xA0;<a href="https://github.com/draios/sysdig" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sysdig

```

</a>.</p></li></ul>
### Check OS name
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Check what OS you&apos;re on with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">uname

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">uname -a

```

&#xA0;(general Unix/kernel info) or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsb_release -a

```

(Linux distro info).</p></li><li style="box-sizing: border-box;"></li></ul>
### When something is acting really funny
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dmesg

```

&#xA0;whenever something&apos;s acting really funny (it could be hardware or driver issues).</p></li></ul><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-one-liners" class="anchor" href="https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&amp;utm_medium=email&amp;utm_source=newsletter&amp;utm_term=weekly#one-liners" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1; background-color: transparent;"></a></h2>
### MAC ONLY
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">MacOS X only</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">These are items relevant&#xA0;<em style="box-sizing: border-box;">only</em>&#xA0;on MacOS.</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Package management with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">brew

```

&#xA0;(Homebrew) and/or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">port

```

&#xA0;(MacPorts). These can be used to install on MacOS many of the above commands.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Copy output of any command to a desktop app with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pbcopy

```

&#xA0;and paste input from one with<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pbpaste

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To enable the Option key in Mac OS Terminal as an alt key (such as used in the commands above like&#xA0;<strong style="box-sizing: border-box;">alt-b</strong>,&#xA0;<strong style="box-sizing: border-box;">alt-f</strong>, etc.), open Preferences -&gt; Profiles -&gt; Keyboard and select &quot;Use Option as Meta key&quot;.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To open a file with a desktop app, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">open

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">open -a /Applications/Whatever.app

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Spotlight: Search files with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mdfind

```

&#xA0;and list metadata (such as photo EXIF info) with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mdls

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Be aware MacOS is based on BSD Unix, and many commands (for example&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ps

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tail

```

,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">awk

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sed

```

) have many subtle variations from Linux, which is largely influenced by System V-style Unix and GNU tools. You can often tell the difference by noting a man page has the heading &quot;BSD General Commands Manual.&quot; In some cases GNU versions can be installed, too (such as<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">gawk

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">gsed

```

&#xA0;for GNU awk and sed). If writing cross-platform Bash scripts, avoid such commands (for example, consider Python or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">perl

```

) or test carefully.</p></li></ul>
### Obsecure but useful
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Obscure but useful</h2><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">expr

```

: perform arithmetic or boolean operations or evaluate regular expressions</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">m4

```

: simple macro processor</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">yes

```

: print a string a lot</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cal

```

: nice calendar</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">env

```

: run a command (useful in scripts)</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">printenv

```

: print out environment variables (useful in debugging and scripts)</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">look

```

: find English words (or lines in a file) beginning with a string</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cut

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">paste

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">join

```

: data manipulation</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">fmt

```

: format text paragraphs</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pr

```

: format text into pages/columns</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">fold

```

: wrap lines of text</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">column

```

: format text fields into aligned, fixed-width columns or tables</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">expand

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">unexpand

```

: convert between tabs and spaces</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nl

```

: add line numbers</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">seq

```

: print numbers</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bc

```

: calculator</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">factor

```

: factor integers</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><a href="https://gnupg.org/" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">gpg

```

</a>: encrypt and sign files</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">toe

```

: table of terminfo entries</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nc

```

: network debugging and data transfer</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">socat

```

: socket relay and tcp port forwarder (similar to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">netcat

```

)</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><a href="https://github.com/mattthias/slurm" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">slurm

```

</a>: network trafic visualization</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dd

```

: moving data between files or devices</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">file

```

: identify type of a file</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tree

```

: display directories and subdirectories as a nesting tree; like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls

```

&#xA0;but recursive</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">stat

```

: file info</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">time

```

: execute and time a command</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">watch

```

: run a command repeatedly, showing results and/or highlighting changes</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tac

```

: print files in reverse</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">shuf

```

: random selection of lines from a file</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">comm

```

: compare sorted files line by line</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pv

```

: monitor the progress of data through a pipe</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">hd

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bvi

```

: dump or edit binary files</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

: extract text from binary files</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tr

```

: character translation or manipulation</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iconv

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">uconv

```

: conversion for text encodings</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">split

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">csplit

```

: splitting files</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sponge

```

: read all input before writing it, useful for reading from then writing to the same file, e.g.,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">grep -v something some-file | sponge some-file

```

</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">units

```

: unit conversions and calculations; converts furlongs per fortnight to twips per blink (see also&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/usr/share/units/definitions.units

```

)</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">apg

```

: generates random passwords</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">7z

```

: high-ratio file compression</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ldd

```

: dynamic library info</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nm

```

: symbols from object files</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ab

```

: benchmarking web servers</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strace

```

: system call debugging</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mtr

```

: better traceroute for network debugging</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cssh

```

: visual concurrent shell</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">rsync

```

: sync files and folders over SSH or in local file system</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">wireshark

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tshark

```

: packet capture and network debugging</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ngrep

```

: grep for the network layer</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">host

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dig

```

: DNS lookups</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsof

```

: process file descriptor and socket info</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dstat

```

: useful system stats</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><a href="https://github.com/nicolargo/glances" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">glances

```

</a>: high level, multi-subsystem overview</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iostat

```

: Disk usage stats</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">mpstat

```

: CPU usage stats</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">vmstat

```

: Memory usage stats</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">htop

```

: improved version of top</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">last

```

: login history</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

: who&apos;s logged on</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">id

```

: user/group identity info</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sar

```

: historic system stats</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">iftop

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">nethogs

```

: network utilization by socket or process</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ss

```

: socket statistics</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dmesg

```

: boot and system error messages</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sysctl

```

: view and configure Linux kernel parameters at run time</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">hdparm

```

: SATA/ATA disk manipulation/performance</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsb_release

```

: Linux distribution info</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsblk

```

: list block devices: a tree view of your disks and disk paritions</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lshw

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lscpu

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lspci

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsusb

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dmidecode

```

: hardware information, including CPU, BIOS, RAID, graphics, devices, etc.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">lsmod

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">modinfo

```

: List and show details of kernel modules.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">fortune

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ddate

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sl

```

: um, well, it depends on whether you consider steam locomotives and Zippy quotations &quot;useful&quot;</p></li></ul><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-macos-x-only" class="anchor" href="https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&amp;utm_medium=email&amp;utm_source=newsletter&amp;utm_term=weekly#macos-x-only" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1; background-color: transparent;"></a></h2>
### COOL One Liners
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">One-liners</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">A few examples of piecing together commands:</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">It is remarkably helpful sometimes that you can do set intersection, union, and difference of text files via&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sort

```

/<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">uniq

```

. Suppose&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">b

```

&#xA0;are text files that are already uniqued. This is fast, and works on files of arbitrary size, up to many gigabytes. (Sort is not limited by memory, though you may need to use the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-T

```

&#xA0;option if&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/tmp

```

&#xA0;is on a small root partition.) See also the note about<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">LC_ALL

```

&#xA0;above and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">sort

```

&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">-u

```

&#xA0;option (left out for clarity below).</li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      cat a b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> sort <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> uniq <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> c   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># c is a union b</span>
      cat a b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> sort <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> uniq -d <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> c   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># c is a intersect b</span>
      cat a b b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> sort <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> uniq -u <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> c   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># c is set difference a - b</span></pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">grep . *

```

&#xA0;to visually examine all contents of all files in a directory, e.g. for directories filled with config settings, like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/sys

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/proc

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">/etc

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Summing all numbers in the third column of a text file (this is probably 3X faster and 3X less code than equivalent Python):</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      awk <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>{ x += $3 } END { print x }<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> myfile</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">If want to see sizes/dates on a tree of files, this is like a recursive&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls -l

```

&#xA0;but is easier to read than<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls -lR

```

:</li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      find <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span> -type f -ls</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">Say you have a text file, like a web server log, and a certain value that appears on some lines, such as an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">acct_id

```

&#xA0;parameter that is present in the URL. If you want a tally of how many requests for each&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">acct_id

```

:</li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      cat access.log <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> egrep -o <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>acct_id=[0-9]+<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> cut -d= -f2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> sort <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> uniq -c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> sort -rn</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To continuously monitor changes, use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">watch

```

, e.g. check changes to files in a directory with<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">watch -d -n 2 &apos;ls -rtlh | tail&apos;

```

&#xA0;or to network settings while troubleshooting your wifi settings with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">watch -d -n 2 ifconfig

```

.</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Run this function to get a random tip from this document (parses Markdown and extracts an item):</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">taocl()</span> {
        curl -s https://raw.githubusercontent.com/jlevy/the-art-of-command-line/master/README.md <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span>
          pandoc -f markdown -t html <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span>
          xmlstarlet fo --html --dropdtd <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span>
          xmlstarlet sel -t -v <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>(html/body/ul/li[count(p)&gt;0])[<span class="pl-smi" style="box-sizing: border-box; color: rgb(51, 51, 51);">$RANDOM</span> mod last()+1]<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span>
          xmlstarlet unesc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> fmt -80
      }</pre></div>
### BASICS


<h1 style="box-sizing: border-box; margin-top: 14px; margin-bottom: 14px; padding: 0px; font-size: 44px; direction: ltr; font-family: &apos;Helvetica Neue&apos;, Helvetica, Helvetica, Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.1;">Learn Command Line the Hard way</h1><ul class="simple" style="box-sizing: border-box; margin-bottom: 17px; margin-left: 0px; direction: ltr; line-height: 1.6; list-style-position: outside; color: rgb(34, 34, 34); font-family: &apos;Helvetica Neue&apos;, Helvetica, Helvetica, Arial, sans-serif;"><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/preface.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Preface</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/introduction.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Introduction: Shut Up And Shell</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex1.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">The Setup</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex2.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Paths, Folders, Directories (pwd)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex3.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">What&apos;s Your Computer&apos;s Name? (hostname)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex4.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Make A Directory (mkdir)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex5.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Change Directory (cd)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex6.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">List Directory (ls)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex7.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Remove Directory (rmdir)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex8.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Moving Around (pushd, popd)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex9.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Making Empty Files (Touch, New-Item)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex10.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Copy A File (cp)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex11.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Moving A File (mv)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex12.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">View A File (less, MORE)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex13.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Stream A File (cat)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex14.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Removing A File (rm)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex15.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Pipes And Redirection</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex16.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Wildcard Matching</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex17.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Finding Files (find, DIR -R)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex18.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Looking Inside Files (grep, select-string)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex19.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Getting Command Help (man, HELP)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex20.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Finding Help (apropos, HELP)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex21.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">What&apos;s In Your Environment (env, echo, Env:)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex22.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Changing Environment Variables (export, Env:)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/ex23.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Exiting Your Terminal (exit)</a></li><li style="box-sizing: border-box; margin: 0px 0px 0px 20px; padding: 0px; direction: ltr;"><a class="reference external" href="http://cli.learncodethehardway.org/book/next.html" style="box-sizing: border-box; color: rgb(43, 166, 203); line-height: inherit;">Next Steps</a></li></ul>
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
      cat hosts <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span> xargs -I{} ssh root@{} hostname</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">pstree -p

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
      <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">trap</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>echo &apos;error: Script failed: see failed command above&apos;<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ERR</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">In Bash scripts, subshells (written with parentheses) are convenient ways to group commands. A common example is to temporarily move to a different working directory, e.g.</li></ul><div class="highlight highlight-bash" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># do something in current dir</span>
      (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">cd</span> /some/other/dir <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&amp;&amp;</span> other-command)
      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);"># continue in original dir</span></pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">In Bash, note there are lots of kinds of variable expansion. Checking a variable exists:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${name:?error message}

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

&#xA0;with a remote one:</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      diff /etc/hosts <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&lt;(</span>ssh somehost cat /etc/hosts<span class="pl-pds" style="box-sizing: border-box;">)</span></span></pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">Know about &quot;here documents&quot; in Bash, as in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cat &lt;&lt;EOF ...

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

</pre><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">A few other options relevant to ssh are security sensitive and should be enabled with care, e.g. per subnet or host or in trusted networks:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">StrictHostKeyChecking=no

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ForwardAgent=yes

```

</p></li><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">To get the permissions on a file in octal form, which is useful for system configuration but not available in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ls

```

&#xA0;and easy to bungle, use something like</p></li></ul><div class="highlight highlight-sh" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">      stat -c <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&apos;</span>%A %a %n<span class="pl-pds" style="box-sizing: border-box;">&apos;</span></span> /etc/timezone</pre></div><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For interactive selection of values from the output of another command, use&#xA0;<a href="https://github.com/mooz/percol" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">percol

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
# Pain Points
### What does xargs do? parallelism running multiple commands?
### How do I use variables
# Third Party
### Deal with git in a nice way
### https://github.com/facebook/PathPicker
### Document Converter
### http://pandoc.org/
### JSON Processor
### https://stedolan.github.io/jq/
### Excel/CSV 
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For Excel or CSV files,&#xA0;<a href="https://github.com/onyxfish/csvkit" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">csvkit</a>&#xA0;provides&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">in2csv

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">csvcut

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">csvjoin

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">csvgrep

```

, etc.</p></li><li style="box-sizing: border-box;"></li></ul>
### Amazon
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">For Amazon S3,&#xA0;<a href="https://github.com/s3tools/s3cmd" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">s3cmd

```

</a>&#xA0;is convenient and&#xA0;<a href="https://github.com/bloomreach/s4cmd" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">s4cmd

```

</a>&#xA0;is faster. Amazon&apos;s&#xA0;<a href="https://github.com/aws/aws-cli" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">aws

```

</a>&#xA0;is essential for other AWS-related tasks.</p></li></ul>
### https://nvbn.github.io/2015/10/08/how-thefuck-works/
### How the fuck
# Resources
### https://github.com/jlevy/the-art-of-command-line?utm_campaign=explore-email&utm_medium=email&utm_source=newsletter&utm_term=weekly
### the art of the command line
### http://cli.learncodethehardway.org/book/
### More resources
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">More resources</h2><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;"><a href="https://github.com/alebcay/awesome-shell" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">awesome-shell</a>: A curated list of shell tools and resources.</li><li style="box-sizing: border-box;"><a href="http://redsymbol.net/articles/unofficial-bash-strict-mode/" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">Strict mode</a>&#xA0;for writing better shell scripts.</li><li style="box-sizing: border-box;"><a href="https://github.com/koalaman/shellcheck" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">shellcheck</a>: A shell script static analysis tool. Essentially, lint for bash/sh/zsh.</li><li style="box-sizing: border-box;"><a href="http://www.dwheeler.com/essays/filenames-in-shell.html" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;">Filenames and Pathnames in Shell</a>: The sadly complex minutiae on how to handle filenames correctly in shell scripts.</li></ul>
# Shells
### https://en.wikipedia.org/wiki/Bash_(Unix_shell)
### Bash
### Zsh
