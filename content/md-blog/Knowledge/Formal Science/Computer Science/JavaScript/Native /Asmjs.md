# Purpose
## Faster
## Statically typed
## Access to standard libraries and low level functionality
### stdlib
# resources
## https://github.com/dherman/asm.js/
### github repo
## http://asmjs.org/
# Concepts
## Linking
Depending on your implementation: compilation or interpretation might happen (compilation is more optimized).
## types
### http://asmjs.org/spec/latest/#types
### types that escape to external javascript
### coercion
## Bitwise operations
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
#### operators
<p>The following table summarizes JavaScript&apos;s bitwise operators:</p><table class="standard-table"><tbody><tr><th>Operator</th><th>Usage</th><th>Description</th></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND">Bitwise AND</a></td><td><code>a &amp; b</code></td><td>Returns a one in each bit position for which the corresponding bits of both operands are ones.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR">Bitwise OR</a></td><td><code>a | b</code></td><td>Returns a one in each bit position for which the corresponding bits of either or both operands are ones.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR">Bitwise XOR</a></td><td><code>a ^ b</code></td><td>Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT">Bitwise NOT</a></td><td><code>~ a</code></td><td>Inverts the bits of its operand.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift">Left shift</a></td><td><code>a &lt;&lt; b</code></td><td>Shifts&#xA0;<code>a</code>&#xA0;in binary representation&#xA0;<code>b</code>&#xA0;(&lt; 32) bits to the left, shifting in zeroes from the right.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift">Sign-propagating right shift</a></td><td><code>a &gt;&gt; b</code></td><td>Shifts&#xA0;<code>a</code>&#xA0;in binary representation&#xA0;<code>b</code>&#xA0;(&lt; 32) bits to the right, discarding bits shifted off.</td></tr><tr><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift">Zero-fill right shift</a></td><td><code>a &gt;&gt;&gt; b</code></td><td>Shifts&#xA0;<code>a</code>&#xA0;in binary representation&#xA0;<code>b</code>&#xA0;(&lt; 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.</td></tr></tbody></table><br><div>Example:</div><div><br></div><div><h3 id="(Bitwise_AND)"><a name="Bitwise_AND">&amp; (Bitwise AND)</a></h3><p>Performs the AND operation on each pair of bits.&#xA0;<code>a</code>&#xA0;AND&#xA0;<code>b</code>&#xA0;yields 1 only if both&#xA0;<code>a</code>&#xA0;and&#xA0;<code>b</code>&#xA0;are 1. The truth table for the AND operation is:</p><table class="standard-table"><tbody><tr><td class="header">a</td><td class="header">b</td><td class="header">a AND b</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1<br></td></tr></tbody></table><br></div><div><pre class=" language-html" data-number=""><code class=" language-html">.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 &amp; 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)</code></pre></div>
<strong>Bitwise operators</strong><span>&#xA0;treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal&#xA0;</span><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" title="/en-US/docs/JavaScript/Reference/Global_Objects/Number">numbers</a></code><span>. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.</span><div><span><br></span></div><div><span>So they look at anything as binary, but eventually (and always) will return numbers.</span></div>
# New Standard
## http://www.2ality.com/2015/06/web-assembly.html
### Web Assembly and why
