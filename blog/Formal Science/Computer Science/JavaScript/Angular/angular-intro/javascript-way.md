## jQuery Way, The old Way

Let's write a simple TODO application and Do it in good ol' Javascript and jQuerys
... This is how we would write a simple todo list app


The HTML:

```html
<input id="list-input" placeholder="task"></input>
<button id="submit">Add</button>

<ul id="list">
</ul>

```


## jQuery - Part1

We initialize some variables (inside document read)
```javascript
    $(document).ready(function() {

    listArray = [];
    input = $('#list-input');
    submitButton = $('#submit');
    list = $('#list');

    )
```


## jQuery - Part 2

General methods to delete and add to the list array

```
    addToList = function(item){

        listArray.push(item)
        updateDisplay()

    }

    deleteFromList = function(item){

        index = listArray.indexOf(item)
        if(index > -1){
            listArray.splice(index,1);
        }
        updateDisplay()

    }
```


## jQuery - Part 3

We usually update the list everytime we make changes

```javascript
    updateDisplay = function(){

        list.empty()
        deleteButton = '<button class="delete">Delete</button></div>'
        for(i=0;i<listArray.length;i++){
            item = listArray[i];
            listItem = $('<div class=".container"><li id='+item+'>' + item +'</li>'+ deleteButton);
            list.append(listItem)
        }

    }
```


## jQuery - Part 4

We shouldn't forget to bind the buttons so we can add to and delete from list

```
    $(document).on('click','#submit',function(el){
        value = input.val();
        addToList(value)

    })

    $(document).on('click','.delete', function(el) {
        todo = el.currentTarget;

        sibling = $(todo).siblings('li')

        item = sibling[0].innerHTML;

        deleteFromList(item);

    })
```
