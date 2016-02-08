# Concepts
### Active voice
### Tasia wrote this
### my tips and my experience
### Educational Voice
### 500 - 700 words
### features
### Spread && Rest
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">A really convinient feature. Specially when creating functions.</h2><div><br></div><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Spread/Rest</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">ES6 introduces a new&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;operator that&apos;s typically referred to as the&#xA0;<em style="box-sizing: border-box;">spread</em>&#xA0;or&#xA0;<em style="box-sizing: border-box;">rest</em>&#xA0;operator, depending on where/how it&apos;s used. Let&apos;s take a look:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>,<span class="pl-smi" style="box-sizing: border-box;">z</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( ...[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>] );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">When&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;is used in front of an array (actually, any&#xA0;<em style="box-sizing: border-box;">iterable</em>, which we cover in Chapter 3), it acts to &quot;spread&quot; it out into its individual values.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You&apos;ll typically see that usage as is shown in that previous snippet, when spreading out an array as a set of arguments to a function call. In this usage,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;acts to give us a simpler syntactic replacement for the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">apply(..)

```

&#xA0;method, which we would typically have used pre-ES6 as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">foo.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">apply</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>] );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;can be used to spread out/expand a value in other contexts as well, such as inside another array declaration:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In this usage,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;is basically replacing&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">concat(..)

```

, as it behaves like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[1].concat( a, [5] )

```

&#xA0;here.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The other common usage of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;can be seen as essentially the opposite; instead of spreading a value out, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

<em style="box-sizing: border-box;">gathers</em>&#xA0;a set of values together into an array. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 [3,4,5]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...z

```

&#xA0;in this snippet is essentially saying: &quot;gather the&#xA0;<em style="box-sizing: border-box;">rest</em>&#xA0;of the arguments (if any) into an array called&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

.&quot; Because<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;was assigned&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">1

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;was assigned&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">2

```

, the rest of the arguments&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">3

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">4

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">5

```

&#xA0;were gathered into&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Of course, if you don&apos;t have any named parameters, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;gathers all arguments:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(...<span class="pl-smi" style="box-sizing: border-box;">args</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( args );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>);            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...args

```

&#xA0;in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(..)

```

&#xA0;function declaration is usually called &quot;rest parameters,&quot; because you&apos;re collecting the rest of the parameters. I prefer &quot;gather,&quot; because it&apos;s more descriptive of what it does rather than what it contains.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The best part about this usage is that it provides a very solid alternative to using the long-since-deprecated&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

array -- actually, it&apos;s not really an array, but an array-like object. Because&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">args

```

&#xA0;(or whatever you call it -- a lot of people prefer&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">r

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">rest

```

) is a real array, we can get rid of lots of silly pre-ES6 tricks we jumped through to make&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

into something we can treat as an array.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// doing things the new ES6 way</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(...<span class="pl-smi" style="box-sizing: border-box;">args</span>) {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// `args` is already a real array</span>

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// discard first element in `args`</span>
    args.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">shift</span>();

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// pass along all of `args` as arguments</span>
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to `console.log(..)`</span>
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">args</span> );
}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// doing things the old-school pre-ES6 way</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// turn `arguments` into a real array</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> args <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Array</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">prototype</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">slice</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">call</span>( arguments );

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// add some elements on the end</span>
    args.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">push</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// filter out odd numbers</span>
    args <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> args.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">filter</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">v</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">%</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>;
    } );

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// pass along all of `args` as arguments</span>
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to `foo(..)`</span>
    foo.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">apply</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, args );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 4</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...args

```

&#xA0;in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(..)

```

&#xA0;function declaration gathers arguments, and the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...args

```

&#xA0;in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">console.log(..)

```

&#xA0;call spreads them out. That&apos;s a good illustration of the symmetric but opposite uses of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;operator.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Besides the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;usage in a function declaration, there&apos;s another case where&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;is used for gathering values, and we&apos;ll look at it in the &quot;Too Many, Too Few, Just Enough&quot; section later in this chapter.</p>
### Default Parameters
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Default Parameter Values</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Perhaps one of the most common idioms in JavaScript relates to setting a default value for a function parameter. The way we&apos;ve done this for years should look quite familiar:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 11</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Of course, if you&apos;ve used this pattern before, you know that it&apos;s both helpful and a little bit dangerous, if for example you need to be able to pass in what would otherwise be considered a falsy value for one of the parameters. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 53 &lt;-- Oops, not 42</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Why? Because the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">0

```

&#xA0;is falsy, and so the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x || 11

```

&#xA0;results in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">11

```

, not the directly passed in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">0

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">To fix this gotcha, some people will instead write the check more verbosely like this:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Of course, that means that any value except&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;can be directly passed in. However,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;will be assumed to signal, &quot;I didn&apos;t pass this in.&quot; That works great unless you actually need to be able to pass&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;in.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In that case, you could test to see if the argument is actually omitted, by it actually not being present in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

array, perhaps like this:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> arguments) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> arguments) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// NaN</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But how would you omit the first&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;argument without the ability to pass in any kind of value (not even&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

) that signals &quot;I&apos;m omitting this argument&quot;?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(,5)

```

&#xA0;is tempting, but it&apos;s invalid syntax.&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo.apply(null,[,5])

```

&#xA0;seems like it should do the trick, but&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">apply(..)

```

&apos;s quirks here mean that the arguments are treated as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[undefined,5]

```

, which of course doesn&apos;t omit.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If you investigate further, you&apos;ll find you can only omit arguments on the end (i.e., righthand side) by simply passing fewer arguments than &quot;expected,&quot; but you cannot omit arguments in the middle or at the beginning of the arguments list. It&apos;s just not possible.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There&apos;s a principle applied to JavaScript&apos;s design here that is important to remember:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;means&#xA0;<em style="box-sizing: border-box;">missing</em>. That is, there&apos;s no difference between&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;and&#xA0;<em style="box-sizing: border-box;">missing</em>, at least as far as function arguments go.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;There are, confusingly, other places in JS where this particular design principle doesn&apos;t apply, such as for arrays with empty slots. See the&#xA0;<em style="box-sizing: border-box;">Types &amp; Grammar</em>&#xA0;title of this series for more information.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">With all this in mind, we can now examine a nice helpful syntax added as of ES6 to streamline the assignment of default values to missing arguments:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 11</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36 &lt;-- `undefined` is missing</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 5  &lt;-- null coerces to `0`</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17 &lt;-- `undefined` is missing</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 6  &lt;-- null coerces to `0`</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Notice the results and how they imply both subtle differences and similarities to the earlier approaches.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x = 11

```

&#xA0;in a function declaration is more like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x !== undefined ? x : 11

```

&#xA0;than the much more common idiom&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x || 11

```

, so you&apos;ll need to be careful in converting your pre-ES6 code to this ES6 default parameter value syntax.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;A rest/gather parameter (see &quot;Spread/Rest&quot;) cannot have a default value. So, while&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function foo(...vals=[1,2,3]) {

```

&#xA0;might seem an intriguing capability, it&apos;s not valid syntax. You&apos;ll need to continue to apply that sort of logic manually if necessary.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-default-value-expressions" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#default-value-expressions" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Default Value Expressions</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Function default values can be more than just simple values like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">31

```

; they can be any valid expression, even a function call:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>(<span class="pl-smi" style="box-sizing: border-box;">val</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>bar called!<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> val;
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">y</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">bar</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> )) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, z );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>;
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;bar called&quot;</span>
                                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 8 13</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;bar called&quot;</span>
                                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 15</span>
y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>;
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 9 10</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">As you can see, the default value expressions are lazily evaluated, meaning they&apos;re only run if and when they&apos;re needed -- that is, when a parameter&apos;s argument is omitted or is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">It&apos;s a subtle detail, but the formal parameters in a function declaration are in their own scope (think of it as a scope bubble wrapped around just the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">( .. )

```

&#xA0;of the function declaration), not in the function body&apos;s scope. That means a reference to an identifier in a default value expression first matches the formal parameters&apos; scope before looking to an outer scope. See the&#xA0;<em style="box-sizing: border-box;">Scope &amp; Closures</em>&#xA0;title of this series for more information.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> w <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">w</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">x</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">z</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ReferenceError</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

&#xA0;in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w + 1

```

&#xA0;default value expression looks for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

&#xA0;in the formal parameters&apos; scope, but does not find it, so the outer scope&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

&#xA0;is used. Next, The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x + 1

```

&#xA0;default value expression finds&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;in the formal parameters&apos; scope, and luckily&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;has already been initialized, so the assignment to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;works fine.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">However, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

&#xA0;in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z + 1

```

&#xA0;finds&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

&#xA0;as a not-yet-initialized-at-that-moment parameter variable, so it never tries to find the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

&#xA0;from the outer scope.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">As we mentioned in the &quot;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">let

```

&#xA0;Declarations&quot; section earlier in this chapter, ES6 has a TDZ, which prevents a variable from being accessed in its uninitialized state. As such, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z + 1

```

&#xA0;default value expression throws a TDZ<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ReferenceError

```

&#xA0;error.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Though it&apos;s not necessarily a good idea for code clarity, a default value expression can even be an inline function expression call -- commonly referred to as an immediately invoked function expression (IIFE):</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
    (<span class="pl-smi" style="box-sizing: border-box;">function</span>(<span class="pl-smi" style="box-sizing: border-box;">v</span>){ <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>; })( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span> )
) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There will very rarely be any cases where an IIFE (or any other executed inline function expression) will be appropriate for default value expressions. If you find yourself tempted to do this, take a step back and reevaluate!</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;If the IIFE had tried to access the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;identifier and had not declared its own&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

, this would also have been a TDZ error, just as discussed before.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The default value expression in the previous snippet is an IIFE in that in the sense that it&apos;s a function that&apos;s executed right inline, via&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">(31)

```

. If we had left that part off, the default value assigned to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;would have just been a function reference itself, perhaps like a default callback. There will probably be cases where that pattern will be quite useful, such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">ajax</span>(<span class="pl-smi" style="box-sizing: border-box;">url</span>, <span class="pl-smi" style="box-sizing: border-box;">cb</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">function</span>(){}) {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">ajax</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>http://some.url.1<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In this case, we essentially want to default&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cb

```

&#xA0;to be a no-op empty function call if not otherwise specified. The function expression is just a function reference, not a function call itself (no invoking&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">()

```

&#xA0;on the end of it), which accomplishes that goal.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Since the early days of JS, there&apos;s been a little-known but useful quirk available to us:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Function.prototype

```

&#xA0;is itself an empty no-op function. So, the declaration could have been&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">cb = Function.prototype

```

&#xA0;and saved the inline function expression creation.</p>
### Destructuring
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Destructuring</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">ES6 introduces a new syntactic feature called&#xA0;<em style="box-sizing: border-box;">destructuring</em>, which may be a little less confusing if you instead think of it as&#xA0;<em style="box-sizing: border-box;">structured assignment</em>. To understand this meaning, consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> tmp <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>(),
    a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>], c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">As you can see, we created a manual assignment of the values in the array that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo()

```

&#xA0;returns to individual variables&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">b

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">c

```

, and to do so we (unfortunately) needed the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmp

```

&#xA0;variable.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Similarly, we can do the following with objects:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> {
        x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,
        y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>,
        z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>
    };
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> tmp <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>(),
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmp.x

```

&#xA0;property value is assigned to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;variable, and likewise for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmp.y

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmp.z

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Manually assigning indexed values from an array or properties from an object can be thought of as&#xA0;<em style="box-sizing: border-box;">structured assignment</em>. ES6 adds a dedicated syntax for&#xA0;<em style="box-sizing: border-box;">destructuring</em>, specifically&#xA0;<em style="box-sizing: border-box;">array destructuring</em>&#xA0;and&#xA0;<em style="box-sizing: border-box;">object destructuring</em>. This syntax eliminates the need for the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tmp

```

&#xA0;variable in the previous snippets, making them much cleaner. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a, b, c ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You&apos;re likely more accustomed to seeing syntax like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[a,b,c]

```

&#xA0;on the righthand side of an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=

```

&#xA0;assignment, as the value being assigned.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Destructuring symmetrically flips that pattern, so that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[a,b,c]

```

&#xA0;on the lefthand side of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=

```

&#xA0;assignment is treated as a kind of &quot;pattern&quot; for decomposing the righthand side array value into separate variable assignments.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Similarly,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x: x, y: y, z: z }

```

&#xA0;specifies a &quot;pattern&quot; to decompose the object value from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bar()

```

&#xA0;into separate variable assignments.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-object-property-assignment-pattern" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#object-property-assignment-pattern" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Object Property Assignment Pattern</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s dig into that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x: x, .. }

```

&#xA0;syntax from the previous snippet. If the property name being matched is the same as the variable you want to declare, you can actually shorten the syntax:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, y, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Pretty cool, right?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x, .. }

```

&#xA0;leaving off the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x:

```

&#xA0;part or leaving off the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">: x

```

&#xA0;part? We&apos;re actually leaving off the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x:

```

&#xA0;part when we use the shorter syntax. That may not seem like an important detail, but you&apos;ll understand its importance in just a moment.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If you can write the shorter form, why would you ever write out the longer form? Because that longer form actually allows you to assign a property to a different variable name, which can sometimes be quite useful:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bam, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> baz, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bap } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( bam, baz, bap );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ReferenceError</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There&apos;s a subtle but super-important quirk to understand about this variation of the object destructuring form. To illustrate why it can be a gotcha you need to be careful of, let&apos;s consider the &quot;pattern&quot; of how normal object literals are specified:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> X <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, Y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y };

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 20</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ a: X, b: Y }

```

, we know that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;is the object property, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">X

```

&#xA0;is the source value that gets assigned to it. In other words, the syntactic pattern is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">target: source

```

, or more obviously,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">property-alias: value

```

. We intuitively understand this because it&apos;s the same as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=

```

&#xA0;assignment, where the pattern is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">target = source

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">However, when you use object destructuring assignment -- that is, putting the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;object literal-looking syntax on the lefthand side of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=

```

&#xA0;operator -- you invert that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">target: source

```

&#xA0;pattern.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Recall:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bam, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> baz, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bap } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The syntactic pattern here is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">source: target

```

&#xA0;(or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">value: variable-alias

```

).&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x: bam

```

&#xA0;means the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;property is the source value and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bam

```

&#xA0;is the target variable to assign to. In other words, object literals are&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">target &lt;-- source

```

, and object destructuring assignments are&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">source --&gt; target

```

. See how that&apos;s flipped?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There&apos;s another way to think about this syntax though, which may help ease the confusion. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> aa <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, bb <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> aa, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bb };
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span>     { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">AA</span>, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">BB</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">AA</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">BB</span> );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 20</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x: aa, y: bb }

```

&#xA0;line, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;represent the object properties. In the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x: AA, y: BB }

```

&#xA0;line, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;and the<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;<em style="box-sizing: border-box;">also</em>&#xA0;represent the object properties.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Recall how earlier I asserted that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x, .. }

```

&#xA0;was leaving off the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x:

```

&#xA0;part? In those two lines, if you erase the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x:

```

&#xA0;and<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y:

```

&#xA0;parts in that snippet, you&apos;re left only with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">aa, bb

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">AA, BB

```

, which in effect -- only conceptually, not actually -- are assignments from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">aa

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">AA

```

&#xA0;and from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bb

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">BB

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So, that symmetry may help to explain why the syntactic pattern was intentionally flipped for this ES6 feature.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;I would have preferred the syntax to be&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ AA: x , BB: y }

```

&#xA0;for the destructuring assignment, as that would have preserved consistency of the more familiar&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">target: source

```

&#xA0;pattern for both usages. Alas, I&apos;m having to train my brain for the inversion, as some readers may also have to do.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-not-just-declarations" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#not-just-declarations" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Not Just Declarations</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So far, we&apos;ve used destructuring assignment with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var

```

&#xA0;declarations (of course, they could also use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">let

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">const

```

), but destructuring is a general assignment operation, not just a declaration.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a, b, c, x, y, z;

[a,b,c] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
( { x, y, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The variables can already be declared, and then the destructuring only does assignments, exactly as we&apos;ve already seen.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;For the object destructuring form specifically, when leaving off a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var

```

/<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">let

```

/<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">const

```

&#xA0;declarator, we had to surround the whole assignment expression in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">( )

```

, because otherwise the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;on the lefthand side as the first element in the statement is taken to be a block statement instead of an object.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In fact, the assignment expressions (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

, etc.) don&apos;t actually need to be just variable identifiers. Anything that&apos;s a valid assignment expression is allowed. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

[o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can even use computed property expressions in the destructuring. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> which <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>x<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

( { [which]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o[which] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[which]:

```

&#xA0;part is the computed property, which results in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;-- the property to destructure from the object in question as the source of the assignment. The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o[which]

```

&#xA0;part is just a normal object key reference, which equates to<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o.x

```

&#xA0;as the target of the assignment.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can use the general assignments to create object mappings/transformations, such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Or you can map an object to an array, such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    a2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [];

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>], c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a2 );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Or the other way around:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> ],
    o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

[ o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Or you could reorder one array to another:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> ],
    a2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [];

[ a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>], a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a2 );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [2,3,1]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can even solve the traditional &quot;swap two variables&quot; task without a temporary variable:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

[ y, x ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ x, y ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 20 10</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;Be careful: you shouldn&apos;t mix in declaration with assignment unless you want all of the assignment expressions&#xA0;<em style="box-sizing: border-box;">also</em>&#xA0;to be treated as declarations. Otherwise, you&apos;ll get syntax errors. That&apos;s why in the earlier example I had to do&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var a2 = []

```

&#xA0;separately from the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[ a2[0], .. ] = ..

```

&#xA0;destructuring assignment. It wouldn&apos;t make any sense to try&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var [ a2[0], .. ] = ..

```

, because&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a2[0]

```

&#xA0;isn&apos;t a valid declaration identifier; it also obviously couldn&apos;t implicitly create a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var a2 = []

```

&#xA0;declaration to use.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-repeated-assignments" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#repeated-assignments" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Repeated Assignments</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The object destructuring form allows a source property (holding any value type) to be listed multiple times. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> };

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">That also means you can both destructure a sub-object/array property and also capture the sub-object/array&apos;s value itself. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y }, a } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> } };

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
a;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// { x: 1 }</span>

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ Z ] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ] } );

X.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">push</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );
Y[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>;

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [10,2]</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [10,2]</span>
Z;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">A word of caution about destructuring: it may be tempting to list destructuring assignments all on a single line as has been done thus far in our discussion. However, it&apos;s a much better idea to spread destructuring assignment patterns over multiple lines, using proper indentation -- much like you would in JSON or with an object literal value -- for readability sake.</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// harder to read:</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ c, d ], e<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { f } }, g } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> obj;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// better:</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> {
    a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ c, d ],
        e<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { f }
    },
    g
} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> obj;</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Remember:&#xA0;<strong style="box-sizing: border-box;">the purpose of destructuring is not just less typing, but more declarative readability.</strong></p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-destructuring-assignment-expressions" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#destructuring-assignment-expressions" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Destructuring Assignment Expressions</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The assignment expression with object or array destructuring has as its completion value the full righthand object/array value. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    a, b, c, p;

p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a, b, c } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> o;                        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In the previous snippet,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">p

```

&#xA0;was assigned the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o

```

&#xA0;object reference, not one of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">b

```

, or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">c

```

&#xA0;values. The same is true of array destructuring:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>],
    a, b, c, p;

p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ a, b, c ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> o;                        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">By carrying the object/array value through as the completion, you can chain destructuring assignment expressions together:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>],
    a, b, c, x, y, z;

( {a} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {b,c} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o );
[x,y] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [z] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> p;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 4</span></div><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-too-many-too-few-just-enough" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#too-many-too-few-just-enough" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Too Many, Too Few, Just Enough</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">With both array destructuring assignment and object destructuring assignment, you do not have to assign all the values that are present. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [,b] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b, x, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 4 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">1

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">3

```

&#xA0;values that came back from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo()

```

&#xA0;are discarded, as is the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">5

```

&#xA0;value from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bar()

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Similarly, if you try to assign more values than are present in the value you&apos;re destructuring/decomposing, you get graceful fallback to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

, as you&apos;d expect:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [,,c,d] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { w, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( c, z );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 3 6</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( d, w );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">This behavior follows symmetrically from the earlier stated &quot;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

&#xA0;is missing&quot; principle.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">We examined the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;operator earlier in this chapter, and saw that it can sometimes be used to spread an array value out into its separate values, and sometimes it can be used to do the opposite: to gather a set of values together into an array.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In addition to the gather/rest usage in function declarations,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;can perform the same behavior in destructuring assignments. To illustrate, let&apos;s recall a snippet from earlier in this chapter:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here we see that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...a

```

&#xA0;is spreading&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;out, because it appears in the array&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[ .. ]

```

&#xA0;value position. If&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...a

```

&#xA0;appears in an array destructuring position, it performs the gather behavior:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ b, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b, c );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 [3,4]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var [ .. ] = a

```

&#xA0;destructuring assignment spreads&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;out to be assigned to the pattern described inside the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[ .. ]

```

. The first part names&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">b

```

&#xA0;for the first value in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;(<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">2

```

). But then&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...c

```

&#xA0;gathers the rest of the values (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">3

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">4

```

) into an array and calls it&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">c

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;We&apos;ve seen how&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;works with arrays, but what about with objects? It&apos;s not an ES6 feature, but see Chapter 8 for discussion of a possible &quot;beyond ES6&quot; feature where&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;works with spreading or gathering objects.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-default-value-assignment" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#default-value-assignment" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Default Value Assignment</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Both forms of destructuring can offer a default value option for an assignment, using the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=

```

&#xA0;syntax similar to the default function argument values discussed earlier.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>, c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">9</span>, d <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">12</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">15</span>, w <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c, d );          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3 12</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, w );          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6 20</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can combine the default value assignment with the alternative assignment expression syntax covered earlier. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, y, z, w<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">WW</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">WW</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6 20</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Be careful about confusing yourself (or other developers who read your code) if you use an object or array as the default value in a destructuring. You can create some really hard to understand code:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">200</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">300</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">100</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> }, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } };

( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );
( { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );
( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Can you tell from that snippet what values&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

&#xA0;have at the end? Takes a moment of pondering, I would imagine. I&apos;ll end the suspense:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, y.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 300 100 42</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The takeaway here: destructuring is great and can be very useful, but it&apos;s also a sharp sword that can cause injury (to someone&apos;s brain) if used unwisely.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-nested-destructuring" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#nested-destructuring" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Nested Destructuring</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If the values you&apos;re destructuring have nested objects or arrays, you can destructure those nested values as well:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>], <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> } } };

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a, [ b, c, d ], e ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> w } } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c, d, e );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3 4 5</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( w );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 6</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Nested destructuring can be a simple way to flatten out object namespaces. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> App <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    model<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">User</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){ .. }
    }
};

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// instead of:</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// var User = App.model.User;</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { model<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { User } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> App;</div><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-destructuring-parameters" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#destructuring-parameters" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Destructuring Parameters</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In the following snippet, can you spot the assignment?</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The assignment is kinda hidden:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">42

```

&#xA0;(the argument) is assigned to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;(the parameter) when&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(42)

```

&#xA0;is executed. If parameter/argument pairing is an assignment, then it stands to reason that it&apos;s an assignment that could be destructured, right? Of course!</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider array destructuring for parameters:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( [ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> ] ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ] );                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ] );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 undefined</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [] );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Object destructuring for parameters works, too:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( { <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> } ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> } );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 1</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> } );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( {} );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">This technique is an approximation of named arguments (a long requested feature for JS!), in that the properties on the object map to the destructured parameters of the same names. That also means that we get optional parameters (in any position) for free, as you can see leaving off the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;&quot;parameter&quot; worked as we&apos;d expect.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Of course, all the previously discussed variations of destructuring are available to us with parameter destructuring, including nested destructuring, default values, and more. Destructuring also mixes fine with other ES6 function parameter capabilities, like default parameter values and rest/gather parameters.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider these quick illustrations (certainly not exhaustive of the possible variations):</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f1</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> ]) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f2</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], <span class="pl-smi" style="box-sizing: border-box;">w</span>) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f3</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], ...<span class="pl-smi" style="box-sizing: border-box;">w</span>) { .. }

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f4</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span>: <span class="pl-smi" style="box-sizing: border-box;">X</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> }) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f5</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span>: <span class="pl-smi" style="box-sizing: border-box;">X</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> }) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) { .. }</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s take one example from this snippet and examine it, for illustration purposes:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f3</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], ...<span class="pl-smi" style="box-sizing: border-box;">w</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, w );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f3</span>( [] );                           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined [] []</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f3</span>( [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>], <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 [3,4] [5,6]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There are two&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;operators in use here, and they&apos;re both gathering values in arrays (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">z

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">w

```

), though&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...z

```

&#xA0;gathers from the rest of the values left over in the first array argument, while&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...w

```

&#xA0;gathers from the rest of the main arguments left over after the first.</p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-destructuring-defaults--parameter-defaults" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#destructuring-defaults--parameter-defaults" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Destructuring Defaults + Parameter Defaults</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">There&apos;s one subtle point you should be particularly careful to notice -- the difference in behavior between a destructuring default value and a function parameter default value. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>();                               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">At first, it would seem that we&apos;ve declared a default value of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">10

```

&#xA0;for both the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;parameters, but in two different ways. However, these two different approaches will behave differently in certain cases, and the difference is awfully subtle.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, {} );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Wait, why did that happen? It&apos;s pretty clear that named parameter&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;is defaulting to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">10

```

&#xA0;if not passed as a property of that same name in the first argument&apos;s object.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But what about&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

&#xA0;being&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

? The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ y: 10 }

```

&#xA0;value is an object as a function parameter default value, not a destructuring default value. As such, it only applies if the second argument is not passed at all, or is passed as<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In the previous snippet, we&#xA0;<em style="box-sizing: border-box;">are</em>&#xA0;passing a second argument (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{}

```

), so the default&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ y: 10 }

```

&#xA0;value is not used, and the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ y }

```

&#xA0;destructuring occurs against the passed in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{}

```

&#xA0;empty object value.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Now, compare&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ y } = { y: 10 }

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x = 10 } = {}

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&apos;s form usage, if the first function argument is omitted or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{}

```

&#xA0;empty object default applies. Then, whatever value is in the first argument position -- either the default&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{}

```

&#xA0;or whatever you passed in -- is destructured with the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x = 10 }

```

, which checks to see if an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;property is found, and if not found (or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">undefined

```

), the<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">10

```

&#xA0;default value is applied to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;named parameter.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Deep breath. Read back over those last few paragraphs a couple of times. Let&apos;s review via code:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>();                               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, {} );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, {} );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> }, { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> } );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">It would generally seem that the defaulting behavior of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

&#xA0;parameter is probably the more desirable and sensible case compared to that of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">y

```

. As such, it&apos;s important to understand why and how&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ x = 10 } = {}

```

&#xA0;form is different from<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ y } = { y: 10 }

```

&#xA0;form.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If that&apos;s still a bit fuzzy, go back and read it again, and play with this yourself. Your future self will thank you for taking the time to get this very subtle gotcha nuance detail straight.</p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-nested-defaults-destructured-and-restructured" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#nested-defaults-destructured-and-restructured" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Nested Defaults: Destructured and Restructured</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Although it may at first be difficult to grasp, an interesting idiom emerges for setting defaults for a nested object&apos;s properties: using object destructuring along with what I&apos;d call&#xA0;<em style="box-sizing: border-box;">restructuring</em>.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider a set of defaults in a nested object structure, like the following:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// taken from: http://es-discourse.com/t/partial-default-arguments/120/7</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> defaults <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        remove<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">true</span>,
        enable<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span>,
        instance<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {}
    },
    log<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        warn<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">true</span>,
        error<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">true</span>
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Now, let&apos;s say that you have an object called&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config

```

, which has some of these applied, but perhaps not all, and you&apos;d like to set all the defaults into this object in the missing spots, but not override specific settings already present:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> config <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        remove<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span>,
        instance<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can of course do so manually, as you might have done in the past:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> {};
config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span>
    config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span>;
config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span>
    config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span>;
...</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Yuck.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Others may prefer the assign-overwrite approach to this task. You might be tempted by the ES6&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.assign(..)

```

utility (see Chapter 6) to clone the properties first from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">defaults

```

&#xA0;and then overwritten with the cloned properties from<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config

```

, as so:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">assign</span>( {}, defaults, config );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">That looks way nicer, huh? But there&apos;s a major problem!&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.assign(..)

```

&#xA0;is shallow, which means when it copies<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">defaults.options

```

, it just copies that object reference, not deep cloning that object&apos;s properties to a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config.options

```

object.&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.assign(..)

```

&#xA0;would need to be applied (sort of &quot;recursively&quot;) at all levels of your object&apos;s tree to get the deep cloning you&apos;re expecting.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;Many JS utility libraries/frameworks provide their own option for deep cloning of an object, but those approaches and their gotchas are beyond our scope to discuss here.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So let&apos;s examine if ES6 object destructuring with defaults can help at all:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> {};
config<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> {};
{
    options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        remove<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">default</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span>,
        enable<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">default</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span>,
        instance<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">instance</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">default</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">instance</span>
    } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {},
    log<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        warn<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> config<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.warn</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">default</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.warn</span>,
        error<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> config<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.error</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">default</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.error</span>
    } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}
} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config;</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Not as nice as the false promise of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.assign(..)

```

&#xA0;(being that it&apos;s shallow only), but it&apos;s better than the manual approach by a fair bit, I think. It is still unfortunately verbose and repetitive, though.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The previous snippet&apos;s approach works because I&apos;m hacking the destructuring and defaults mechansim to do the property&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=== undefined

```

&#xA0;checks and assignment decisions for me. It&apos;s a trick in that I&apos;m destructuring&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config

```

&#xA0;(see the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">= config

```

&#xA0;at the end of the snippet), but I&apos;m reassigning all the destructured values right back into&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config

```

, with the<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">config.options.enable

```

&#xA0;assignment references.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Still too much, though. Let&apos;s see if we can make anything better.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The following trick works best if you know that all the various properties you&apos;re destructuring are uniquely named. You can still do it even if that&apos;s not the case, but it&apos;s not as nice -- you&apos;ll have to do the destructuring in stages, or create unique local variables as temporary aliases.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If we fully destructure all the properties into top-level variables, we can then immediately restructure to reconstitute the original nested object structure.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But all those temporary variables hanging around would pollute scope. So, let&apos;s use block scoping (see &quot;Block-Scoped Declarations&quot; earlier in this chapter) with a general&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ }

```

&#xA0;enclosing block:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// merge `defaults` into `config`</span>
{
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// destructure (with default value assignments)</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">let</span> {
        options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
            remove <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span>,
            enable <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span>,
            instance <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">instance</span>
        } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {},
        log<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
            warn <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> defaults<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.warn</span>,
            error <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> defaults<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log.error</span>
        } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}
    } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config;

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// restructure</span>
    config <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { remove, enable, instance },
        log<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { warn, error }
    };
}</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">That seems a fair bit nicer, huh?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;You could also accomplish the scope enclosure with an arrow IIFE instead of the general&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ }

```

&#xA0;block and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">let

```

declarations. Your destructuring assignments/defaults would be in the parameter list and your restructuring would be the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

&#xA0;statement in the function body.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ warn, error }

```

&#xA0;syntax in the restructuring part may look new to you; that&apos;s called &quot;concise properties&quot; and we cover it in the next section!</p>
### Object Literal Extensions
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Object Literal Extensions</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">ES6 adds a number of important convenience extensions to the humble&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;object literal.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-concise-properties" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#concise-properties" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Concise Properties</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You&apos;re certainly familiar with declaring object literals in this form:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x,
        y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y
    };</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If it&apos;s always felt redundant to say&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x: x

```

&#xA0;all over, there&apos;s good news. If you need to define a property that is the same name as a lexical identifier, you can shorten it from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x: x

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x

```

. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        x,
        y
    };</div><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-concise-methods" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#concise-methods" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Concise Methods</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In a similar spirit to concise properties we just examined, functions attached to properties in object literals also have a concise form, for convenience.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The old way:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">x</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    },
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">y</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
}</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">And as of ES6:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">x</span>() {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    },
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">y</span>() {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
}</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;While&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x() { .. }

```

&#xA0;seems to just be shorthand for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">x: function(){ .. }

```

, concise methods have special behaviors that their older counterparts don&apos;t; specifically, the allowance for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;(see &quot;Object&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&quot; later in this chapter).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Generators (see Chapter 4) also have a concise method form:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() { .. }
};</div><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-concisely-unnamed" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#concisely-unnamed" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Concisely Unnamed</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">While that convenience shorthand is quite attractive, there&apos;s a subtle gotcha to be aware of. To illustrate, let&apos;s examine pre-ES6 code like the following, which you might try to refactor to use concise methods:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">runSomething</span>(<span class="pl-smi" style="box-sizing: border-box;">o</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Math</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">random</span>(),
        y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Math</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">random</span>();

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> y) {
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// recursively call with `x`</span>
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// and `y` swapped</span>
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">This obviously silly code just generates two random numbers and subtracts the smaller from the bigger. But what&apos;s important here isn&apos;t what it does, but rather how it&apos;s defined. Let&apos;s focus on the object literal and function definition, as we see here:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
} );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Why do we say both&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something:

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function something

```

? Isn&apos;t that redundant? Actually, no, both are needed for different purposes. The property&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

&#xA0;is how we can call&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o.something(..)

```

, sort of like its public name. But the second&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

&#xA0;is a lexical name to refer to the function from inside itself, for recursion purposes.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Can you see why the line&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return something(y,x)

```

&#xA0;needs the name&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

&#xA0;to refer to the function? There&apos;s no lexical name for the object, such that it could have said&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return o.something(y,x)

```

&#xA0;or something of that sort.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">That&apos;s actually a pretty common practice when the object literal does have an identifying name, such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Is this a good idea? Perhaps, perhaps not. You&apos;re assuming that the name&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">controller

```

&#xA0;will always point to the object in question. But it very well may not -- the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">makeRequest(..)

```

&#xA0;function doesn&apos;t control the outer code and so can&apos;t force that to be the case. This could come back to bite you.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Others prefer to use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;to define such things:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">That looks fine, and should work if you always invoke the method as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">controller.makeRequest(..)

```

. But you now have a<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding gotcha if you do something like:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>click<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>, controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Of course, you can solve that by passing&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">controller.makeRequest.bind(controller)

```

&#xA0;as the handler reference to bind the event to. But yuck -- it isn&apos;t very appealing.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Or what if your inner&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this.makeRequest(..)

```

&#xA0;call needs to be made from a nested function? You&apos;ll have another&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

binding hazard, which people will often solve with the hacky&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

, such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> self <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>;

        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>click<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            self.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">More yuck.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;For more information on&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding rules and gotchas, see Chapters 1-2 of the&#xA0;<em style="box-sizing: border-box;">this &amp; Object Prototypes</em>&#xA0;title of this series.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">OK, what does all this have to do with concise methods? Recall our&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something(..)

```

&#xA0;method definition:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
} );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The second&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

&#xA0;here provides a super convenient lexical identifier that will always point to the function itself, giving us the perfect reference for recursion, event binding/unbinding, and so on -- no messing around with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;or trying to use an untrustable object reference.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Great!</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So, now we try to refactor that function reference to this ES6 concise method form:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> y) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Seems fine at first glance, except this code will break. The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return something(..)

```

&#xA0;call will not find a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

identifier, so you&apos;ll get a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">ReferenceError

```

. Oops. But why?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The above ES6 snippet is interpreted as meaning:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> y) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Look closely. Do you see the problem? The concise method definition implies&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something: function(x,y)

```

. See how the second&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something

```

&#xA0;we were relying on has been omitted? In other words, concise methods imply anonymous function expressions.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Yeah, yuck.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;You may be tempted to think that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow functions are a good solution here, but they&apos;re equally insufficient, as they&apos;re also anonymous function expressions. We&apos;ll cover them in &quot;Arrow Functions&quot; later in this chapter.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The partially redeeming news is that our&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something(x,y)

```

&#xA0;concise method won&apos;t be totally anonymous. See &quot;Function Names&quot; in Chapter 7 for information about ES6 function name inference rules. That won&apos;t help us for our recursion, but it helps with debugging at least.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So what are we left to conclude about concise methods? They&apos;re short and sweet, and a nice convenience. But you should only use them if you&apos;re never going to need them to do recursion or event binding/unbinding. Otherwise, stick to your old-school&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">something: function something(..)

```

&#xA0;method definitions.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">A lot of your methods are probably going to benefit from concise method definitions, so that&apos;s great news! Just be careful of the few where there&apos;s an un-naming hazard.</p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-es5-gettersetter" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#es5-gettersetter" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>ES5 Getter/Setter</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Technically, ES5 defined getter/setter literals forms, but they didn&apos;t seem to get used much, mostly due to the lack of transpilers to handle that new syntax (the only major new syntax added in ES5, really). So while it&apos;s not a new ES6 feature, we&apos;ll briefly refresh on that form, as it&apos;s probably going to be much more useful with ES6 going forward.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    __id<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>,
    get <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">id</span>() { <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">__id</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">++</span>; },
    set <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">id</span>(<span class="pl-smi" style="box-sizing: border-box;">v</span>) { <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">__id</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> v; }
}

o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">id</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10</span>
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">id</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 11</span>
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">id</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">id</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 20</span>

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// and:</span>
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">__id</span>;         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 21</span>
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">__id</span>;         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 21 -- still!</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">These getter and setter literal forms are also present in classes; see Chapter 3.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;It may not be obvious, but the setter literal must have exactly one declared parameter; omitting it or listing others is illegal syntax. The single required parameter&#xA0;<em style="box-sizing: border-box;">can</em>&#xA0;use destructuring and defaults (e.g.,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set id({ id: v = 0 }) { .. }

```

), but the gather/rest&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;is not allowed (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">set id(...v) { .. }

```

).</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-computed-property-names" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#computed-property-names" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Computed Property Names</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You&apos;ve probably been in a situation like the following snippet, where you have one or more property names that come from some sort of expression and thus can&apos;t be put into the object literal:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>user_<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">baz</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. }
};

o[ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>foo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. };
o[ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>bar<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. };
..</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">ES6 adds a syntax to the object literal definition which allows you to specify an expression that should be computed, whose result is the property name assigned. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>user_<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">baz</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. },
    [ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>foo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. },
    [ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>bar<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. }
    ..
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Any valid expression can appear inside the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[ .. ]

```

&#xA0;that sits in the property name position of the object literal definition.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Probably the most common use of computed property names will be with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Symbol

```

s (which we cover in &quot;Symbols&quot; later in this chapter), such as:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    [Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toStringTag</span>]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>really cool thing<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,
    ..
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Symbol.toStringTag

```

&#xA0;is a special built-in value, which we evaluate with the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[ .. ]

```

&#xA0;syntax, so we can assign the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;really cool thing&quot;

```

&#xA0;value to the special property name.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Computed property names can also appear as the name of a concise method or a concise generator:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>f<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>oo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>]() { .. }   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// computed concise method</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span>[<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>b<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>ar<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>]() { .. }  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// computed concise generator</span>
};</div><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-setting-prototype" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#setting-prototype" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Setting&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: inherit; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[[Prototype]]

```

</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">We won&apos;t cover prototypes in detail here, so for more information, see the&#xA0;<em style="box-sizing: border-box;">this &amp; Object Prototypes</em>&#xA0;title of this series.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Sometimes it will be helpful to assign the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[[Prototype]]

```

&#xA0;of an object at the same time you&apos;re declaring its object literal. The following has been a nonstandard extension in many JS engines for a while, but is standardized as of ES6:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    __proto__<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o1,
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o2

```

&#xA0;is declared with a normal object literal, but it&apos;s also&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[[Prototype]]

```

-linked to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o1

```

. The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">__proto__

```

&#xA0;property name here can also be a string&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;__proto__&quot;

```

, but note that it&#xA0;<em style="box-sizing: border-box;">cannot</em>&#xA0;be the result of a computed property name (see the previous section).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">__proto__

```

&#xA0;is controversial, to say the least. It&apos;s a decades-old proprietary extension to JS that is finally standardized, somewhat begrudgingly it seems, in ES6. Many developers feel it shouldn&apos;t ever be used. In fact, it&apos;s in &quot;Annex B&quot; of ES6, which is the section that lists things JS feels it has to standardize for compatibility reasons only.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;Though I&apos;m narrowly endorsing&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">__proto__

```

&#xA0;as a key in an object literal definition, I definitely do not endorse using it in its object property form, like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o.__proto__

```

. That form is both a getter and setter (again for compatibility reasons), but there are definitely better options. See the&#xA0;<em style="box-sizing: border-box;">this &amp; Object Prototypes</em>&#xA0;title of this series for more information.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For setting the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[[Prototype]]

```

&#xA0;of an existing object, you can use the ES6 utility&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.setPrototypeOf(..)

```

. Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">setPrototypeOf</span>( o2, o1 );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;We&apos;ll discuss&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object

```

&#xA0;again in Chapter 6. &quot;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.setPrototypeOf(..)

```

&#xA0;Static Function&quot; provides additional details on&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.setPrototypeOf(..)

```

. Also see &quot;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.assign(..)

```

&#xA0;Static Function&quot; for another form that relates&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o2

```

prototypically to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o1

```

.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-object-super" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#object-super" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Object&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: inherit; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;is typically thought of as being only related to classes. However, due to JS&apos;s classless-objects-with-prototypes nature,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;is equally effective, and nearly the same in behavior, with plain objects&apos; concise methods.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>o1:foo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );
    }
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">super</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>o2:foo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );
    }
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">setPrototypeOf</span>( o2, o1 );

o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// o1:foo</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// o2:foo</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;is only allowed in concise methods, not regular function expression properties. It also is only allowed in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super.XXX

```

&#xA0;form (for property/method access), not in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super()

```

&#xA0;form.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;reference in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o2.foo()

```

&#xA0;method is locked statically to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o2

```

, and specifically to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">[[Prototype]]

```

&#xA0;of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o2

```

.<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;here would basically be&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Object.getPrototypeOf(o2)

```

&#xA0;-- resolves to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o1

```

&#xA0;of course -- which is how it finds and calls<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">o1.foo()

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For complete details on&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

, see &quot;Classes&quot; in Chapter 3.</p>
### Template Literals
<h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Strings on mutiple lines, yes! We are used to using libraries when creating template literals. Inter-op specifically.&#xA0;</h2><div><br></div><div><br></div><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Template Literals</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">At the very outset of this section, I&apos;m going to have to call out the name of this ES6 feature as being awfully... misleading, depending on your experiences with what the word&#xA0;<em style="box-sizing: border-box;">template</em>&#xA0;means.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Many developers think of templates as being reusable renderable pieces of text, such as the capability provided by most template engines (Mustache, Handlebars, etc.). ES6&apos;s use of the word&#xA0;<em style="box-sizing: border-box;">template</em>&#xA0;would imply something similar, like a way to declare inline template literals that can be re-rendered. However, that&apos;s not at all the right way to think about this feature.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So, before we go on, I&apos;m renaming to what it should have been called:&#xA0;<em style="box-sizing: border-box;">interpolated string literals</em>&#xA0;(or&#xA0;<em style="box-sizing: border-box;">interpoliterals</em>&#xA0;for short).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You&apos;re already well aware of declaring string literals with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&apos;

```

&#xA0;delimiters, and you also know that these are not&#xA0;<em style="box-sizing: border-box;">smart strings</em>&#xA0;(as some languages have), where the contents would be parsed for interpolation expressions.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">However, ES6 introduces a new type of string literal, using the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`

```

&#xA0;backtick as the delimiter. These string literals allow basic string interpolation expressions to be embedded, which are then automatically parsed and evaluated.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here&apos;s the old pre-ES6 way:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> greeting <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>Hello <span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>!<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( greeting );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;Hello Kyle!&quot;</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> greeting );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;string&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Now, consider the new ES6 way:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> greeting <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( greeting );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;Hello Kyle!&quot;</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> greeting );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;string&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">As you can see, we used the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`..`

```

&#xA0;around a series of characters, which are interpreted as a string literal, but any expressions of the form&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${..}

```

&#xA0;are parsed and evaluated inline immediately. The fancy term for such parsing and evaluating is&#xA0;<em style="box-sizing: border-box;">interpolation</em>&#xA0;(much more accurate than templating).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The result of the interpolated string literal expression is just a plain old normal string, assigned to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">greeting

```

&#xA0;variable.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">typeof greeting == &quot;string&quot;

```

&#xA0;illustrates why it&apos;s important not to think of these entities as special template values, as you cannot assign the unevaluated form of the literal to something and reuse it. The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`..`

```

&#xA0;string literal is more like an IIFE in the sense that it&apos;s automatically evaluated inline. The result of a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`..`

```

&#xA0;string literal is, simply, just a string.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">One really nice benefit of interpolated string literals is they are allowed to split across multiple lines:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Now is the time for all good men</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">to come to the aid of their</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">country!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Now is the time for all good men</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to come to the aid of their</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// country!</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The line breaks (newlines) in the interpolated string literal were preserved in the string value.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Unless appearing as explicit escape sequences in the literal value, the value of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">\r

```

&#xA0;carriage return character (code point&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">U+000D

```

) or the value of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">\r\n

```

&#xA0;carriage return + line feed sequence (code points&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">U+000D

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">U+000A

```

) are both normalized to a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">\n

```

&#xA0;line feed character (code point&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">U+000A

```

). Don&apos;t worry though; this normalization is rare and would likely only happen if copy-pasting text into your JS file.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-interpolated-expressions" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#interpolated-expressions" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Interpolated Expressions</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Any valid expression is allowed to appear inside&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">${..}

```

&#xA0;in an interpolated string literal, including function calls, inline function expression calls, and even other interpolated string literals!</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">upper</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toUpperCase</span>();
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> who <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>reader<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>A very <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">upper</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>warm<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span> welcome</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">to all of you <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">upper</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span><span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>who<span class="pl-pse" style="box-sizing: border-box;">}</span></span>s<span class="pl-pds" style="box-sizing: border-box;">`</span></span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// A very WARM welcome</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to all of you READERS!</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here, the inner&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`${who}s`

```

&#xA0;interpolated string literal was a little bit nicer convenience for us when combining the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">who

```

variable with the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;s&quot;

```

&#xA0;string, as opposed to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">who + &quot;s&quot;

```

. There will be cases that nesting interpolated string literals is helpful, but be wary if you find yourself doing that kind of thing often, or if you find yourself nesting several levels deep.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If that&apos;s the case, the odds are good that your string value production could benefit from some abstractions.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;As a word of caution, be very careful about the readability of your code with such new found power. Just like with default value expressions and destructuring assignment expressions, just because you&#xA0;<em style="box-sizing: border-box;">can</em>&#xA0;do something doesn&apos;t mean you&#xA0;<em style="box-sizing: border-box;">should</em>&#xA0;do it. Never go so overboard with new ES6 tricks that your code becomes more clever than you or your other team members.</p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-expression-scope" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#expression-scope" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Expression Scope</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">One quick note about the scope that is used to resolve variables in expressions. I mentioned earlier that an interpolated string literal is kind of like an IIFE, and it turns out thinking about it like that explains the scoping behavior as well.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">str</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>foo<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( str );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>bar<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello from <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>global<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;Hello from bar!&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">At the moment the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`..`

```

&#xA0;string literal is expressed, inside the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bar()

```

&#xA0;function, the scope available to it finds&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">bar()

```

&apos;s<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">name

```

&#xA0;variable with value&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;bar&quot;

```

. Neither the global&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">name

```

&#xA0;nor&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(..)

```

&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">name

```

&#xA0;matter. In other words, an interpolated string literal is just lexically scoped where it appears, not dynamically scoped in any way.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-tagged-template-literals" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#tagged-template-literals" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Tagged Template Literals</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Again, renaming the feature for sanity sake:&#xA0;<em style="box-sizing: border-box;">tagged string literals</em>.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">To be honest, this is one of the cooler tricks that ES6 offers. It may seem a little strange, and perhaps not all that generally practical at first. But once you&apos;ve spent some time with it, tagged string literals may just surprise you in their usefulness.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( values );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>awesome<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

foo<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;Everything is &quot;, &quot;!&quot;]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;awesome&quot; ]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s take a moment to consider what&apos;s happening in the previous snippet. First, the most jarring thing that jumps out is<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo`Everything...`;

```

. That doesn&apos;t look like anything we&apos;ve seen before. What is it?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">It&apos;s essentially a special kind of function call that doesn&apos;t need the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">( .. )

```

. The&#xA0;<em style="box-sizing: border-box;">tag</em>&#xA0;-- the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo

```

&#xA0;part before the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">`..`

```

string literal -- is a function value that should be called. Actually, it can be any expression that results in a function, even a function call that returns another function, like:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( values );
    }
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>awesome<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>()<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;Everything is &quot;, &quot;!&quot;]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;awesome&quot; ]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But what gets passed to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(..)

```

&#xA0;function when invoked as a tag for a string literal?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The first argument -- we called it&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

&#xA0;-- is an array of all the plain strings (the stuff between any interpolated expressions). We get two values in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

&#xA0;array:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;Everything is &quot;

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;!&quot;

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">For convenience sake in our example, we then gather up all subsequent arguments into an array called&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;using the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">...

```

&#xA0;gather/rest operator (see the &quot;Spread/Rest&quot; section earlier in this chapter), though you could of course have left them as individual named parameters following the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

&#xA0;parameter.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The argument(s) gathered into our&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;array are the results of the already-evaluated interpolation expressions found in the string literal. So obviously the only element in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;in our example is&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;awesome&quot;

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">You can think of these two arrays as: the values in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;are the separators if you were to splice them in between the values in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

, and then if you joined everything together, you&apos;d get the complete interpolated string value.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">A tagged string literal is like a processing step after the interpolation expressions are evaluated but before the final string value is compiled, allowing you more control over generating the string from the literal.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Typically, the string literal tag function (<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo(..)

```

&#xA0;in the previous snippets) should compute an appropriate string value and return it, so that you can use the tagged string literal as a value just like untagged string literals:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">tag</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span><span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span><span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>awesome<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tag<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Everything is awesome!</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In this snippet,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">tag(..)

```

&#xA0;is a pass-through operation, in that it doesn&apos;t perform any special modifications, but just uses<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">reduce(..)

```

&#xA0;to loop over and splice/interleave&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;together the same way an untagged string literal would have done.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So what are some practical uses? There are many advanced ones that are beyond our scope to discuss here. But here&apos;s a simple idea that formats numbers as U.S. dollars (sort of like basic localization):</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">dollabillsyall</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">==</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>number<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>) {
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// look, also using interpolated</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// string literals!</span>
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>$<span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toFixed</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span><span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
            }
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">else</span> {
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];
            }
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span><span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> amt1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11.99</span>,
    amt2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> amt1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1.08</span>,
    name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> dollabillsyall
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Thanks for your purchase, <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>! Your</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">product cost was <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>amt1<span class="pl-pse" style="box-sizing: border-box;">}</span></span>, which with tax</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">comes out to <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>amt2<span class="pl-pse" style="box-sizing: border-box;">}</span></span>.<span class="pl-pds" style="box-sizing: border-box;">`</span></span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Thanks for your purchase, Kyle! Your</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// product cost was $11.99, which with tax</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// comes out to $12.95.</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">number

```

&#xA0;value is encountered in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">values

```

&#xA0;array, we put&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;$&quot;

```

&#xA0;in front of it and format it to two decimal places with<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">toFixed(2)

```

. Otherwise, we let the value pass-through untouched.</p><h4 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.4; font-size: 1.25em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-raw-strings" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#raw-strings" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Raw Strings</h4><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In the previous snippets, our tag functions receive the first argument we called&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

, which is an array. But there&apos;s an additional bit of data included: the raw unprocessed versions of all the strings. You can access those raw string values using the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.raw

```

&#xA0;property, like this:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">showraw</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span> );
}

showraw<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;Hello</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// World&quot; ]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ &quot;Hello\nWorld&quot; ]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The raw version of the value preserves the raw escaped&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">\n

```

&#xA0;sequence (the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">\

```

&#xA0;and the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">n

```

&#xA0;are separate characters), while the processed version considers it a single newline character. However, the earlier mentioned line-ending normalization is applied to both values.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">ES6 comes with a built-in function that can be used as a string literal tag:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">String.raw(..)

```

. It simply passes through the raw versions of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">strings

```

&#xA0;values:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Hello</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// World</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span><span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Hello\nWorld</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span><span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 12</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Other uses for string literal tags included special processing for internationalization, localization, and more!</p>
### Arrow Functions
This is tied back to &quot;let&quot; except for functions. It really solves the problem of &quot;this and that&quot;. By that I mean this:<div><br></div><div>function OuterFunction(){</div><div>var that = this</div><div>function() innerFunction(){</div><div>that.value = hello;</div><div>}</div><div>}</div><div><br></div><div><br><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;">Arrow Functions</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">We&apos;ve touched on&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding complications with functions earlier in this chapter, and they&apos;re covered at length in the<em style="box-sizing: border-box;">this &amp; Object Prototypes</em>&#xA0;title of this series. It&apos;s important to understand the frustrations that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

-based programming with normal functions brings, because that is the primary motivation for the new ES6&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function feature.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s first illustrate what an arrow function looks like, as compared to normal functions:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;
}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// versus</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The arrow function definition consists of a parameter list (of zero or more parameters, and surrounding&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">( .. )

```

&#xA0;if there&apos;s not exactly one parameter), followed by the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;marker, followed by a function body.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So, in the previous snippet, the arrow function is just the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">(x,y) =&gt; x + y

```

&#xA0;part, and that function reference happens to be assigned to the variable&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">foo

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The body only needs to be enclosed by&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;if there&apos;s more than one expression, or if the body consists of a non-expression statement. If there&apos;s only one expression, and you omit the surrounding&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

, there&apos;s an implied&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

in front of the expression, as illustrated in the previous snippet.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here&apos;s some other arrow function variations to consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> ()<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">12</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=&gt;</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;
    y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">++</span>;
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>;
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> z) / <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Arrow functions are&#xA0;<em style="box-sizing: border-box;">always</em>&#xA0;function expressions; there is no arrow function declaration. It also should be clear that they are anonymous function expressions -- they have no named reference for the purposes of recursion or event binding/unbinding -- though &quot;Function Names&quot; in Chapter 7 will describe ES6&apos;s function name inference rules for debugging purposes.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;All the capabilities of normal function parameters are available to arrow functions, including default values, destructuring, rest parameters, and so on.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Arrow functions have a nice, shorter syntax, which makes them on the surface very attractive for writing terser code. Indeed, nearly all literature on ES6 (other than the titles in this series) seems to immediately and exclusively adopt the arrow function as &quot;the new function.&quot;</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">It is telling that nearly all examples in discussion of arrow functions are short single statement utilities, such as those passed as callbacks to various utilities. For example:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>];

a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">map</span>( v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=&gt;</span> v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [2,4,6,8,10]</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In those cases, where you have such inline function expressions, and they fit the pattern of computing a quick calculation in a single statement and returning that result, arrow functions indeed look to be an attractive and lightweight alternative to the more verbose&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function

```

&#xA0;keyword and syntax.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Most people tend to&#xA0;<em style="box-sizing: border-box;">ooh and aah</em>&#xA0;at nice terse examples like that, as I imagine you just did!</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">However, I would caution you that it would seem to me somewhat a misapplication of this feature to use arrow function syntax with otherwise normal, multistatement functions, especially those that would otherwise be naturally expressed as function declarations.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Recall the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dollabillsyall(..)

```

&#xA0;string literal tag function from earlier in this chapter -- let&apos;s change it to use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;syntax:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dollabillsyall <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span>
    strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( (<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&gt;</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">==</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>number<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>) {
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// look, also using interpolated</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// string literals!</span>
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>$<span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toFixed</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span><span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
            }
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">else</span> {
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];
            }
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span><span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span> );</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In this example, the only modifications I made were the removal of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

, and some&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

, and then the insertion of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;and a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var

```

. Is this a significant improvement in the readability of the code? Meh.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">I&apos;d actually argue that the lack of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

&#xA0;and outer&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;partially obscures the fact that the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">reduce(..)

```

&#xA0;call is the only statement in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">dollabillsyall(..)

```

&#xA0;function and that its result is the intended result of the call. Also, the trained eye that is so used to hunting for the word&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function

```

&#xA0;in code to find scope boundaries now needs to look for the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

marker, which can definitely be harder to find in the thick of the code.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">While not a hard-and-fast rule, I&apos;d say that the readability gains from&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function conversion are inversely proportional to the length of the function being converted. The longer the function, the less&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;helps; the shorter the function, the more&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;can shine.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">I think it&apos;s probably more sensible and reasonable to adopt&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;for the places in code where you do need short inline function expressions, but leave your normal-length main functions as is.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; position: relative; color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-not-just-shorter-syntax-but-this" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#not-just-shorter-syntax-but-this" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1.2; background-color: transparent;" target="_blank"></a>Not Just Shorter Syntax, But&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: inherit; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

</h3><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Most of the popular attention toward&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;has been on saving those precious keystrokes by dropping&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">function

```

,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">{ .. }

```

&#xA0;from your code.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">But there&apos;s a big detail we&apos;ve skipped over so far. I said at the beginning of the section that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;functions are closely related to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding behavior. In fact,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow functions are&#xA0;<em style="box-sizing: border-box;">primarily designed</em>&#xA0;to alter&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;behavior in a specific way, solving a particular and common pain point with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

-aware coding.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The saving of keystrokes is a red herring, a misleading sideshow at best.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s revisit another example from earlier in this chapter:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> self <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>;

        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>click<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            self.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">We used the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

&#xA0;hack, and then referenced&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">self.makeRequest(..)

```

, because inside the callback function we&apos;re passing to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">addEventListener(..)

```

, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding will not be the same as it is in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">makeRequest(..)

```

&#xA0;itself. In other words, because&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;bindings are dynamic, we fall back to the predictability of lexical scope via the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">self

```

&#xA0;variable.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Herein we finally can see the primary design characteristic of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow functions. Inside arrow functions, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

binding is not dynamic, but is instead lexical. In the previous snippet, if we used an arrow function for the callback,<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;will be predictably what we wanted it to be.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>click<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>, ()<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> {
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Lexical&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;in the arrow function callback in the previous snippet now points to the same value as in the enclosing<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">makeRequest(..)

```

&#xA0;function. In other words,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;is a syntactic stand-in for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In cases where&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

&#xA0;(or, alternatively, a function&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.bind(this)

```

&#xA0;call) would normally be helpful,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow functions are a nicer alternative operating on the same prinicple. Sounds great, right?</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Not quite so simple.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;replaces&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

&#xA0;or&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.bind(this)

```

&#xA0;and it helps, guess what happens if you use&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;with a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

-aware function that&#xA0;<em style="box-sizing: border-box;">doesn&apos;t</em>&#xA0;need&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

&#xA0;to work? You might be able to guess that it&apos;s going to mess things up. Yeah.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Consider:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    makeRequest<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> (..)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">helper</span>(..);
    },
    helper<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> (..)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"> =&gt;</span> {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
};

controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);</div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Although we invoke as&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">controller.makeRequest(..)

```

, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this.helper

```

&#xA0;reference fails, because&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;here doesn&apos;t point to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">controller

```

&#xA0;as it normally would. Where does it point? It lexically inherits&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;from the surrounding scope. In this previous snippet, that&apos;s the global scope, where&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;points to the global object. Ugh.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In addition to lexical&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

, arrow functions also have lexical&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

&#xA0;-- they don&apos;t have their own&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

&#xA0;array but instead inherit from their parent -- as well as lexical&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">new.target

```

&#xA0;(see &quot;Classes&quot; in Chapter 3).</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">So now we can conclude a more nuanced set of rules for when&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;is appropriate and not:</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">If you have a short, single-statement inline function expression, where the only statement is a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

&#xA0;of some computed value,&#xA0;<em style="box-sizing: border-box;">and</em>&#xA0;that function doesn&apos;t already make a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;reference inside it,&#xA0;<em style="box-sizing: border-box;">and</em>&#xA0;there&apos;s no self-reference (recursion, event binding/unbinding),&#xA0;<em style="box-sizing: border-box;">and</em>&#xA0;you don&apos;t reasonably expect the function to ever be that way, you can probably safely refactor it to be an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function.</li><li style="box-sizing: border-box;">If you have an inner function expression that&apos;s relying on a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var self = this

```

&#xA0;hack or a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">.bind(this)

```

&#xA0;call on it in the enclosing function to ensure proper&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

&#xA0;binding, that inner function expression can probably safely become an<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function.</li><li style="box-sizing: border-box;">If you have an inner function expression that&apos;s relying on something like&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">var args = Array.prototype.slice.call(arguments)

```

&#xA0;in the enclosing function to make a lexical copy of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

, that inner function expression can probably safely become an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function.</li><li style="box-sizing: border-box;">For everything else -- normal function declarations, longer multistatment function expressions, functions that need a lexical name identifier self-reference (recursion, etc.), and any other function that doesn&apos;t fit the previous characteristics -- you should probably avoid&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;function syntax.</li></ul><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Bottom line:&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;is about lexical binding of&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">this

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">arguments

```

, and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">super

```

. These are intentional features designed to fix some common problems, not bugs, quirks, or mistakes in ES6.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Don&apos;t believe any hype that&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;is primarily, or even mostly, about fewer keystrokes. Whether you save keystrokes or waste them, you should know exactly what you are intentionally doing with every character typed.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Tip:</strong>&#xA0;If you have a function that for any of these articulated reasons is not a good match for an&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">=&gt;

```

&#xA0;arrow function, but it&apos;s being declared as part of an object literal, recall from &quot;Concise Methods&quot; earlier in this chapter that there&apos;s another option for shorter function syntax.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">If you prefer a visual decision chart for how/why to pick an arrow function:</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/fig1.png" target="_blank" style="box-sizing: border-box; color: rgb(64, 120, 192); background-color: transparent;"><img src="https://github.com/getify/You-Dont-Know-JS/raw/master/es6%20&amp;%20beyond/fig1.png" style="box-sizing: border-box;"></a></p><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; position: relative; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif;"><a id="user-content-forof-loops" class="anchor" href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&amp;%20beyond/ch2.md#forof-loops" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; line-height: 1; background-color: transparent;" target="_blank"></a><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: inherit; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;Loops</h2><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Joining the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..in

```

&#xA0;loops from the JavaScript we&apos;re all familiar with, ES6 adds a&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;loop, which loops over the set of values produced by an&#xA0;<em style="box-sizing: border-box;">iterator</em>.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The value you loop over with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;must be an&#xA0;<em style="box-sizing: border-box;">iterable</em>, or it must be a value which can be coerced/boxed to an object (see the&#xA0;<em style="box-sizing: border-box;">Types &amp; Grammar</em>&#xA0;title of this series) that is an iterable. An iterable is simply an object that is able to produce an iterator, which the loop then uses.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Let&apos;s compare&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;to&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..in

```

&#xA0;to illustrate the difference:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>a<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>b<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>c<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>d<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>e<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> a) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( idx );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 1 2 3 4</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> a) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;a&quot; &quot;b&quot; &quot;c&quot; &quot;d&quot; &quot;e&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">As you can see,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..in

```

&#xA0;loops over the keys/indexes in the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

&#xA0;array, while&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;loops over the values in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">a

```

.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here&apos;s the pre-ES6 version of the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;from that previous snippet:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>a<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>b<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>c<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>d<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>e<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>],
    k <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">keys</span>( a );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val, i <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>; i <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&lt;</span> k.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>; i<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">++</span>) {
    val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a[ k[i] ];
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;a&quot; &quot;b&quot; &quot;c&quot; &quot;d&quot; &quot;e&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">And here&apos;s the ES6 but non-<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;equivalent, which also gives a glimpse at manually iterating an iterator (see &quot;Iterators&quot; in Chapter 3):</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>a<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>b<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>c<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>d<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>e<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val, ret, it <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">iterator</span>]();
    (ret <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> it.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">next</span>()) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&amp;&amp;</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!</span>ret.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">done</span>;
) {
    val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> ret.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">value</span>;
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;a&quot; &quot;b&quot; &quot;c&quot; &quot;d&quot; &quot;e&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Under the covers, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;loop asks the iterable for an iterator (using the built-in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">Symbol.iterator

```

; see &quot;Well-Known Symbols&quot; in Chapter 7), then it repeatedly calls the iterator and assigns its produced value to the loop iteration variable.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Standard built-in values in JavaScript that are by default iterables (or provide them) include:</p><ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><li style="box-sizing: border-box;">Arrays</li><li style="box-sizing: border-box;">Strings</li><li style="box-sizing: border-box;">Generators (see Chapter 3)</li><li style="box-sizing: border-box;">Collections / TypedArrays (see Chapter 5)</li></ul><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Warning:</strong>&#xA0;Plain objects are not by default suitable for&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;looping. That&apos;s because they don&apos;t have a default iterator, which is intentional, not a mistake. However, we won&apos;t go any further into those nuanced reasonings here. In &quot;Iterators&quot; in Chapter 3, we&apos;ll see how to define iterators for our own objects, which lets&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;loop over any object to get a set of values we define.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">Here&apos;s how to loop over the characters in a primitive string:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">&quot;</span>hello<span class="pl-pds" style="box-sizing: border-box;">&quot;</span></span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( c );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// &quot;h&quot; &quot;e&quot; &quot;l&quot; &quot;l&quot; &quot;o&quot;</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">The&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">&quot;hello&quot;

```

&#xA0;primitive string value is coerced/boxed to the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">String

```

&#xA0;object wrapper equivalent, which is an iterable by default.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">In&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for (XYZ of ABC)..

```

, the&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">XYZ

```

&#xA0;clause can either be an assignment expression or a declaration, identical to that same clause in&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for

```

&#xA0;and&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..in

```

&#xA0;loops. So you can do stuff like this:</p><div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>]) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> ({x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> [ {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>}, {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>}, {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>} ]) {
  <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></div><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">for..of

```

&#xA0;loops can be prematurely stopped, just like other loops, with&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">break

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">continue

```

,&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return

```

&#xA0;(if in a function), and thrown exceptions. In any of these cases, the iterator&apos;s&#xA0;<code style="box-sizing: border-box; font-family: Consolas, &apos;Liberation Mono&apos;, Menlo, Courier, monospace; font-size: 13.6000003814697px; padding: 0.2em 0px; margin: 0px; background-color: rgba(0, 0, 0, 0.0392157);">return(..)

```

&#xA0;function is automatically called (if one exists) to let the iterator perform cleanup tasks, if necessary.</p><p style="box-sizing: border-box; margin-bottom: 16px; font-family: &apos;Helvetica Neue&apos;, Helvetica, &apos;Segoe UI&apos;, Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;"><strong style="box-sizing: border-box;">Note:</strong>&#xA0;See &quot;Iterators&quot; in Chapter 3 for more complete coverage on iterables and iterators.</p></div>
### Scope
Every ran into the situation where you wanted variable to be local, well ES6 has let. Let lets you specify a variable that will only be avaialble to the block scope it was defined in. Block scope? Yes, a block scope is any two curly braces &quot;{ }&quot;.
### let
### const
### http://www.es6fiddle.net/iefr1n09/
### title
### 6 ES6 features you should use now
###  6 ES6 features you can't miss
# Brain Dump
<span id="docs-internal-guid-a5f09b5a-5ba1-1acd-25b5-ce2a8d1c6b2f"><h1 dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;text-align: center;"><span style="font-size: 21.3333333333333px; font-family: &apos;Trebuchet MS&apos;; color: rgb(0, 0, 0); font-weight: 400; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">BRAINSTORM </span></h1><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Physically storing your data at friends&#x2019; makes more sense</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;"><br class="kix-line-break"></span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">than &#x201C;in the cloud&#x201D; for privacy concerns. Once deployed we want to document</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;"><br class="kix-line-break"></span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">the inner workings and setting-up process of the network.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Create a qa website where you submit your while code and people can look at it</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">ask people to join you in teaching (show the people from your major who can help you)</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">share your notes to learn.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">when loading provide some entertainment (user created images).</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">the idea that we have different approaches to learning a new subject.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">seperate representation from implementation.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Take a document and turn a written document to mindmap or visual.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Pull changes to the concepts and notify users.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">one alternative idea of branchit is to scan a book for relative information and tells you to read specific sections that will solve your proble</span><span style="font-size: 14.6666666666667px; font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">m.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Scratch to reveal ur prize (saw it on easel js) </span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Browser extension to look for courses when accessing a website. </span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Put a lot of examples that the user can change to understand more. </span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Other users can explain parts of the concept that seems to be vague by users who have the same major and age. </span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Suggested and what people are currently learning (trends) </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:2.4;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Copy parts of a certain texts you read from the web and add them to your collection of notes, Example, I saw someone mentioning a point about why I use Backbone with Rails?</span></p></li></ul><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept has many sub-concpets (sub skills are more advanced level) and relationship can be optional (you don&apos;t have to master this sk</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">ill)</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concepts has many examples</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept has many exercises (practices)</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept : description (the explanation of the concept)</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">user has many notes linked to each concept (inner table)</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">join a squad of the users with the same skills, finish a team task and win a badge </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">learn from my project (uses code editor) &#x2026;</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Donate for a person who taught you something, just tip him.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Taking the users input on how long it takes them to finish a task(average), the calendar (per week) , come up with a plan if , if it satisfies the user, then we rank it up, if not we vote it down</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Create different Mirrors for all branches (profiles). Users will get an &quot;optimized content as close as possible to what they already know. People with history major get the history of the mathmatician who created a an equation. </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">I am gonna use the profile of a Arab -&gt; Scientific -&gt; Math -&gt; Programmer -&gt; Java </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Map KHAN ACADEMY !</span></p></li></ul><br><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">SCRUM : </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Build a Java tutorial and challenge it to be the best Java tutorial ever or it could be the best JS tutorial in the world !</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;"> prototype version.</span></p></li></ul><br><br><br><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Iron man style of concepts visualization.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Things that requires the machine to take longer can tell the user to wait for a little bit (maybe a day till everything is ready)</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">People get confused when you lower the level of complexity of your explanation.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Training computer to know the attention span of users. Warming the user up in the beginning of each session. </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">get the first example, don&apos;t understand, move to another one. Examples are tailored for the types of users.if a user doesn&apos;t understand something, give him the alternative explanation from another user.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Suggest a branch to user while typing. </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Look at me coding this, screen videos // for Q&amp;A</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">There are many ways to do something, if there&apos;s a feature in a language that can make things easier, we say so ...</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Examples generated by users (code snipets) </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><a href="http://en.wikibooks.org/wiki/Java_Programming" target="_blank"><span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://en.wikibooks.org/wiki/Java_Programming</span></a><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: good resource for finding content</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><a href="http://en.wikiversity.org/wiki/Learning_Java" target="_blank"><span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://en.wikiversity.org/wiki/Learning_Java</span></a><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: Java Tutorial, scroll down were levels are created.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><a href="http://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html" target="_blank"><span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html</span></a><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: Oracles tutorial</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Design must be simple and clear. No multiple pages to get to the information. W3School succeeded because it doesn&apos;t make you think.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Users contribute to the avatar too. </span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Arrays are variables also, how do I stack them as concepts but link them as explanation? make everything a concept?</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">go through the concepts and then unlock more concepts as you go through everything &#x2026; Or concepts align according to your level?</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">what&apos;s the line between an explanation and a concept? explanation is a weak concept that can stand by its own.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">how to implement a diff feature for comparison between languages?for example, java has all these features and compared to javascript, this is the difference &#x2026;&#x2026;</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">combine classes and objects together, the writer of the course or language has to reuse the current concepts and does a diff to them?</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Map your skills</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">explanations has levels , users will be notified once they reach a certain level that a concept is opened for them to view it. They can open an explanation if they want, but they are notified that this concept is a little beyond the basics.</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">give +1 or +Number for every action a user make</span></p></li></ul><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(0, 0, 0); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">THE CODE EDITOR:</span></p></li><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: circle; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Paste your code and get what references to look out in our website?</span></p></li><li dir="ltr" style="list-style-type: circle; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">use Ace, user pastes the code and then clicks analyze, </span></p></li><li dir="ltr" style="list-style-type: circle; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">we go through the code (search for foldings?), </span></p></li><li dir="ltr" style="list-style-type: circle; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">then get what&apos;s the current rules is being used to highlight? (look at the highlighting rules and then extend then hook to them to do something?)</span></p></li></ul></ul><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;margin-left: 36pt;"><span style="font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;"> &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;look for the concept and link to it.</span></p><br><br><br><ul style="margin-top:0pt;margin-bottom:0pt;"><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Play game and generate code behind it. </span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; background-color: transparent;"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Use google glass to make users see content related to their knowledge. </span></p></li></ul><br></span>
# Resources
### https://drive.google.com/open?id=0B9tPYCpuqoIreGR3RVlkdDhsMHc
