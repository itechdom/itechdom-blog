#### Connecting Rails

* Clone down the app:
```
https://github.com/turingschool-examples/storedom
```
* Run:
```
git checkout api-workshop
```
* Bundle install


#### Steps to adding AJAX to rails

* you have two main areas you want to deal with:
    * Rails controller: make sure you rails controller returns back JSON result to be displayed. (respond with)
    * Javascript Side: call your controller route and display the result in the callback.
    
* Let's try displaying the items automatically when a button is clicked.