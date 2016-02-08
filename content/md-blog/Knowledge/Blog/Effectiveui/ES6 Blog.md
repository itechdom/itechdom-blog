# Concepts
### Active voice
### Tasia wrote this
### my tips and my experience
### Educational Voice
### 500 - 700 words
### features
### Spread && Rest
## A really convinient feature. Specially when creating functions.

## Spread/Rest

ES6 introduces a new `...` operator that's typically referred to as the _spread_ or _rest_ operator, depending on where/how it's used. Let's take a look:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>,<span class="pl-smi" style="box-sizing: border-box;">z</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( ...[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>] );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

When `...` is used in front of an array (actually, any _iterable_, which we cover in Chapter 3), it acts to "spread" it out into its individual values.

You'll typically see that usage as is shown in that previous snippet, when spreading out an array as a set of arguments to a function call. In this usage, `...` acts to give us a simpler syntactic replacement for the `apply(..)` method, which we would typically have used pre-ES6 as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">foo.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">apply</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>] );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

But `...` can be used to spread out/expand a value in other contexts as well, such as inside another array declaration:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></pre>

</div>

In this usage, `...` is basically replacing `concat(..)`, as it behaves like `[1].concat( a, [5] )` here.

The other common usage of `...` can be seen as essentially the opposite; instead of spreading a value out, the `...`_gathers_ a set of values together into an array. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 [3,4,5]</span></pre>

</div>

The `...z` in this snippet is essentially saying: "gather the _rest_ of the arguments (if any) into an array called `z`." Because`x` was assigned `1`, and `y` was assigned `2`, the rest of the arguments `3`, `4`, and `5` were gathered into `z`.

Of course, if you don't have any named parameters, the `...` gathers all arguments:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(...<span class="pl-smi" style="box-sizing: border-box;">args</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( args );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>);            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></pre>

</div>

**Note:** The `...args` in the `foo(..)` function declaration is usually called "rest parameters," because you're collecting the rest of the parameters. I prefer "gather," because it's more descriptive of what it does rather than what it contains.

The best part about this usage is that it provides a very solid alternative to using the long-since-deprecated `arguments`array -- actually, it's not really an array, but an array-like object. Because `args` (or whatever you call it -- a lot of people prefer `r` or `rest`) is a real array, we can get rid of lots of silly pre-ES6 tricks we jumped through to make `arguments`into something we can treat as an array.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// doing things the new ES6 way</span>
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

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 4</span></pre>

</div>

The `...args` in the `foo(..)` function declaration gathers arguments, and the `...args` in the `console.log(..)` call spreads them out. That's a good illustration of the symmetric but opposite uses of the `...` operator.

Besides the `...` usage in a function declaration, there's another case where `...` is used for gathering values, and we'll look at it in the "Too Many, Too Few, Just Enough" section later in this chapter.
### Default Parameters
## Default Parameter Values

Perhaps one of the most common idioms in JavaScript relates to setting a default value for a function parameter. The way we've done this for years should look quite familiar:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 11</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17</span></pre>

</div>

Of course, if you've used this pattern before, you know that it's both helpful and a little bit dangerous, if for example you need to be able to pass in what would otherwise be considered a falsy value for one of the parameters. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 53 <-- Oops, not 42</span></pre>

</div>

Why? Because the `0` is falsy, and so the `x || 11` results in `11`, not the directly passed in `0`.

To fix this gotcha, some people will instead write the check more verbosely like this:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17</span></pre>

</div>

Of course, that means that any value except `undefined` can be directly passed in. However, `undefined` will be assumed to signal, "I didn't pass this in." That works great unless you actually need to be able to pass `undefined` in.

In that case, you could test to see if the argument is actually omitted, by it actually not being present in the `arguments`array, perhaps like this:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> arguments) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>;
    y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> arguments) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>;

    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// NaN</span></pre>

</div>

But how would you omit the first `x` argument without the ability to pass in any kind of value (not even `undefined`) that signals "I'm omitting this argument"?

`foo(,5)` is tempting, but it's invalid syntax. `foo.apply(null,[,5])` seems like it should do the trick, but `apply(..)`'s quirks here mean that the arguments are treated as `[undefined,5]`, which of course doesn't omit.

If you investigate further, you'll find you can only omit arguments on the end (i.e., righthand side) by simply passing fewer arguments than "expected," but you cannot omit arguments in the middle or at the beginning of the arguments list. It's just not possible.

There's a principle applied to JavaScript's design here that is important to remember: `undefined` means _missing_. That is, there's no difference between `undefined` and _missing_, at least as far as function arguments go.

**Note:** There are, confusingly, other places in JS where this particular design principle doesn't apply, such as for arrays with empty slots. See the _Types & Grammar_ title of this series for more information.

With all this in mind, we can now examine a nice helpful syntax added as of ES6 to streamline the assignment of default values to missing arguments:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 11</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 36 <-- `undefined` is missing</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 5  <-- null coerces to `0`</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 17 <-- `undefined` is missing</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 6  <-- null coerces to `0`</span></pre>

</div>

Notice the results and how they imply both subtle differences and similarities to the earlier approaches.

`x = 11` in a function declaration is more like `x !== undefined ? x : 11` than the much more common idiom `x || 11`, so you'll need to be careful in converting your pre-ES6 code to this ES6 default parameter value syntax.

**Note:** A rest/gather parameter (see "Spread/Rest") cannot have a default value. So, while `function foo(...vals=[1,2,3]) {` might seem an intriguing capability, it's not valid syntax. You'll need to continue to apply that sort of logic manually if necessary.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#default-value-expressions)Default Value Expressions

Function default values can be more than just simple values like `31`; they can be any valid expression, even a function call:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>(<span class="pl-smi" style="box-sizing: border-box;">val</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar called!<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> val;
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">y</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">bar</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> )) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, z );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>;
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "bar called"</span>
                                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 8 13</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "bar called"</span>
                                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 15</span>
y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>;
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 9 10</span></pre>

</div>

As you can see, the default value expressions are lazily evaluated, meaning they're only run if and when they're needed -- that is, when a parameter's argument is omitted or is `undefined`.

It's a subtle detail, but the formal parameters in a function declaration are in their own scope (think of it as a scope bubble wrapped around just the `( .. )` of the function declaration), not in the function body's scope. That means a reference to an identifier in a default value expression first matches the formal parameters' scope before looking to an outer scope. See the _Scope & Closures_ title of this series for more information.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> w <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">w</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">x</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">z</span> + <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ReferenceError</span></pre>

</div>

The `w` in the `w + 1` default value expression looks for `w` in the formal parameters' scope, but does not find it, so the outer scope's `w` is used. Next, The `x` in the `x + 1` default value expression finds `x` in the formal parameters' scope, and luckily `x` has already been initialized, so the assignment to `y` works fine.

However, the `z` in `z + 1` finds `z` as a not-yet-initialized-at-that-moment parameter variable, so it never tries to find the `z` from the outer scope.

As we mentioned in the "`let` Declarations" section earlier in this chapter, ES6 has a TDZ, which prevents a variable from being accessed in its uninitialized state. As such, the `z + 1` default value expression throws a TDZ`ReferenceError` error.

Though it's not necessarily a good idea for code clarity, a default value expression can even be an inline function expression call -- commonly referred to as an immediately invoked function expression (IIFE):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
    (<span class="pl-smi" style="box-sizing: border-box;">function</span>(<span class="pl-smi" style="box-sizing: border-box;">v</span>){ <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11</span>; })( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">31</span> )
) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></pre>

</div>

There will very rarely be any cases where an IIFE (or any other executed inline function expression) will be appropriate for default value expressions. If you find yourself tempted to do this, take a step back and reevaluate!

**Warning:** If the IIFE had tried to access the `x` identifier and had not declared its own `x`, this would also have been a TDZ error, just as discussed before.

The default value expression in the previous snippet is an IIFE in that in the sense that it's a function that's executed right inline, via `(31)`. If we had left that part off, the default value assigned to `x` would have just been a function reference itself, perhaps like a default callback. There will probably be cases where that pattern will be quite useful, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">ajax</span>(<span class="pl-smi" style="box-sizing: border-box;">url</span>, <span class="pl-smi" style="box-sizing: border-box;">cb</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-smi" style="box-sizing: border-box;">function</span>(){}) {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">ajax</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>http://some.url.1<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

In this case, we essentially want to default `cb` to be a no-op empty function call if not otherwise specified. The function expression is just a function reference, not a function call itself (no invoking `()` on the end of it), which accomplishes that goal.

Since the early days of JS, there's been a little-known but useful quirk available to us: `Function.prototype` is itself an empty no-op function. So, the declaration could have been `cb = Function.prototype` and saved the inline function expression creation.
### Destructuring
## Destructuring

ES6 introduces a new syntactic feature called _destructuring_, which may be a little less confusing if you instead think of it as _structured assignment_. To understand this meaning, consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> tmp <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>(),
    a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>], c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

As you can see, we created a manual assignment of the values in the array that `foo()` returns to individual variables `a`,`b`, and `c`, and to do so we (unfortunately) needed the `tmp` variable.

Similarly, we can do the following with objects:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> {
        x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,
        y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>,
        z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>
    };
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> tmp <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>(),
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tmp.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></pre>

</div>

The `tmp.x` property value is assigned to the `x` variable, and likewise for `tmp.y` to `y` and `tmp.z` to `z`.

Manually assigning indexed values from an array or properties from an object can be thought of as _structured assignment_. ES6 adds a dedicated syntax for _destructuring_, specifically _array destructuring_ and _object destructuring_. This syntax eliminates the need for the `tmp` variable in the previous snippets, making them much cleaner. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a, b, c ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></pre>

</div>

You're likely more accustomed to seeing syntax like `[a,b,c]` on the righthand side of an `=` assignment, as the value being assigned.

Destructuring symmetrically flips that pattern, so that `[a,b,c]` on the lefthand side of the `=` assignment is treated as a kind of "pattern" for decomposing the righthand side array value into separate variable assignments.

Similarly, `{ x: x, y: y, z: z }` specifies a "pattern" to decompose the object value from `bar()` into separate variable assignments.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#object-property-assignment-pattern)Object Property Assignment Pattern

Let's dig into that `{ x: x, .. }` syntax from the previous snippet. If the property name being matched is the same as the variable you want to declare, you can actually shorten the syntax:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, y, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></pre>

</div>

Pretty cool, right?

But is `{ x, .. }` leaving off the `x:` part or leaving off the `: x` part? We're actually leaving off the `x:` part when we use the shorter syntax. That may not seem like an important detail, but you'll understand its importance in just a moment.

If you can write the shorter form, why would you ever write out the longer form? Because that longer form actually allows you to assign a property to a different variable name, which can sometimes be quite useful:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bam, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> baz, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bap } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( bam, baz, bap );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ReferenceError</span></pre>

</div>

There's a subtle but super-important quirk to understand about this variation of the object destructuring form. To illustrate why it can be a gotcha you need to be careful of, let's consider the "pattern" of how normal object literals are specified:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> X <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, Y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y };

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 20</span></pre>

</div>

In `{ a: X, b: Y }`, we know that `a` is the object property, and `X` is the source value that gets assigned to it. In other words, the syntactic pattern is `target: source`, or more obviously, `property-alias: value`. We intuitively understand this because it's the same as `=` assignment, where the pattern is `target = source`.

However, when you use object destructuring assignment -- that is, putting the `{ .. }` object literal-looking syntax on the lefthand side of the `=` operator -- you invert that `target: source` pattern.

Recall:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bam, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> baz, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bap } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();</pre>

</div>

The syntactic pattern here is `source: target` (or `value: variable-alias`). `x: bam` means the `x` property is the source value and `bam` is the target variable to assign to. In other words, object literals are `target <-- source`, and object destructuring assignments are `source --> target`. See how that's flipped?

There's another way to think about this syntax though, which may help ease the confusion. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> aa <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, bb <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> aa, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> bb };
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span>     { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">AA</span>, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">BB</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">AA</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">BB</span> );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 20</span></pre>

</div>

In the `{ x: aa, y: bb }` line, the `x` and `y` represent the object properties. In the `{ x: AA, y: BB }` line, the `x` and the`y` _also_ represent the object properties.

Recall how earlier I asserted that `{ x, .. }` was leaving off the `x:` part? In those two lines, if you erase the `x:` and`y:` parts in that snippet, you're left only with `aa, bb` and `AA, BB`, which in effect -- only conceptually, not actually -- are assignments from `aa` to `AA` and from `bb` to `BB`.

So, that symmetry may help to explain why the syntactic pattern was intentionally flipped for this ES6 feature.

**Note:** I would have preferred the syntax to be `{ AA: x , BB: y }` for the destructuring assignment, as that would have preserved consistency of the more familiar `target: source` pattern for both usages. Alas, I'm having to train my brain for the inversion, as some readers may also have to do.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#not-just-declarations)Not Just Declarations

So far, we've used destructuring assignment with `var` declarations (of course, they could also use `let` and `const`), but destructuring is a general assignment operation, not just a declaration.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a, b, c, x, y, z;

[a,b,c] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
( { x, y, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></pre>

</div>

The variables can already be declared, and then the destructuring only does assignments, exactly as we've already seen.

**Note:** For the object destructuring form specifically, when leaving off a `var`/`let`/`const` declarator, we had to surround the whole assignment expression in `( )`, because otherwise the `{ .. }` on the lefthand side as the first element in the statement is taken to be a block statement instead of an object.

In fact, the assignment expressions (`a`, `y`, etc.) don't actually need to be just variable identifiers. Anything that's a valid assignment expression is allowed. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

[o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6</span></pre>

</div>

You can even use computed property expressions in the destructuring. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> which <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>x<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

( { [which]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o[which] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>() );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4</span></pre>

</div>

The `[which]:` part is the computed property, which results in `x` -- the property to destructure from the object in question as the source of the assignment. The `o[which]` part is just a normal object key reference, which equates to`o.x` as the target of the assignment.

You can use the general assignments to create object mappings/transformations, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">x</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">z</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

Or you can map an object to an array, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    a2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [];

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>], c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a2 );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></pre>

</div>

Or the other way around:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> ],
    o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

[ o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">b</span>, o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

Or you could reorder one array to another:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> ],
    a2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [];

[ a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>], a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>], a2[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a2 );                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [2,3,1]</span></pre>

</div>

You can even solve the traditional "swap two variables" task without a temporary variable:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;

[ y, x ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ x, y ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 20 10</span></pre>

</div>

**Warning:** Be careful: you shouldn't mix in declaration with assignment unless you want all of the assignment expressions _also_ to be treated as declarations. Otherwise, you'll get syntax errors. That's why in the earlier example I had to do `var a2 = []` separately from the `[ a2[0], .. ] = ..` destructuring assignment. It wouldn't make any sense to try `var [ a2[0], .. ] = ..`, because `a2[0]` isn't a valid declaration identifier; it also obviously couldn't implicitly create a `var a2 = []` declaration to use.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#repeated-assignments)Repeated Assignments

The object destructuring form allows a source property (holding any value type) to be listed multiple times. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> };

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></pre>

</div>

That also means you can both destructure a sub-object/array property and also capture the sub-object/array's value itself. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y }, a } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> } };

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
a;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// { x: 1 }</span>

( { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> X, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> Y, a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ Z ] } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ] } );

X.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">push</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );
Y[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>;

X;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [10,2]</span>
Y;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [10,2]</span>
Z;  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></pre>

</div>

A word of caution about destructuring: it may be tempting to list destructuring assignments all on a single line as has been done thus far in our discussion. However, it's a much better idea to spread destructuring assignment patterns over multiple lines, using proper indentation -- much like you would in JSON or with an object literal value -- for readability sake.

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// harder to read:</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ c, d ], e<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { f } }, g } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> obj;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// better:</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> {
    a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> [ c, d ],
        e<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { f }
    },
    g
} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> obj;</pre>

</div>

Remember: **the purpose of destructuring is not just less typing, but more declarative readability.**

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#destructuring-assignment-expressions)Destructuring Assignment Expressions

The assignment expression with object or array destructuring has as its completion value the full righthand object/array value. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    a, b, c, p;

p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a, b, c } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> o;                        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

In the previous snippet, `p` was assigned the `o` object reference, not one of the `a`, `b`, or `c` values. The same is true of array destructuring:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>],
    a, b, c, p;

p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ a, b, c ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> o;                        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

By carrying the object/array value through as the completion, you can chain destructuring assignment expressions together:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { a<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, b<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, c<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> },
    p <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>],
    a, b, c, x, y, z;

( {a} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {b,c} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o );
[x,y] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [z] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> p;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 4</span></pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#too-many-too-few-just-enough)Too Many, Too Few, Just Enough

With both array destructuring assignment and object destructuring assignment, you do not have to assign all the values that are present. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [,b] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b, x, z );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 4 6</span></pre>

</div>

The `1` and `3` values that came back from `foo()` are discarded, as is the `5` value from `bar()`.

Similarly, if you try to assign more values than are present in the value you're destructuring/decomposing, you get graceful fallback to `undefined`, as you'd expect:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [,,c,d] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { w, z } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( c, z );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 3 6</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( d, w );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></pre>

</div>

This behavior follows symmetrically from the earlier stated "`undefined` is missing" principle.

We examined the `...` operator earlier in this chapter, and saw that it can sometimes be used to spread an array value out into its separate values, and sometimes it can be used to do the opposite: to gather a set of values together into an array.

In addition to the gather/rest usage in function declarations, `...` can perform the same behavior in destructuring assignments. To illustrate, let's recall a snippet from earlier in this chapter:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3,4,5]</span></pre>

</div>

Here we see that `...a` is spreading `a` out, because it appears in the array `[ .. ]` value position. If `...a` appears in an array destructuring position, it performs the gather behavior:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ b, ...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">c</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( b, c );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 [3,4]</span></pre>

</div>

The `var [ .. ] = a` destructuring assignment spreads `a` out to be assigned to the pattern described inside the `[ .. ]`. The first part names `b` for the first value in `a` (`2`). But then `...c` gathers the rest of the values (`3` and `4`) into an array and calls it `c`.

**Note:** We've seen how `...` works with arrays, but what about with objects? It's not an ES6 feature, but see Chapter 8 for discussion of a possible "beyond ES6" feature where `...` works with spreading or gathering objects.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#default-value-assignment)Default Value Assignment

Both forms of destructuring can offer a default value option for an assignment, using the `=` syntax similar to the default function argument values discussed earlier.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, b <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span>, c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">9</span>, d <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">12</span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">15</span>, w <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c, d );          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3 12</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, w );          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6 20</span></pre>

</div>

You can combine the default value assignment with the alternative assignment expression syntax covered earlier. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x, y, z, w<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">WW</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">WW</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 5 6 20</span></pre>

</div>

Be careful about confusing yourself (or other developers who read your code) if you use an object or array as the default value in a destructuring. You can create some really hard to understand code:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">200</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">300</span>, z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">100</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> }, z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } };

( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );
( { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );
( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1 );</pre>

</div>

Can you tell from that snippet what values `x`, `y`, and `z` have at the end? Takes a moment of pondering, I would imagine. I'll end the suspense:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, y.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span>, z.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">y</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 300 100 42</span></pre>

</div>

The takeaway here: destructuring is great and can be very useful, but it's also a sharp sword that can cause injury (to someone's brain) if used unwisely.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-destructuring)Nested Destructuring

If the values you're destructuring have nested objects or arrays, you can destructure those nested values as well:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>], <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span> ];
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> } } };

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> [ a, [ b, c, d ], e ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a1;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { z<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> w } } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> o1;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a, b, c, d, e );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3 4 5</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( w );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 6</span></pre>

</div>

Nested destructuring can be a simple way to flatten out object namespaces. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> App <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    model<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">User</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){ .. }
    }
};

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// instead of:</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// var User = App.model.User;</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> { model<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> { User } } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> App;</pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#destructuring-parameters)Destructuring Parameters

In the following snippet, can you spot the assignment?

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> );</pre>

</div>

The assignment is kinda hidden: `42` (the argument) is assigned to `x` (the parameter) when `foo(42)` is executed. If parameter/argument pairing is an assignment, then it stands to reason that it's an assignment that could be destructured, right? Of course!

Consider array destructuring for parameters:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( [ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> ] ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ] );                    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> ] );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 undefined</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( [] );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></pre>

</div>

Object destructuring for parameters works, too:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>( { <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> } ) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>, x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> } );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 1</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span> } );                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( {} );                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined</span></pre>

</div>

This technique is an approximation of named arguments (a long requested feature for JS!), in that the properties on the object map to the destructured parameters of the same names. That also means that we get optional parameters (in any position) for free, as you can see leaving off the `x` "parameter" worked as we'd expect.

Of course, all the previously discussed variations of destructuring are available to us with parameter destructuring, including nested destructuring, default values, and more. Destructuring also mixes fine with other ES6 function parameter capabilities, like default parameter values and rest/gather parameters.

Consider these quick illustrations (certainly not exhaustive of the possible variations):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f1</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>, <span class="pl-smi" style="box-sizing: border-box;">z</span> ]) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f2</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], <span class="pl-smi" style="box-sizing: border-box;">w</span>) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f3</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], ...<span class="pl-smi" style="box-sizing: border-box;">w</span>) { .. }

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f4</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span>: <span class="pl-smi" style="box-sizing: border-box;">X</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> }) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f5</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span>: <span class="pl-smi" style="box-sizing: border-box;">X</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span> }) { .. }
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) { .. }</pre>

</div>

Let's take one example from this snippet and examine it, for illustration purposes:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f3</span>([ <span class="pl-smi" style="box-sizing: border-box;">x</span>, <span class="pl-smi" style="box-sizing: border-box;">y</span>, ...<span class="pl-smi" style="box-sizing: border-box;">z</span>], ...<span class="pl-smi" style="box-sizing: border-box;">w</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y, z, w );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f3</span>( [] );                           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// undefined undefined [] []</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f3</span>( [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>], <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">6</span> );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 [3,4] [5,6]</span></pre>

</div>

There are two `...` operators in use here, and they're both gathering values in arrays (`z` and `w`), though `...z` gathers from the rest of the values left over in the first array argument, while `...w` gathers from the rest of the main arguments left over after the first.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#destructuring-defaults--parameter-defaults)Destructuring Defaults + Parameter Defaults

There's one subtle point you should be particularly careful to notice -- the difference in behavior between a destructuring default value and a function parameter default value. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>();                               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span></pre>

</div>

At first, it would seem that we've declared a default value of `10` for both the `x` and `y` parameters, but in two different ways. However, these two different approaches will behave differently in certain cases, and the difference is awfully subtle.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, {} );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span></pre>

</div>

Wait, why did that happen? It's pretty clear that named parameter `x` is defaulting to `10` if not passed as a property of that same name in the first argument's object.

But what about `y` being `undefined`? The `{ y: 10 }` value is an object as a function parameter default value, not a destructuring default value. As such, it only applies if the second argument is not passed at all, or is passed as`undefined`.

In the previous snippet, we _are_ passing a second argument (`{}`), so the default `{ y: 10 }` value is not used, and the `{ y }` destructuring occurs against the passed in `{}` empty object value.

Now, compare `{ y } = { y: 10 }` to `{ x = 10 } = {}`.

For the `x`'s form usage, if the first function argument is omitted or `undefined`, the `{}` empty object default applies. Then, whatever value is in the first argument position -- either the default `{}` or whatever you passed in -- is destructured with the `{ x = 10 }`, which checks to see if an `x` property is found, and if not found (or `undefined`), the`10` default value is applied to the `x` named parameter.

Deep breath. Read back over those last few paragraphs a couple of times. Let's review via code:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">f6</span>({ <span class="pl-smi" style="box-sizing: border-box;">x</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {}, { <span class="pl-smi" style="box-sizing: border-box;">y</span> } <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { <span class="pl-smi" style="box-sizing: border-box;">y</span>: <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span> }) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>();                               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span> );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 10</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( {}, {} );                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>, {} );                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 10 undefined</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">f6</span>( { x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> }, { y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> } );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2 3</span></pre>

</div>

It would generally seem that the defaulting behavior of the `x` parameter is probably the more desirable and sensible case compared to that of `y`. As such, it's important to understand why and how `{ x = 10 } = {}` form is different from`{ y } = { y: 10 }` form.

If that's still a bit fuzzy, go back and read it again, and play with this yourself. Your future self will thank you for taking the time to get this very subtle gotcha nuance detail straight.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-defaults-destructured-and-restructured)Nested Defaults: Destructured and Restructured

Although it may at first be difficult to grasp, an interesting idiom emerges for setting defaults for a nested object's properties: using object destructuring along with what I'd call _restructuring_.

Consider a set of defaults in a nested object structure, like the following:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// taken from: http://es-discourse.com/t/partial-default-arguments/120/7</span>

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
};</pre>

</div>

Now, let's say that you have an object called `config`, which has some of these applied, but perhaps not all, and you'd like to set all the defaults into this object in the missing spots, but not override specific settings already present:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> config <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    options<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> {
        remove<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span>,
        instance<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">null</span>
    }
};</pre>

</div>

You can of course do so manually, as you might have done in the past:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> {};
config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span>
    config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">remove</span>;
config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">undefined</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span>
    config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> defaults.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">enable</span>;
...</pre>

</div>

Yuck.

Others may prefer the assign-overwrite approach to this task. You might be tempted by the ES6 `Object.assign(..)`utility (see Chapter 6) to clone the properties first from `defaults` and then overwritten with the cloned properties from`config`, as so:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">assign</span>( {}, defaults, config );</pre>

</div>

That looks way nicer, huh? But there's a major problem! `Object.assign(..)` is shallow, which means when it copies`defaults.options`, it just copies that object reference, not deep cloning that object's properties to a `config.options`object. `Object.assign(..)` would need to be applied (sort of "recursively") at all levels of your object's tree to get the deep cloning you're expecting.

**Note:** Many JS utility libraries/frameworks provide their own option for deep cloning of an object, but those approaches and their gotchas are beyond our scope to discuss here.

So let's examine if ES6 object destructuring with defaults can help at all:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">options</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span> {};
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
} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> config;</pre>

</div>

Not as nice as the false promise of `Object.assign(..)` (being that it's shallow only), but it's better than the manual approach by a fair bit, I think. It is still unfortunately verbose and repetitive, though.

The previous snippet's approach works because I'm hacking the destructuring and defaults mechansim to do the property `=== undefined` checks and assignment decisions for me. It's a trick in that I'm destructuring `config` (see the `= config` at the end of the snippet), but I'm reassigning all the destructured values right back into `config`, with the`config.options.enable` assignment references.

Still too much, though. Let's see if we can make anything better.

The following trick works best if you know that all the various properties you're destructuring are uniquely named. You can still do it even if that's not the case, but it's not as nice -- you'll have to do the destructuring in stages, or create unique local variables as temporary aliases.

If we fully destructure all the properties into top-level variables, we can then immediately restructure to reconstitute the original nested object structure.

But all those temporary variables hanging around would pollute scope. So, let's use block scoping (see "Block-Scoped Declarations" earlier in this chapter) with a general `{ }` enclosing block:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// merge `defaults` into `config`</span>
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
}</pre>

</div>

That seems a fair bit nicer, huh?

**Note:** You could also accomplish the scope enclosure with an arrow IIFE instead of the general `{ }` block and `let`declarations. Your destructuring assignments/defaults would be in the parameter list and your restructuring would be the `return` statement in the function body.

The `{ warn, error }` syntax in the restructuring part may look new to you; that's called "concise properties" and we cover it in the next section!
### Object Literal Extensions
## Object Literal Extensions

ES6 adds a number of important convenience extensions to the humble `{ .. }` object literal.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#concise-properties)Concise Properties

You're certainly familiar with declaring object literals in this form:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> x,
        y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> y
    };</pre>

</div>

If it's always felt redundant to say `x: x` all over, there's good news. If you need to define a property that is the same name as a lexical identifier, you can shorten it from `x: x` to `x`. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>, y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,
    o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        x,
        y
    };</pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#concise-methods)Concise Methods

In a similar spirit to concise properties we just examined, functions attached to properties in object literals also have a concise form, for convenience.

The old way:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">x</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    },
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">y</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
}</pre>

</div>

And as of ES6:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">x</span>() {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    },
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">y</span>() {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
}</pre>

</div>

**Warning:** While `x() { .. }` seems to just be shorthand for `x: function(){ .. }`, concise methods have special behaviors that their older counterparts don't; specifically, the allowance for `super` (see "Object `super`" later in this chapter).

Generators (see Chapter 4) also have a concise method form:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() { .. }
};</pre>

</div>

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#concisely-unnamed)Concisely Unnamed

While that convenience shorthand is quite attractive, there's a subtle gotcha to be aware of. To illustrate, let's examine pre-ES6 code like the following, which you might try to refactor to use concise methods:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">runSomething</span>(<span class="pl-smi" style="box-sizing: border-box;">o</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Math</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">random</span>(),
        y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Math</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">random</span>();

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( x, y );
}

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> y) {
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// recursively call with `x`</span>
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// and `y` swapped</span>
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</pre>

</div>

This obviously silly code just generates two random numbers and subtracts the smaller from the bigger. But what's important here isn't what it does, but rather how it's defined. Let's focus on the object literal and function definition, as we see here:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
} );</pre>

</div>

Why do we say both `something:` and `function something`? Isn't that redundant? Actually, no, both are needed for different purposes. The property `something` is how we can call `o.something(..)`, sort of like its public name. But the second `something` is a lexical name to refer to the function from inside itself, for recursion purposes.

Can you see why the line `return something(y,x)` needs the name `something` to refer to the function? There's no lexical name for the object, such that it could have said `return o.something(y,x)` or something of that sort.

That's actually a pretty common practice when the object literal does have an identifying name, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
    }
};</pre>

</div>

Is this a good idea? Perhaps, perhaps not. You're assuming that the name `controller` will always point to the object in question. But it very well may not -- the `makeRequest(..)` function doesn't control the outer code and so can't force that to be the case. This could come back to bite you.

Others prefer to use `this` to define such things:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
    }
};</pre>

</div>

That looks fine, and should work if you always invoke the method as `controller.makeRequest(..)`. But you now have a`this` binding gotcha if you do something like:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>click<span class="pl-pds" style="box-sizing: border-box;">"</span></span>, controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );</pre>

</div>

Of course, you can solve that by passing `controller.makeRequest.bind(controller)` as the handler reference to bind the event to. But yuck -- it isn't very appealing.

Or what if your inner `this.makeRequest(..)` call needs to be made from a nested function? You'll have another `this`binding hazard, which people will often solve with the hacky `var self = this`, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> self <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>;

        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>click<span class="pl-pds" style="box-sizing: border-box;">"</span></span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            self.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</pre>

</div>

More yuck.

**Note:** For more information on `this` binding rules and gotchas, see Chapters 1-2 of the _this & Object Prototypes_ title of this series.

OK, what does all this have to do with concise methods? Recall our `something(..)` method definition:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
} );</pre>

</div>

The second `something` here provides a super convenient lexical identifier that will always point to the function itself, giving us the perfect reference for recursion, event binding/unbinding, and so on -- no messing around with `this` or trying to use an untrustable object reference.

Great!

So, now we try to refactor that function reference to this ES6 concise method form:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> y) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</pre>

</div>

Seems fine at first glance, except this code will break. The `return something(..)` call will not find a `something`identifier, so you'll get a `ReferenceError`. Oops. But why?

The above ES6 snippet is interpreted as meaning:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">runSomething</span>( {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">something</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> y) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">something</span>( y, x );
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span> x;
    }
} );</pre>

</div>

Look closely. Do you see the problem? The concise method definition implies `something: function(x,y)`. See how the second `something` we were relying on has been omitted? In other words, concise methods imply anonymous function expressions.

Yeah, yuck.

**Note:** You may be tempted to think that `=>` arrow functions are a good solution here, but they're equally insufficient, as they're also anonymous function expressions. We'll cover them in "Arrow Functions" later in this chapter.

The partially redeeming news is that our `something(x,y)` concise method won't be totally anonymous. See "Function Names" in Chapter 7 for information about ES6 function name inference rules. That won't help us for our recursion, but it helps with debugging at least.

So what are we left to conclude about concise methods? They're short and sweet, and a nice convenience. But you should only use them if you're never going to need them to do recursion or event binding/unbinding. Otherwise, stick to your old-school `something: function something(..)` method definitions.

A lot of your methods are probably going to benefit from concise method definitions, so that's great news! Just be careful of the few where there's an un-naming hazard.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#es5-gettersetter)ES5 Getter/Setter

Technically, ES5 defined getter/setter literals forms, but they didn't seem to get used much, mostly due to the lack of transpilers to handle that new syntax (the only major new syntax added in ES5, really). So while it's not a new ES6 feature, we'll briefly refresh on that form, as it's probably going to be much more useful with ES6 going forward.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
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
o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">__id</span>;         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 21 -- still!</span></pre>

</div>

These getter and setter literal forms are also present in classes; see Chapter 3.

**Warning:** It may not be obvious, but the setter literal must have exactly one declared parameter; omitting it or listing others is illegal syntax. The single required parameter _can_ use destructuring and defaults (e.g., `set id({ id: v = 0 }) { .. }`), but the gather/rest `...` is not allowed (`set id(...v) { .. }`).

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#computed-property-names)Computed Property Names

You've probably been in a situation like the following snippet, where you have one or more property names that come from some sort of expression and thus can't be put into the object literal:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>user_<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">baz</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. }
};

o[ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. };
o[ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. };
..</pre>

</div>

ES6 adds a syntax to the object literal definition which allows you to specify an expression that should be computed, whose result is the property name assigned. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>user_<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">baz</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. },
    [ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. },
    [ prefix <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){ .. }
    ..
};</pre>

</div>

Any valid expression can appear inside the `[ .. ]` that sits in the property name position of the object literal definition.

Probably the most common use of computed property names will be with `Symbol`s (which we cover in "Symbols" later in this chapter), such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    [Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toStringTag</span>]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>really cool thing<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    ..
};</pre>

</div>

`Symbol.toStringTag` is a special built-in value, which we evaluate with the `[ .. ]` syntax, so we can assign the `"really cool thing"` value to the special property name.

Computed property names can also appear as the name of a concise method or a concise generator:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>f<span class="pl-pds" style="box-sizing: border-box;">"</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>oo<span class="pl-pds" style="box-sizing: border-box;">"</span></span>]() { .. }   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// computed concise method</span>
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span>[<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>b<span class="pl-pds" style="box-sizing: border-box;">"</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ar<span class="pl-pds" style="box-sizing: border-box;">"</span></span>]() { .. }  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// computed concise generator</span>
};</pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#setting-prototype)Setting `[[Prototype]]`

We won't cover prototypes in detail here, so for more information, see the _this & Object Prototypes_ title of this series.

Sometimes it will be helpful to assign the `[[Prototype]]` of an object at the same time you're declaring its object literal. The following has been a nonstandard extension in many JS engines for a while, but is standardized as of ES6:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    __proto__<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o1,
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};</pre>

</div>

`o2` is declared with a normal object literal, but it's also `[[Prototype]]`-linked to `o1`. The `__proto__` property name here can also be a string `"__proto__"`, but note that it _cannot_ be the result of a computed property name (see the previous section).

`__proto__` is controversial, to say the least. It's a decades-old proprietary extension to JS that is finally standardized, somewhat begrudgingly it seems, in ES6\. Many developers feel it shouldn't ever be used. In fact, it's in "Annex B" of ES6, which is the section that lists things JS feels it has to standardize for compatibility reasons only.

**Warning:** Though I'm narrowly endorsing `__proto__` as a key in an object literal definition, I definitely do not endorse using it in its object property form, like `o.__proto__`. That form is both a getter and setter (again for compatibility reasons), but there are definitely better options. See the _this & Object Prototypes_ title of this series for more information.

For setting the `[[Prototype]]` of an existing object, you can use the ES6 utility `Object.setPrototypeOf(..)`. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">setPrototypeOf</span>( o2, o1 );</pre>

</div>

**Note:** We'll discuss `Object` again in Chapter 6\. "`Object.setPrototypeOf(..)` Static Function" provides additional details on `Object.setPrototypeOf(..)`. Also see "`Object.assign(..)` Static Function" for another form that relates `o2`prototypically to `o1`.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#object-super)Object `super`

`super` is typically thought of as being only related to classes. However, due to JS's classless-objects-with-prototypes nature, `super` is equally effective, and nearly the same in behavior, with plain objects' concise methods.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>o1:foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
    }
};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>() {
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">super</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>o2:foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
    }
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">setPrototypeOf</span>( o2, o1 );

o2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>();       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// o1:foo</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// o2:foo</span></pre>

</div>

**Warning:** `super` is only allowed in concise methods, not regular function expression properties. It also is only allowed in `super.XXX` form (for property/method access), not in `super()` form.

The `super` reference in the `o2.foo()` method is locked statically to `o2`, and specifically to the `[[Prototype]]` of `o2`.`super` here would basically be `Object.getPrototypeOf(o2)` -- resolves to `o1` of course -- which is how it finds and calls`o1.foo()`.

For complete details on `super`, see "Classes" in Chapter 3.
### Template Literals
## Strings on mutiple lines, yes! We are used to using libraries when creating template literals. Inter-op specifically. 

## Template Literals

At the very outset of this section, I'm going to have to call out the name of this ES6 feature as being awfully... misleading, depending on your experiences with what the word _template_ means.

Many developers think of templates as being reusable renderable pieces of text, such as the capability provided by most template engines (Mustache, Handlebars, etc.). ES6's use of the word _template_ would imply something similar, like a way to declare inline template literals that can be re-rendered. However, that's not at all the right way to think about this feature.

So, before we go on, I'm renaming to what it should have been called: _interpolated string literals_ (or _interpoliterals_ for short).

You're already well aware of declaring string literals with `"` or `'` delimiters, and you also know that these are not _smart strings_ (as some languages have), where the contents would be parsed for interpolation expressions.

However, ES6 introduces a new type of string literal, using the ``` backtick as the delimiter. These string literals allow basic string interpolation expressions to be embedded, which are then automatically parsed and evaluated.

Here's the old pre-ES6 way:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> greeting <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>Hello <span class="pl-pds" style="box-sizing: border-box;">"</span></span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>!<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( greeting );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "Hello Kyle!"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> greeting );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "string"</span></pre>

</div>

Now, consider the new ES6 way:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> greeting <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( greeting );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "Hello Kyle!"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> greeting );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "string"</span></pre>

</div>

As you can see, we used the ``..`` around a series of characters, which are interpreted as a string literal, but any expressions of the form `${..}` are parsed and evaluated inline immediately. The fancy term for such parsing and evaluating is _interpolation_ (much more accurate than templating).

The result of the interpolated string literal expression is just a plain old normal string, assigned to the `greeting` variable.

**Warning:** `typeof greeting == "string"` illustrates why it's important not to think of these entities as special template values, as you cannot assign the unevaluated form of the literal to something and reuse it. The ``..`` string literal is more like an IIFE in the sense that it's automatically evaluated inline. The result of a ``..`` string literal is, simply, just a string.

One really nice benefit of interpolated string literals is they are allowed to split across multiple lines:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Now is the time for all good men</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">to come to the aid of their</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">country!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Now is the time for all good men</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to come to the aid of their</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// country!</span></pre>

</div>

The line breaks (newlines) in the interpolated string literal were preserved in the string value.

Unless appearing as explicit escape sequences in the literal value, the value of the `\r` carriage return character (code point `U+000D`) or the value of the `\r\n` carriage return + line feed sequence (code points `U+000D` and `U+000A`) are both normalized to a `\n` line feed character (code point `U+000A`). Don't worry though; this normalization is rare and would likely only happen if copy-pasting text into your JS file.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#interpolated-expressions)Interpolated Expressions

Any valid expression is allowed to appear inside `${..}` in an interpolated string literal, including function calls, inline function expression calls, and even other interpolated string literals!

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">upper</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toUpperCase</span>();
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> who <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>reader<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>A very <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">upper</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>warm<span class="pl-pds" style="box-sizing: border-box;">"</span></span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span> welcome</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">to all of you <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">upper</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span><span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>who<span class="pl-pse" style="box-sizing: border-box;">}</span></span>s<span class="pl-pds" style="box-sizing: border-box;">`</span></span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// A very WARM welcome</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// to all of you READERS!</span></pre>

</div>

Here, the inner ``${who}s`` interpolated string literal was a little bit nicer convenience for us when combining the `who`variable with the `"s"` string, as opposed to `who + "s"`. There will be cases that nesting interpolated string literals is helpful, but be wary if you find yourself doing that kind of thing often, or if you find yourself nesting several levels deep.

If that's the case, the odds are good that your string value production could benefit from some abstractions.

**Warning:** As a word of caution, be very careful about the readability of your code with such new found power. Just like with default value expressions and destructuring assignment expressions, just because you _can_ do something doesn't mean you _should_ do it. Never go so overboard with new ES6 tricks that your code becomes more clever than you or your other team members.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#expression-scope)Expression Scope

One quick note about the scope that is used to resolve variables in expressions. I mentioned earlier that an interpolated string literal is kind of like an IIFE, and it turns out thinking about it like that explains the scoping behavior as well.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">str</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( str );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello from <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>global<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>();                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "Hello from bar!"</span></pre>

</div>

At the moment the ``..`` string literal is expressed, inside the `bar()` function, the scope available to it finds `bar()`'s`name` variable with value `"bar"`. Neither the global `name` nor `foo(..)`'s `name` matter. In other words, an interpolated string literal is just lexically scoped where it appears, not dynamically scoped in any way.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#tagged-template-literals)Tagged Template Literals

Again, renaming the feature for sanity sake: _tagged string literals_.

To be honest, this is one of the cooler tricks that ES6 offers. It may seem a little strange, and perhaps not all that generally practical at first. But once you've spent some time with it, tagged string literals may just surprise you in their usefulness.

For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( values );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>awesome<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

foo<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "Everything is ", "!"]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "awesome" ]</span></pre>

</div>

Let's take a moment to consider what's happening in the previous snippet. First, the most jarring thing that jumps out is`foo`Everything...`;`. That doesn't look like anything we've seen before. What is it?

It's essentially a special kind of function call that doesn't need the `( .. )`. The _tag_ -- the `foo` part before the ``..``string literal -- is a function value that should be called. Actually, it can be any expression that results in a function, even a function call that returns another function, like:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">bar</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
        <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( values );
    }
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>awesome<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">bar</span>()<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "Everything is ", "!"]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "awesome" ]</span></pre>

</div>

But what gets passed to the `foo(..)` function when invoked as a tag for a string literal?

The first argument -- we called it `strings` -- is an array of all the plain strings (the stuff between any interpolated expressions). We get two values in the `strings` array: `"Everything is "` and `"!"`.

For convenience sake in our example, we then gather up all subsequent arguments into an array called `values` using the `...` gather/rest operator (see the "Spread/Rest" section earlier in this chapter), though you could of course have left them as individual named parameters following the `strings` parameter.

The argument(s) gathered into our `values` array are the results of the already-evaluated interpolation expressions found in the string literal. So obviously the only element in `values` in our example is `"awesome"`.

You can think of these two arrays as: the values in `values` are the separators if you were to splice them in between the values in `strings`, and then if you joined everything together, you'd get the complete interpolated string value.

A tagged string literal is like a processing step after the interpolation expressions are evaluated but before the final string value is compiled, allowing you more control over generating the string from the literal.

Typically, the string literal tag function (`foo(..)` in the previous snippets) should compute an appropriate string value and return it, so that you can use the tagged string literal as a value just like untagged string literals:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">tag</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">?</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-pds" style="box-sizing: border-box;">"</span></span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>awesome<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> tag<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Everything is <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>desc<span class="pl-pse" style="box-sizing: border-box;">}</span></span>!<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Everything is awesome!</span></pre>

</div>

In this snippet, `tag(..)` is a pass-through operation, in that it doesn't perform any special modifications, but just uses`reduce(..)` to loop over and splice/interleave `strings` and `values` together the same way an untagged string literal would have done.

So what are some practical uses? There are many advanced ones that are beyond our scope to discuss here. But here's a simple idea that formats numbers as U.S. dollars (sort of like basic localization):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">dollabillsyall</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">==</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>number<span class="pl-pds" style="box-sizing: border-box;">"</span></span>) {
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// look, also using interpolated</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// string literals!</span>
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>$<span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toFixed</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span><span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
            }
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">else</span> {
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];
            }
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> amt1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">11.99</span>,
    amt2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> amt1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1.08</span>,
    name <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>Kyle<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> text <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> dollabillsyall
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Thanks for your purchase, <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>name<span class="pl-pse" style="box-sizing: border-box;">}</span></span>! Your</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">product cost was <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>amt1<span class="pl-pse" style="box-sizing: border-box;">}</span></span>, which with tax</span>
<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);">comes out to <span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>amt2<span class="pl-pse" style="box-sizing: border-box;">}</span></span>.<span class="pl-pds" style="box-sizing: border-box;">`</span></span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( text );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Thanks for your purchase, Kyle! Your</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// product cost was $11.99, which with tax</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// comes out to $12.95.</span></pre>

</div>

If a `number` value is encountered in the `values` array, we put `"$"` in front of it and format it to two decimal places with`toFixed(2)`. Otherwise, we let the value pass-through untouched.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#raw-strings)Raw Strings

In the previous snippets, our tag functions receive the first argument we called `strings`, which is an array. But there's an additional bit of data included: the raw unprocessed versions of all the strings. You can access those raw string values using the `.raw` property, like this:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">showraw</span>(<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings );
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span> );
}

showraw<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "Hello</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// World" ]</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "Hello\nWorld" ]</span></pre>

</div>

The raw version of the value preserves the raw escaped `\n` sequence (the `\` and the `n` are separate characters), while the processed version considers it a single newline character. However, the earlier mentioned line-ending normalization is applied to both values.

ES6 comes with a built-in function that can be used as a string literal tag: `String.raw(..)`. It simply passes through the raw versions of the `strings` values:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Hello</span>
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// World</span>

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span><span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Hello\nWorld</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">raw</span><span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>Hello<span class="pl-cce" style="box-sizing: border-box;">\n</span>World<span class="pl-pds" style="box-sizing: border-box;">`</span></span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 12</span></pre>

</div>

Other uses for string literal tags included special processing for internationalization, localization, and more!
### Arrow Functions
This is tied back to "let" except for functions. It really solves the problem of "this and that". By that I mean this:

<div>function OuterFunction(){</div>

<div>var that = this</div>

<div>function() innerFunction(){</div>

<div>that.value = hello;</div>

<div>}</div>

<div>}</div>

<div>  

## Arrow Functions

We've touched on `this` binding complications with functions earlier in this chapter, and they're covered at length in the_this & Object Prototypes_ title of this series. It's important to understand the frustrations that `this`-based programming with normal functions brings, because that is the primary motivation for the new ES6 `=>` arrow function feature.

Let's first illustrate what an arrow function looks like, as compared to normal functions:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">foo</span>(<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;
}

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// versus</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;</pre>

</div>

The arrow function definition consists of a parameter list (of zero or more parameters, and surrounding `( .. )` if there's not exactly one parameter), followed by the `=>` marker, followed by a function body.

So, in the previous snippet, the arrow function is just the `(x,y) => x + y` part, and that function reference happens to be assigned to the variable `foo`.

The body only needs to be enclosed by `{ .. }` if there's more than one expression, or if the body consists of a non-expression statement. If there's only one expression, and you omit the surrounding `{ .. }`, there's an implied `return`in front of the expression, as illustrated in the previous snippet.

Here's some other arrow function variations to consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> () <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">12</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> f3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">x</span>,<span class="pl-smi" style="box-sizing: border-box;">y</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> z <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y;
    y<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">++</span>;
    x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>;
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> (x <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> y <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> z) / <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
};</pre>

</div>

Arrow functions are _always_ function expressions; there is no arrow function declaration. It also should be clear that they are anonymous function expressions -- they have no named reference for the purposes of recursion or event binding/unbinding -- though "Function Names" in Chapter 7 will describe ES6's function name inference rules for debugging purposes.

**Note:** All the capabilities of normal function parameters are available to arrow functions, including default values, destructuring, rest parameters, and so on.

Arrow functions have a nice, shorter syntax, which makes them on the surface very attractive for writing terser code. Indeed, nearly all literature on ES6 (other than the titles in this series) seems to immediately and exclusively adopt the arrow function as "the new function."

It is telling that nearly all examples in discussion of arrow functions are short single statement utilities, such as those passed as callbacks to various utilities. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">5</span>];

a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">map</span>( v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> v <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( a );               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [2,4,6,8,10]</span></pre>

</div>

In those cases, where you have such inline function expressions, and they fit the pattern of computing a quick calculation in a single statement and returning that result, arrow functions indeed look to be an attractive and lightweight alternative to the more verbose `function` keyword and syntax.

Most people tend to _ooh and aah_ at nice terse examples like that, as I imagine you just did!

However, I would caution you that it would seem to me somewhat a misapplication of this feature to use arrow function syntax with otherwise normal, multistatement functions, especially those that would otherwise be naturally expressed as function declarations.

Recall the `dollabillsyall(..)` string literal tag function from earlier in this chapter -- let's change it to use `=>` syntax:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dollabillsyall <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> (<span class="pl-smi" style="box-sizing: border-box;">strings</span>, ...<span class="pl-smi" style="box-sizing: border-box;">values</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span>
    strings.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">reduce</span>( (<span class="pl-smi" style="box-sizing: border-box;">s</span>,<span class="pl-smi" style="box-sizing: border-box;">v</span>,<span class="pl-smi" style="box-sizing: border-box;">idx</span>) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> {
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">></span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">==</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>number<span class="pl-pds" style="box-sizing: border-box;">"</span></span>) {
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// look, also using interpolated</span>
                <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// string literals!</span>
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">`</span>$<span class="pl-s1" style="box-sizing: border-box; color: rgb(51, 51, 51);"><span class="pl-pse" style="box-sizing: border-box;">${</span>values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toFixed</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> )<span class="pl-pse" style="box-sizing: border-box;">}</span></span><span class="pl-pds" style="box-sizing: border-box;">`</span></span>;
            }
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">else</span> {
                s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+=</span> values[idx<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">-</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];
            }
        }

        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span> v;
    }, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

In this example, the only modifications I made were the removal of `function`, `return`, and some `{ .. }`, and then the insertion of `=>` and a `var`. Is this a significant improvement in the readability of the code? Meh.

I'd actually argue that the lack of `return` and outer `{ .. }` partially obscures the fact that the `reduce(..)` call is the only statement in the `dollabillsyall(..)` function and that its result is the intended result of the call. Also, the trained eye that is so used to hunting for the word `function` in code to find scope boundaries now needs to look for the `=>`marker, which can definitely be harder to find in the thick of the code.

While not a hard-and-fast rule, I'd say that the readability gains from `=>` arrow function conversion are inversely proportional to the length of the function being converted. The longer the function, the less `=>` helps; the shorter the function, the more `=>` can shine.

I think it's probably more sensible and reasonable to adopt `=>` for the places in code where you do need short inline function expressions, but leave your normal-length main functions as is.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#not-just-shorter-syntax-but-this)Not Just Shorter Syntax, But `this`

Most of the popular attention toward `=>` has been on saving those precious keystrokes by dropping `function`,`return`, and `{ .. }` from your code.

But there's a big detail we've skipped over so far. I said at the beginning of the section that `=>` functions are closely related to `this` binding behavior. In fact, `=>` arrow functions are _primarily designed_ to alter `this` behavior in a specific way, solving a particular and common pain point with `this`-aware coding.

The saving of keystrokes is a red herring, a misleading sideshow at best.

Let's revisit another example from earlier in this chapter:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> self <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>;

        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>click<span class="pl-pds" style="box-sizing: border-box;">"</span></span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(){
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            self.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</pre>

</div>

We used the `var self = this` hack, and then referenced `self.makeRequest(..)`, because inside the callback function we're passing to `addEventListener(..)`, the `this` binding will not be the same as it is in `makeRequest(..)` itself. In other words, because `this` bindings are dynamic, we fall back to the predictability of lexical scope via the `self` variable.

Herein we finally can see the primary design characteristic of `=>` arrow functions. Inside arrow functions, the `this`binding is not dynamic, but is instead lexical. In the previous snippet, if we used an arrow function for the callback,`this` will be predictably what we wanted it to be.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">makeRequest</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(..){
        btn.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">addEventListener</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>click<span class="pl-pds" style="box-sizing: border-box;">"</span></span>, () <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> {
            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
            <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);
        }, <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">false</span> );
    }
};</pre>

</div>

Lexical `this` in the arrow function callback in the previous snippet now points to the same value as in the enclosing`makeRequest(..)` function. In other words, `=>` is a syntactic stand-in for `var self = this`.

In cases where `var self = this` (or, alternatively, a function `.bind(this)` call) would normally be helpful, `=>` arrow functions are a nicer alternative operating on the same prinicple. Sounds great, right?

Not quite so simple.

If `=>` replaces `var self = this` or `.bind(this)` and it helps, guess what happens if you use `=>` with a `this`-aware function that _doesn't_ need `var self = this` to work? You might be able to guess that it's going to mess things up. Yeah.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> controller <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    makeRequest<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> (..) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
        <span class="pl-v" style="box-sizing: border-box; color: rgb(237, 106, 67);">this</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">helper</span>(..);
    },
    helper<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> (..) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=></span> {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
    }
};

controller.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">makeRequest</span>(..);</pre>

</div>

Although we invoke as `controller.makeRequest(..)`, the `this.helper` reference fails, because `this` here doesn't point to `controller` as it normally would. Where does it point? It lexically inherits `this` from the surrounding scope. In this previous snippet, that's the global scope, where `this` points to the global object. Ugh.

In addition to lexical `this`, arrow functions also have lexical `arguments` -- they don't have their own `arguments` array but instead inherit from their parent -- as well as lexical `super` and `new.target` (see "Classes" in Chapter 3).

So now we can conclude a more nuanced set of rules for when `=>` is appropriate and not:

*   If you have a short, single-statement inline function expression, where the only statement is a `return` of some computed value, _and_ that function doesn't already make a `this` reference inside it, _and_ there's no self-reference (recursion, event binding/unbinding), _and_ you don't reasonably expect the function to ever be that way, you can probably safely refactor it to be an `=>` arrow function.
*   If you have an inner function expression that's relying on a `var self = this` hack or a `.bind(this)` call on it in the enclosing function to ensure proper `this` binding, that inner function expression can probably safely become an`=>` arrow function.
*   If you have an inner function expression that's relying on something like `var args = Array.prototype.slice.call(arguments)` in the enclosing function to make a lexical copy of `arguments`, that inner function expression can probably safely become an `=>` arrow function.
*   For everything else -- normal function declarations, longer multistatment function expressions, functions that need a lexical name identifier self-reference (recursion, etc.), and any other function that doesn't fit the previous characteristics -- you should probably avoid `=>` function syntax.

Bottom line: `=>` is about lexical binding of `this`, `arguments`, and `super`. These are intentional features designed to fix some common problems, not bugs, quirks, or mistakes in ES6.

Don't believe any hype that `=>` is primarily, or even mostly, about fewer keystrokes. Whether you save keystrokes or waste them, you should know exactly what you are intentionally doing with every character typed.

**Tip:** If you have a function that for any of these articulated reasons is not a good match for an `=>` arrow function, but it's being declared as part of an object literal, recall from "Concise Methods" earlier in this chapter that there's another option for shorter function syntax.

If you prefer a visual decision chart for how/why to pick an arrow function:

[![](https://github.com/getify/You-Dont-Know-JS/raw/master/es6%20&%20beyond/fig1.png)](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/fig1.png)

## [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#forof-loops)`for..of` Loops

Joining the `for` and `for..in` loops from the JavaScript we're all familiar with, ES6 adds a `for..of` loop, which loops over the set of values produced by an _iterator_.

The value you loop over with `for..of` must be an _iterable_, or it must be a value which can be coerced/boxed to an object (see the _Types & Grammar_ title of this series) that is an iterable. An iterable is simply an object that is able to produce an iterator, which the loop then uses.

Let's compare `for..of` to `for..in` to illustrate the difference:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>a<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>b<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>c<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-pds" style="box-sizing: border-box;">"</span></span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> idx <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">in</span> a) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( idx );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 1 2 3 4</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> a) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "a" "b" "c" "d" "e"</span></pre>

</div>

As you can see, `for..in` loops over the keys/indexes in the `a` array, while `for..of` loops over the values in `a`.

Here's the pre-ES6 version of the `for..of` from that previous snippet:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>a<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>b<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>c<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-pds" style="box-sizing: border-box;">"</span></span>],
    k <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">keys</span>( a );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val, i <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>; i <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);"><</span> k.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>; i<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">++</span>) {
    val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a[ k[i] ];
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "a" "b" "c" "d" "e"</span></pre>

</div>

And here's the ES6 but non-`for..of` equivalent, which also gives a glimpse at manually iterating an iterator (see "Iterators" in Chapter 3):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>a<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>b<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>c<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,<span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-pds" style="box-sizing: border-box;">"</span></span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> val, ret, it <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> a[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">iterator</span>]();
    (ret <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> it.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">next</span>()) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&&</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!</span>ret.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">done</span>;
) {
    val <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> ret.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">value</span>;
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( val );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "a" "b" "c" "d" "e"</span></pre>

</div>

Under the covers, the `for..of` loop asks the iterable for an iterator (using the built-in `Symbol.iterator`; see "Well-Known Symbols" in Chapter 7), then it repeatedly calls the iterator and assigns its produced value to the loop iteration variable.

Standard built-in values in JavaScript that are by default iterables (or provide them) include:

*   Arrays
*   Strings
*   Generators (see Chapter 3)
*   Collections / TypedArrays (see Chapter 5)

**Warning:** Plain objects are not by default suitable for `for..of` looping. That's because they don't have a default iterator, which is intentional, not a mistake. However, we won't go any further into those nuanced reasonings here. In "Iterators" in Chapter 3, we'll see how to define iterators for our own objects, which lets `for..of` loop over any object to get a set of values we define.

Here's how to loop over the characters in a primitive string:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> c <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>hello<span class="pl-pds" style="box-sizing: border-box;">"</span></span>) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( c );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "h" "e" "l" "l" "o"</span></pre>

</div>

The `"hello"` primitive string value is coerced/boxed to the `String` object wrapper equivalent, which is an iterable by default.

In `for (XYZ of ABC)..`, the `XYZ` clause can either be an assignment expression or a declaration, identical to that same clause in `for` and `for..in` loops. So you can do stuff like this:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {};

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> (o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>]) {
    <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">for</span> ({x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span>} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">of</span> [ {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>}, {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>}, {x<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>} ]) {
  <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( o.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">a</span> );
}
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1 2 3</span></pre>

</div>

`for..of` loops can be prematurely stopped, just like other loops, with `break`, `continue`, `return` (if in a function), and thrown exceptions. In any of these cases, the iterator's `return(..)` function is automatically called (if one exists) to let the iterator perform cleanup tasks, if necessary.

**Note:** See "Iterators" in Chapter 3 for more complete coverage on iterables and iterators.

</div>
### Scope
Every ran into the situation where you wanted variable to be local, well ES6 has let. Let lets you specify a variable that will only be avaialble to the block scope it was defined in. Block scope? Yes, a block scope is any two curly braces "{ }".
### let
### const
### http://www.es6fiddle.net/iefr1n09/
### title
### 6 ES6 features you should use now
###  6 ES6 features you can't miss
# Brain Dump
<span id="docs-internal-guid-a5f09b5a-5ba1-1acd-25b5-ce2a8d1c6b2f">

# <span style="font-size: 21.3333333333333px; font-family: 'Trebuchet MS'; color: rgb(0, 0, 0); font-weight: 400; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">BRAINSTORM</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Physically storing your data at friends’ makes more sense</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">  
    </span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">than “in the cloud” for privacy concerns. Once deployed we want to document</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">  
    </span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">the inner workings and setting-up process of the network.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Create a qa website where you submit your while code and people can look at it</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">ask people to join you in teaching (show the people from your major who can help you)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">share your notes to learn.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">when loading provide some entertainment (user created images).</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">the idea that we have different approaches to learning a new subject.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">seperate representation from implementation.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Take a document and turn a written document to mindmap or visual.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Pull changes to the concepts and notify users.</span>

*   <span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">one alternative idea of branchit is to scan a book for relative information and tells you to read specific sections that will solve your proble</span><span style="font-size: 14.6666666666667px; font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">m.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Scratch to reveal ur prize (saw it on easel js)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Browser extension to look for courses when accessing a website.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Put a lot of examples that the user can change to understand more.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Other users can explain parts of the concept that seems to be vague by users who have the same major and age.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Suggested and what people are currently learning (trends)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Copy parts of a certain texts you read from the web and add them to your collection of notes, Example, I saw someone mentioning a point about why I use Backbone with Rails?</span>

*   <span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept has many sub-concpets (sub skills are more advanced level) and relationship can be optional (you don't have to master this sk</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">ill)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concepts has many examples</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept has many exercises (practices)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">concept : description (the explanation of the concept)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">user has many notes linked to each concept (inner table)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">join a squad of the users with the same skills, finish a team task and win a badge</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">learn from my project (uses code editor) …</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Donate for a person who taught you something, just tip him.</span>

*   <span style="font-size: 14.6666666666667px; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Taking the users input on how long it takes them to finish a task(average), the calendar (per week) , come up with a plan if , if it satisfies the user, then we rank it up, if not we vote it down</span><span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Create different Mirrors for all branches (profiles). Users will get an "optimized content as close as possible to what they already know. People with history major get the history of the mathmatician who created a an equation.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">I am gonna use the profile of a Arab -> Scientific -> Math -> Programmer -> Java</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Map KHAN ACADEMY !</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">SCRUM :</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Build a Java tutorial and challenge it to be the best Java tutorial ever or it could be the best JS tutorial in the world !</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">prototype version.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Iron man style of concepts visualization.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Things that requires the machine to take longer can tell the user to wait for a little bit (maybe a day till everything is ready)</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">People get confused when you lower the level of complexity of your explanation.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Training computer to know the attention span of users. Warming the user up in the beginning of each session.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">get the first example, don't understand, move to another one. Examples are tailored for the types of users.if a user doesn't understand something, give him the alternative explanation from another user.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Suggest a branch to user while typing.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Look at me coding this, screen videos // for Q&A</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">There are many ways to do something, if there's a feature in a language that can make things easier, we say so ...</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Examples generated by users (code snipets)</span>

*   [<span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://en.wikibooks.org/wiki/Java_Programming</span>](http://en.wikibooks.org/wiki/Java_Programming)<span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: good resource for finding content</span>

*   [<span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://en.wikiversity.org/wiki/Learning_Java</span>](http://en.wikiversity.org/wiki/Learning_Java)<span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: Java Tutorial, scroll down were levels are created.</span>

*   [<span style="font-size: 14.6666666666667px; color: rgb(17, 85, 204); text-decoration: underline; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">http://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html</span>](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html)<span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">: Oracles tutorial</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Design must be simple and clear. No multiple pages to get to the information. W3School succeeded because it doesn't make you think.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Users contribute to the avatar too.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Arrays are variables also, how do I stack them as concepts but link them as explanation? make everything a concept?</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">go through the concepts and then unlock more concepts as you go through everything … Or concepts align according to your level?</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">what's the line between an explanation and a concept? explanation is a weak concept that can stand by its own.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">how to implement a diff feature for comparison between languages?for example, java has all these features and compared to javascript, this is the difference ……</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">combine classes and objects together, the writer of the course or language has to reuse the current concepts and does a diff to them?</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Map your skills</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">explanations has levels , users will be notified once they reach a certain level that a concept is opened for them to view it. They can open an explanation if they want, but they are notified that this concept is a little beyond the basics.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">give +1 or +Number for every action a user make</span>

*   <span style="font-size: 14.6666666666667px; font-weight: 700; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">THE CODE EDITOR:</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Paste your code and get what references to look out in our website?</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">use Ace, user pastes the code and then clicks analyze,</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">we go through the code (search for foldings?),</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">then get what's the current rules is being used to highlight? (look at the highlighting rules and then extend then hook to them to do something?)</span>

<span style="font-size: 14.6666666666667px; font-family: Arial; color: rgb(56, 118, 29); vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">           look for the concept and link to it.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Play game and generate code behind it.</span>

*   <span style="font-size: 14.6666666666667px; vertical-align: baseline; white-space: pre-wrap; background-color: transparent;">Use google glass to make users see content related to their knowledge.</span>

</span>
# Resources
### https://drive.google.com/open?id=0B9tPYCpuqoIreGR3RVlkdDhsMHc
