## Todo App

Let's go back to our first example and rewrite it completely in Angularjs.


## Start with your Data

* define what data your want to have and bind it to the scope.
* design your html and add directives around it
* let Angular handle the rest



## Step1: our Data

```
    app.controller('TodoController', function($scope){
        
        $scope.todos = []
        
    });
```



## Step2: Design your html
Write your html and spice it with some Directives to connect to your data.

```html

<div class="todos center" ng-controller="TodoController">

    <input ng-model="currentTodo" id="list-input" placeholder="task"></input>
    <button class="button" ng-click='addTodo(currentTodo)' id="submit">Add</button>

    <ul id="list">

        <li ng-repeat="todo in todos" class="todo">
            <button ng-click="deleteTodo(todo)">Delete</button>
            {{todo.name}}
        </li>

    </ul>

</div>
```


## Step3: Add missing functions
Add the missing functions to your controller

```javascript

    $scope.currentTodo = ""

    $scope.addTodo = function(todo){
        todoObject = {
            name:todo
        }
        $scope.todos.push(todoObject);
    }
    $scope.deleteTodo = function(todo){
        index = $scope.todos.indexOf(todo)
        $scope.todos.splice(index,1)
    }

```
