#Package Manager
#Cabal
#% ghc --make Main.hs -o main
#command to compile
#Compiler, REPL, 
#GHC
#tools
#concepts
#Patentheses not required
#Functional
#Lazy
#Pure
#do you have to declare things twice?
#strict but you don't have to specify sometimes?
<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; font-size: 14px; background-color: rgb(249, 249, 249);"><span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Type annotation (optional)
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">:: <span class="p">(<span class="kt" style="color: rgb(176, 0, 64);">Integral <span class="n">a<span class="p">) <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=> <span class="n">a <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">-> <span class="n">a</pre>
#github repo
#https://en.wikipedia.org/wiki/Haskell_(programming_language)
#https://www.haskell.org/
#official
#https://en.wikibooks.org/wiki/Yet_Another_Haskell_Tutorial/Preamble
#wikibooks
#https://github.com/bitemyapp/learnhaskell
#resources
#code examples
<p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">Here is the&nbsp;<a href="https://en.wikipedia.org/wiki/Factorial" title="Factorial" style="color: rgb(11, 0, 128); background: none;">factorial</a>&nbsp;function in Haskell, defined in a few different ways:<div class="mw-highlight mw-content-ltr" dir="ltr" style="direction: ltr; unicode-bidi: embed; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px; background: rgb(248, 248, 248);"><pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; background-color: rgb(249, 249, 249);"><span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Type annotation (optional)
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">:: <span class="p">(<span class="kt" style="color: rgb(176, 0, 64);">Integral <span class="n">a<span class="p">) <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=> <span class="n">a <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">-> <span class="n">a

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">| <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">< <span class="mi" style="color: rgb(102, 102, 102);">2 <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="mi" style="color: rgb(102, 102, 102);">1
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">* <span class="n">factorial <span class="p">(<span class="n">n <span class="o" style="color: rgb(102, 102, 102);">- <span class="mi" style="color: rgb(102, 102, 102);">1<span class="p">)

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion, with guards
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n
  <span class="o" style="color: rgb(102, 102, 102);">| <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">< <span class="mi" style="color: rgb(102, 102, 102);">2     <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="mi" style="color: rgb(102, 102, 102);">1
  <span class="o" style="color: rgb(102, 102, 102);">| <span class="n">otherwise <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">* <span class="n">factorial <span class="p">(<span class="n">n <span class="o" style="color: rgb(102, 102, 102);">- <span class="mi" style="color: rgb(102, 102, 102);">1<span class="p">)

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion but written without pattern matching
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">if <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">> <span class="mi" style="color: rgb(102, 102, 102);">0 <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">then <span class="n">n <span class="o" style="color: rgb(102, 102, 102);">* <span class="n">factorial <span class="p">(<span class="n">n<span class="o" style="color: rgb(102, 102, 102);">-<span class="mi" style="color: rgb(102, 102, 102);">1<span class="p">) <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">else <span class="mi" style="color: rgb(102, 102, 102);">1

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using a list
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="n">product <span class="p">[<span class="mi" style="color: rgb(102, 102, 102);">1<span class="o" style="color: rgb(102, 102, 102);">..<span class="n">n<span class="p">]

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using fold (implements product)
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="n">n <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="n">foldl <span class="p">(<span class="o" style="color: rgb(102, 102, 102);">*<span class="p">) <span class="mi" style="color: rgb(102, 102, 102);">1 <span class="p">[<span class="mi" style="color: rgb(102, 102, 102);">1<span class="o" style="color: rgb(102, 102, 102);">..<span class="n">n<span class="p">]

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Point-free style
<span class="nf" style="color: rgb(0, 0, 255);">factorial <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">= <span class="n">foldr <span class="p">(<span class="o" style="color: rgb(102, 102, 102);">*<span class="p">) <span class="mi" style="color: rgb(102, 102, 102);">1 <span class="o" style="color: rgb(102, 102, 102);">. <span class="n">enumFromTo <span class="mi" style="color: rgb(102, 102, 102);">1</pre>
#Simple main
<pre class="de1" style="margin-bottom: 0px; padding: 0px; font-family: monospace; line-height: 1.2em; overflow: auto; border: 0px none white; font-stretch: normal; font-size: medium; vertical-align: top; color: rgb(0, 0, 0); background: none rgb(255, 255, 255);">main <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">:: <span class="kw4" style="margin: 0px; padding: 0px; color: rgb(204, 204, 0); font-weight: bold;">IO <span class="br0" style="margin: 0px; padding: 0px; color: green;">(<span class="br0" style="margin: 0px; padding: 0px; color: green;">)
main <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">= <span class="kw1" style="margin: 0px; padding: 0px; font-weight: bold; color: rgb(0, 102, 204);">do
    <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">putStrLn <span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">"Enter two lines"
    line1 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;"><- <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">getLine                                    <span class="co1" style="margin: 0px; padding: 0px; color: rgb(93, 71, 139); font-style: italic;">-- line1&nbsp;:: String
    line2 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;"><- <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">getLine                                    <span class="co1" style="margin: 0px; padding: 0px; color: rgb(93, 71, 139); font-style: italic;">-- line2&nbsp;:: String
    <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">putStrLn <span class="br0" style="margin: 0px; padding: 0px; color: green;">(<span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">"you said: " <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++ line1 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++ <span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">" and " <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++ line2<span class="br0" style="margin: 0px; padding: 0px; color: green;">)</pre>
#https://wiki.haskell.org/Learn_Haskell_in_10_minutes#Simple_expressions
#simple tutorial
#https://github.com/bitemyapp/learnhaskell/blob/master/install.md
#installation
