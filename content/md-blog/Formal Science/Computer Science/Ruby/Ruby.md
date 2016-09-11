# Concept
### Data Structures
### Collection
### Hash
### Arrays
### Objects that store a collection of values
### Advanced
### Multi-threading
### http://www.tutorialspoint.com/ruby/ruby_multithreading.htm
### GUI
### http://www.tutorialspoint.com/ruby/ruby_tk_guide.htm
### XML parsing
### http://www.tutorialspoint.com/ruby/ruby_xml_xslt.htm
### Sockets
### http://www.tutorialspoint.com/ruby/ruby_socket_programming.htm
### CGI script
### http://www.tutorialspoint.com/ruby/ruby_web_applications.htm
### Database
### http://www.tutorialspoint.com/ruby/ruby_database_access.htm
### IO
### http://www.tutorialspoint.com/ruby/ruby_input_output.htm
### Encapsulation
### Closure
def counter n = 0 return Proc.new { n+= 1 } end a = counter a.call # returns 1 a.call # returns 2 b = counter b.call # returns 1 a.call # returns 3

  


  

### a Function
### Maintains its local scope when it gets passed around
### Blocks
def **with_timing**(&block)

  start_time = Time.now

  return_value = block.call

  log(Time.now - start_time)

  return_value

end



def timed_operation(x)

**with_timing** do

    calculate_some_stuff(x)

  end

end



Passing a block is like passing and anonymous function.
### Like anonymous functions
### They are used a lot as a callback
### Lambda
### Procs
### Difference between the three
### http://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/
### Proc can be assigned as a variable
### Blocks get passed as an arguemnt
### { }
### Procs vs lambdas
### Differences between Procs and Lambdas

Before I get into the differences between procs and lambdas, it is important to mention that they are both Proc objects.















1
2
3
4
5






    proc = Proc.new { puts "Hello world" }
    lam = lambda { puts "Hello World" }

    proc.class # returns 'Proc'
    lam.class  # returns 'Proc'













However, lambdas are a different ‘flavor’ of procs. This slight difference is shown when returning the objects.















1
2






    proc   # returns '#'
    lam    # returns ''













The (lambda) notation is a reminder that while procs and lambdas are very similar, even both instances of the Proc class, they are also slightly different. Below are the key differences.

1.  **Lambdas check the number of arguments, while procs do not**















1
2
3
4






    lam = lambda { |x| puts x }    # creates a lambda that takes 1 argument
    lam.call(2)                    # prints out 2
    lam.call                       # ArgumentError: wrong number of arguments (0 for 1)
    lam.call(1,2,3)                # ArgumentError: wrong number of arguments (3 for 1)



























1
2
3
4






    proc = Proc.new { |x| puts x } # creates a proc that takes 1 argument
    proc.call(2)                   # prints out 2
    proc.call                      # returns nil
    proc.call(1,2,3)               # prints out 1 and forgets about the extra arguments













6.  **Lambdas and procs treat the ‘return’ keyword differently**















1
2
3
4
5
6
7






    def lambda_test
      lam = lambda { return }
      lam.call
      puts "Hello world"
    end

    lambda_test                 # calling lambda_test prints 'Hello World'



























1
2
3
4
5
6
7






    def proc_test
      proc = Proc.new { return }
      proc.call
      puts "Hello world"
    end

    proc_test                 # calling proc_test prints nothing












### Procs don't care about number of arguements
### Return on lambda will continue execution of the method it's running in
### Modules
### http://www.tutorialspoint.com/ruby/ruby_modules.htm
# Starter Project
### How to setup and HTTP server
    def when_status(response, responders)
      if responder = responders[response[:status]]
        responder.call(response)
      else
        handle_generically(response)
      end
    end

    def get_all_the_things
      when_status get("/things"), {
        200 => lambda do |response|
          load_things(response[:body])
        end,
        404 => lambda do
          "Whoops"
        end
      }
    end
# Patterns
### Functional
### https://github.com/jdantonio/functional-ruby
# Resources
### http://www.tutorialspoint.com/ruby/
### https://www.ruby-lang.org/en/
### Docs page
### https://www.ruby-lang.org/en/documentation/
### https://en.wikipedia.org/wiki/Ruby_(programming_language)
# Third Party
### Rx Ruby
### https://github.com/ReactiveX/RxRuby
### Rack
### http://rack.github.io/
### https://drive.google.com/open?id=0B9tPYCpuqoIrOGp1Z2E5b25jbG8
