## Let's make our own directive
In our HTML
```
<todo-item></todo-item>
```



In our app
```
app.directive('todoItem', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoItem.html'
    };
});
```



Let's move the todo items <li> to the directive template
```html
<div  class="todo" ng-class="{done:todo.done}">
<img height="20" width="30" ng-show="todo.done" src="../../img/check.png">{{todo.name}}
<button ng-click="deleteTodo(todo)">Delete</button>
<button class="done" ng-click="todo.done = !todo.done">
    <span ng-show="todo.done">Not Finished</span>
    <span ng-show="!todo.done" >Finished</span>
</button>
</div>
```


## Restrict

```
app.directive('todoItem', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoItem.html'
    };
});
```
`restrict` is the type of directive this code will match

A: attribute
```
<div todo-item></div>
```

E: element
```
<todo-item></todo-item>
```

C: class
```
<div class="todo-item"></div>
```

Note:
You'd use element more for UI widgets
Attributes for mixins (decorating existing stuff), like turning a block of text into a tool tip.
You can even do multiple so that they all work.



### Directives with Controllers


### Let's move our whole todo list into it's own directives

The benefits:
* Can be reused in other parts of our application. 
* Example: if we wanted to add multiple todo list of different types

In our HTML
```
<todo-list>
</todo-list>
```


In our app
```
app.directive('todoList', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoList.html'
    };
});
```



In our template
```html
<input ng-model="currentTodo" id="list-input" placeholder="task"></input>
<button class="button" ng-click='addTodo(currentTodo)' id="submit">Add</button>
<ul id="list">
<todo-item ng-repeat="todo in todos"></todo-item>
</ul>
```


### Let's move the controller into our directive
```javascript
app.directive('todoList', function(){
    return{
    
        restrict: 'E',
        
        templateUrl: 'todoList.html',
        
        scope:{},
        
        controller:function($scope){
        $scope.todoList = [
		$scope.addToList = function(){
			todoObject = {
			name:$scope.currentTodo,
			done:true
		};
		$scope.todoList.push(todoObject);
		}
       }
    };
});
```