# resources
## https://en.wikipedia.org/wiki/Haskell_(programming_language)
## https://www.haskell.org/
### official
## https://en.wikibooks.org/wiki/Yet_Another_Haskell_Tutorial/Preamble
### wikibooks
## https://github.com/bitemyapp/learnhaskell
### github repo
# code examples
<p>Here is the&#xA0;<a href="https://en.wikipedia.org/wiki/Factorial" title="Factorial">factorial</a>&#xA0;function in Haskell, defined in a few different ways:</p><div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span class="c1">-- Type annotation (optional)</span>
<span class="nf">factorial</span> <span class="ow">::</span> <span class="p">(</span><span class="kt">Integral</span> <span class="n">a</span><span class="p">)</span> <span class="ow">=&gt;</span> <span class="n">a</span> <span class="ow">-&gt;</span> <span class="n">a</span>

<span class="c1">-- Using recursion</span>
<span class="nf">factorial</span> <span class="n">n</span> <span class="o">|</span> <span class="n">n</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="ow">=</span> <span class="mi">1</span>
<span class="nf">factorial</span> <span class="n">n</span> <span class="ow">=</span> <span class="n">n</span> <span class="o">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span>

<span class="c1">-- Using recursion, with guards</span>
<span class="nf">factorial</span> <span class="n">n</span>
  <span class="o">|</span> <span class="n">n</span> <span class="o">&lt;</span> <span class="mi">2</span>     <span class="ow">=</span> <span class="mi">1</span>
  <span class="o">|</span> <span class="n">otherwise</span> <span class="ow">=</span> <span class="n">n</span> <span class="o">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span>

<span class="c1">-- Using recursion but written without pattern matching</span>
<span class="nf">factorial</span> <span class="n">n</span> <span class="ow">=</span> <span class="kr">if</span> <span class="n">n</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="kr">then</span> <span class="n">n</span> <span class="o">*</span> <span class="n">factorial</span> <span class="p">(</span><span class="n">n</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="kr">else</span> <span class="mi">1</span>

<span class="c1">-- Using a list</span>
<span class="nf">factorial</span> <span class="n">n</span> <span class="ow">=</span> <span class="n">product</span> <span class="p">[</span><span class="mi">1</span><span class="o">..</span><span class="n">n</span><span class="p">]</span>

<span class="c1">-- Using fold (implements product)</span>
<span class="nf">factorial</span> <span class="n">n</span> <span class="ow">=</span> <span class="n">foldl</span> <span class="p">(</span><span class="o">*</span><span class="p">)</span> <span class="mi">1</span> <span class="p">[</span><span class="mi">1</span><span class="o">..</span><span class="n">n</span><span class="p">]</span>

<span class="c1">-- Point-free style</span>
<span class="nf">factorial</span> <span class="ow">=</span> <span class="n">foldr</span> <span class="p">(</span><span class="o">*</span><span class="p">)</span> <span class="mi">1</span> <span class="o">.</span> <span class="n">enumFromTo</span> <span class="mi">1</span></pre></div>
## Simple main
<pre class="de1">main <span class="sy0">::</span> <span class="kw4">IO</span> <span class="br0">(</span><span class="br0">)</span>
main <span class="sy0">=</span> <span class="kw1">do</span>
    <span class="kw3">putStrLn</span> <span class="st0">&quot;Enter two lines&quot;</span>
    line1 <span class="sy0">&lt;-</span> <span class="kw3">getLine</span>                                    <span class="co1">-- line1&#xA0;:: String</span>
    line2 <span class="sy0">&lt;-</span> <span class="kw3">getLine</span>                                    <span class="co1">-- line2&#xA0;:: String</span>
    <span class="kw3">putStrLn</span> <span class="br0">(</span><span class="st0">&quot;you said: &quot;</span> <span class="sy0">++</span> line1 <span class="sy0">++</span> <span class="st0">&quot; and &quot;</span> <span class="sy0">++</span> line2<span class="br0">)</span></pre>
## https://wiki.haskell.org/Learn_Haskell_in_10_minutes#Simple_expressions
### simple tutorial
# installation
## https://github.com/bitemyapp/learnhaskell/blob/master/install.md
# concepts
## strict but you don't have to specify sometimes?
<pre><span class="c1">-- Type annotation (optional)</span>
<span class="nf">factorial</span> <span class="ow">::</span> <span class="p">(</span><span class="kt">Integral</span> <span class="n">a</span><span class="p">)</span> <span class="ow">=&gt;</span> <span class="n">a</span> <span class="ow">-&gt;</span> <span class="n">a</span></pre>
## do you have to declare things twice?
## Pure
## Lazy
## Functional
## Patentheses not required
# tools
## GHC
### Compiler, REPL, 
### command to compile
#### % ghc --make Main.hs -o main
## Cabal
### Package Manager
