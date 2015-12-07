#### Factories

* Similar to service
* Except you have to return an object instead of binding to this.


#### Defining Factories

```
app.factory('userModel',function(){

return {

getUsers: function(){

return ["user1","user2"];

}

}

})
```


#### Injecting a factory

* We can specify the dependency in the controller's function parameters 

```
app.controller('userController',function(userModel){

var users = userModel.getUsers();

}
})
```