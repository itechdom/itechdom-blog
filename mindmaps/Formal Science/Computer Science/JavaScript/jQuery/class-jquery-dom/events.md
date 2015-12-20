### Simple Event Binding

Let's start by looking at the [jQuery Events API](http://api.jquery.com/category/events/).

The Events API tends to mimic the native DOM events, but with some abstraction to standardize across all of the browsers in use today.

Our main focus today is going to be on the `.on()` method. As of jQuery 1.7 and later, this is the preferred method for binding events. You may see `.bind()` as well, but this support older code.


### Form Example

Let's take a look at [this simple form](http://jsbin.com/basolo/). Right now, it doesn't work. Let's wire it up together.

Note: Talk about `this` in an event handler.
      Bind a `console.log` to a checkbox.


### Exercise:

* Add an event handler to all of the checkboxes that when the box is checked, adds the `yellow` class to the `tr`.
* Add an event handler that adds the `red` class to a `td` element when it's clicked on.
* Modify the event handler above to remove the `red` class when it is clicked a second time.
* **Bonus**: Add a new `div` to the page, every time a checkbox is checked, add that presidents name to the `div`.
* **Bonus 2**: Remove that presidents name when the box is unchecked.