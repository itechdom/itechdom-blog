# Concepts
### Basics


### Regex Basics

*   [abc] A single character: a, b or c
*   [^abc] Any single character but a, b, or c
*   [a-z] Any single character in the range a-z
*   [a-zA-Z] Any single character in the range a-z or A-Z
*   [1-9] any number between 1 and 9
*   ^ Start of line
*   $ End of line
*   \A Start of string
*   \z End of string





### Shortcuts (meta characters)

*   . Any single character
*   \s Any whitespace character
*   \S Any non-whitespace character
*   \d Any digit
*   \D Any non-digit
*   \w Any word character (letter, number, underscore)
*   \W Any non-word character
*   \b Any word boundary character





### Groups

*   (…) Capture everything enclosed
*   (a|b) a or b
*   ? Zero or one of a
*   * Zero or more of a
*   + One or more of a
*   {3} Exactly 3 of a
*   {3,} 3 or more of a
*   a{3,6} Between 3 and 6 of a





### Characters that needs to be escaped.

*   They are escaped with a backward slash \\
*   Characters are:





    . | ( ) [ ] { } + \ ^ $ * ?


### Capturing
### capturing

* We can specify variables in regex that we can refer to later

* The exampel below stores month, day and year when given a date.

```ruby

(?\d{1,2})\/(?\d{1,2})\/(?\d{4})

```

Then we can do something like this:

```ruby

date_string = "06/11/1985"

pattern = /(?\d{1,2})\/(?\d{1,2})\/(?\d{4})/

result = date_string.match(pattern)

# we can now access the days, month and year

result[:day] #11

result[:month] #06

result[:year] #1985

```

### exercise

* Write a pattern that will take a decimal number (ie: 3.4)

* It captures the number in dollars and cents

* display the dollars and cents in that number

* You should modify the previous example

```ruby

(?\d{1,2})\/(?\d{1,2})\/(?\d{4})

```
### Ways to use Regex
### Ways to Use Regex in Ruby

* Match

* Scan

* =~

* Gsub

* Split

```ruby

a = /a/

a.class # Regexp

myString = "A woman once said. A man once said. A child once said"

match = myString.match(a) #this will return a

match = myString.scan(a) #this will return ["a", "a", "a", "a", "a"]

match = myString.gsub(a,"b") #this will replace all a(s) with b, leaving behind capital A

myString =~ a #return the index of the first occurance 

match = myString.split(a) # split a string by a(s)

```
### You need to escape special chars to make them literal
Similar to the DOT char. if you want to the actual . character (as in at the end of a sentence). Then you must escape it with \
### Optional element
### ?
### http://regex.learncodethehardway.org/book/ex8.html
### Repitition
The regex symbol for "one-or-more" is + and for "zero-or-more" is *. Just like with the "optional" symbol ? you place it after the regex symbol or character set to repeat and that's it.
### http://regex.learncodethehardway.org/book/ex9.html
### More advanced
*   Limit repetition in more complex ways.
*   Group expressions.
*   Alternate between one or more expressions.
*   Special regex engine modifications for more complex tasks.
### limiting the number
*   If you put {X} in the same place you'd put a + (after something to repeat) then it will make sure that it is repeated X times.
*   If you put {X,Y} then it will make sure it repeates at least X times, but not more than Y times.
*   If you put a ? after any of the repetition symbols it means "non-greedy". This is unfortunate because ? also means "optional" but just remember that placing it after repetition means "non-greedy".
### http://regex.learncodethehardway.org/book/ex10.html
### example
[0-9]{2}-[0-9]{2}-[0-9]{2,4}?

The way to explain "non-greedy" is simply that most regex engines try to match repetition to the biggest part of the corpus text possible. If you run into situations where you're matching too much with repetition, then you can use ? to tell it to match the smallest repetition possible.  

### http://regex.learncodethehardway.org/book/ex11.html
# When not to use them
### Infamous mail address Regex
### Use lexer instead
# Resources
### http://regex.learncodethehardway.org/book/
### Regex the hard way
### Follow Along exercises
### http://www.rexegg.com/regex-best-trick.html
### Best Regex trick
