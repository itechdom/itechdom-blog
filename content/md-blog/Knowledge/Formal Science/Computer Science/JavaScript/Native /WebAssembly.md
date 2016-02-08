# Purpose
### Faster
### Statically typed
### Access to standard libraries and low level functionality
### stdlib
# resources
### https://github.com/dherman/asm.js/
### github repo
### http://asmjs.org/
### https://github.com/WebAssembly
### https://developer.mozilla.org/en-US/demos/detail/bananabread
### C/C++ game written in ASM.JS
### http://kripken.github.io/emscripten-site/
### Compile C/C++ to asm.js project
### https://kripken.github.io/talks/wasm.html#/14
### Slides explaining the process of converting javascript to asm.js through ecmascripten
### https://hacks.mozilla.org/2015/12/compiling-to-webassembly-its-happening/
### https://github.com/AdamColton/asmJsMandelbrot.git
# Concepts
### Linking
Depending on your implementation: compilation or interpretation might happen (compilation is more optimized).
### types
### http://asmjs.org/spec/latest/#types
### types that escape to external javascript
### coercion
### Bitwise operations
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.So they look at anything as binary, but eventually (and always) will return numbers.
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
### operators
The following table summarizes JavaScript's bitwise operators:OperatorUsageDescriptionBitwise ANDa & bReturns a one in each bit position for which the corresponding bits of both operands are ones.Bitwise ORa | bReturns a one in each bit position for which the corresponding bits of either or both operands are ones.Bitwise XORa ^ bReturns a one in each bit position for which the corresponding bits of either but not both operands are ones.Bitwise NOT~ aInverts the bits of its operand.Left shifta > bShifts a in binary representation b (>> bShifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.Example:& (Bitwise AND)Performs the AND operation on each pair of bits. a AND b yields 1 only if both a and b are 1. The truth table for the AND operation is:aba AND b000010100111.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
# New Standard
### http://www.2ality.com/2015/06/web-assembly.html
### Web Assembly and why
