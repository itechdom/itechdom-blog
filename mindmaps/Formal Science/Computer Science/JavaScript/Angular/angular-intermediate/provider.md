#### Provider

* The parent of both services and factories.
* Extensive implementation.
* You should reuse provider if you want to have it configured before the application starts.


#### Defining Providers

```
app.provider("humanData", function () {
    var type;
    //configuration functions, called within app.config
    this.setType = function(t){
        type = t;
    };
    this.$get = function(){
        return {
            name: "Steph",
            age:25,
            height:6,
            type:type
        };
    }
});
```


#### Injecting a provider

* We have two places to inject the provider
    * in the module config where the provider was loaded
    * in any of the other services, directives, factories, controllers
    
```javascript
app.config(function(humanDataProvider){
    humanDataProvider.setType("super human");
});
```
