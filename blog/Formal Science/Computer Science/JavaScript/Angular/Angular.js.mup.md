# Concepts
## 2.0
### What' Different
#### uses typescript
#### data types
#### Components only structure, controller attached
#### Scopes
##### all isolated
### Concepts
#### Archeticture
##### https://angular.io/docs/ts/latest/guide/architecture.html
#### Building Blocks
<p>The architecture diagram identifies the eight main building blocks of an Angular 2 application:</p><ol><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#module">Module</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#component">Component</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#template">Template</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#metadata">Metadata</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#data-binding">Data Binding</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#service">Service</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#directive">Directive</a></li><li><a href="https://angular.io/docs/ts/latest/guide/architecture.html#dependency-injection">Dependency Injection</a></li></ol>
##### Modules
###### Library modules or Barrels
###### Public facade of other libraries?
##### component
###### component lifecycle
####### https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
###### other components
####### Routing
######## https://angular.io/docs/ts/latest/guide/router.html
<span>Angular creates, updates, and destroys components as the user moves through the application. The developer can take action at each moment in this lifecycle through optional&#xA0;</span><a href="https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html">Lifecycle Hooks</a><span>.</span>
##### metadata
###### The architectural take-away is that we must add metadata to our code so that Angular knows what to do.
###### we use decorators in TS
####### @
###### other decorators
<span>We apply other metadata decorators in a similar fashion to guide Angular behavior. The&#xA0;</span><code>@Injectable</code><span>,&#xA0;</span><code>@Input</code><span>,&#xA0;</span><code>@Output</code><span>,</span><code>@RouterConfig</code><span>&#xA0;are a few of the more popular decorators we&apos;ll master as our Angular knowledge grows.</span>
<code-example language="ts" format="linenums"><pre class="prettyprint linenums lang-ts prettyprinted"><ol class="linenums"><li class="L0"><code ng-non-bindable=""><span class="lit">@Component</span><span class="pun">({</span></code></li><li class="L1"><code ng-non-bindable=""><span class="pln">  selector</span><span class="pun">:</span><span class="pln">    </span><span class="str">&apos;hero-list&apos;</span><span class="pun">,</span></code></li><li class="L2"><code ng-non-bindable=""><span class="pln">  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">&apos;app/hero-list.component.html&apos;</span><span class="pun">,</span></code></li><li class="L3"><code ng-non-bindable=""><span class="pln">  directives</span><span class="pun">:</span><span class="pln">  </span><span class="pun">[</span><span class="typ">HeroDetailComponent</span><span class="pun">],</span></code></li><li class="L4"><code ng-non-bindable=""><span class="pln">  providers</span><span class="pun">:</span><span class="pln">   </span><span class="pun">[</span><span class="typ">HeroService</span><span class="pun">]</span></code></li><li class="L5"><code ng-non-bindable=""><span class="pun">})</span></code></li><li class="L6"><code ng-non-bindable=""><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">HeroesComponent</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">...</span><span class="pln"> </span><span class="pun">}</span></code></li></ol></pre></code-example><p>Here we see the&#xA0;<code>@Component</code>&#xA0;decorator which (no surprise) identifies the class immediately below it as a Component class.</p><p><br></p><p><br></p>
##### Data binding
###### ()
####### event
###### [ ] 
####### one way binding
###### [( )]
####### two way binding
##### The service
###### Well defined class that does a specific thing
###### Examples
<p>Examples include:</p><ul><li>logging service</li><li>data service</li><li>message bus</li><li>tax calculator</li><li>application configuration</li></ul>
##### Dependency Injection
###### https://angular.io/docs/ts/latest/guide/dependency-injection.html
####### A nice way to understand Di
####### you don't need your class to rely on an object which makes it very hard to test
##### template
###### https://angular.io/docs/ts/latest/guide/template-syntax.html
##### Directives
###### Types
####### Structural
######## Structural directives alter layout by adding, removing, and replacing elements in DOM.
######## Examples
######### ngFor
######### ngIf
####### component is a form of directive with template
####### Attribute
######## Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.
######## Examples
######### ngModel
#### angular core
<span>The&#xA0;</span><code>angular2/core</code><span>&#xA0;library is the primary Angular library module from which we get most of what we need.&#xA0;</span>
# Resources
## cheat sheet
### https://angular.io/docs/ts/latest/guide/cheatsheet.html
## upgrading from 1.x
### https://angular.io/docs/ts/latest/guide/upgrade.html
# Third Party
## https://github.com/bevacqua/angular-dragula
### Drag and Drop
## http://plnkr.co/edit/kaOmmXVaBJdUbGUtvDlM?p=info
### Angular 2.0 playground
## Angular universal
### Server side rendering
### https://github.com/angular/universal
## Zone.js
### https://www.youtube.com/watch?v=3IqtmUscE_U
### debugging, testing, profiling
### trace async tasks
#### instead of seeing a "throw new error" without trace
