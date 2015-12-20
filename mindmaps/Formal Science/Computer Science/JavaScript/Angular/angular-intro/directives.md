## Directives: The spices of Angularjs
Angularjs provides a lot of directives that add functionality to our html <!-- .element: class="fragment" -->
Let's add more data to our application <!-- .element: class="fragment" -->

```
app.controller('UserController', function($scope){

    $scope.cohorts =[

    {
        "name":"1410",
        "students": [
            "jane",
            "john",
            "jimmy",
            "jones"
        ],
        "color":"blue",
        "graduated":false
    },
    {
        "name":"1412",
        "students": [
            "a",
            "b",
            "c",
            "d"
        ],
        "color":"red",
        "graduated":false
    }
]

});
```
<!-- .element: class="fragment" -->


## ngshow directive
ngShow: show the html element if the value provided is true

```
<section class="center" ng-controller="UserController">
        <div ng-show="!cohort.graduated">
        <h1 style="color:{{students.color}};"> Hi, {{students.cohort}}</h1>
        </div>
</section>
```
<!-- .element: class="fragment" -->


## ngHide Directive

```
<section class="center" ng-controller="UserController">
        <div ng-hide="cohort.graduated">
        <h1 style="color:{{students.color}};"> Hi, {{students.cohort}}</h1>
        </div>
</section>
```
<!-- .element: class="fragment" -->


## NgRepeat

very important directive. <!-- .element: class="fragment" -->
iterates through an array and repeats the html element it's attached to. <!-- .element: class="fragment" -->

```
<div>
    <h2>
    List of cohorts
    </h2>
    
    <ul>
    
    <li ng-repeat="cohort in cohorts" >
    
    {cohort.name}}
    
        <h2>
        List of Students
        </h2>
        
        <ul>
        
        <li ng-repeat="student in cohort.students">
        
        {{student}}
        
        </li>
        
        </ul>
        
    </li>
    
    </ul>
    
</div>
```
Note: show good way
