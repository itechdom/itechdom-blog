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
<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">Angular creates, updates, and destroys components as the user moves through the application. The developer can take action at each moment in this lifecycle through optional </span>[Lifecycle Hooks](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">.</span>
### component lifecycle
### https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
### other components
### Routing
### https://angular.io/docs/ts/latest/guide/router.html
### metadata
<code-example language="ts" format="linenums" style="box-sizing: border-box; color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; line-height: normal;">

<pre class="prettyprint linenums lang-ts prettyprinted" style="box-sizing: border-box; overflow: auto; font-family: Monaco, 'Lucida Console', monospace; color: rgb(92, 112, 122); width: auto; position: relative; line-height: 24px; margin-bottom: 24px; border-top-left-radius: 0px; border-top-right-radius: 0px; padding: 0px; background: rgb(245, 246, 247);">

1.  `<span class="lit" style="box-sizing: border-box; color: rgb(100, 127, 17);">@Component</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">({</span>`
2.  ` <span class="pln" style="box-sizing: border-box;">selector</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">:</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="str" style="box-sizing: border-box; color: rgb(100, 127, 17);">'hero-list'</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">,</span>`
3.  ` <span class="pln" style="box-sizing: border-box;">templateUrl</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">:</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="str" style="box-sizing: border-box; color: rgb(100, 127, 17);">'app/hero-list.component.html'</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">,</span>`
4.  ` <span class="pln" style="box-sizing: border-box;">directives</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">:</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">[</span><span class="typ" style="box-sizing: border-box; color: rgb(212, 54, 105);">HeroDetailComponent</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">],</span>`
5.  ` <span class="pln" style="box-sizing: border-box;">providers</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">:</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">[</span><span class="typ" style="box-sizing: border-box; color: rgb(212, 54, 105);">HeroService</span><span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">]</span>`
6.  `<span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">})</span>`
7.  `<span class="kwd" style="box-sizing: border-box; color: rgb(212, 54, 105);">export</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="kwd" style="box-sizing: border-box; color: rgb(212, 54, 105);">class</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="typ" style="box-sizing: border-box; color: rgb(212, 54, 105);">HeroesComponent</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">{</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">...</span> <span class="pln" style="box-sizing: border-box;"></span> <span class="pun" style="box-sizing: border-box; color: rgb(122, 139, 148);">}</span>`

</pre>

</code-example>

Here we see the `@Component` decorator which (no surprise) identifies the class immediately below it as a Component class.
### The architectural take-away is that we must add metadata to our code so that Angular knows what to do.
### we use decorators in TS
### @
### other decorators
<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">We apply other metadata decorators in a similar fashion to guide Angular behavior. The </span>`@Injectable`<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">, </span>`@Input`<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">, </span>`@Output`<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">,</span>`@RouterConfig`<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;"> are a few of the more popular decorators we'll master as our Angular knowledge grows.</span>
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
<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;">The </span>`angular2/core`<span style="color: rgb(26, 35, 38); font-family: Roboto, 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-size: 16px; line-height: 28px;"> library is the primary Angular library module from which we get most of what we need. </span>
# Resources
### cheat sheet
### https://angular.io/docs/ts/latest/guide/cheatsheet.html
### upgrading from 1.x
### https://angular.io/docs/ts/latest/guide/upgrade.html
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
