# Concepts
### Converted into executable machine code by
### Assembler
<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;">assemblers came first as they are far simpler to write than </span>[compilers](https://en.wikipedia.org/wiki/Compiler "Compiler")<span style="color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px;"> for </span>[high-level languages](https://en.wikipedia.org/wiki/High-level_language "High-level language")
### Creates Object Code
### Example
### <span class="mw-headline" id="Assembly_language">Assembly language</span><span class="mw-editsection" style="-webkit-user-select: none; font-size: small; font-weight: normal; margin-left: 1em; vertical-align: baseline; line-height: 1em; display: inline-block; white-space: nowrap; unicode-bidi: -webkit-isolate;"><span class="mw-editsection-bracket" style="margin-right: 0px; color: rgb(85, 85, 85); margin-left: 0px;">[</span>[edit](https://en.wikipedia.org/w/index.php?title=Assembly_language&action=edit&section=5 "Edit section: Assembly language")<span class="mw-editsection-bracket" style="margin-left: 0px; color: rgb(85, 85, 85); margin-right: 0px;">]</span></span>

A program written in assembly language consists of a series of (mnemonic) processor instructions and meta-statements (known variously as directives, pseudo-instructions and pseudo-ops), comments and data. Assembly language instructions usually consist of an [opcode](https://en.wikipedia.org/wiki/Opcode "Opcode") mnemonic followed by a list of data, arguments or parameters.<sup id="cite_ref-intel-1999_6-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[6]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-6)</sup> These are translated by an [assembler](https://en.wikipedia.org/wiki/Assembly_language_assembler "Assembly language assembler") into [machine language](https://en.wikipedia.org/wiki/Machine_language "Machine language") instructions that can be loaded into memory and executed.

For example, the instruction below tells an [x86](https://en.wikipedia.org/wiki/X86 "X86")/[IA-32](https://en.wikipedia.org/wiki/IA-32 "IA-32") processor to move an[immediate 8-bit value](https://en.wikipedia.org/wiki/Constant_(programming) "Constant (programming)") into a [register](https://en.wikipedia.org/wiki/Processor_register "Processor register"). The binary code for this instruction is 10110 followed by a 3-bit identifier for which register to use. The identifier for the _AL_register is 000, so the following [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code") loads the _AL_ register with the data 01100001.<sup id="cite_ref-intel-1999-MOV_7-0" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)</sup>

<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; font-size: 14px; background-color: rgb(249, 249, 249);">10110000 01100001
</pre>

This binary computer code can be made more human-readable by expressing it in[hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal "Hexadecimal") as follows.

<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; font-size: 14px; background-color: rgb(249, 249, 249);">B0 61
</pre>

Here, `B0` means 'Move a copy of the following value into _AL'_, and `61` is a hexadecimal representation of the value 01100001, which is 97 in [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal"). Assembly language for the 8086 family provides the [mnemonic](https://en.wikipedia.org/wiki/Mnemonic "Mnemonic") [MOV](https://en.wikipedia.org/wiki/MOV_(x86_instruction) "MOV (x86 instruction)") (an abbreviation of _move_) for instructions such as this, so the machine code above can be written as follows in assembly language, complete with an explanatory comment if required, after the semicolon. This is much easier to read and to remember.

<div class="mw-highlight mw-content-ltr" dir="ltr" style="direction: ltr; unicode-bidi: embed; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px; background: rgb(248, 248, 248);">

<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; background-color: rgb(249, 249, 249);"><span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="nb" style="color: rgb(0, 128, 0);">AL</span><span class="p">,</span> <span class="mh" style="color: rgb(102, 102, 102);">61h</span>       <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Load AL with 97 decimal (61 hex)</span>
</pre>

</div>

In some assembly languages the same mnemonic such as MOV may be used for a family of related instructions for loading, copying and moving data, whether these are immediate values, values in registers, or memory locations pointed to by values in registers. Other assemblers may use separate opcode mnemonics such as L for "move memory to register", ST for "move register to memory", LR for "move register to register", MVI for "move immediate operand to memory", etc.

The x86 opcode 10110000 (`B0`) copies an 8-bit value into the _AL_ register, while 10110001 (`B1`) moves it into _CL_ and 10110010 (`B2`) does so into _DL_. Assembly language examples for these follow.<sup id="cite_ref-intel-1999-MOV_7-1" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)</sup>

<div class="mw-highlight mw-content-ltr" dir="ltr" style="direction: ltr; unicode-bidi: embed; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px; background: rgb(248, 248, 248);">

<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; background-color: rgb(249, 249, 249);"><span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="nb" style="color: rgb(0, 128, 0);">AL</span><span class="p">,</span> <span class="mh" style="color: rgb(102, 102, 102);">1h</span>        <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Load AL with immediate value 1</span>
<span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="nb" style="color: rgb(0, 128, 0);">CL</span><span class="p">,</span> <span class="mh" style="color: rgb(102, 102, 102);">2h</span>        <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Load CL with immediate value 2</span>
<span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="nb" style="color: rgb(0, 128, 0);">DL</span><span class="p">,</span> <span class="mh" style="color: rgb(102, 102, 102);">3h</span>        <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Load DL with immediate value 3</span>
</pre>

</div>

The syntax of MOV can also be more complex as the following examples show.<sup id="cite_ref-8" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[8]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-8)</sup>

<div class="mw-highlight mw-content-ltr" dir="ltr" style="direction: ltr; unicode-bidi: embed; color: rgb(37, 37, 37); font-family: sans-serif; line-height: 22.3999996185303px; background: rgb(248, 248, 248);">

<pre style="font-family: monospace, Courier; color: black; border-color: rgb(221, 221, 221); padding: 1em; line-height: 1.3em; background-color: rgb(249, 249, 249);"><span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="nb" style="color: rgb(0, 128, 0);">EAX</span><span class="p">,</span> <span class="p">[</span><span class="nb" style="color: rgb(0, 128, 0);">EBX</span><span class="p">]</span>	  <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Move the 4 bytes in memory at the address contained in EBX into EAX</span>
<span class="nf" style="color: rgb(0, 0, 255);">MOV</span> <span class="p">[</span><span class="nb" style="color: rgb(0, 128, 0);">ESI</span><span class="o" style="color: rgb(102, 102, 102);">+</span><span class="nb" style="color: rgb(0, 128, 0);">EAX</span><span class="p">],</span> <span class="nb" style="color: rgb(0, 128, 0);">CL</span> <span class="c1" style="color: rgb(64, 128, 128); font-style: italic;">; Move the contents of CL into the byte at address ESI+EAX</span>
</pre>

</div>

In each case, the MOV mnemonic is translated directly into an opcode in the ranges 88-8E, A0-A3, B0-B8, C6 or C7 by an assembler, and the programmer does not have to know or remember which.<sup id="cite_ref-intel-1999-MOV_7-2" class="reference" style="line-height: 1; font-size: 11.1999998092651px; unicode-bidi: -webkit-isolate;">[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)</sup>

Transforming assembly language into machine code is the job of an assembler, and the reverse can at least partially be achieved by a [disassembler](https://en.wikipedia.org/wiki/Disassembler "Disassembler"). Unlike [high-level languages](https://en.wikipedia.org/wiki/High-level_language "High-level language"), there is usually a [one-to-one correspondence](https://en.wikipedia.org/wiki/One-to-one_correspondence "One-to-one correspondence") between simple assembly statements and machine language instructions. However, in some cases, an assembler may provide _pseudoinstructions_ (essentially macros) which expand into several machine language instructions to provide commonly needed functionality. For example, for a machine that lacks a "branch if greater or equal" instruction, an assembler may provide a pseudoinstruction that expands to the machine's "set if less than" and "branch if zero (on the result of the set instruction)". Most full-featured assemblers also provide a rich [macro](https://en.wikipedia.org/wiki/Macro_(computer_science) "Macro (computer science)") language (discussed below) which is used by vendors and programmers to generate more complex code and data sequences.

Each [computer architecture](https://en.wikipedia.org/wiki/Computer_architecture "Computer architecture") has its own machine language. Computers differ in the number and type of operations they support, in the different sizes and numbers of registers, and in the representations of data in storage. While most general-purpose computers are able to carry out essentially the same functionality, the ways they do so differ; the corresponding assembly languages reflect these differences.

Multiple sets of [mnemonics](https://en.wikipedia.org/wiki/Mnemonic "Mnemonic") or assembly-language syntax may exist for a single instruction set, typically instantiated in different assembler programs. In these cases, the most popular one is usually that supplied by the manufacturer and used in its documentation.
### Different From One language to another
### It's a programming language like any other
### Argument against it
### Optimizing Compilers
### https://en.wikipedia.org/wiki/Optimizing_compiler
# Resources
### https://en.wikipedia.org/wiki/Assembly_language
