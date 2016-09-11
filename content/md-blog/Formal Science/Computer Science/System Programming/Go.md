# Concepts
### defer
## Defer

A defer statement defers the execution of a function until the surrounding function returns.

The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

package main

  


import "fmt"

  


func main() {

defer fmt.Println("world")

  


fmt.Println("hello")

}
### stacking defers
## Stacking defers

Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.

To learn more about defer statements read this [blog post](https://blog.golang.org/defer-panic-and-recover).
### Pointers
## Pointers

Go has pointers. A pointer holds the memory address of a variable.

The type `*T` is a pointer to a `T` value. Its zero value is `nil`.

var p *int

The `&` operator generates a pointer to its operand.

i := 42
p = &i

The `*` operator denotes the pointer's underlying value.

fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p

This is known as "dereferencing" or "indirecting".

Unlike C, Go has no pointer arithmetic.
### example
package main

import "fmt"

func main() {

i, j := 42, 2701

p := &i         // point to i

fmt.Println(*p) // read i through the pointer

*p = 21         // set i through the pointer

fmt.Println(i)  // see the new value of i

p = &j         // point to j

*p = *p / 37   // divide j through the pointer

fmt.Println(j) // see the new value of j

}
### types
### Zero values
### if variables aren't given an implicit type
### for a pointer it's a nil
### type conversion
### https://tour.golang.org/basics/13
### Basic types
### https://tour.golang.org/basics/11
### implicit types
### k:="hello"
### k is a string
### omitting types on variable declarations
package main

import "fmt"

var i, j int = 1, 2

func main() {

var c, python, java = true, false, "no!"

fmt.Println(i, j, c, python, java)

}
### declaration syntax
### https://blog.golang.org/gos-declaration-syntax
### Shifting bits
### https://tour.golang.org/basics/16
### Structs
### https://tour.golang.org/moretypes/2
### Arrays
### https://tour.golang.org/moretypes/6
### slices
### https://tour.golang.org/moretypes/7
### they are just references to a section of the array
### more common than arrays
### slice literal
### https://tour.golang.org/moretypes/9
### length and capacity
### https://tour.golang.org/moretypes/11
### Operations
### make
### create dynamically sized arrays
### https://tour.golang.org/moretypes/13
### append
### https://tour.golang.org/moretypes/15
### Range
### https://tour.golang.org/moretypes/16
### Maps
### https://tour.golang.org/moretypes/19
### Map literal
### https://tour.golang.org/moretypes/20
### Operations
### https://tour.golang.org/moretypes/22
### functions
### functions can return any number of results
package main

import "fmt"

func swap(x, y string) (string, string) {

return y, x

}

func main() {

a, b := swap("hello", "world")

fmt.Println(a, b)

}
### They can be passed around
### https://tour.golang.org/moretypes/24
### closures
package main

import "fmt"

func adder() func(int) int {

sum := 0

return func(x int) int {

sum += x

return sum

}

}

func main() {

pos, neg := adder(), adder()

for i := 0; i 

fmt.Println(

pos(i),

neg(-2*i),

)

}

}
### https://tour.golang.org/moretypes/25
### Methods
### https://tour.golang.org/methods/1
### Control structures
### for loop
https://tour.golang.org/flowcontrol/1
### for replaces while
### infinite loops
package main

func main() {

for {

}

}
### Short if statement
https://tour.golang.org/flowcontrol/6
### switch statement
https://tour.golang.org/flowcontrol/10
### LRU cache
### http://mcicpc.cs.atu.edu/archives/2012/mcpc2012/lru/lru.html
### Thread safe
**Thread safety** is a [computer programming](https://en.wikipedia.org/wiki/Computer_programming "Computer programming") concept applicable in the context of [multi-threaded](https://en.wikipedia.org/wiki/Multi-threaded "Multi-threaded") programs. A piece of code is **thread-safe** if it only manipulates shared data structures in a manner that guarantees safe execution by multiple threads at the same time. There are various strategies for making thread-safe data structures.[[1]](https://en.wikipedia.org/wiki/Thread_safety#cite_note-1)[[2]](https://en.wikipedia.org/wiki/Thread_safety#cite_note-2)
### https://en.wikipedia.org/wiki/Thread_safety
### Archeticture
### Go run in packages
### math/rand
### any package that starts with "package rand"
# Resources
### https://golang.org/
### main website
### Go tour
### https://tour.golang.org/list
### tutorials
### https://github.com/astaxie/build-web-application-with-golang/tree/master/en
### web application with Go
### https://github.com/astaxie/build-web-application-with-golang/blob/master/en/01.2.md
### I stopped here
### https://github.com/GoesToEleven/GolangTraining
### general go lessons
### third party
### https://github.com/gpmgo/gopm
### go package manager
### https://github.com/gin-gonic/gin
### http library
### https://github.com/jinzhu/gorm
### ORM
### https://github.com/gorilla/mux
### router and dispatcher
### https://github.com/hybridgroup/gobot
### gobot
### https://github.com/googollee/go-socket.io
### socket.io in go
### https://github.com/tealeg/xlsx
### Excel
### https://github.com/olebedev/go-starter-kit
### go starter kit with react
### https://github.com/Masterminds/squirrel
### nice sql generation
### https://github.com/nitrous-io/goop
### goop dependency manager
### https://github.com/rogeralsing/gam
### go actors
### https://github.com/visualfc/go-ui
### https://github.com/visualfc/goqt
### links from the go tour


# Welcome to a tour of Go





Using the tour



Welcome to a tour of the [Go programming language](http://golang.org/). The tour covers the most important features of the language, mainly:



[Welcome!](https://tour.golang.org/welcome)

Learn how to use this tour: including how to navigate the different lessons and how to run code.







Basics



The starting point, learn all the basics of the language.

Declaring variables, calling functions, and all the things you need to know before moving to the next lessons.



[Packages, variables, and functions.](https://tour.golang.org/basics)

Learn the basic components of any Go program.



[Flow control statements: for, if, else, switch and defer](https://tour.golang.org/flowcontrol)

Learn how to control the flow of your code with conditionals, loops, switches and defers.



[More types: structs, slices, and maps.](https://tour.golang.org/moretypes)

Learn how to define types based on existing ones: this lesson covers structs, arrays, slices, and maps.







Methods and interfaces



Learn how to define methods on types, how to declare interfaces, and how to put everything together.



[Methods and interfaces](https://tour.golang.org/methods)

This lesson covers methods and interfaces, the constructs that define objects and their behavior.







Concurrency



Go provides concurrency features as part of the core language.

This module goes over goroutines and channels, and how they are used to implement different concurrency patterns.



[Concurrency](https://tour.golang.org/concurrency)

Go provides concurrency constructions as part of the core language. This lessons presents them and gives some examples on how to use it.




### Github search for most starred libraries
### https://github.com/search?o=desc&q=golang&s=stars&type=Repositories&utf8=%E2%9C%93
### Meta resources
### https://github.com/dariubs/GoBooks
### List of books
### https://github.com/ry/v8worker
### go binding with V8
