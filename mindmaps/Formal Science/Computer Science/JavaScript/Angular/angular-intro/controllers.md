## Controllers
Controllers are (from the name) what controls our html file and our data. <!-- .element: class="fragment" -->


## Controllers
First we need to add a controller to our app
```
    var app = angular.module('turing', [ ]);

    app.controller('UserController', function($scope){

    });

```


## Controllers

Let's populate a list of turings here in our controller.
then assign the data to the scope variable
```
    var app = angular.module('turing', [ ]);

    app.controller('UserController', function($scope){

    $scope.cohort =

        {
            "name":"1410",
            "students": [
                "jane",
                "john",
                "jimmy",
                "jones"
            ],
            "color":"blue"
        }
                    
        });
```



## Attaching the Controller
```
<section class="center" ng-controller="UserController">

        <h1 style="color:{{cohort.color}};"> Hi, {{cohort.name}}</h1>

</section>
```



## Understanding Scope
The "scope" of the controller only works inside of the container

```
<section class="center" ng-controller="UserController">

        <h1 style="color:{{cohort.color}};"> Hi, {{cohort.name}}</h1>

</section>
{{cohort.name}} <!-- doesnt't work! -->
```
