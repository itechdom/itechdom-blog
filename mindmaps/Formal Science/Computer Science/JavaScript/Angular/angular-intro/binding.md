## expressions and binding

Angular expressions are JavaScript-like code snippets that are usually placed in **bindings** such as `{{ expression }}`. <!-- .element: cite="https://docs.angularjs.org/guide/expression" -->
This allows you to insert values into the HTML

For example:

```
I have {{ 1+2 }} apples ⇨ I have 3 apples
```


## expressions and binding
Some other valid expressions:

```
{{ a+b }}
{{ user.name }}
{{ items[index] }}
```
Note:
- no loops, conditionals, if/else
- You don't really want to do logic in your view!
- Binding is best for displaying data



## expressions and binding
Let's add an input into our view and add an ng-model attribute:
```
<input type="text" ng-model="myName" />
```

Then add a binding somewhere on the page
```
<h1>Hi, {{myName}}</h1>
```


## expressions and binding
Binding can be used for more than just printing text
```
<input type="text" ng-model="myName" />
```

```
<h2 class="text-{{myName}}">Your name is: {{myName}}</h2>
```
