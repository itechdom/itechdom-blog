### Writing JSON

* JSON data structures are typically either an object (similar to a hash for the purposes of this discussion) or an array of objects or other values.

* JSON objects follow some rules:

    * Objects are made up of name/value pairs
    * Keys must be double-quoted and followed by a colon

You also have a few types of values available in a JSON structure:

* Numbers
* Strings (in double quotes only)
* Booleans (`true` and `false`)
* Arrays
* Objects (again, objects in JavaScript are similar to hashes in Ruby)
* `null`


#### Example

```
var person = 
'{"name":"Jennifer Johnson","street":"641 Pine St.","phone":true,"age":50,"pets":["cat","dog","fish"]}'
```

#### Some Common Mistakes

* Using single quotes instead of double quotes
* Not using quotes at all (e.g. JavaScript doesn't require quotes on keys nor does Ruby's symbol shorthand)
* Including a trailing comma in an array
* Trying to break a string over multiple lines (`\n` is fine)


### Where you'll find JSON

* APIs (e.g. Github, Twitter)
* Node's `package.json` and Bower's `bower.json` dependency manifests
* Sending data back and forth to your app through AJAX requests; building DOM on the client with data from the server