# Purpose
### Faster
### Statically typed
### Access to standard libraries and low level functionality
### stdlib
# resources
### https://github.com/dherman/asm.js/
### github repo
### http://asmjs.org/
# Concepts
### Linking
Depending on your implementation: compilation or interpretation might happen (compilation is more optimized).
### types
### http://asmjs.org/spec/latest/#types
### types that escape to external javascript
### coercion
### Bitwise operations
**Bitwise operators**<span style="color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px;"> treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal </span>`[numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number")`<span style="color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px;">. For example, the decimal number nine has a binary representation of 1001\. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.</span>

<div><span style="color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px;">  
</span></div>

<div><span style="color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px;">So they look at anything as binary, but eventually (and always) will return numbers.</span></div>
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
### operators
The following table summarizes JavaScript's bitwise operators:

<table class="standard-table" style="margin: 0px 0px 24px; padding: 0px; border: 2px solid rgb(255, 255, 255); color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px; background-color: rgb(255, 255, 255);">

<tbody style="margin: 0px; padding: 0px; border: 0px;">

<tr style="margin: 0px; padding: 0px; border: 0px;">

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);">Operator</th>

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);">Usage</th>

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);">Description</th>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">[Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">`a & b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">Returns a one in each bit position for which the corresponding bits of both operands are ones.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">[Bitwise OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">`a | b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">Returns a one in each bit position for which the corresponding bits of either or both operands are ones.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">[Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">`a ^ b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">[Bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">`~ a`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">Inverts the bits of its operand.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">[Left shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">`a << b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">Shifts `a` in binary representation `b` (< 32) bits to the left, shifting in zeroes from the right.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">[Sign-propagating right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">`a >> b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">Shifts `a` in binary representation `b` (< 32) bits to the right, discarding bits shifted off.</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">[Zero-fill right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">`a >>> b`</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">Shifts `a` in binary representation `b` (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.</td>

</tr>

</tbody>

</table>

<div>Example:</div>

<div>

### <a name="Bitwise_AND" style="margin: 0px; padding: 0px; border: 0px; color: inherit;">& (Bitwise AND)</a>

Performs the AND operation on each pair of bits. `a` AND `b` yields 1 only if both `a` and `b` are 1\. The truth table for the AND operation is:

<table class="standard-table" style="margin: 0px 0px 24px; padding: 0px; border: 2px solid rgb(255, 255, 255); color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; line-height: 21px; background-color: rgb(255, 255, 255);">

<tbody style="margin: 0px; padding: 0px; border: 0px;">

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td class="header" style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-weight: 700; background: rgba(212, 221, 228, 0.247059);">a</td>

<td class="header" style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-weight: 700; background: rgba(212, 221, 228, 0.247059);">b</td>

<td class="header" style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-weight: 700; background: rgba(212, 221, 228, 0.247059);">a AND b</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">0</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">0</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">0</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">0</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">1</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">0</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">1</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">0</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">0</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">1</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">1</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">1  
</td>

</tr>

</tbody>

</table>

</div>

<div>

    .    9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)

</div>
# New Standard
### http://www.2ality.com/2015/06/web-assembly.html
### Web Assembly and why
