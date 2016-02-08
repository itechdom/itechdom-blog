# Resources
### http://regex.learncodethehardway.org/book/
### Regex the hard way
### Follow Along exercises
### http://www.rexegg.com/regex-best-trick.html
### Best Regex trick
# Concepts
### Basics
Regex Basics[abc] A single character: a, b or c[^abc] Any single character but a, b, or c[a-z] Any single character in the range a-z[a-zA-Z] Any single character in the range a-z or A-Z[1-9] any number between 1 and 9^ Start of line$ End of line\A Start of string\z End of stringShortcuts (meta characters). Any single character\s Any whitespace character\S Any non-whitespace character\d Any digit\D Any non-digit\w Any word character (letter, number, underscore)\W Any non-word character\b Any word boundary characterGroups(…) Capture everything enclosed(a|b) a or b? Zero or one of a* Zero or more of a+ One or more of a{3} Exactly 3 of a{3,} 3 or more of aa{3,6} Between 3 and 6 of aCharacters that needs to be escaped.They are escaped with a backward slash \\Characters are:. | ( ) [ ] { } + \ ^ $ * ?
### Capturing
### capturing* We can specify variables in regex that we can refer to later* The exampel below stores month, day and year when given a date.```ruby(?\d{1,2})\/(?\d{1,2})\/(?\d{4})```Then we can do something like this:```rubydate_string = "06/11/1985"pattern = /(?\d{1,2})\/(?\d{1,2})\/(?\d{4})/result = date_string.match(pattern)# we can now access the days, month and yearresult[:day] #11result[:month] #06result[:year] #1985```### exercise* Write a pattern that will take a decimal number (ie: 3.4)* It captures the number in dollars and cents* display the dollars and cents in that number* You should modify the previous example```ruby(?\d{1,2})\/(?\d{1,2})\/(?\d{4})```
### Ways to use Regex
### Ways to Use Regex in Ruby* Match* Scan* =~* Gsub* Split```rubya = /a/a.class # RegexpmyString = "A woman once said. A man once said. A child once said"match = myString.match(a) #this will return amatch = myString.scan(a) #this will return ["a", "a", "a", "a", "a"]match = myString.gsub(a,"b") #this will replace all a(s) with b, leaving behind capital AmyString =~ a #return the index of the first occurance match = myString.split(a) # split a string by a(s)```
