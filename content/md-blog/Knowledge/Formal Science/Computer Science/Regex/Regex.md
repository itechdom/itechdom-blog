# Resources
### http://regex.learncodethehardway.org/book/
### Regex the hard way
### Follow Along exercises
### http://www.rexegg.com/regex-best-trick.html
### Best Regex trick
# Concepts
### Basics
<div id="wmd-preview-section-34" class="wmd-preview-section preview-content" style="box-sizing: border-box; color: rgb(63, 63, 63); font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 26.1000003814697px; text-align: justify; outline: none !important; background-color: rgb(246, 246, 246);">

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

</div>

<div id="wmd-preview-section-35" class="wmd-preview-section preview-content" style="box-sizing: border-box; color: rgb(63, 63, 63); font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 26.1000003814697px; text-align: justify; outline: none !important; background-color: rgb(246, 246, 246);">

### Shortcuts (meta characters)

*   . Any single character
*   \s Any whitespace character
*   \S Any non-whitespace character
*   \d Any digit
*   \D Any non-digit
*   \w Any word character (letter, number, underscore)
*   \W Any non-word character
*   \b Any word boundary character

</div>

<div id="wmd-preview-section-36" class="wmd-preview-section preview-content" style="box-sizing: border-box; color: rgb(63, 63, 63); font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 26.1000003814697px; text-align: justify; outline: none !important; background-color: rgb(246, 246, 246);">

### Groups

*   (…) Capture everything enclosed
*   (a|b) a or b
*   ? Zero or one of a
*   * Zero or more of a
*   + One or more of a
*   {3} Exactly 3 of a
*   {3,} 3 or more of a
*   a{3,6} Between 3 and 6 of a

</div>

<div id="wmd-preview-section-37" class="wmd-preview-section preview-content" style="box-sizing: border-box; color: rgb(63, 63, 63); font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 26.1000003814697px; text-align: justify; outline: none !important; background-color: rgb(246, 246, 246);">

### Characters that needs to be escaped.

*   They are escaped with a backward slash \\
*   Characters are:

</div>

<div id="wmd-preview-section-38" class="wmd-preview-section preview-content" style="box-sizing: border-box; color: rgb(63, 63, 63); font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 26.1000003814697px; text-align: justify; outline: none !important; background-color: rgb(246, 246, 246);">

    . | ( ) [ ] { } + \ ^ $ * ?

</div>
### Capturing
<div>### capturing</div>

<div>* We can specify variables in regex that we can refer to later</div>

<div>* The exampel below stores month, day and year when given a date.</div>

<div>```ruby</div>

<div>(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})</div>

<div>```</div>

<div>Then we can do something like this:</div>

<div>```ruby</div>

<div>date_string = "06/11/1985"</div>

<div>pattern = /(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})/</div>

<div>result = date_string.match(pattern)</div>

<div># we can now access the days, month and year</div>

<div>result[:day] #11</div>

<div>result[:month] #06</div>

<div>result[:year] #1985</div>

<div>```</div>

<div>### exercise</div>

<div>* Write a pattern that will take a decimal number (ie: 3.4)</div>

<div>* It captures the number in dollars and cents</div>

<div>* display the dollars and cents in that number</div>

<div>* You should modify the previous example</div>

<div>```ruby</div>

<div>(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})</div>

<div>```</div>
### Ways to use Regex
<div>### Ways to Use Regex in Ruby</div>

<div>* Match</div>

<div>* Scan</div>

<div>* =~</div>

<div>* Gsub</div>

<div>* Split</div>

<div>```ruby</div>

<div>a = /a/</div>

<div>a.class # Regexp</div>

<div>myString = "A woman once said. A man once said. A child once said"</div>

<div>match = myString.match(a) #this will return a</div>

<div>match = myString.scan(a) #this will return ["a", "a", "a", "a", "a"]</div>

<div>match = myString.gsub(a,"b") #this will replace all a(s) with b, leaving behind capital A</div>

<div>myString =~ a #return the index of the first occurance </div>

<div>match = myString.split(a) # split a string by a(s)</div>

<div>```</div>
