webpackJsonp([1],{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	//this is the main todo file

	var view = __webpack_require__(40);
	var actions = __webpack_require__(35);
	var model = __webpack_require__(44);

	class todoMain {

		constructor() {

			view.render(model.todos);

			actions.todoViewKeypressed$.subscribe(e => {
				model.insertTodo(e.target.value);
			});
			actions.todoModelUpdate$.subscribe(() => {
				view.render(model.todos);
			});
		}
	}
	module.exports = todoMain;

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var customScss = __webpack_require__(41);
	var $ = __webpack_require__(19);
	var Rx = __webpack_require__(20);
	var template = __webpack_require__(43);
	var actions = __webpack_require__(35);
	var dispatcher = __webpack_require__(24);

	var view = {

		render(todos) {

			$('app').html(template);

			$('.todo-list').html(``);

			todos.forEach(todo => {
				$('.todo-list').append(`<li>${ todo }</li>`);
			});

			setTimeout(function () {
				dispatcher.emit('todoViewRendered$', $('app'));
			}, 5);

			var keyPressed = Rx.Observable.fromEvent($('input'), 'keypress').filter(e => e.which == 13).subscribe(e => {
				dispatcher.emit('todoViewKeypressed$', e);
			});
		}
	};

	module.exports = view;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./todo.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./todo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n* Move to Base.scss\n**/\n.todo {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300; }\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nhr {\n  margin: 20px 0;\n  border: 0;\n  border-top: 1px dashed #c5c5c5;\n  border-bottom: 1px dashed #f7f7f7; }\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1); }\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6; }\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6; }\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6; }\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility; }\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03); }\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6; }\n\nlabel[for='toggle-all'] {\n  display: none; }\n\n.toggle-all {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none;\n  /* Mobile Safari */ }\n\n.toggle-all:before {\n  content: '\\276F';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px; }\n\n.toggle-all:checked:before {\n  color: #737373; }\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed; }\n\n.todo-list li:last-child {\n  border-bottom: none; }\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0; }\n\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px; }\n\n.todo-list li.editing .view {\n  display: none; }\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none; }\n\n.todo-list li .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>'); }\n\n.todo-list li .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>'); }\n\n.todo-list li label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s; }\n\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through; }\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out; }\n\n.todo-list li .destroy:hover {\n  color: #af5b5e; }\n\n.todo-list li .destroy:after {\n  content: '\\D7'; }\n\n.todo-list li:hover .destroy {\n  display: block; }\n\n.todo-list li .edit {\n  display: none; }\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px; }\n\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6; }\n\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2); }\n\n.todo-count {\n  float: left;\n  text-align: left; }\n\n.todo-count strong {\n  font-weight: 300; }\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0; }\n\n.filters li {\n  display: inline; }\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px; }\n\n.filters li a.selected,\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1); }\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2); }\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer; }\n\n.clear-completed:hover {\n  text-decoration: underline; }\n\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center; }\n\n.info p {\n  line-height: 1; }\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400; }\n\n.info a:hover {\n  text-decoration: underline; }\n\n/*\nHack to remove background from Mobile Safari.\nCan't use it globally since it destroys checkboxes in Firefox\n */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none; }\n  .todo-list li .toggle {\n    height: 40px; }\n  .toggle-all {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-appearance: none;\n    appearance: none; } }\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px; }\n  .filters {\n    bottom: 10px; } }\n", ""]);

	// exports


/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = "<section class=\"todoapp\">\n<header class=\"header\">\n<h1>todos</h1>\n<input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus>\n</header>\n\n<section class=\"main\">\n<input class=\"toggle-all\" type=\"checkbox\">\n<label for=\"toggle-all\">Mark all as complete</label>\n<ul class=\"todo-list\"></ul>\n</section>\n\n<footer class=\"footer\">\n<span class=\"todo-count\"></span>\n<ul class=\"filters\">\n\t<li><a href=\"#/\" class=\"selected\">All</a></li>\n\t<li><a href=\"#/active\">Active</a></li>\n\t<li><a href=\"#/completed\">Completed</a></li>\n</ul>\n<button class=\"clear-completed\">Clear completed</button>\n</footer>\n</section>\n\n<footer class=\"info\">\n<p>Double-click to edit a todo</p>\n<br>\n<p>Written by <a href=\"http://twitter.com/lukeed05\">Luke Edwards</a></p>\n<p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>\n\n"

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var todos = ['hello', 'how are you'];
	var dispatcher = __webpack_require__(24);

	var model = {

		getTodo() {
			return this.todos;
		},
		insertTodo(todo) {
			todos.push(todo);
			dispatcher.emit('todoModelUpdate$', todos);
		},
		todos
	};

	module.exports = model;

/***/ }

});