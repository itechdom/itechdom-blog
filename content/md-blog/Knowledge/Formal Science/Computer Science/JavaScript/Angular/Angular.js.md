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
The architecture diagram identifies the eight main building blocks of an Angular 2 application:ModuleComponentTemplateMetadataData BindingServiceDirectiveDependency Injection
### Modules
### Library modules or Barrels
### Public facade of other libraries?
### component
Angular creates, updates, and destroys components as the user moves through the application. The developer can take action at each moment in this lifecycle through optional Lifecycle Hooks.
### component lifecycle
### https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
### other components
### Routing
### https://angular.io/docs/ts/latest/guide/router.html
### metadata
@Component({ selector: 'hero-list', templateUrl: 'app/hero-list.component.html', directives: [HeroDetailComponent], providers: [HeroService]})export class HeroesComponent { ... }Here we see the @Component decorator which (no surprise) identifies the class immediately below it as a Component class.
### The architectural take-away is that we must add metadata to our code so that Angular knows what to do.
### we use decorators in TS
### @
### other decorators
We apply other metadata decorators in a similar fashion to guide Angular behavior. The @Injectable, @Input, @Output,@RouterConfig are a few of the more popular decorators we'll master as our Angular knowledge grows.
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
Examples include:logging servicedata servicemessage bustax calculatorapplication configuration
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
The angular2/core library is the primary Angular library module from which we get most of what we need.
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
