# Concepts
## JSON Graph
### allows json to have graph and linking (think of it as relations in SQL)
### Adds identity to model
#### helps with caching and removing duplicates
### identity path
### new primitive json types
<h2 id="new-primitive-value-types">New Primitive Value Types</h2><p>In addition to JSON&#x2019;s primitive types, JSON Graph introduces three new primitive types:</p><ol><li>Reference</li><li>Atom</li><li>Error</li></ol><p>Each of these types is a JSON Graph object with a &#x201C;$type&#x201D; key that differentiates it from regular JSON objects, and describes the type of its &#x201C;value&#x201D; key. These three JSON Graph primitive types are always retrieved and replaced in their entirety just like a primitive JSON value. None of the JSON Graph values can be mutated using any of the available abstract JSON Graph operations.</p>
### reference is like a symbolic link in unix
## Paths
### A way to access a subset of the JSON Graph
## Data Sources
### Every data source is associated with one json graph
### Image showing relationship between model and data source
#### http://netflix.github.io/falcor/documentation/datasource.png
### Why?
<h2 id="why-implement-a-datasource">Why Implement a DataSource?</h2><p>The most common reason for implementing a DataSource is to allow data to be retrieved from the network using a specific transport protocol. The falcor library ships with the HttpDataSource, which only supports retrieving&#xA0;<a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a>&#xA0;information from the network using the HTTP/HTTPS protocol.</p><h2 id="datasource-implementations">DataSource Implementations</h2><p>Falcor ships with the following DataSource implementations:</p><ul><li>HttpDataSource</li><li>Router (server only)</li><li>ModelDataSource</li></ul>
<span>A DataSource is an interface which can be implemented to expose&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a><span>&#xA0;information to a&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/model.html">Model</a><span>. Every DataSource is associated with a single&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a><span>&#xA0;object.&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/model.html">Models</a><span>&#xA0;execute&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a>&#xA0;<span>operations (get, set, and call) to retrieve values from the DataSource&#x2019;s&#xA0;</span><a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a><span>&#xA0;object. DataSources may retrieve JSON Graph information from anywhere, including device memory, a remote machine, or even a lazily-run computation.</span>
## Router
<div>The Falcor Router<br></div><div>A Falcor Router is an implementation of the DataSource interface. Falcor Model objects use DataSources to retrieve JSON Graph data. However Models typically run on the client and Routers typically run on the Application server. As a result communication between a Model and the Router is typically remoted across the network using an HttpDataSource</div>
### Models run on the client
### Router runs on the server
### results in an http communication
### This is a Restfull end point
### It matches  JSON paths as apposed to url paths
### one route can match multiple paths
## Model
### implemented on the client
<p>Models abstract over&#xA0;<a href="http://netflix.github.io/falcor/documentation/datasources.html">Data Sources</a>&#xA0;and provide several important services:</p><ul><li>Models convert&#xA0;<a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a>&#xA0;information retrieved from the&#xA0;<a href="http://netflix.github.io/falcor/documentation/datasources.html">Data Source</a>&#xA0;into JSON.</li><li>Models reduce latency by caching data previously retrieved from the&#xA0;<a href="http://netflix.github.io/falcor/documentation/datasources.html">Data Source</a>&#xA0;in an in-memory cache.</li><li>Models achieve more efficient network access patterns by batching multiple concurrent requests for information from the view into batched requests to the&#xA0;<a href="http://netflix.github.io/falcor/documentation/datasources.html">Data Source</a>.</li><li>Models optimize your view&#x2019;s outgoing requests to the&#xA0;<a href="http://netflix.github.io/falcor/documentation/datasources.html">Data Source</a>&#xA0;using previously-cached&#xA0;<a href="http://netflix.github.io/falcor/documentation/jsongraph.html">JSON Graph</a>&#xA0;references.</li></ul>
<ul class="nav navbar-nav"><li class="dropdown active open"><ul class="dropdown-menu"><li class=""><a href="http://netflix.github.io/falcor/documentation/paths.html" target="_blank">Main Concepts<br></a></li><li class=""><a href="http://netflix.github.io/falcor/documentation/paths.html" target="_blank">Paths</a></li><li class=""><a href="http://netflix.github.io/falcor/documentation/jsongraph.html" target="_blank">JSON Graph</a></li><li class="active"><a href="http://netflix.github.io/falcor/documentation/datasources.html" target="_blank">Data Sources</a></li><li class=""><a href="http://netflix.github.io/falcor/documentation/router.html" target="_blank">Router</a></li><li class=""><a href="http://netflix.github.io/falcor/documentation/model.html" target="_blank">Model</a></li><li class=""><div><br></div></li></ul></li><li class="dropdown "></li></ul>
# Resources
## http://netflix.github.io/falcor/
## https://auth0.com/blog/2015/08/28/getting-started-with-falcor/?utm_source=javascriptweekly&utm_medium=email
### Getting started with falcor
# Pain Points
## It says one end point, but there's a router
### not really, they are saying that routes are flexible enough and don't follow a static url to access subsets of data
# features
## Does automatic chaching
## manages data model on client and server
