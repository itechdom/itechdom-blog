# concepts
### Keywords
### Mut
### let
### accepts a pattern
### Features
### No Garbage collection
### Reducing runtime overhead by letting the compiler do the work for us sometimes
### Macros
### !
### Result types
### for encoding error information
### is returned by functions as a result of an operations
### example 
### IO operations
### Ownership
### Borrowing
### Handing over a variable to a function
### http://rust-lang.github.io/book/understanding-ownership.html
### lifetime
### scope in other langs
### variables
### immutable
### instead of reassigning a value to a variable, we shadow
Wait a minute, I thought we already had a guess? We do, but Rust allows us to ‘shadow’ the previous guess with a new one. This is often used in this exact situation, where guess starts as a String, but we want to convert it to an u32\. Shadowing lets us re-use the guess name, rather than forcing us to come up with two unique names like guess_str and guess, or something else.
### Control structure
### Loop
### infinite loop
### break
### match
### struct
### creates a class
### impl
### defines functions on a class
### multi-threading
### mutexes
This Table has an vector of Mutexes. A mutex is a way to control concurrency: only one thread can access the contents at once. This is exactly the property we need with our forks. We use an empty tuple, (), inside the mutex, since we’re not actually going to use the value, just hold onto it.
### when a thread locks a mutex, other threads have to wait till it becomes available
### calling rust from other languages
### FFI
### Memory Management
if we have 1GB of memory, then we get an array of 1 - 230

stack and heap both access this array.

heap allocates from the end

Stack starts from zero
### Allocates to stack by default
### Last in first out
### when you call a function you allocate a new stack frame
### Limited in size, but fast
### Rust automatically clears up the memory once the function ends
### Heap
### Bigger size
### Slow
### Memory stays longer and has to be deallocated
### Most garbage collected languages use the heap
### use jemalloc for managing memory
# Impressions
### no classes, but it seems struct, impl replaces them
### Rust can be really effective for expensive computation
# Resources
### https://www.rust-lang.org/
### Docs
### http://doc.rust-lang.org/book/README.html
### Docker hub
### https://hub.docker.com/r/jimmycuadra/rust/
### Third party
### Cargo
### Package manager
### https://crates.io/
### TOML type
### build
### create target folder and add the bin there
### --release
### build with optimization
### run
### build and run
### new
### create new project
### --bin
### for not a library
### update
### ignore cargo.lock and update the dependencies
### Frameworks
### Iron
### web
### https://github.com/iron/iron
### Browser
### https://github.com/servo/servo
### https://killercup.github.io/trpl-ebook/trpl-2015-05-13-a4.pdf
### book
### page 119
