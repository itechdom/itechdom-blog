# Good Vimrc
### http://dougblack.io/words/a-good-vimrc.html
# Conventions
### < >
### Control whatever is in between
### Word vs word
WORD: is a whole word till a comma or any other separator

<div>word: is words till a space</div>
# Plugins
### Surround
### http://vimawesome.com/plugin/surround-vim
### ysiw" to surround with " till the next notation
### Easy Motion
### https://github.com/easymotion/vim-easymotion
### Vimproc
### https://github.com/Shougo/vimproc.vim
### execute commands in Vim
# Vim Commands
### Cheat sheet
### http://www.fprintf.net/vimCheatSheet.html
### http://www.viemu.com/vi-vim-cheat-sheet.gif
### the dot here means there's extra stuff
### Search for a code in the whole project
### https://lostechies.com/derickbailey/2010/05/11/vim-grep-find-all-occurrences-of-text-in-your-project/
### :vimgrep /code_snippet/gj ./**/*.rb
### Then type :cw
### Shortcuts
### C
### remove everything till you hit the end of the line
### R
### Replace Mode
### X
### Backspace
### Q
### Ex Macro
### q
### Macro
### http://vim.wikia.com/wiki/Macros
### Each register is identified by a letter a to z.
### q
### then
### d
### then
### series of commands
### q to stop
### @q
### to executre
### @@ to execute again
### use case
### you want to transform this data
<div>Given some data like the following:</div>

<div>one <span class="Apple-tab-span" style="white-space:pre"> <span style="white-space: normal;"></span> </span>first example</div>

<div>two<span class="Apple-tab-span" style="white-space:pre"> <span style="white-space: normal;"></span> </span> second example</div>

<div>three<span class="Apple-tab-span" style="white-space:pre"> <span style="white-space: normal;"></span> </span> third example</div>

<div>four <span class="Apple-tab-span" style="white-space:pre"> <span style="white-space: normal;"></span> </span>fourth example</div>

<div>suppose you want to change the data to make a dictionary for a Python program, with this result:</div>

<div>data = {</div>

<div>    'one': 'first example',</div>

<div>    'two': 'second example',</div>

<div>    'three': 'third example',</div>

<div>    'four': 'fourth example',</div>

<div>}</div>

<div>

<div>To do this, record a macro while changing the first line. Then, playback the macro to change each other line. When finished, manually insert the initial "data = {" line, and the final "}" line.</div>

<div>The following shows one way to record a suitable macro.</div>

<div>Put the cursor on the first line.</div>

<div>Type qd (the q starts recording; the d is the register where keys will be recorded).</div>

<div>Type the following command to change the first sequence of whitespace to "': '":</div>

<div>:s/\s\+/': ' (then press Enter)</div>

<div>Type the following to insert four spaces followed by "'" at the start of the line:</div>

<div>I    ' (then press Escape)</div>

<div>Type the following to append "'," to the line:</div>

<div>A', (then press Escape)</div>

<div>Type the following to move the cursor to the start of the line, then down to the next line:</div>

<div>0j</div>

<div>Type q to stop recording the macro.</div>

<div>The cursor should now be on the second line. Type @d to playback the macro once. That should change the second line, with the cursor finishing on the third line. Type 2@@ to finish. The 2 means that what follows is performed twice, and the @@ plays back the last used macro. Instead of 2@@, you could type @d or @@ twice.</div>

</div>
### a nice mapping
<div>Running a macroEdit</div>

<div>Use this mapping as a convenient way to play a macro recorded to register q:</div>

<div>:nnoremap <Space> @q</div>

<div>Start recording keystrokes by typing qq.</div>

<div>End recording with q (first press Escape if you are in insert mode).</div>

<div>Play the recorded keystrokes by hitting space.</div>

<div>Suppose you have a macro which operates on the text in a single line. You can run the macro on each line in a visual selection in a single operation:</div>

<div>Visually select some lines (for example, type vip to select the current paragraph).</div>

<div>Type :normal @q to run the macro from register q on each line.</div>
### I stopped at saving a macro
### >>
### indent line
### ~
### toggle case, upper and lower
### #
### this will locate all the words within the file
### $
### End of line
### %
### matches braces , patentheses
### * 
### next matching
### O
### insert a line above
### P
### paste before
### a
### append after a chatacter
### A
### append at the end of a line
### s
### remove char & insert
### S
### remove line and insert mode
### .
### repeat command
### so If i indented the line once I can just type it and it will repeat
### %s
### replace
# Pain Points
### !
### I dunno
### |
### t
### f
### m
