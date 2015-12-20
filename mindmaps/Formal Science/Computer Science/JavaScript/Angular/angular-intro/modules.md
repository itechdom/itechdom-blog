## Module

Containers for different parts of your application. <!-- .element: class="fragment" -->

Except those containers can use other containers.  <!-- .element: class="fragment" -->

Places where we will write pieces of our application and define dependencies <!-- .element: class="fragment" -->
Note: Mention modular design and a graphic would be helpful here



## Our first module

Create a new file, app.js, and add:

```
var app = angular.module('turing', [ ]);
```

And in our HTML file

```html
<!DOCTYPE HTML>
<html ng-app="turing">
    <head>
    <!--
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
    -->
    </head>
    <body>
    </body>
</html>
```

You've made a module!

Note:
- Create your app.js file, add main app module code
- angular is a call to angular.js
- 'turing' will be the name of your application, make sure to add it!
- [ ] will be where dependencies go
- Side note about ng-app
    - It's telling angular that everything inside of html belongs to the app 'turing'
    - It could even be empty
