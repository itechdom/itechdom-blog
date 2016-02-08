# Resources
### https://github.com/ericdouglas/ES6-Learning
### an awesome list of many resources
### https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond
### getify you don't know js: ES6
### Playgrounds
### http://www.es6fiddle.net/
### http://babeljs.io/repl/
### Slides
### https://dl.dropboxusercontent.com/u/3531958/es6-favorite-parts/index.html#/
### nice slides with comparision
### http://cdn.oreillystatic.com/en/assets/1/event/93/An%20Overview%20of%20ECMAScript%206%20Presentation.pdf
### Great slides
### http://charlesbking.com/power_of_es6/#/38
### nice slides with runnable javascript
# Concepts
### What's ES6
### How do I use ES6
### transpiling
## Transpiling

Made even worse by the rapid evolution of features, a problem arises for JS developers who at once may both strongly desire to use new features while at the same time being slapped with the reality that their sites/apps may need to support older browsers without such support.

The way ES5 appears to have played out in the broader industry, the typical mindset was that code bases waited to adopt ES5 until most if not all pre-ES5 environments had fallen out of their support spectrum. As a result, many are just recently (at the time of this writing) starting to adopt things like `strict` mode, which landed in ES5 over five years ago.

It's widely considered to be a harmful approach for the future of the JS ecosystem to wait around and trail the specification by so many years. All those responsible for evolving the language desire for developers to begin basing their code on the new features and patterns as soon as they stabilize in specification form and browsers have a chance to implement them.

So how do we resolve this seeming contradiction? The answer is tooling, specifically a technique called _transpiling_(transformation + compiling). Roughly, the idea is to use a special tool to transform your ES6 code into equivalent (or close!) matches that work in ES5 environments.

For example, consider shorthand property definitions (see "Object Literal Extensions" in Chapter 2). Here's the ES6 form:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> obj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// means `foo: foo`</span>
};

obj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>;    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></pre>

</div>

But (roughly) here's how that transpiles:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> obj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> foo
};

obj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>;    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></pre>

</div>

This is a minor but pleasant transformation that lets us shorten the `foo: foo` in an object literal declaration to just `foo`, if the names are the same.

Transpilers perform these transformations for you, usually in a build workflow step similar to how you perform linting, minification, and other similar operations.
### Babel.js
### Shims/Polyfills
### Shims/Polyfills

Not all new ES6 features need a transpiler. Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible. Syntax cannot be polyfilled, but APIs often can be.

For example, `Object.is(..)` is a new utility for checking strict equality of two values but without the nuanced exceptions that `===` has for `NaN` and `-0` values. The polyfill for `Object.is(..)` is pretty easy:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">is</span>) {
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">is</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">v1</span>, <span class="pl-smi" style="box-sizing: border-box;">v2</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// test for `-0`</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&&</span> v2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> / v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> / v2;
        }
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// test for `NaN`</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> v1) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> v2;
        }
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// everything else</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> v2;
    };
}</pre>

</div>

**Tip:** Pay attention to the outer `if` statement guard wrapped around the polyfill. This is an important detail, which means the snippet only defines its fallback behavior for older environments where the API in question isn't already defined; it would be very rare that you'd want to overwrite an existing API.

There's a great collection of ES6 shims called "ES6 Shim" ([https://github.com/paulmillr/es6-shim/](https://github.com/paulmillr/es6-shim/)) that you should definitely adopt as a standard part of any new JS project!

It is assumed that JS will continue to evolve constantly, with browsers rolling out support for features continually rather than in large chunks. So the best strategy for keeping updated as it evolves is to just introduce polyfill shims into your code base, and a transpiler step into your build workflow, right now and get used to that new reality.

If you decide to keep the status quo and just wait around for all browsers without a feature supported to go away before you start using the feature, you're always going to be way behind. You'll sadly be missing out on all the innovations designed to make writing JavaScript more effective, efficient, and robust.
### Syntax
### Scope
### Spread && Rest
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
### DeStructuring
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
### regular expressions
## Regular Expressions

Let's face it: regular expressions haven't changed much in JS in a long time. So it's a great thing that they've finally learned a couple of new tricks in ES6\. We'll briefly cover the additions here, but the overall topic of regular expressions is so dense that you'll need to turn to chapters/books dedicated to it (of which there are many!) if you need a refresher.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-flag)Unicode Flag

We'll cover the topic of Unicode in more detail in "Unicode" later in this chapter. Here, we'll just look briefly at the new`u` flag for ES6+ regular expressions, which turns on Unicode matching for that expression.

JavaScript strings are typically interpreted as sequences of 16-bit characters, which correspond to the characters in the_Basic Multilingual Plane (BMP)_ ([http://en.wikipedia.org/wiki/Plane_%28Unicode%29](http://en.wikipedia.org/wiki/Plane_%28Unicode%29)). But there are many UTF-16 characters that fall outside this range, and so strings may have these multibyte characters in them.

Prior to ES6, regular expressions could only match based on BMP characters, which means that those extended characters were treated as two separate characters for matching purposes. This is often not ideal.

So, as of ES6, the `u` flag tells a regular expression to process a string with the intepretation of Unicode (UTF-16) characters, such that such an extended character will be matched as a single entity.

**Warning:** Despite the name implication, "UTF-16" doesn't strictly mean 16 bits. Modern Unicode uses 21 bits, and standards like UTF-8 and UTF-16 refer roughly to how many bits are used in the representation of a character.

An example (straight from the ES6 specification): 𝄞 (the musical symbol G-clef) is Unicode point U+1D11E (0x1D11E).

If this character appears in a regular expression pattern (like `/𝄞/`), the standard BMP interpretation would be that it's two separate characters (0xD834 and 0xDD1E) to match with. But the new ES6 Unicode-aware mode means that `/𝄞/u`(or the escaped Unicode form `/\u{1D11E}/u`) will match `"𝄞"` in a string as a single matched character.

You might be wondering why this matters? In non-Unicode BMP mode, the pattern is treated as two separate characters, but would still find the match in a string with the `"𝄞"` character in it, as you can see if you try:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">/</span></span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The length of the match is what matters. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span>-clef<span class="pl-pds" style="box-sizing: border-box;">/</span></span> .<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
<span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span>-clef<span class="pl-pds" style="box-sizing: border-box;">/</span>u</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The `^.-clef` in the pattern says to match only a single character at the beginning before the normal `"-clef"` text. In standard BMP mode, the match fails (two characters), but with `u` Unicode mode flagged on, the match succeeds (one character).

It's also important to note that `u` makes quantifiers like `+` and `*` apply to the entire Unicode code point as a single character, not just the _lower surrogate_ (aka rightmost half of the symbol) of the character. The same goes for Unicode characters appearing in character classes, like `/[💩-💫]/u`.

**Note:** There's plenty more nitty-gritty details about `u` behavior in regular expressions, which Mathias Bynens ([https://twitter.com/mathias](https://twitter.com/mathias)) has written extensively about ([https://mathiasbynens.be/notes/es6-unicode-regex](https://mathiasbynens.be/notes/es6-unicode-regex)).

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-flag)Sticky Flag

Another flag mode added to ES6 regular expressions is `y`, which is often called "sticky mode." _Sticky_ essentially means the regular expression has a virtual anchor at its beginning that keeps it rooted to matching at only the position indicated by the regular expression's `lastIndex` property.

To illustrate, let's consider two regular expressions, the first without sticky mode and the second with:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span></span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>++foo++<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- not updated</span>

re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>;
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true -- ignored `lastIndex`</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 -- not updated</span></pre>

</div>

Three things to observe about this snippet:

*   `test(..)` doesn't pay any attention to `lastIndex`'s value, and always just performs its match from the beginning of the input string.
*   Because our pattern does not have a `^` start-of-input anchor, the search for `"foo"` is free to move ahead through the whole string looking for a match.
*   `lastIndex` is not updated by `test(..)`.

Now, let's try a sticky mode regular expression:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- notice the `y` sticky flag</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>++foo++<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false -- "foo" not found at `0`</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 5 -- updated to after previous match</span>

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after previous match failure</span></pre>

</div>

And so our new observations about sticky mode:

*   `test(..)` uses `lastIndex` as the exact and only position in `str` to look to make a match. There is no moving ahead to look for the match -- it's either there at the `lastIndex` position or not.
*   If a match is made, `test(..)` updates `lastIndex` to point to the character immediately following the match. If a match fails, `test(..)` resets `lastIndex` back to `0`.

Normal non-sticky patterns that aren't otherwise `^`-rooted to the start-of-input are free to move ahead in the input string looking for a match. But sticky mode restricts the pattern to matching just at the position of `lastIndex`.

As I suggested at the beginning of this section, another way of looking at this is that `y` implies a virtual anchor at the beginning of the pattern that is relative (aka constrains the start of the match) to exactly the `lastIndex` position.

**Warning:** In previous literature on the topic, it has alternatively been asserted that this behavior is like `y` implying a `^`(start-of-input) anchor in the pattern. This is inaccurate. We'll explain in further detail in "Anchored Sticky" later.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-positioning)Sticky Positioning

It may seem strangely limiting that to use `y` for repeated matches, you have to manually ensure `lastIndex` is in the exact right position, as it has no move-ahead capability for matching.

Here's one possible scenario: if you know that the match you care about is always going to be at a position that's a multiple of a number (e.g., `0`, `10`, `20`, etc.), you can just construct a limited pattern matching what you care about, but then manually set `lastIndex` each time before match to those fixed positions.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>f<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span><span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo       far       fad<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["foo"]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>;
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["far"]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["fad"]</span></pre>

</div>

However, if you're parsing a string that isn't formatted in fixed positions like that, figuring out what to set `lastIndex` to before each match is likely going to be untenable.

There's a saving nuance to consider here. `y` requires that `lastIndex` be in the exact position for a match to occur. But it doesn't strictly require that _you_ manually set `lastIndex`.

Instead, you can construct your expressions in such a way that they capture in each main match everything before and after the thing you care about, up to right before the next thing you'll care to match.

Because `lastIndex` will set to the next character beyond the end of a match, if you've matched everything up to that point, `lastIndex` will always be in the correct position for the `y` pattern to start from the next time.

**Warning:** If you can't predict the structure of the input string in a sufficiently patterned way like that, this technique may not be suitable and you may not be able to use `y`.

Having structured string input is likely the most practical scenario where `y` will be capable of performing repeated matching throughout a string. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\d</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-cce" style="box-sizing: border-box; color: rgb(99, 163, 92); font-weight: bold;">\.</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\s</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*?</span>)(?:<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\s</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span>)<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>1\. foo 2\. bar 3\. baz<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "1\. foo ", "foo" ]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 7 -- correct position!</span>
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "2\. bar ", "bar" ]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 14 -- correct position!</span>
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["3\. baz", "baz"]</span></pre>

</div>

This works because I knew something ahead of time about the structure of the input string: there is always a numeral prefix like `"1\. "` before the desired match (`"foo"`, etc.), and either a space after it, or the end of the string (`$` anchor). So the regular expression I constructed captures all of that in each main match, and then I use a matching group `( )`so that the stuff I really care about is separated out for convenience.

After the first match (`"1\. foo "`), the `lastIndex` is `7`, which is already the position needed to start the next match, for`"2\. bar "`, and so on.

If you're going to use `y` sticky mode for repeated matches, you'll probably want to look for opportunities to have`lastIndex` automatically positioned as we've just demonstrated.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-versus-global)Sticky Versus Global

Some readers may be aware that you can emulate something like this `lastIndex`-relative matching with the `g` global match flag and the `exec(..)` method, as so:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>o<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- look, `g`!</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foot book more<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["oot"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["ook"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 9</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["or"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 13</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// null -- no more matches!</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- starts over now!</span></pre>

</div>

While it's true that `g` pattern matches with `exec(..)` start their matching from `lastIndex`'s current value, and also update `lastIndex` after each match (or failure), this is not the same thing as `y`'s behavior.

Notice in the previous snippet that `"ook"`, located at position `6`, was matched and found by the second `exec(..)` call, even though at the time, `lastIndex` was `4` (from the end of the previous match). Why? Because as we said earlier, non-sticky matches are free to move ahead in their matching. A sticky mode expression would have failed here, because it would not be allowed to move ahead.

In addition to perhaps undesired move-ahead matching behavior, another downside to just using `g` instead of `y` is that`g` changes the behavior of some matching methods, like `str.match(re)`.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>o<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- look, `g`!</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foot book more<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["oot","ook","or"]</span></pre>

</div>

See how all the matches were returned at once? Sometimes that's OK, but sometimes that's not what you want.

The `y` sticky flag will give you one-at-a-time progressive matching with utilities like `test(..)` and `match(..)`. Just make sure the `lastIndex` is always in the right position for each match!

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#anchored-sticky)Anchored Sticky

As we warned earlier, it's inaccurate to think of sticky mode as implying a pattern starts with `^`. The `^` anchor has a distinct meaning in regular expressions, which is _not altered_ by sticky mode. `^` is an anchor that _always_ refers to the beginning of the input, and _is not_ in any way relative to `lastIndex`.

Besides poor/inaccurate documentation on this topic, the confusion is unfortunately strengthened further because an older pre-ES6 experiment with sticky mode in Firefox _did_ make `^` relative to `lastIndex`, so that behavior has been around for years.

ES6 elected not to do it that way. `^` in a pattern means start-of-input absolutely and only.

As a consequence, a pattern like `/^foo/y` will always and only find a `"foo"` match at the beginning of a string, _if it's allowed to match there_. If `lastIndex` is not `0`, the match will fail. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after failure</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>;
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false -- failed for positioning</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after failure</span></pre>

</div>

Bottom line: `y` plus `^` plus `lastIndex > 0` is an incompatible combination that will always cause a failed match.

**Note:** While `y` does not alter the meaning of `^` in any way, the `m` multiline mode _does_, such that `^` means start-of-input _or_ start of text after a newline. So, if you combine `y` and `m` flags together for a pattern, you can find multiple `^`-rooted matches in a string. But remember: because it's `y` sticky, you'll have to make sure `lastIndex` is pointing at the correct new line position (likely by matching to the end of the line) each subsequent time, or no subsequent matches will be made.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#regular-expression-flags)Regular Expression `flags`

Prior to ES6, if you wanted to examine a regular expression object to see what flags it had applied, you needed to parse them out -- ironically, probably with another regular expression -- from the content of the `source` property, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>ig</span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "/foo/ig"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> flags <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-cce" style="box-sizing: border-box; color: rgb(99, 163, 92); font-weight: bold;">\/</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[gim]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span><span class="pl-pds" style="box-sizing: border-box;">/</span></span> )[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];

flags;                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ig"</span></pre>

</div>

As of ES6, you can now get these values directly, with the new `flags` property:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>ig</span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "gi"</span></pre>

</div>

It's a small nuance, but the ES6 specification calls for the expression's flags to be listed in this order: `"gimuy"`, regardless of what order the original pattern was specified with. That's the reason for the difference between `/ig` and`"gi"`.

No, the order of flags specified or listed doesn't matter.

Another tweak from ES6 is that the `RegExp(..)` constructor is now `flags`-aware if you pass it an existing regular expression:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span><span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>;
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "y"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">RegExp</span>( re1 );
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "y"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">RegExp</span>( re1, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ig<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
re3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "gi"</span></pre>

</div>

Prior to ES6, the `re3` construction would throw an error, but as of ES6 you can override the flags when duplicating.
### Number Literal Extensions
## Number Literal Extensions

Prior to ES5, number literals looked like the following -- the octal form was not officially specified, only allowed as an extension that browsers had come to de facto agreement on:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dec <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    oct <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">052</span>,
    hex <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x2a</span>;</pre>

</div>

**Note:** Though you are specifying a number in different bases, the number's mathematic value is what is stored, and the default output interpretation is always base-10\. The three variables in the previous snippet all have the `42` value stored in them.

To further illustrate that `052` was a nonstandard form extension, consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>42<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>052<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 52</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0x2a<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></pre>

</div>

ES5 continued to permit the browser-extended octal form (including such inconsistencies), except that in strict mode, the octal literal (`052`) form is disallowed. This restriction was done mainly because many developers had the habit (from other languages) of seemingly innocuously prefixing otherwise base-10 numbers with `0`'s for code alignment purposes, and then running into the accidental fact that they'd changed the number value entirely!

ES6 continues the legacy of changes/variations to how number literals outside base-10 numbers can be represented. There's now an official octal form, an amended hexadecimal form, and a brand-new binary form. For web compatibility reasons, the old octal `052` form will continue to be legal (though unspecified) in non-strict mode, but should really never be used anymore.

Here are the new ES6 number literal forms:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dec <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    oct <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0o52</span>,         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0O52` :(</span>
    hex <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x2a</span>,         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0X2a` :/</span>
    bin <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0b101010</span>;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0B101010` :/</span></pre>

</div>

The only decimal form allowed is base-10\. Octal, hexadecimal, and binary are all integer forms.

And the string representations of these forms are all able to be coerced/converted to their number equivalent:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>42<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0o52<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0x2a<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0b101010<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></pre>

</div>

Though not strictly new to ES6, it's a little-known fact that you can actually go the opposite direction of conversion (well, sort of):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "42" -- also `a.toString( 10 )`</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">8</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "52"</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "2a"</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "101010"</span></pre>

</div>

In fact, you can represent a number this way in any base from `2` to `36`, though it'd be rare that you'd go outside the standard bases: 2, 8, 10, and 16.
### Unicode
## Unicode

Let me just say that this section is not an exhaustive everything-you-ever-wanted-to-know-about-Unicode resource. I want to cover what you need to know that's _changing_ for Unicode in ES6, but we won't go much deeper than that. Mathias Bynens ([http://twitter.com/mathias](http://twitter.com/mathias)) has written/spoken extensively and brilliantly about JS and Unicode (see[https://mathiasbynens.be/notes/javascript-unicode](https://mathiasbynens.be/notes/javascript-unicode) and [http://fluentconf.com/javascript-html-2015/public/content/2015/02/18-javascript-loves-unicode](http://fluentconf.com/javascript-html-2015/public/content/2015/02/18-javascript-loves-unicode)).

The Unicode characters that range from `0x0000` to `0xFFFF` contain all the standard printed characters (in various languages) that you're likely to have seen or interacted with. This group of characters is called the _Basic Multilingual Plane (BMP)_. The BMP even contains fun symbols like this cool snowman: ☃ (U+2603).

There are lots of other extended Unicode characters beyond this BMP set, which range up to `0x10FFFF`. These symbols are often referred to as _astral_ symbols, as that's the name given to the set of 16 _planes_ (e.g., layers/groupings) of characters beyond the BMP. Examples of astral symbols include 𝄞 (U+1D11E) and <g-emoji alias="hankey" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png" style="box-sizing: border-box;">💩</g-emoji> (U+1F4A9).

Prior to ES6, JavaScript strings could specify Unicode characters using Unicode escaping, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> snowman <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>2603<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( snowman );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "☃"</span></pre>

</div>

However, the `\uXXXX` Unicode escaping only supports four hexadecimal characters, so you can only represent the BMP set of characters in this way. To represent an astral character using Unicode escaping prior to ES6, you need to use a_surrogate pair_ -- basically two specially calculated Unicode-escaped characters side by side, which JS interprets together as a single astral character:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>D834<span class="pl-cce" style="box-sizing: border-box;">\u</span>DD1E<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( gclef );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝄞"</span></pre>

</div>

As of ES6, we now have a new form for Unicode escaping (in strings and regular expressions), called Unicode _code point escaping_:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>{1D11E}<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( gclef );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝄞"</span></pre>

</div>

As you can see, the difference is the presence of the `{ }` in the escape sequence, which allows it to contain any number of hexadecimal characters. Because you only need six to represent the highest possible code point value in Unicode (i.e., 0x10FFFF), this is sufficient.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-aware-string-operations)Unicode-Aware String Operations

By default, JavaScript string operations and methods are not sensitive to astral symbols in string values. So, they treat each BMP character individually, even the two surrogate halves that make up an otherwise single astral character. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> snowman <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>☃<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
snowman.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
gclef.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

So, how do we accurately calculate the length of such a string? In this scenario, the following trick will work:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">gclef</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Array</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">from</span>( gclef ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></pre>

</div>

Recall from the "`for..of` Loops" section earlier in this chapter that ES6 strings have built-in iterators. This iterator happens to be Unicode-aware, meaning it will automatically output an astral symbol as a single value. We take advantage of that using the `...` spread operator in an array literal, which creates an array of the string's symbols. Then we just inspect the length of that resultant array. ES6's `Array.from(..)` does basically the same thing as `[...XYZ]`, but we'll cover that utility in detail in Chapter 6.

**Warning:** It should be noted that constructing and exhausting an iterator just to get the length of a string is quite expensive on performance, relatively speaking, compared to what a theoretically optimized native utility/property would do.

Unfortunately, the full answer is not as simple or straightforward. In addition to the surrogate pairs (which the string iterator takes care of), there are special Unicode code points that behave in other special ways, which is much harder to account for. For example, there's a set of code points that modify the previous adjacent character, known as_Combining Diacritical Marks_.

Consider these two string outputs:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "é"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s2 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "é"</span></pre>

</div>

They look the same, but they're not! Here's how we created `s1` and `s2`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\x</span>E9<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;</pre>

</div>

As you can probably guess, our previous `length` trick doesn't work with `s2`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s2</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

So what can we do? In this case, we can perform a _Unicode normalization_ on the value before inquiring about its length, using the ES6 `String#normalize(..)` utility (which we'll cover more in Chapter 6):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\x</span>E9<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s2;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

Essentially, `normalize(..)` takes a sequence like `"e\u0301"` and normalizes it to `"\xE9"`. Normalization can even combine multiple adjacent combining marks if there's a suitable Unicode character they combine to:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>o<span class="pl-cce" style="box-sizing: border-box;">\u</span>0302<span class="pl-cce" style="box-sizing: border-box;">\u</span>0300<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>(),
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ồ<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 3</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s3;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

Unfortunately, normalization isn't fully perfect here, either. If you have multiple combining marks modifying a single character, you may not get the length count you'd expect, because there may not be a single defined normalized character that represents the combination of all the marks. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-cce" style="box-sizing: border-box;">\u</span>0330<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ḛ́"</span>

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

The further you go down this rabbit hole, the more you realize that it's difficult to get one precise definition for "length." What we see visually rendered as a single character -- more precisely called a _grapheme_ -- doesn't always strictly relate to a single "character" in the program processing sense.

**Tip:** If you want to see just how deep this rabbit hole goes, check out the "Grapheme Cluster Boundaries" algorithm ([http://www.Unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries](http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)).

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#character-positioning)Character Positioning

Similar to length complications, what does it actually mean to ask, "what is the character at position 2?" The naive pre-ES6 answer comes from `charAt(..)`, which will not respect the atomicity of an astral character, nor will it take into account combining marks.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "abćd"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s2 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "abćd"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s3 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ab𝒞d"</span>

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "c"</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "" <-- unprintable surrogate</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "" <-- unprintable surrogate</span></pre>

</div>

So, is ES6 giving us a Unicode-aware verison of `charAt(..)`? Unfortunately, no. At the time of this writing, there's a proposal for such a utility that's under consideration for post-ES6.

But with what we explored in the previous section (and of course with the limitations noted thereof!), we can hack an ES6 answer:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s1</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s2</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s3</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

**Warning:** Reminder of an earlier warning: constructing and exhausting an iterator each time you want to get at a single character is... very not ideal, performance wise. Let's hope we get a built-in and optimized utility for this soon, post-ES6.

What about a Unicode-aware version of the `charCodeAt(..)` utility? ES6 gives us `codePointAt(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "107"</span>

s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "107"</span>

s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "1d49e"</span></pre>

</div>

What about the other direction? A Unicode-aware version of `String.fromCharCode(..)` is ES6's`String.fromCodePoint(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x107</span> );      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x1d49e</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

So wait, can we just combine `String.fromCodePoint(..)` and `codePointAt(..)` to get a better version of a Unicode-aware `charAt(..)` from earlier? Yep!

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

There's quite a few other string methods we haven't addressed here, including `toUpperCase()`, `toLowerCase()`,`substring(..)`, `indexOf(..)`, `slice(..)`, and a dozen others. None of these have been changed or augmented for full Unicode awareness, so you should be very careful -- probably just avoid them! -- when working with strings containing astral symbols.

There are also several string methods that use regular expressions for their behavior, like `replace(..)` and `match(..)`. Thankfully, ES6 brings Unicode awareness to regular expressions, as we covered in "Unicode Flag" earlier in this chapter.

OK, there we have it! JavaScript's Unicode string support is significantly better over pre-ES6 (though still not perfect) with the various additions we've just covered.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-identifier-names)Unicode Identifier Names

Unicode can also be used in identifier names (variables, properties, etc.). Prior to ES6, you could do this with Unicode-escapes, like:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> \u03A9 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// same as: var Ω = 42;</span></pre>

</div>

As of ES6, you can also use the earlier explained code point escape syntax:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> \u{2B400} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// same as: var 𫐀 = 42;</span></pre>

</div>

There's a complex set of rules around exactly which Unicode characters are allowed. Furthermore, some are allowed only if they're not the first character of the identifier name.

**Note:** Mathias Bynens has a great post ([https://mathiasbynens.be/notes/javascript-identifiers-es6](https://mathiasbynens.be/notes/javascript-identifiers-es6)) on all the nitty-gritty details.

The reasons for using such unusual characters in identifier names are rather rare and academic. You typically won't be best served by writing code that relies on these esoteric capabilities.
### Symbols
## Symbols

With ES6, for the first time in quite a while, a new primitive type has been added to JavaScript: the `symbol`. Unlike the other primitive types, however, symbols don't have a literal form.

Here's how you create a symbol:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> sym <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>some optional description<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> sym;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "symbol"</span></pre>

</div>

Some things to note:

*   You cannot and should not use `new` with `Symbol(..)`. It's not a constructor, nor are you producing an object.
*   The parameter passed to `Symbol(..)` is optional. If passed, it should be a string that gives a friendly description for the symbol's purpose.
*   The `typeof` output is a new value (`"symbol"`) that is the primary way to identify a symbol.

The description, if provided, is solely used for the stringification representation of the symbol:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">sym.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "Symbol(some optional description)"</span></pre>

</div>

Similar to how primitive string values are not instances of `String`, symbols are also not instances of `Symbol`. If, for some reason, you want to construct a boxed wrapper object form of a symbol value, you can do the following:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">sym <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">instanceof</span> Symbol;      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> symObj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>( sym );
symObj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">instanceof</span> Symbol;   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>

symObj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">valueOf</span>() <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> sym;   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

**Note:** `symObj` in this snippet is interchangeable with `sym`; either form can be used in all places symbols are utilized. There's not much reason to use the boxed wrapper object form (`symObj`) instead of the primitive form (`sym`). Keeping with similar advice for other primitives, it's probably best to prefer `sym` over `symObj`.

The internal value of a symbol itself -- referred to as its `name` -- is hidden from the code and cannot be obtained. You can think of this symbol value as an automatically generated, unique (within your application) string value.

But if the value is hidden and unobtainable, what's the point of having a symbol at all?

The main point of a symbol is to create a string-like value that can't collide with any other value. So, for example, consider using a symbol as a constant representing an event name:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>event.login<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

You'd then use `EVT_LOGIN` in place of a generic string literal like `"event.login"`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">evthub.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">listen</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">data</span>){
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
} );</pre>

</div>

The benefit here is that `EVT_LOGIN` holds a value that cannot be duplicated (accidentally or otherwise) by any other value, so it is impossible for there to be any confusion of which event is being dispatched or handled.

**Note:** Under the covers, the `evthub` utility assumed in the previous snippet would almost certainly be using the symbol value from the `EVT_LOGIN` argument directly as the property/key in some internal object (hash) that tracks event handlers. If `evthub` instead needed to use the symbol value as a real string, it would need to explicitly coerce with`String(..)` or `toString()`, as implicit string coercion of symbols is not allowed.

You may use a symbol directly as a property name/key in an object, such as a special property that you want to treat as hidden or meta in usage. It's important to know that although you intend to treat it as such, it is not _actually_ a hidden or untouchable property.

Consider this module that implements the _singleton_ pattern behavior -- that is, it only allows itself to be created once:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>instance<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">HappyFace</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>]) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>];

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">smile</span>() { .. }

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        smile<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> smile
    };
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> me <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">HappyFace</span>(),
    you <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">HappyFace</span>();

me <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> you;         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The `INSTANCE` symbol value here is a special, almost hidden, meta-like property stored statically on the `HappyFace()`function object.

It could alternatively have been a plain old property like `__instance`, and the behavior would have been identical. The usage of a symbol simply improves the metaprogramming style, keeping this `INSTANCE` property set apart from any other normal properties.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#symbol-registry)Symbol Registry

One mild downside to using symbols as in the last few examples is that the `EVT_LOGIN` and `INSTANCE` variables had to be stored in an outer scope (perhaps even the global scope), or otherwise somehow stored in a publicly available location, so that all parts of the code that need to use the symbols can access them.

To aid in organizing code with access to these symbols, you can create symbol values with the _global symbol registry_. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>event.login<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Symbol(event.login)</span></pre>

</div>

And:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">HappyFace</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>instance<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>]) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>];

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { .. };
}</pre>

</div>

`Symbol.for(..)` looks in the global symbol registry to see if a symbol is already stored with the provided description text, and returns it if so. If not, it creates one to return. In other words, the global symbol registry treats symbol values, by description text, as singletons themselves.

But that also means that any part of your application can retrieve the symbol from the registry using `Symbol.for(..)`, as long as the matching description name is used.

Ironically, symbols are basically intended to replace the use of _magic strings_ (arbitrary string values given special meaning) in your application. But you precisely use _magic_ description string values to uniquely identify/locate them in the global symbol registry!

To avoid accidental collisions, you'll probably want to make your symbol descriptions quite unique. One easy way of doing that is to include prefix/context/namespacing information in them.

For example, consider a utility such as the following:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">extractValues</span>(<span class="pl-smi" style="box-sizing: border-box;">str</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> key <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>extractValues.parse<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ),
        re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> extractValues[key] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span>
 <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>=&]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+?</span>=(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>&]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+?</span>)(?=&<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span>)<span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,
        values <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [], match;

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">while</span> (match <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str )) {
        values.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">push</span>( match[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] );
    }

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> values;
}</pre>

</div>

We use the magic string value `"extractValues.parse"` because it's quite unlikely that any other symbol in the registry would ever collide with that description.

If a user of this utility wants to override the parsing regular expression, they can also use the symbol registry:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">extractValues[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>extractValues.parse<span class="pl-pds" style="box-sizing: border-box;">"</span></span> )] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
 <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span>some pattern<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">extractValues</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>..some string..<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

Aside from the assistance the symbol registry provides in globally storing these values, everything we're seeing here could have been done by just actually using the magic string `"extractValues.parse"` as the key, rather than the symbol. The improvements exist at the metaprogramming level more than the functional level.

You may have occasion to use a symbol value that has been stored in the registry to look up what description text (key) it's stored under. For example, you may need to signal to another part of your application how to locate a symbol in the registry because you cannot pass the symbol value itself.

You can retrieve a registered symbol's description text (key) using `Symbol.keyFor(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>something cool<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">keyFor</span>( s );
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( desc );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "something cool"</span>

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// get the symbol from the registry again</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( desc );

s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s;                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#symbols-as-object-properties)Symbols as Object Properties

If a symbol is used as a property/key of an object, it's stored in a special way so that the property will not show up in a normal enumeration of the object's properties:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ) ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>hello world<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    baz<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">true</span>
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">getOwnPropertyNames</span>( o );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "foo","baz" ]</span></pre>

</div>

To retrieve an object's symbol properties:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">getOwnPropertySymbols</span>( o );  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ Symbol(bar) ]</span></pre>

</div>

This makes it clear that a property symbol is not actually hidden or inaccessible, as you can always see it in the`Object.getOwnPropertySymbols(..)` list.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#built-in-symbols)Built-In Symbols

ES6 comes with a number of predefined built-in symbols that expose various meta behaviors on JavaScript object values. However, these symbols are _not_ registered in the global symbol registry, as one might expect.

Instead, they're stored as properties on the `Symbol` function object. For example, in the "`for..of`" section earlier in this chapter, we introduced the `Symbol.iterator` value:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

a[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">iterator</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// native function</span></pre>

</div>

The specification uses the `@@` prefix notation to refer to the built-in symbols, the most common ones being:`@@iterator`, `@@toStringTag`, `@@toPrimitive`. Several others are defined as well, though they probably won't be used as often.

**Note:** See "Well Known Symbols" in Chapter 7 for detailed information about how these built-in symbols are used for meta programming purposes.
### String value that can't be repeated
### Review
## Review

ES6 adds a heap of new syntax forms to JavaScript, so there's plenty to learn!

Most of these are designed to ease the pain points of common programming idioms, such as setting default values to function parameters and gathering the "rest" of the parameters into an array. Destructuring is a powerful tool for more concisely expressing assignments of values from arrays and nested objects.

While features like `=>` arrow functions appear to also be all about shorter and nicer-looking syntax, they actually have very specific behaviors that you should intentionally use only in appropriate situations.

Expanded Unicode support, new tricks for regular expressions, and even a new primitive `symbol` type round out the syntactic evolution of ES6.
### Organization
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch3.md
### Iterators
### Generators
### Async && Flow Control
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch4.md
### Promises
### Thenable
### Generator + Promises
### Collections
### Map
### Sets
### Typed Arrays
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch5.md
### Api Additions
### Any additions to existing types
### Arrays
### Objects
### Meta Programming
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch7.md
### Proxies
### ...
### Beyond ES6
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch8.md
# My presentaion
### What's ES6
### names: ES6, ES2015, Harmony
### How do I use ES6
### transpiling
## Transpiling

Made even worse by the rapid evolution of features, a problem arises for JS developers who at once may both strongly desire to use new features while at the same time being slapped with the reality that their sites/apps may need to support older browsers without such support.

The way ES5 appears to have played out in the broader industry, the typical mindset was that code bases waited to adopt ES5 until most if not all pre-ES5 environments had fallen out of their support spectrum. As a result, many are just recently (at the time of this writing) starting to adopt things like `strict` mode, which landed in ES5 over five years ago.

It's widely considered to be a harmful approach for the future of the JS ecosystem to wait around and trail the specification by so many years. All those responsible for evolving the language desire for developers to begin basing their code on the new features and patterns as soon as they stabilize in specification form and browsers have a chance to implement them.

So how do we resolve this seeming contradiction? The answer is tooling, specifically a technique called _transpiling_(transformation + compiling). Roughly, the idea is to use a special tool to transform your ES6 code into equivalent (or close!) matches that work in ES5 environments.

For example, consider shorthand property definitions (see "Object Literal Extensions" in Chapter 2). Here's the ES6 form:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> obj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// means `foo: foo`</span>
};

obj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>;    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></pre>

</div>

But (roughly) here's how that transpiles:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> foo <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> obj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> foo
};

obj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">foo</span>;    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [1,2,3]</span></pre>

</div>

This is a minor but pleasant transformation that lets us shorten the `foo: foo` in an object literal declaration to just `foo`, if the names are the same.

Transpilers perform these transformations for you, usually in a build workflow step similar to how you perform linting, minification, and other similar operations.
### Babel.js
### Shims/Polyfills
### Shims/Polyfills

Not all new ES6 features need a transpiler. Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible. Syntax cannot be polyfilled, but APIs often can be.

For example, `Object.is(..)` is a new utility for checking strict equality of two values but without the nuanced exceptions that `===` has for `NaN` and `-0` values. The polyfill for `Object.is(..)` is pretty easy:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">is</span>) {
    <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">is</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">v1</span>, <span class="pl-smi" style="box-sizing: border-box;">v2</span>) {
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// test for `-0`</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">&&</span> v2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0</span>) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> / v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span> / v2;
        }
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// test for `NaN`</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> v1) {
            <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">!==</span> v2;
        }
        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// everything else</span>
        <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> v1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> v2;
    };
}</pre>

</div>

**Tip:** Pay attention to the outer `if` statement guard wrapped around the polyfill. This is an important detail, which means the snippet only defines its fallback behavior for older environments where the API in question isn't already defined; it would be very rare that you'd want to overwrite an existing API.

There's a great collection of ES6 shims called "ES6 Shim" ([https://github.com/paulmillr/es6-shim/](https://github.com/paulmillr/es6-shim/)) that you should definitely adopt as a standard part of any new JS project!

It is assumed that JS will continue to evolve constantly, with browsers rolling out support for features continually rather than in large chunks. So the best strategy for keeping updated as it evolves is to just introduce polyfill shims into your code base, and a transpiler step into your build workflow, right now and get used to that new reality.

If you decide to keep the status quo and just wait around for all browsers without a feature supported to go away before you start using the feature, you're always going to be way behind. You'll sadly be missing out on all the innovations designed to make writing JavaScript more effective, efficient, and robust.
### Syntax
### Scope
### Spread && Rest
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
### regular expressions
## Regular Expressions

Let's face it: regular expressions haven't changed much in JS in a long time. So it's a great thing that they've finally learned a couple of new tricks in ES6\. We'll briefly cover the additions here, but the overall topic of regular expressions is so dense that you'll need to turn to chapters/books dedicated to it (of which there are many!) if you need a refresher.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-flag)Unicode Flag

We'll cover the topic of Unicode in more detail in "Unicode" later in this chapter. Here, we'll just look briefly at the new`u` flag for ES6+ regular expressions, which turns on Unicode matching for that expression.

JavaScript strings are typically interpreted as sequences of 16-bit characters, which correspond to the characters in the_Basic Multilingual Plane (BMP)_ ([http://en.wikipedia.org/wiki/Plane_%28Unicode%29](http://en.wikipedia.org/wiki/Plane_%28Unicode%29)). But there are many UTF-16 characters that fall outside this range, and so strings may have these multibyte characters in them.

Prior to ES6, regular expressions could only match based on BMP characters, which means that those extended characters were treated as two separate characters for matching purposes. This is often not ideal.

So, as of ES6, the `u` flag tells a regular expression to process a string with the intepretation of Unicode (UTF-16) characters, such that such an extended character will be matched as a single entity.

**Warning:** Despite the name implication, "UTF-16" doesn't strictly mean 16 bits. Modern Unicode uses 21 bits, and standards like UTF-8 and UTF-16 refer roughly to how many bits are used in the representation of a character.

An example (straight from the ES6 specification): 𝄞 (the musical symbol G-clef) is Unicode point U+1D11E (0x1D11E).

If this character appears in a regular expression pattern (like `/𝄞/`), the standard BMP interpretation would be that it's two separate characters (0xD834 and 0xDD1E) to match with. But the new ES6 Unicode-aware mode means that `/𝄞/u`(or the escaped Unicode form `/\u{1D11E}/u`) will match `"𝄞"` in a string as a single matched character.

You might be wondering why this matters? In non-Unicode BMP mode, the pattern is treated as two separate characters, but would still find the match in a string with the `"𝄞"` character in it, as you can see if you try:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">/</span></span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The length of the match is what matters. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span>-clef<span class="pl-pds" style="box-sizing: border-box;">/</span></span> .<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
<span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span>-clef<span class="pl-pds" style="box-sizing: border-box;">/</span>u</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞-clef<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The `^.-clef` in the pattern says to match only a single character at the beginning before the normal `"-clef"` text. In standard BMP mode, the match fails (two characters), but with `u` Unicode mode flagged on, the match succeeds (one character).

It's also important to note that `u` makes quantifiers like `+` and `*` apply to the entire Unicode code point as a single character, not just the _lower surrogate_ (aka rightmost half of the symbol) of the character. The same goes for Unicode characters appearing in character classes, like `/[💩-💫]/u`.

**Note:** There's plenty more nitty-gritty details about `u` behavior in regular expressions, which Mathias Bynens ([https://twitter.com/mathias](https://twitter.com/mathias)) has written extensively about ([https://mathiasbynens.be/notes/es6-unicode-regex](https://mathiasbynens.be/notes/es6-unicode-regex)).

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-flag)Sticky Flag

Another flag mode added to ES6 regular expressions is `y`, which is often called "sticky mode." _Sticky_ essentially means the regular expression has a virtual anchor at its beginning that keeps it rooted to matching at only the position indicated by the regular expression's `lastIndex` property.

To illustrate, let's consider two regular expressions, the first without sticky mode and the second with:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span></span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>++foo++<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- not updated</span>

re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">4</span>;
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true -- ignored `lastIndex`</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4 -- not updated</span></pre>

</div>

Three things to observe about this snippet:

*   `test(..)` doesn't pay any attention to `lastIndex`'s value, and always just performs its match from the beginning of the input string.
*   Because our pattern does not have a `^` start-of-input anchor, the search for `"foo"` is free to move ahead through the whole string looking for a match.
*   `lastIndex` is not updated by `test(..)`.

Now, let's try a sticky mode regular expression:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- notice the `y` sticky flag</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>++foo++<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false -- "foo" not found at `0`</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0</span>

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>;
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 5 -- updated to after previous match</span>

re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after previous match failure</span></pre>

</div>

And so our new observations about sticky mode:

*   `test(..)` uses `lastIndex` as the exact and only position in `str` to look to make a match. There is no moving ahead to look for the match -- it's either there at the `lastIndex` position or not.
*   If a match is made, `test(..)` updates `lastIndex` to point to the character immediately following the match. If a match fails, `test(..)` resets `lastIndex` back to `0`.

Normal non-sticky patterns that aren't otherwise `^`-rooted to the start-of-input are free to move ahead in the input string looking for a match. But sticky mode restricts the pattern to matching just at the position of `lastIndex`.

As I suggested at the beginning of this section, another way of looking at this is that `y` implies a virtual anchor at the beginning of the pattern that is relative (aka constrains the start of the match) to exactly the `lastIndex` position.

**Warning:** In previous literature on the topic, it has alternatively been asserted that this behavior is like `y` implying a `^`(start-of-input) anchor in the pattern. This is inaccurate. We'll explain in further detail in "Anchored Sticky" later.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-positioning)Sticky Positioning

It may seem strangely limiting that to use `y` for repeated matches, you have to manually ensure `lastIndex` is in the exact right position, as it has no move-ahead capability for matching.

Here's one possible scenario: if you know that the match you care about is always going to be at a position that's a multiple of a number (e.g., `0`, `10`, `20`, etc.), you can just construct a limited pattern matching what you care about, but then manually set `lastIndex` each time before match to those fixed positions.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>f<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span><span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo       far       fad<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["foo"]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">10</span>;
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["far"]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">20</span>;
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["fad"]</span></pre>

</div>

However, if you're parsing a string that isn't formatted in fixed positions like that, figuring out what to set `lastIndex` to before each match is likely going to be untenable.

There's a saving nuance to consider here. `y` requires that `lastIndex` be in the exact position for a match to occur. But it doesn't strictly require that _you_ manually set `lastIndex`.

Instead, you can construct your expressions in such a way that they capture in each main match everything before and after the thing you care about, up to right before the next thing you'll care to match.

Because `lastIndex` will set to the next character beyond the end of a match, if you've matched everything up to that point, `lastIndex` will always be in the correct position for the `y` pattern to start from the next time.

**Warning:** If you can't predict the structure of the input string in a sufficiently patterned way like that, this technique may not be suitable and you may not be able to use `y`.

Having structured string input is likely the most practical scenario where `y` will be capable of performing repeated matching throughout a string. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\d</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-cce" style="box-sizing: border-box; color: rgb(99, 163, 92); font-weight: bold;">\.</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\s</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*?</span>)(?:<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">\s</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span>)<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>1\. foo 2\. bar 3\. baz<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "1\. foo ", "foo" ]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 7 -- correct position!</span>
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "2\. bar ", "bar" ]</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 14 -- correct position!</span>
str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["3\. baz", "baz"]</span></pre>

</div>

This works because I knew something ahead of time about the structure of the input string: there is always a numeral prefix like `"1\. "` before the desired match (`"foo"`, etc.), and either a space after it, or the end of the string (`$` anchor). So the regular expression I constructed captures all of that in each main match, and then I use a matching group `( )`so that the stuff I really care about is separated out for convenience.

After the first match (`"1\. foo "`), the `lastIndex` is `7`, which is already the position needed to start the next match, for`"2\. bar "`, and so on.

If you're going to use `y` sticky mode for repeated matches, you'll probably want to look for opportunities to have`lastIndex` automatically positioned as we've just demonstrated.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#sticky-versus-global)Sticky Versus Global

Some readers may be aware that you can emulate something like this `lastIndex`-relative matching with the `g` global match flag and the `exec(..)` method, as so:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>o<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- look, `g`!</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foot book more<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["oot"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 4</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["ook"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 9</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["or"]</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 13</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// null -- no more matches!</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- starts over now!</span></pre>

</div>

While it's true that `g` pattern matches with `exec(..)` start their matching from `lastIndex`'s current value, and also update `lastIndex` after each match (or failure), this is not the same thing as `y`'s behavior.

Notice in the previous snippet that `"ook"`, located at position `6`, was matched and found by the second `exec(..)` call, even though at the time, `lastIndex` was `4` (from the end of the previous match). Why? Because as we said earlier, non-sticky matches are free to move ahead in their matching. A sticky mode expression would have failed here, because it would not be allowed to move ahead.

In addition to perhaps undesired move-ahead matching behavior, another downside to just using `g` instead of `y` is that`g` changes the behavior of some matching methods, like `str.match(re)`.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>o<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// <-- look, `g`!</span>
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foot book more<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

str.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( re );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ["oot","ook","or"]</span></pre>

</div>

See how all the matches were returned at once? Sometimes that's OK, but sometimes that's not what you want.

The `y` sticky flag will give you one-at-a-time progressive matching with utilities like `test(..)` and `match(..)`. Just make sure the `lastIndex` is always in the right position for each match!

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#anchored-sticky)Anchored Sticky

As we warned earlier, it's inaccurate to think of sticky mode as implying a pattern starts with `^`. The `^` anchor has a distinct meaning in regular expressions, which is _not altered_ by sticky mode. `^` is an anchor that _always_ refers to the beginning of the input, and _is not_ in any way relative to `lastIndex`.

Besides poor/inaccurate documentation on this topic, the confusion is unfortunately strengthened further because an older pre-ES6 experiment with sticky mode in Firefox _did_ make `^` relative to `lastIndex`, so that behavior has been around for years.

ES6 elected not to do it that way. `^` in a pattern means start-of-input absolutely and only.

As a consequence, a pattern like `/^foo/y` will always and only find a `"foo"` match at the beginning of a string, _if it's allowed to match there_. If `lastIndex` is not `0`, the match will fail. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>,
    str <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>foo<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after failure</span>

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>;
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">test</span>( str );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false -- failed for positioning</span>
re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">lastIndex</span>;           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 0 -- reset after failure</span></pre>

</div>

Bottom line: `y` plus `^` plus `lastIndex > 0` is an incompatible combination that will always cause a failed match.

**Note:** While `y` does not alter the meaning of `^` in any way, the `m` multiline mode _does_, such that `^` means start-of-input _or_ start of text after a newline. So, if you combine `y` and `m` flags together for a pattern, you can find multiple `^`-rooted matches in a string. But remember: because it's `y` sticky, you'll have to make sure `lastIndex` is pointing at the correct new line position (likely by matching to the end of the line) each subsequent time, or no subsequent matches will be made.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#regular-expression-flags)Regular Expression `flags`

Prior to ES6, if you wanted to examine a regular expression object to see what flags it had applied, you needed to parse them out -- ironically, probably with another regular expression -- from the content of the `source` property, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>ig</span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "/foo/ig"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> flags <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">match</span>( <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-cce" style="box-sizing: border-box; color: rgb(99, 163, 92); font-weight: bold;">\/</span>(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[gim]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span>)<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span><span class="pl-pds" style="box-sizing: border-box;">/</span></span> )[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>];

flags;                  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ig"</span></pre>

</div>

As of ES6, you can now get these values directly, with the new `flags` property:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-pds" style="box-sizing: border-box;">/</span>ig</span>;

re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;               <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "gi"</span></pre>

</div>

It's a small nuance, but the ES6 specification calls for the expression's flags to be listed in this order: `"gimuy"`, regardless of what order the original pattern was specified with. That's the reason for the difference between `/ig` and`"gi"`.

No, the order of flags specified or listed doesn't matter.

Another tweak from ES6 is that the `RegExp(..)` constructor is now `flags`-aware if you pass it an existing regular expression:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span>foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">*</span><span class="pl-pds" style="box-sizing: border-box;">/</span>y</span>;
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "y"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">RegExp</span>( re1 );
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "y"</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> re3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">new</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">RegExp</span>( re1, <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ig<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );
re3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">source</span>;                         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "foo*"</span>
re3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">flags</span>;                          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "gi"</span></pre>

</div>

Prior to ES6, the `re3` construction would throw an error, but as of ES6 you can override the flags when duplicating.
### Number Literal Extensions
## Number Literal Extensions

Prior to ES5, number literals looked like the following -- the octal form was not officially specified, only allowed as an extension that browsers had come to de facto agreement on:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dec <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    oct <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">052</span>,
    hex <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x2a</span>;</pre>

</div>

**Note:** Though you are specifying a number in different bases, the number's mathematic value is what is stored, and the default output interpretation is always base-10\. The three variables in the previous snippet all have the `42` value stored in them.

To further illustrate that `052` was a nonstandard form extension, consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>42<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );             <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>052<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 52</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0x2a<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></pre>

</div>

ES5 continued to permit the browser-extended octal form (including such inconsistencies), except that in strict mode, the octal literal (`052`) form is disallowed. This restriction was done mainly because many developers had the habit (from other languages) of seemingly innocuously prefixing otherwise base-10 numbers with `0`'s for code alignment purposes, and then running into the accidental fact that they'd changed the number value entirely!

ES6 continues the legacy of changes/variations to how number literals outside base-10 numbers can be represented. There's now an official octal form, an amended hexadecimal form, and a brand-new binary form. For web compatibility reasons, the old octal `052` form will continue to be legal (though unspecified) in non-strict mode, but should really never be used anymore.

Here are the new ES6 number literal forms:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> dec <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    oct <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0o52</span>,         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0O52` :(</span>
    hex <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x2a</span>,         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0X2a` :/</span>
    bin <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0b101010</span>;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// or `0B101010` :/</span></pre>

</div>

The only decimal form allowed is base-10\. Octal, hexadecimal, and binary are all integer forms.

And the string representations of these forms are all able to be coerced/converted to their number equivalent:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>42<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0o52<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0x2a<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Number</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>0b101010<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 42</span></pre>

</div>

Though not strictly new to ES6, it's a little-known fact that you can actually go the opposite direction of conversion (well, sort of):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "42" -- also `a.toString( 10 )`</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">8</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "52"</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "2a"</span>
a.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );        <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "101010"</span></pre>

</div>

In fact, you can represent a number this way in any base from `2` to `36`, though it'd be rare that you'd go outside the standard bases: 2, 8, 10, and 16.
### Unicode
## Unicode

Let me just say that this section is not an exhaustive everything-you-ever-wanted-to-know-about-Unicode resource. I want to cover what you need to know that's _changing_ for Unicode in ES6, but we won't go much deeper than that. Mathias Bynens ([http://twitter.com/mathias](http://twitter.com/mathias)) has written/spoken extensively and brilliantly about JS and Unicode (see[https://mathiasbynens.be/notes/javascript-unicode](https://mathiasbynens.be/notes/javascript-unicode) and [http://fluentconf.com/javascript-html-2015/public/content/2015/02/18-javascript-loves-unicode](http://fluentconf.com/javascript-html-2015/public/content/2015/02/18-javascript-loves-unicode)).

The Unicode characters that range from `0x0000` to `0xFFFF` contain all the standard printed characters (in various languages) that you're likely to have seen or interacted with. This group of characters is called the _Basic Multilingual Plane (BMP)_. The BMP even contains fun symbols like this cool snowman: ☃ (U+2603).

There are lots of other extended Unicode characters beyond this BMP set, which range up to `0x10FFFF`. These symbols are often referred to as _astral_ symbols, as that's the name given to the set of 16 _planes_ (e.g., layers/groupings) of characters beyond the BMP. Examples of astral symbols include 𝄞 (U+1D11E) and <g-emoji alias="hankey" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png" style="box-sizing: border-box;">💩</g-emoji> (U+1F4A9).

Prior to ES6, JavaScript strings could specify Unicode characters using Unicode escaping, such as:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> snowman <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>2603<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( snowman );         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "☃"</span></pre>

</div>

However, the `\uXXXX` Unicode escaping only supports four hexadecimal characters, so you can only represent the BMP set of characters in this way. To represent an astral character using Unicode escaping prior to ES6, you need to use a_surrogate pair_ -- basically two specially calculated Unicode-escaped characters side by side, which JS interprets together as a single astral character:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>D834<span class="pl-cce" style="box-sizing: border-box;">\u</span>DD1E<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( gclef );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝄞"</span></pre>

</div>

As of ES6, we now have a new form for Unicode escaping (in strings and regular expressions), called Unicode _code point escaping_:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\u</span>{1D11E}<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( gclef );           <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝄞"</span></pre>

</div>

As you can see, the difference is the presence of the `{ }` in the escape sequence, which allows it to contain any number of hexadecimal characters. Because you only need six to represent the highest possible code point value in Unicode (i.e., 0x10FFFF), this is sufficient.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-aware-string-operations)Unicode-Aware String Operations

By default, JavaScript string operations and methods are not sensitive to astral symbols in string values. So, they treat each BMP character individually, even the two surrogate halves that make up an otherwise single astral character. Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> snowman <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>☃<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
snowman.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;
gclef.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

So, how do we accurately calculate the length of such a string? In this scenario, the following trick will work:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> gclef <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>𝄞<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">gclef</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Array</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">from</span>( gclef ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span></pre>

</div>

Recall from the "`for..of` Loops" section earlier in this chapter that ES6 strings have built-in iterators. This iterator happens to be Unicode-aware, meaning it will automatically output an astral symbol as a single value. We take advantage of that using the `...` spread operator in an array literal, which creates an array of the string's symbols. Then we just inspect the length of that resultant array. ES6's `Array.from(..)` does basically the same thing as `[...XYZ]`, but we'll cover that utility in detail in Chapter 6.

**Warning:** It should be noted that constructing and exhausting an iterator just to get the length of a string is quite expensive on performance, relatively speaking, compared to what a theoretically optimized native utility/property would do.

Unfortunately, the full answer is not as simple or straightforward. In addition to the surrogate pairs (which the string iterator takes care of), there are special Unicode code points that behave in other special ways, which is much harder to account for. For example, there's a set of code points that modify the previous adjacent character, known as_Combining Diacritical Marks_.

Consider these two string outputs:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "é"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s2 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "é"</span></pre>

</div>

They look the same, but they're not! Here's how we created `s1` and `s2`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\x</span>E9<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;</pre>

</div>

As you can probably guess, our previous `length` trick doesn't work with `s2`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s1</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s2</span>].<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

So what can we do? In this case, we can perform a _Unicode normalization_ on the value before inquiring about its length, using the ES6 `String#normalize(..)` utility (which we'll cover more in Chapter 6):

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span><span class="pl-cce" style="box-sizing: border-box;">\x</span>E9<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s2;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>
s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>();          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

Essentially, `normalize(..)` takes a sequence like `"e\u0301"` and normalizes it to `"\xE9"`. Normalization can even combine multiple adjacent combining marks if there's a suitable Unicode character they combine to:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>o<span class="pl-cce" style="box-sizing: border-box;">\u</span>0302<span class="pl-cce" style="box-sizing: border-box;">\u</span>0300<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>(),
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ồ<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 3</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 1</span>

s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s3;                      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

Unfortunately, normalization isn't fully perfect here, either. If you have multiple combining marks modifying a single character, you may not get the length count you'd expect, because there may not be a single defined normalized character that represents the combination of all the marks. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>e<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301<span class="pl-cce" style="box-sizing: border-box;">\u</span>0330<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ḛ́"</span>

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">length</span>;          <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// 2</span></pre>

</div>

The further you go down this rabbit hole, the more you realize that it's difficult to get one precise definition for "length." What we see visually rendered as a single character -- more precisely called a _grapheme_ -- doesn't always strictly relate to a single "character" in the program processing sense.

**Tip:** If you want to see just how deep this rabbit hole goes, check out the "Grapheme Cluster Boundaries" algorithm ([http://www.Unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries](http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)).

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#character-positioning)Character Positioning

Similar to length complications, what does it actually mean to ask, "what is the character at position 2?" The naive pre-ES6 answer comes from `charAt(..)`, which will not respect the atomicity of an astral character, nor will it take into account combining marks.

Consider:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s1 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "abćd"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s2 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "abćd"</span>
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( s3 );              <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ab𝒞d"</span>

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "c"</span>
s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "" <-- unprintable surrogate</span>
s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">charAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span> );                 <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "" <-- unprintable surrogate</span></pre>

</div>

So, is ES6 giving us a Unicode-aware verison of `charAt(..)`? Unfortunately, no. At the time of this writing, there's a proposal for such a utility that's under consideration for post-ES6.

But with what we explored in the previous section (and of course with the limitations noted thereof!), we can hack an ES6 answer:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s1</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s2</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>
[...<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">s3</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>()][<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

**Warning:** Reminder of an earlier warning: constructing and exhausting an iterator each time you want to get at a single character is... very not ideal, performance wise. Let's hope we get a built-in and optimized utility for this soon, post-ES6.

What about a Unicode-aware version of the `charCodeAt(..)` utility? ES6 gives us `codePointAt(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "107"</span>

s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "107"</span>

s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ).<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">16</span> );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "1d49e"</span></pre>

</div>

What about the other direction? A Unicode-aware version of `String.fromCharCode(..)` is ES6's`String.fromCodePoint(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x107</span> );      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">0x1d49e</span> );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

So wait, can we just combine `String.fromCodePoint(..)` and `codePointAt(..)` to get a better version of a Unicode-aware `charAt(..)` from earlier? Yep!

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s1 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>abc<span class="pl-cce" style="box-sizing: border-box;">\u</span>0301d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>0107d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    s3 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>ab<span class="pl-cce" style="box-sizing: border-box;">\u</span>{1d49e}d<span class="pl-pds" style="box-sizing: border-box;">"</span></span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s1.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s2.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "ć"</span>

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">String</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">fromCodePoint</span>( s3.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">normalize</span>().<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">codePointAt</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span> ) );
<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "𝒞"</span></pre>

</div>

There's quite a few other string methods we haven't addressed here, including `toUpperCase()`, `toLowerCase()`,`substring(..)`, `indexOf(..)`, `slice(..)`, and a dozen others. None of these have been changed or augmented for full Unicode awareness, so you should be very careful -- probably just avoid them! -- when working with strings containing astral symbols.

There are also several string methods that use regular expressions for their behavior, like `replace(..)` and `match(..)`. Thankfully, ES6 brings Unicode awareness to regular expressions, as we covered in "Unicode Flag" earlier in this chapter.

OK, there we have it! JavaScript's Unicode string support is significantly better over pre-ES6 (though still not perfect) with the various additions we've just covered.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#unicode-identifier-names)Unicode Identifier Names

Unicode can also be used in identifier names (variables, properties, etc.). Prior to ES6, you could do this with Unicode-escapes, like:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> \u03A9 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// same as: var Ω = 42;</span></pre>

</div>

As of ES6, you can also use the earlier explained code point escape syntax:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> \u{2B400} <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>;

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// same as: var 𫐀 = 42;</span></pre>

</div>

There's a complex set of rules around exactly which Unicode characters are allowed. Furthermore, some are allowed only if they're not the first character of the identifier name.

**Note:** Mathias Bynens has a great post ([https://mathiasbynens.be/notes/javascript-identifiers-es6](https://mathiasbynens.be/notes/javascript-identifiers-es6)) on all the nitty-gritty details.

The reasons for using such unusual characters in identifier names are rather rare and academic. You typically won't be best served by writing code that relies on these esoteric capabilities.
### Symbols
## Symbols

With ES6, for the first time in quite a while, a new primitive type has been added to JavaScript: the `symbol`. Unlike the other primitive types, however, symbols don't have a literal form.

Here's how you create a symbol:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> sym <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>some optional description<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">typeof</span> sym;     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "symbol"</span></pre>

</div>

Some things to note:

*   You cannot and should not use `new` with `Symbol(..)`. It's not a constructor, nor are you producing an object.
*   The parameter passed to `Symbol(..)` is optional. If passed, it should be a string that gives a friendly description for the symbol's purpose.
*   The `typeof` output is a new value (`"symbol"`) that is the primary way to identify a symbol.

The description, if provided, is solely used for the stringification representation of the symbol:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">sym.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">toString</span>();     <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "Symbol(some optional description)"</span></pre>

</div>

Similar to how primitive string values are not instances of `String`, symbols are also not instances of `Symbol`. If, for some reason, you want to construct a boxed wrapper object form of a symbol value, you can do the following:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">sym <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">instanceof</span> Symbol;      <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// false</span>

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> symObj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>( sym );
symObj <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">instanceof</span> Symbol;   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span>

symObj.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">valueOf</span>() <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> sym;   <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

**Note:** `symObj` in this snippet is interchangeable with `sym`; either form can be used in all places symbols are utilized. There's not much reason to use the boxed wrapper object form (`symObj`) instead of the primitive form (`sym`). Keeping with similar advice for other primitives, it's probably best to prefer `sym` over `symObj`.

The internal value of a symbol itself -- referred to as its `name` -- is hidden from the code and cannot be obtained. You can think of this symbol value as an automatically generated, unique (within your application) string value.

But if the value is hidden and unobtainable, what's the point of having a symbol at all?

The main point of a symbol is to create a string-like value that can't collide with any other value. So, for example, consider using a symbol as a constant representing an event name:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>event.login<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

You'd then use `EVT_LOGIN` in place of a generic string literal like `"event.login"`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">evthub.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">listen</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span>, <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span>(<span class="pl-smi" style="box-sizing: border-box;">data</span>){
    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>
} );</pre>

</div>

The benefit here is that `EVT_LOGIN` holds a value that cannot be duplicated (accidentally or otherwise) by any other value, so it is impossible for there to be any confusion of which event is being dispatched or handled.

**Note:** Under the covers, the `evthub` utility assumed in the previous snippet would almost certainly be using the symbol value from the `EVT_LOGIN` argument directly as the property/key in some internal object (hash) that tracks event handlers. If `evthub` instead needed to use the symbol value as a real string, it would need to explicitly coerce with`String(..)` or `toString()`, as implicit string coercion of symbols is not allowed.

You may use a symbol directly as a property name/key in an object, such as a special property that you want to treat as hidden or meta in usage. It's important to know that although you intend to treat it as such, it is not _actually_ a hidden or untouchable property.

Consider this module that implements the _singleton_ pattern behavior -- that is, it only allows itself to be created once:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>instance<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">HappyFace</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>]) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>];

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">smile</span>() { .. }

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
        smile<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> smile
    };
}

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> me <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">HappyFace</span>(),
    you <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">HappyFace</span>();

me <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> you;         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

The `INSTANCE` symbol value here is a special, almost hidden, meta-like property stored statically on the `HappyFace()`function object.

It could alternatively have been a plain old property like `__instance`, and the behavior would have been identical. The usage of a symbol simply improves the metaprogramming style, keeping this `INSTANCE` property set apart from any other normal properties.

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#symbol-registry)Symbol Registry

One mild downside to using symbols as in the last few examples is that the `EVT_LOGIN` and `INSTANCE` variables had to be stored in an outer scope (perhaps even the global scope), or otherwise somehow stored in a publicly available location, so that all parts of the code that need to use the symbols can access them.

To aid in organizing code with access to these symbols, you can create symbol values with the _global symbol registry_. For example:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>event.login<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">EVT_LOGIN</span> );       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// Symbol(event.login)</span></pre>

</div>

And:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">HappyFace</span>() {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">const</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>instance<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">if</span> (HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>]) <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>];

    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// ..</span>

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> HappyFace[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">INSTANCE</span>] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> { .. };
}</pre>

</div>

`Symbol.for(..)` looks in the global symbol registry to see if a symbol is already stored with the provided description text, and returns it if so. If not, it creates one to return. In other words, the global symbol registry treats symbol values, by description text, as singletons themselves.

But that also means that any part of your application can retrieve the symbol from the registry using `Symbol.for(..)`, as long as the matching description name is used.

Ironically, symbols are basically intended to replace the use of _magic strings_ (arbitrary string values given special meaning) in your application. But you precisely use _magic_ description string values to uniquely identify/locate them in the global symbol registry!

To avoid accidental collisions, you'll probably want to make your symbol descriptions quite unique. One easy way of doing that is to include prefix/context/namespacing information in them.

For example, consider a utility such as the following:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">function</span> <span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">extractValues</span>(<span class="pl-smi" style="box-sizing: border-box;">str</span>) {
    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> key <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>extractValues.parse<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ),
        re <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> extractValues[key] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">||</span>
 <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>=&]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+?</span>=(<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">[<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">^</span>&]</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">+?</span>)(?=&<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">|</span><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">$</span>)<span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>,
        values <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [], match;

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">while</span> (match <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> re.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">exec</span>( str )) {
        values.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">push</span>( match[<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>] );
    }

    <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">return</span> values;
}</pre>

</div>

We use the magic string value `"extractValues.parse"` because it's quite unlikely that any other symbol in the registry would ever collide with that description.

If a user of this utility wants to override the parsing regular expression, they can also use the symbol registry:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);">extractValues[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>extractValues.parse<span class="pl-pds" style="box-sizing: border-box;">"</span></span> )] <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span>
 <span class="pl-sr" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">/</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span>some pattern<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">..</span><span class="pl-pds" style="box-sizing: border-box;">/</span>g</span>;

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">extractValues</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>..some string..<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );</pre>

</div>

Aside from the assistance the symbol registry provides in globally storing these values, everything we're seeing here could have been done by just actually using the magic string `"extractValues.parse"` as the key, rather than the symbol. The improvements exist at the metaprogramming level more than the functional level.

You may have occasion to use a symbol value that has been stored in the registry to look up what description text (key) it's stored under. For example, you may need to signal to another part of your application how to locate a symbol in the registry because you cannot pass the symbol value itself.

You can retrieve a registered symbol's description text (key) using `Symbol.keyFor(..)`:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>something cool<span class="pl-pds" style="box-sizing: border-box;">"</span></span> );

<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> desc <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">keyFor</span>( s );
<span class="pl-en" style="box-sizing: border-box; color: rgb(121, 93, 163);">console</span><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">.log</span>( desc );            <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// "something cool"</span>

<span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// get the symbol from the registry again</span>
<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">for</span>( desc );

s2 <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">===</span> s;                       <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// true</span></pre>

</div>

### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#symbols-as-object-properties)Symbols as Object Properties

If a symbol is used as a property/key of an object, it's stored in a special way so that the property will not show up in a normal enumeration of the object's properties:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> o <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> {
    foo<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">42</span>,
    [ <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Symbol</span>( <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>bar<span class="pl-pds" style="box-sizing: border-box;">"</span></span> ) ]<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(24, 54, 145);"><span class="pl-pds" style="box-sizing: border-box;">"</span>hello world<span class="pl-pds" style="box-sizing: border-box;">"</span></span>,
    baz<span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">:</span> <span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">true</span>
};

<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">getOwnPropertyNames</span>( o );    <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ "foo","baz" ]</span></pre>

</div>

To retrieve an object's symbol properties:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">Object</span>.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">getOwnPropertySymbols</span>( o );  <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// [ Symbol(bar) ]</span></pre>

</div>

This makes it clear that a property symbol is not actually hidden or inaccessible, as you can always see it in the`Object.getOwnPropertySymbols(..)` list.

#### [](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#built-in-symbols)Built-In Symbols

ES6 comes with a number of predefined built-in symbols that expose various meta behaviors on JavaScript object values. However, these symbols are _not_ registered in the global symbol registry, as one might expect.

Instead, they're stored as properties on the `Symbol` function object. For example, in the "`for..of`" section earlier in this chapter, we introduced the `Symbol.iterator` value:

<div class="highlight highlight-js" style="box-sizing: border-box; margin-bottom: 16px; font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif; font-size: 16px; line-height: 25.6000003814697px;">

<pre style="box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);"><span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">var</span> a <span class="pl-k" style="box-sizing: border-box; color: rgb(167, 29, 93);">=</span> [<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">1</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">2</span>,<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">3</span>];

a[Symbol.<span class="pl-c1" style="box-sizing: border-box; color: rgb(0, 134, 179);">iterator</span>];         <span class="pl-c" style="box-sizing: border-box; color: rgb(150, 152, 150);">// native function</span></pre>

</div>

The specification uses the `@@` prefix notation to refer to the built-in symbols, the most common ones being:`@@iterator`, `@@toStringTag`, `@@toPrimitive`. Several others are defined as well, though they probably won't be used as often.

**Note:** See "Well Known Symbols" in Chapter 7 for detailed information about how these built-in symbols are used for meta programming purposes.
### String value that can't be repeated
### Review
## Review

ES6 adds a heap of new syntax forms to JavaScript, so there's plenty to learn!

Most of these are designed to ease the pain points of common programming idioms, such as setting default values to function parameters and gathering the "rest" of the parameters into an array. Destructuring is a powerful tool for more concisely expressing assignments of values from arrays and nested objects.

While features like `=>` arrow functions appear to also be all about shorter and nicer-looking syntax, they actually have very specific behaviors that you should intentionally use only in appropriate situations.

Expanded Unicode support, new tricks for regular expressions, and even a new primitive `symbol` type round out the syntactic evolution of ES6.
### Organization
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch3.md
### Iterators
### Generators
### Interfaces
### Classes
### Modules
### Async && Flow Control
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch4.md
### Promises
### Thenable
### Generator + Promises
### Collections
### Map
### Sets
### Typed Arrays
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch5.md
### Api Additions
### Any additions to existing types
### Arrays
### Objects
### Meta Programming
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch7.md
### Proxies
### ...
### Beyond ES6
### https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch8.md
### Different approaches
### ES5 to 6 demo
### Looking at changes to exisiting features
### Additions
### New Native Solutions
