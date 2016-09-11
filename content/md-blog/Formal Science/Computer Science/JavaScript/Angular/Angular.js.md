# Concepts
### 2.0
### What' Different
### uses typescript
### data types
### Components only structure, controller attached
### Scopes
### all isolated
### Concepts
### Archeticture
### https://angular.io/docs/ts/latest/guide/architecture.html
### Building Blocks
The architecture diagram identifies the eight main building blocks of an Angular 2 application:

1.  [Module](https://angular.io/docs/ts/latest/guide/architecture.html#module)
2.  [Component](https://angular.io/docs/ts/latest/guide/architecture.html#component)
3.  [Template](https://angular.io/docs/ts/latest/guide/architecture.html#template)
4.  [Metadata](https://angular.io/docs/ts/latest/guide/architecture.html#metadata)
5.  [Data Binding](https://angular.io/docs/ts/latest/guide/architecture.html#data-binding)
6.  [Service](https://angular.io/docs/ts/latest/guide/architecture.html#service)
7.  [Directive](https://angular.io/docs/ts/latest/guide/architecture.html#directive)
8.  [Dependency Injection](https://angular.io/docs/ts/latest/guide/architecture.html#dependency-injection)
### Modules
### Library modules or Barrels
### Public facade of other libraries?
### component
Angular creates, updates, and destroys components as the user moves through the application. The developer can take action at each moment in this lifecycle through optional [Lifecycle Hooks](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html).
### component lifecycle
### https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
### other components
### Routing
### https://angular.io/docs/ts/latest/guide/router.html
### metadata




1.  `@Component({`
2.  ` selector:  'hero-list',`
3.  ` templateUrl:  'app/hero-list.component.html',`
4.  ` directives:  [HeroDetailComponent],`
5.  ` providers:  [HeroService]`
6.  `})`
7.  `export  class  HeroesComponent  {  ...  }`





Here we see the `@Component` decorator which (no surprise) identifies the class immediately below it as a Component class.
### The architectural take-away is that we must add metadata to our code so that Angular knows what to do.
### we use decorators in TS
### @
### other decorators
We apply other metadata decorators in a similar fashion to guide Angular behavior. The `@Injectable`, `@Input`, `@Output`,`@RouterConfig` are a few of the more popular decorators we'll master as our Angular knowledge grows.
### Data binding
### ()
### event
### [ ] 
### one way binding
### [( )]
### two way binding
### The service
### Well defined class that does a specific thing
### Examples
Examples include:

*   logging service
*   data service
*   message bus
*   tax calculator
*   application configuration
### Dependency Injection
### https://angular.io/docs/ts/latest/guide/dependency-injection.html
### A nice way to understand Di
### you don't need your class to rely on an object which makes it very hard to test
### template
### https://angular.io/docs/ts/latest/guide/template-syntax.html
### Directives
### Types
### Structural
### Structural directives alter layout by adding, removing, and replacing elements in DOM.
### Examples
### ngFor
### ngIf
### component is a form of directive with template
### Attribute
### Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.
### Examples
### ngModel
### angular core
The `angular2/core` library is the primary Angular library module from which we get most of what we need. 
### 1.0
### Directives
### https://docs.angularjs.org/guide/directive
### Example directive
angular.module('moduleName')
    .directive('myDirective', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment 
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },
        template: '{{ myVal }}',
        templateUrl: 'mytemplate.html',
        controller: controllerFunction, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});
### my codepen
### http://codepen.io/javasop/pen/mPVELz?editors=1010
### Attributes
### Template/Template url
### Scope
### if it's defined, it will create an isolate scope
### @
### binds to attribute value
### http://stackoverflow.com/questions/14050195/angularjs-what-is-the-difference-between-and-in-directive-scope
### so if you have <div title="title" />
### it will bind to title
### =
### bind to the value of the scope.whatever here
### if you have <div title="title" />
### will be bound to scope.title
### remember to assign a controller to you div
### &
The `&` binding allows a directive to trigger evaluation of an expression in the context of the original scope, at a specific time. Any legal expression is allowed, including an expression which contains a function call. Because of this, `&` bindings are ideal for binding callback functions to directive behaviors.
### works with functions
### Services
### Everything is a factory
### Scope
### one way
### prepend :: to {{}}
### $apply
### call it from within a directive to force a digest cycle
### Utility funcs
*   [function](https://docs.angularjs.org/api/ng/function)
*   [angular.bind](https://docs.angularjs.org/api/ng/function/angular.bind)
*   [angular.bootstrap](https://docs.angularjs.org/api/ng/function/angular.bootstrap)
*   [angular.copy](https://docs.angularjs.org/api/ng/function/angular.copy)
*   [angular.element](https://docs.angularjs.org/api/ng/function/angular.element)
*   [angular.equals](https://docs.angularjs.org/api/ng/function/angular.equals)
*   [angular.extend](https://docs.angularjs.org/api/ng/function/angular.extend)
*   [angular.forEach](https://docs.angularjs.org/api/ng/function/angular.forEach)
*   [angular.fromJson](https://docs.angularjs.org/api/ng/function/angular.fromJson)
*   [angular.identity](https://docs.angularjs.org/api/ng/function/angular.identity)
*   [angular.injector](https://docs.angularjs.org/api/ng/function/angular.injector)
*   [angular.isArray](https://docs.angularjs.org/api/ng/function/angular.isArray)
*   [angular.isDate](https://docs.angularjs.org/api/ng/function/angular.isDate)
*   [angular.isDefined](https://docs.angularjs.org/api/ng/function/angular.isDefined)
*   [angular.isElement](https://docs.angularjs.org/api/ng/function/angular.isElement)
*   [angular.isFunction](https://docs.angularjs.org/api/ng/function/angular.isFunction)
*   [angular.isNumber](https://docs.angularjs.org/api/ng/function/angular.isNumber)
*   [angular.isObject](https://docs.angularjs.org/api/ng/function/angular.isObject)
*   [angular.isString](https://docs.angularjs.org/api/ng/function/angular.isString)
*   [angular.isUndefined](https://docs.angularjs.org/api/ng/function/angular.isUndefined)
*   [angular.merge](https://docs.angularjs.org/api/ng/function/angular.merge)
*   [angular.module](https://docs.angularjs.org/api/ng/function/angular.module)
*   [angular.noop](https://docs.angularjs.org/api/ng/function/angular.noop)
*   [angular.reloadWithDebugInfo](https://docs.angularjs.org/api/ng/function/angular.reloadWithDebugInfo)
*   [angular.toJson](https://docs.angularjs.org/api/ng/function/angular.toJson)
### Angular registers scope listeners 
### $apply
### fires $digest
### which will update all views based on scope changes
### Controllers
### Controller as something
### useful in the directive to add a key that will be bound to whatever controller that scope belong to
### http://codepen.io/javasop/pen/mPVELz
### check this example
# Resources
### cheat sheet
### https://angular.io/docs/ts/latest/guide/cheatsheet.html
### upgrading from 1.x
### https://angular.io/docs/ts/latest/guide/upgrade.html
### Angular 1.0 docs
### https://angularjs.org/
# Third Party
### https://github.com/bevacqua/angular-dragula
### Drag and Drop
### http://plnkr.co/edit/kaOmmXVaBJdUbGUtvDlM?p=info
### Angular 2.0 playground
### Angular universal
### Server side rendering
### https://github.com/angular/universal
### Zone.js
### https://www.youtube.com/watch?v=3IqtmUscE_U
### debugging, testing, profiling
### trace async tasks
### instead of seeing a "throw new error" without trace
