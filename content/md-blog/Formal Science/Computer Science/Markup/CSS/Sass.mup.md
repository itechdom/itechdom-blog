# Variables
<h2>Variables</h2><p>Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you&apos;ll want to reuse. Sass uses the&#xA0;<code>$</code>&#xA0;symbol to make something a variable. Here&apos;s an example:</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-2-SCSS" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-2-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-2-Sass" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-2-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">Sass</a></li></ul><div id="topic-2-SCSS" aria-labelledby="ui-id-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="nv">$font-stack</span><span class="p">:</span>    <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="nv">$primary-color</span><span class="p">:</span> <span class="mh">#333</span><span class="p">;</span>

<span class="nt">body</span> <span class="p">{</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="nv">$font-stack</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nv">$primary-color</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div><p>When the Sass is processed, it takes the variables we define for the&#xA0;<code>$font-stack</code>and&#xA0;<code>$primary-color</code>&#xA0;and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the&#xA0;site.</p><pre class="highlight css"><code><span class="nt">body</span> <span class="p">{</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="m">#333</span><span class="p">;</span>
<span class="p">}</span>
</code></pre><div><code><span class="p"><br></span></code></div>
# Imports
<h2>Import</h2><p>CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use&#xA0;<code>@import</code>&#xA0;in CSS it creates another HTTP request. Sass builds on top of the current CSS&#xA0;<code>@import</code>but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you&apos;re importing into so you can serve a single CSS file to the web browser.</p><p>Let&apos;s say you have a couple of Sass files,&#xA0;<code>_reset.scss</code>&#xA0;and&#xA0;<code>base.scss</code>. We want to import&#xA0;<code>_reset.scss</code>&#xA0;into&#xA0;<code>base.scss</code>.</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-5-SCSS" aria-labelledby="ui-id-5" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-5-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-5">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-5-Sass" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-5-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-6">Sass</a></li></ul><div id="topic-5-SCSS" aria-labelledby="ui-id-5" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="c1">// _reset.scss
</span>
<span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span><span class="o">,</span>
<span class="nt">ul</span><span class="o">,</span>
<span class="nt">ol</span> <span class="p">{</span>
   <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">}</span>
</code></pre><pre class="highlight scss"><code><span class="c1">// base.scss
</span>
<span class="k">@import</span> <span class="s1">&apos;reset&apos;</span><span class="p">;</span>

<span class="nt">body</span> <span class="p">{</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="mh">#efefef</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div><p>Notice we&apos;re using&#xA0;<code>@import &apos;reset&apos;;</code>&#xA0;in the&#xA0;<code>base.scss</code>&#xA0;file. When you import a file you don&apos;t need to include the file extension&#xA0;<code>.scss</code>. Sass is smart and will figure it out for you. When you generate the CSS you&apos;ll&#xA0;get:</p><pre class="highlight css"><code><span class="nt">html</span><span class="o">,</span> <span class="nt">body</span><span class="o">,</span> <span class="nt">ul</span><span class="o">,</span> <span class="nt">ol</span> <span class="p">{</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">body</span> <span class="p">{</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="m">#efefef</span><span class="p">;</span>
<span class="p">}</span></code></pre>
## Css lets you do it, but it will do a separate HTTP request each time
# Nesting
<h2>Nesting</h2><p>When writing HTML you&apos;ve probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn&apos;t.</p><p>Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.</p><p>With that in mind, here&apos;s an example of some typical styles for a site&apos;s&#xA0;navigation:</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-3-SCSS" aria-labelledby="ui-id-3" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-3-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-3">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-3-Sass" aria-labelledby="ui-id-4" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-3-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-4">Sass</a></li></ul><div id="topic-3-SCSS" aria-labelledby="ui-id-3" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="nt">nav</span> <span class="p">{</span>
  <span class="nt">ul</span> <span class="p">{</span>
    <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
    <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
    <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="p">}</span>

  <span class="nt">li</span> <span class="p">{</span> <span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span><span class="p">;</span> <span class="p">}</span>

  <span class="nt">a</span> <span class="p">{</span>
    <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
    <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span> <span class="m">12px</span><span class="p">;</span>
    <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="p">}</span>
<span class="p">}</span>
</code></pre></div><p>You&apos;ll notice that the&#xA0;<code>ul</code>,&#xA0;<code>li</code>, and&#xA0;<code>a</code>&#xA0;selectors are nested inside the&#xA0;<code>nav</code>&#xA0;selector. This is a great way to organize your CSS and make it more readable. When you generate the CSS you&apos;ll get something like&#xA0;this:</p><pre class="highlight css"><code><span class="nt">nav</span> <span class="nt">ul</span> <span class="p">{</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">nav</span> <span class="nt">li</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">nav</span> <span class="nt">a</span> <span class="p">{</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span> <span class="m">12px</span><span class="p">;</span>
  <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">}</span></code></pre>
# Operators
<ul class="slides"><li id="topic-8" class="ui-tabs ui-widget ui-widget-content ui-corner-all"><h2>Operators</h2><p>Doing math in your CSS is very helpful. Sass has a handful of standard math operators like&#xA0;<code>+</code>,&#xA0;<code>-</code>,&#xA0;<code>*</code>,&#xA0;<code>/</code>, and&#xA0;<code>%</code>. In our example we&apos;re going to do some simple math to calculate widths for an&#xA0;<code>aside</code>&#xA0;&amp;&#xA0;<code>article</code>.</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-8-SCSS" aria-labelledby="ui-id-11" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-8-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-11">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-8-Sass" aria-labelledby="ui-id-12" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-8-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-12">Sass</a></li></ul><div id="topic-8-SCSS" aria-labelledby="ui-id-11" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="nc">.container</span> <span class="p">{</span> <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span> <span class="p">}</span>

<span class="nt">article</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">&quot;main&quot;</span><span class="o">]</span> <span class="p">{</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">600px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">aside</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">&quot;complimentary&quot;</span><span class="o">]</span> <span class="p">{</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div><p>We&apos;ve created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them to percentages without much hassle. The generated CSS will look like:</p><pre class="highlight css"><code><span class="nc">.container</span> <span class="p">{</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">article</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="err">&quot;</span><span class="nt">main</span><span class="err">&quot;</span><span class="o">]</span> <span class="p">{</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">62.5%</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">aside</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="err">&quot;</span><span class="nt">complimentary</span><span class="err">&quot;</span><span class="o">]</span> <span class="p">{</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">31.25%</span><span class="p">;</span>
<span class="p">}</span></code></pre></li></ul>
# Thrid Party
## http://ianlunn.github.io/Hover/
### Hovers for sass
## https://github.com/thoughtbot/bourbon
### Toolset by thoughtbot
## https://github.com/csswizardry/inuit.css
### Sass Framework
## http://susy.oddbird.net/
### Grid system on Demand
## https://github.com/alexwolfe/Buttons
### Buttons
## https://github.com/mrmrs/colors
### Smaller defaults for colors
# Partials
<h2>Partials</h2><p>You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is simply a Sass file named with a leading underscore. You might name it something like&#xA0;<code>_partial.scss</code>. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the&#xA0;<code>@import</code>&#xA0;directive.</p>
# Mixins
<h2>Mixins</h2><p>Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here&apos;s an example for&#xA0;<code>border-radius</code></p><p>.</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-6-SCSS" aria-labelledby="ui-id-7" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-6-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-7">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-6-Sass" aria-labelledby="ui-id-8" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-6-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-8">Sass</a></li></ul><div id="topic-6-SCSS" aria-labelledby="ui-id-7" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="k">@mixin</span> <span class="nf">border-radius</span><span class="p">(</span><span class="nv">$radius</span><span class="p">)</span> <span class="p">{</span>
  <span class="na">-webkit-border-radius</span><span class="p">:</span> <span class="nv">$radius</span><span class="p">;</span>
     <span class="na">-moz-border-radius</span><span class="p">:</span> <span class="nv">$radius</span><span class="p">;</span>
      <span class="na">-ms-border-radius</span><span class="p">:</span> <span class="nv">$radius</span><span class="p">;</span>
          <span class="nl">border-radius</span><span class="p">:</span> <span class="nv">$radius</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.box</span> <span class="p">{</span> <span class="k">@include</span> <span class="nd">border-radius</span><span class="p">(</span><span class="m">10px</span><span class="p">);</span> <span class="p">}</span>
</code></pre></div><p>To create a mixin you use the&#xA0;<code>@mixin</code>&#xA0;directive and give it a name. We&apos;ve named our mixin&#xA0;<code>border-radius</code>. We&apos;re also using the variable&#xA0;<code>$radius</code>&#xA0;inside the parentheses so we can pass in a radius of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with&#xA0;<code>@include</code>&#xA0;followed by the name of the mixin. When your CSS is generated it&apos;ll look like this:</p><pre class="highlight css"><code><span class="nc">.box</span> <span class="p">{</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">-ms-border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
<span class="p">}</span>
</code></pre><div><code><span class="p"><br></span></code></div>
## functions
# Extend/Inheritance
<h2>Extend/Inheritance</h2><p>This is one of the most useful features of Sass. Using&#xA0;<code>@extend</code>&#xA0;lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. In our example we&apos;re going to create a simple series of messaging for errors, warnings and successes.</p><ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist"><li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="topic-7-SCSS" aria-labelledby="ui-id-9" aria-selected="true" aria-expanded="true"><a href="http://sass-lang.com/guide#topic-7-SCSS" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-9">SCSS</a></li><li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="topic-7-Sass" aria-labelledby="ui-id-10" aria-selected="false" aria-expanded="false"><a href="http://sass-lang.com/guide#topic-7-Sass" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-10">Sass</a></li></ul><div id="topic-7-SCSS" aria-labelledby="ui-id-9" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false"><h3>SCSS SYNTAX</h3><pre class="highlight scss"><code><span class="nc">.message</span> <span class="p">{</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="mh">#ccc</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="mh">#333</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.success</span> <span class="p">{</span>
  <span class="k">@extend</span> <span class="nc">.message</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">green</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.error</span> <span class="p">{</span>
  <span class="k">@extend</span> <span class="nc">.message</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">red</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.warning</span> <span class="p">{</span>
  <span class="k">@extend</span> <span class="nc">.message</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">yellow</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div><p>What the above code does is allow you to take the CSS properties in&#xA0;<code>.message</code>&#xA0;and apply them to&#xA0;<code>.success</code>,&#xA0;<code>.error</code>, &amp;&#xA0;<code>.warning</code>. The magic happens with the generated CSS, and this helps you avoid having to write multiple class names on HTML elements. This is what it looks&#xA0;like:</p><pre class="highlight css"><code><span class="nc">.message</span><span class="o">,</span> <span class="nc">.success</span><span class="o">,</span> <span class="nc">.error</span><span class="o">,</span> <span class="nc">.warning</span> <span class="p">{</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="m">#cccccc</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="m">#333</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.success</span> <span class="p">{</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">green</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.error</span> <span class="p">{</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">red</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.warning</span> <span class="p">{</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="no">yellow</span><span class="p">;</span>
<span class="p">}</span></code></pre>
## Include some selector within another
# Sass Vs. Less
## https://css-tricks.com/sass-vs-less/
# Principles
## http://bradfrost.com/blog/post/atomic-web-design/
### Atomic Design
## http://demo.patternlab.io/
### Pattern lab
