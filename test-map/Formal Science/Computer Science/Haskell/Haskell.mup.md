#resources
#https://en.wikipedia.org/wiki/Haskell_(programming_language)
#https://www.haskell.org/
#official
#https://en.wikibooks.org/wiki/Yet_Another_Haskell_Tutorial/Preamble
#wikibooks
#https://github.com/bitemyapp/learnhaskell
#github repo
#code examples
<p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 22.3999996185303px; color: rgb(37, 37, 37); font-family: sans-serif;">Here is the&nbsp;<a href="https://en.wikipedia.org/wiki/Factorial" title="Factorial" style="color: rgb(11, 0, 128); background: none;">factorial</a>&nbsp;function in Haskell, defined in a few different ways:</p><div class="mw-highlight mw-content-ltr" dir="ltr" style="direction: ltr; unicode-bidi: embed; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px; background: rgb(248, 248, 248);"><pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; background-color: rgb(249, 249, 249);"><span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Type annotation (optional)</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">::</span> <span class="p">(</span><span class="kt" style="color: rgb(176, 0, 64);">Integral</span> <span class="n">a</span><span class="p">)</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=&gt;</span> <span class="n">a</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">-&gt;</span> <span class="n">a</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">|</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">&lt;</span> <span class="mi" style="color: rgb(102, 102, 102);">2</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">-</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span><span class="p">)</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion, with guards</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span>
  <span class="o" style="color: rgb(102, 102, 102);">|</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">&lt;</span> <span class="mi" style="color: rgb(102, 102, 102);">2</span>     <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span>
  <span class="o" style="color: rgb(102, 102, 102);">|</span> <span class="n">otherwise</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">-</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span><span class="p">)</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using recursion but written without pattern matching</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">if</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">&gt;</span> <span class="mi" style="color: rgb(102, 102, 102);">0</span> <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">then</span> <span class="n">n</span> <span class="o" style="color: rgb(102, 102, 102);">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span><span class="o" style="color: rgb(102, 102, 102);">-</span><span class="mi" style="color: rgb(102, 102, 102);">1</span><span class="p">)</span> <span class="kr" style="color: rgb(0, 128, 0); font-weight: bold;">else</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using a list</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="n">product</span> <span class="p">[</span><span class="mi" style="color: rgb(102, 102, 102);">1</span><span class="o" style="color: rgb(102, 102, 102);">..</span><span class="n">n</span><span class="p">]</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Using fold (implements product)</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="n">n</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="n">foldl</span> <span class="p">(</span><span class="o" style="color: rgb(102, 102, 102);">*</span><span class="p">)</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span> <span class="p">[</span><span class="mi" style="color: rgb(102, 102, 102);">1</span><span class="o" style="color: rgb(102, 102, 102);">..</span><span class="n">n</span><span class="p">]</span>

<span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Point-free style</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=</span> <span class="n">foldr</span> <span class="p">(</span><span class="o" style="color: rgb(102, 102, 102);">*</span><span class="p">)</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span> <span class="o" style="color: rgb(102, 102, 102);">.</span> <span class="n">enumFromTo</span> <span class="mi" style="color: rgb(102, 102, 102);">1</span></pre></div>
#Simple main
<pre class="de1" style="margin-bottom: 0px; padding: 0px; font-family: monospace; line-height: 1.2em; overflow: auto; border: 0px none white; font-stretch: normal; font-size: medium; vertical-align: top; color: rgb(0, 0, 0); background: none rgb(255, 255, 255);">main <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">::</span> <span class="kw4" style="margin: 0px; padding: 0px; color: rgb(204, 204, 0); font-weight: bold;">IO</span> <span class="br0" style="margin: 0px; padding: 0px; color: green;">(</span><span class="br0" style="margin: 0px; padding: 0px; color: green;">)</span>
main <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">=</span> <span class="kw1" style="margin: 0px; padding: 0px; font-weight: bold; color: rgb(0, 102, 204);">do</span>
    <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">putStrLn</span> <span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">"Enter two lines"</span>
    line1 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">&lt;-</span> <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">getLine</span>                                    <span class="co1" style="margin: 0px; padding: 0px; color: rgb(93, 71, 139); font-style: italic;">-- line1&nbsp;:: String</span>
    line2 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">&lt;-</span> <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">getLine</span>                                    <span class="co1" style="margin: 0px; padding: 0px; color: rgb(93, 71, 139); font-style: italic;">-- line2&nbsp;:: String</span>
    <span class="kw3" style="margin: 0px; padding: 0px; color: rgb(85, 68, 136) !important; font-weight: bold;">putStrLn</span> <span class="br0" style="margin: 0px; padding: 0px; color: green;">(</span><span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">"you said: "</span> <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++</span> line1 <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++</span> <span class="st0" style="margin: 0px; padding: 0px; color: rgb(221, 17, 68) !important; background-image: initial !important; background-attachment: initial !important; background-color: rgb(60, 179, 113); background-size: initial !important; background-origin: initial !important; background-clip: initial !important; background-position: initial !important; background-repeat: initial !important;">" and "</span> <span class="sy0" style="margin: 0px; padding: 0px; color: rgb(51, 153, 51); font-weight: bold;">++</span> line2<span class="br0" style="margin: 0px; padding: 0px; color: green;">)</span></pre>
#https://wiki.haskell.org/Learn_Haskell_in_10_minutes#Simple_expressions
#simple tutorial
#installation
#https://github.com/bitemyapp/learnhaskell/blob/master/install.md
#concepts
#strict but you don't have to specify sometimes?
<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; font-size: 14px; background-color: rgb(249, 249, 249);"><span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">-- Type annotation (optional)</span>
<span class="nf" style="color: rgb(0, 0, 255);">factorial</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">::</span> <span class="p">(</span><span class="kt" style="color: rgb(176, 0, 64);">Integral</span> <span class="n">a</span><span class="p">)</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">=&gt;</span> <span class="n">a</span> <span class="ow" style="color: rgb(170, 34, 255); font-weight: bold;">-&gt;</span> <span class="n">a</span></pre>
#do you have to declare things twice?
#Pure
#Lazy
#Functional
#Patentheses not required
#tools
#GHC
#Compiler, REPL, 
#command to compile
#% ghc --make Main.hs -o main
#Cabal
#Package Manager
