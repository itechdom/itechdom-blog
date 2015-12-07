#### Connecting Rails

* Let's Generate a Rails app.
* Clone https://github.com/JumpstartLab/blogger_advanced
* Go to See All Articles or /articles route.
* Try to delete an article
* Notice how the page has to be reloaded to display the new results.
* Let's add AJAX functionality here 


#### Steps to adding AJAX to rails

* you have two main areas you want to deal with:
    * Rails controller: make sure you rails controller returns back JSON result to be displayed. (respond with)
    * Javascript Side: call your controller route and display the result in the callback
    
* Rails Side, in our controller, we would do:
