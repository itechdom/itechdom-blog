### JSON and JavaScript

* Most JavaScript runtimes come with a JSON library built-in. 
  * Occasionally you'll see [Douglas Crockford's `json2.js`](https://github.com/douglascrockford/JSON-js) library included in a website. 
    This is usually for backwards compatibility in older browsers (ahem, Internet Explorer).
    
* [JSONLint](http://jsonlint.com/): checks the validity of JSON.
* JSON.parse and JSON


### JSON with jQuery

* Along with building APIs, a common case for JSON is to dynamically load content into your page using AJAX. 

* The "X" in AJAX stands for XML, but it's common to use JSON these days.

In fact, requesting JSON from the server is so common that jQuery provides your with a helpful function:

```js
// this is similar to $.get(), except the last parameter which is the data type
$.getJSON('/tweets.json', function (data) {
  console.log(data);
});
```

* `$.getJSON` sets up the AJAX request for you and also automatically parses the response back into a JavaScript object so you don't have to. 