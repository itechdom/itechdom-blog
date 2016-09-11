# Concepts
### Linking
Depending on your implementation: compilation or interpretation might happen (compilation is more optimized).
### types
### http://asmjs.org/spec/latest/#types
### types that escape to external javascript
### coercion
### Purpose
### Faster
### Statically typed
### Access to standard libraries and low level functionality
### stdlib
### It will convert asm.js to a binary format that can run on the browser
### Enforcing any browser policy and sanboxed
### Converting other code to asm.js, then to wasm and run it
### overview
## Overview

*   **Efficient and fast**: The wasm [AST](https://github.com/WebAssembly/design/blob/master/AstSemantics.md) is designed to be encoded in a size- and load-time-efficient [binary format](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md). WebAssembly aims to execute at native speed by taking advantage of [common hardware capabilities](https://github.com/WebAssembly/design/blob/master/Portability.md#assumptions-for-efficient-execution) available on a wide range of platforms.

*   **Safe**: WebAssembly describes a memory-safe, sandboxed [execution environment](https://github.com/WebAssembly/design/blob/master/AstSemantics.md#linear-memory)that may even be implemented inside existing JavaScript virtual machines. When[embedded in the web](https://github.com/WebAssembly/design/blob/master/Web.md), WebAssembly will enforce the same-origin and permissions security policies of the browser.

*   **Open and debuggable**: WebAssembly is designed to be pretty-printed in a [textual format](https://github.com/WebAssembly/design/blob/master/TextFormat.md) for debugging, testing, experimenting, optimizing, learning, teaching, and writing programs by hand. The textual format will be used when [viewing the source](https://github.com/WebAssembly/design/blob/master/FAQ.md#will-webassembly-support-view-source-on-the-web)of wasm modules on the web.

*   **Part of the open web platform**: WebAssembly is designed to maintain the versionless, feature-tested, and backwards-compatible [nature of the web](https://github.com/WebAssembly/design/blob/master/Web.md). WebAssembly modules will be able to call into and out of the JavaScript context and access browser functionality through the same Web APIs accessible from JavaScript. WebAssembly also supports [non-web](https://github.com/WebAssembly/design/blob/master/NonWeb.md) embeddings.

Read the project's [high-level goals](https://github.com/WebAssembly/design/blob/master/HighLevelGoals.md) and consult the [FAQ](https://github.com/WebAssembly/design/blob/master/FAQ.md) section for more information.
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


# Thrid Party
### Emscripten
### http://kripken.github.io/emscripten-site/
# resources
### Examples
### https://github.com/AdamColton/asmJsMandelbrot.git
### https://hacks.mozilla.org/2015/12/compiling-to-webassembly-its-happening/
### https://developer.mozilla.org/en-US/demos/detail/bananabread
### C/C++ game written in ASM.JS
### Talks
### https://brendaneich.com/2015/06/from-asm-js-to-webassembly/
### https://kripken.github.io/talks/wasm.html#/14
### Slides explaining the process of converting javascript to asm.js through ecmascripten
### Main Repo
### https://github.com/WebAssembly
### Asm.js
### https://github.com/dherman/asm.js/
### github repo
# New Standard
### http://www.2ality.com/2015/06/web-assembly.html
### Web Assembly and why
