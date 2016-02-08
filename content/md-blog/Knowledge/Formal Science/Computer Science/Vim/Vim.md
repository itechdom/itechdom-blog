# Good Vimrc
### http://dougblack.io/words/a-good-vimrc.html
# Conventions
### < >
### Control whatever is in between
### Word vs word
WORD: is a whole word till a comma or any other separator
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

### a nice mapping

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
