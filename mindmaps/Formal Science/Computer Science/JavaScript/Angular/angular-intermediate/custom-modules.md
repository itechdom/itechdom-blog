#### Module Revisited

* We have defined only one module in the first class (turing)

* You can define more than one module in your Angular app.

* Each module can contain
    * Controllers
    * Directives
    * Filters
    * Services
    * Factories
    * Providers
    
* When you load a Module in your app, you expose all of the previously mentioned to your app.


#### Human Module

* Let's define a Module called Human

* Human will load the hand, leg and head modules 

```
angular.module('hand',[])
```

```
angular.module('leg',[])
```

```
angular.module('head',[])
```

```
angular.module('human',['hand','leg','head'])
```

* Now Human has loaded all the necessary modules after they are Defined.