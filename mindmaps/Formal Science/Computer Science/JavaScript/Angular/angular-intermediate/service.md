#### Services

* Or Model in Rails
* Creates on Object for the whole app.


#### Defining Services

```
app.service('userModel',function(){

this.getUsers = function(){
return ["user1","user2"];
}

})
```


#### Injecting a service

* We can specify the dependency in the controller's function parameters 

```
app.controller('userController',function(userModel){

var users = userModel.getUsers();

}
})
```