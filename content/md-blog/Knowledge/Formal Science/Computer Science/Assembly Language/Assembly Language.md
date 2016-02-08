# Concepts
### Converted into executable machine code by
### Assembler
assemblers came first as they are far simpler to write than [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler") for [high-level languages](https://en.wikipedia.org/wiki/High-level_language "High-level language")
### Creates Object Code
### Example
### Assembly language[[edit](https://en.wikipedia.org/w/index.php?title=Assembly_language&action=edit&section=5 "Edit section: Assembly language")]

A program written in assembly language consists of a series of (mnemonic) processor instructions and meta-statements (known variously as directives, pseudo-instructions and pseudo-ops), comments and data. Assembly language instructions usually consist of an [opcode](https://en.wikipedia.org/wiki/Opcode "Opcode") mnemonic followed by a list of data, arguments or parameters.[[6]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-6) These are translated by an [assembler](https://en.wikipedia.org/wiki/Assembly_language_assembler "Assembly language assembler") into [machine language](https://en.wikipedia.org/wiki/Machine_language "Machine language") instructions that can be loaded into memory and executed.

For example, the instruction below tells an [x86](https://en.wikipedia.org/wiki/X86 "X86")/[IA-32](https://en.wikipedia.org/wiki/IA-32 "IA-32") processor to move an[immediate 8-bit value](https://en.wikipedia.org/wiki/Constant_(programming) "Constant (programming)") into a [register](https://en.wikipedia.org/wiki/Processor_register "Processor register"). The binary code for this instruction is 10110 followed by a 3-bit identifier for which register to use. The identifier for the _AL_register is 000, so the following [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code") loads the _AL_ register with the data 01100001.[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)

10110000 01100001


This binary computer code can be made more human-readable by expressing it in[hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal "Hexadecimal") as follows.

B0 61


Here, `B0` means 'Move a copy of the following value into _AL'_, and `61` is a hexadecimal representation of the value 01100001, which is 97 in [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal"). Assembly language for the 8086 family provides the [mnemonic](https://en.wikipedia.org/wiki/Mnemonic "Mnemonic") [MOV](https://en.wikipedia.org/wiki/MOV_(x86_instruction) "MOV (x86 instruction)") (an abbreviation of _move_) for instructions such as this, so the machine code above can be written as follows in assembly language, complete with an explanatory comment if required, after the semicolon. This is much easier to read and to remember.



MOV AL, 61h       ; Load AL with 97 decimal (61 hex)




In some assembly languages the same mnemonic such as MOV may be used for a family of related instructions for loading, copying and moving data, whether these are immediate values, values in registers, or memory locations pointed to by values in registers. Other assemblers may use separate opcode mnemonics such as L for "move memory to register", ST for "move register to memory", LR for "move register to register", MVI for "move immediate operand to memory", etc.

The x86 opcode 10110000 (`B0`) copies an 8-bit value into the _AL_ register, while 10110001 (`B1`) moves it into _CL_ and 10110010 (`B2`) does so into _DL_. Assembly language examples for these follow.[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)



MOV AL, 1h        ; Load AL with immediate value 1
MOV CL, 2h        ; Load CL with immediate value 2
MOV DL, 3h        ; Load DL with immediate value 3




The syntax of MOV can also be more complex as the following examples show.[[8]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-8)



MOV EAX, [EBX]	  ; Move the 4 bytes in memory at the address contained in EBX into EAX
MOV [ESI+EAX], CL ; Move the contents of CL into the byte at address ESI+EAX




In each case, the MOV mnemonic is translated directly into an opcode in the ranges 88-8E, A0-A3, B0-B8, C6 or C7 by an assembler, and the programmer does not have to know or remember which.[[7]](https://en.wikipedia.org/wiki/Assembly_language#cite_note-intel-1999-MOV-7)

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
