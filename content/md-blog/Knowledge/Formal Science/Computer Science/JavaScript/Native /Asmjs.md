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
**Bitwise operators** treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal `[numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number")`. For example, the decimal number nine has a binary representation of 1001\. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

  


So they look at anything as binary, but eventually (and always) will return numbers.
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
### operators
The following table summarizes JavaScript's bitwise operators:







Operator

Usage

Description





[Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)

`a & b`

Returns a one in each bit position for which the corresponding bits of both operands are ones.





[Bitwise OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR)

`a | b`

Returns a one in each bit position for which the corresponding bits of either or both operands are ones.





[Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)

`a ^ b`

Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.





[Bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)

`~ a`

Inverts the bits of its operand.





[Left shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift)

`a 

Shifts `a` in binary representation `b` (





[Sign-propagating right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift)

`a >> b`

Shifts `a` in binary representation `b` (





[Zero-fill right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift)

`a >>> b`

Shifts `a` in binary representation `b` (







Example:



### & (Bitwise AND)

Performs the AND operation on each pair of bits. `a` AND `b` yields 1 only if both `a` and `b` are 1\. The truth table for the AND operation is:







a

b

a AND b





0

0

0





0

1

0





1

0

0





1

1

1  












    .    9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)


# New Standard
### http://www.2ality.com/2015/06/web-assembly.html
### Web Assembly and why
