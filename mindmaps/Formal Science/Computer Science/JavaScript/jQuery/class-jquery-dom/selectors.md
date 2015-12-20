
### Basic Selectors

Out of the box, jQuery supports the selector syntax from CSS to find elements on the page. So, you already come pre-equipped with a bunch of knowledge for finding elements.

That said, let's review some of the different ways we can find an element on page.

* `$('p')`, selects all of a given element.
* `$('#heading')`, selects the element with a given id.
* `$('.important')`, selects all of the elements with a given class.

You can also use multiple selectors in the same statement:

* `$('p, #heading, .important')`, selects everything listed above.


### Attribute Selectors

See the API documentation [here](http://api.jquery.com/category/selectors/attribute-selectors/).

Let's take a look at [this simple form](http://jsbin.com/basolo/) and try out some selectors.


### Laboratory

Here is an little experiment where you can play around and try out some different selectors.

http://codylindley.com/jqueryselectors/


### Exercise: The Presidents

For this exercise, we're going to play with [a table of the Presidents of the United States of America][potus].

[potus]: http://jsbin.com/rejuya

Let's try out a few things, just to get our hands dirty. We'll use the console in the Chrome developer tools to validate our work.

* Select each `tr` element.
* Select all of the elements with the class of `name`.
* Select all of the elements with either the class of `name` or `term`.
* Select all of the checked—umm—checkboxes. (You'll probably want to check some checkboxes first.)
* Select all of the `td` elements with the class of `number` that appear in a row of a `tr` with the class of `whig`.

(This should take about five minutes total.)