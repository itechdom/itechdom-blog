# Concepts
*   *   [Main Concepts  
        ](http://netflix.github.io/falcor/documentation/paths.html)
    *   [Paths](http://netflix.github.io/falcor/documentation/paths.html)
    *   [JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html)
    *   [Data Sources](http://netflix.github.io/falcor/documentation/datasources.html)
    *   [Router](http://netflix.github.io/falcor/documentation/router.html)
    *   [Model](http://netflix.github.io/falcor/documentation/model.html)
### JSON Graph
### allows json to have graph and linking (think of it as relations in SQL)
### Adds identity to model
### helps with caching and removing duplicates
### identity path
### new primitive json types
## New Primitive Value Types

In addition to JSON’s primitive types, JSON Graph introduces three new primitive types:

1.  Reference
2.  Atom
3.  Error

Each of these types is a JSON Graph object with a “$type” key that differentiates it from regular JSON objects, and describes the type of its “value” key. These three JSON Graph primitive types are always retrieved and replaced in their entirety just like a primitive JSON value. None of the JSON Graph values can be mutated using any of the available abstract JSON Graph operations.
### reference is like a symbolic link in unix
### Paths
### A way to access a subset of the JSON Graph
### Data Sources
<span style="background-color: rgb(247, 247, 247);">A DataSource is an interface which can be implemented to expose </span>[JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html)<span style="background-color: rgb(247, 247, 247);"> information to a </span>[Model](http://netflix.github.io/falcor/documentation/model.html)<span style="background-color: rgb(247, 247, 247);">. Every DataSource is associated with a single </span>[JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html)<span style="background-color: rgb(247, 247, 247);"> object. </span>[Models](http://netflix.github.io/falcor/documentation/model.html)<span style="background-color: rgb(247, 247, 247);"> execute </span>[JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html) <span style="background-color: rgb(247, 247, 247);">operations (get, set, and call) to retrieve values from the DataSource’s </span>[JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html)<span style="background-color: rgb(247, 247, 247);"> object. DataSources may retrieve JSON Graph information from anywhere, including device memory, a remote machine, or even a lazily-run computation.</span>
### Every data source is associated with one json graph
### Image showing relationship between model and data source
### http://netflix.github.io/falcor/documentation/datasource.png
### Why?
## Why Implement a DataSource?

The most common reason for implementing a DataSource is to allow data to be retrieved from the network using a specific transport protocol. The falcor library ships with the HttpDataSource, which only supports retrieving [JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html) information from the network using the HTTP/HTTPS protocol.

## DataSource Implementations

Falcor ships with the following DataSource implementations:

*   HttpDataSource
*   Router (server only)
*   ModelDataSource
### Router
<div>The Falcor Router  
</div>

<div>A Falcor Router is an implementation of the DataSource interface. Falcor Model objects use DataSources to retrieve JSON Graph data. However Models typically run on the client and Routers typically run on the Application server. As a result communication between a Model and the Router is typically remoted across the network using an HttpDataSource</div>
### Models run on the client
### Router runs on the server
### results in an http communication
### This is a Restfull end point
### It matches  JSON paths as apposed to url paths
### one route can match multiple paths
### Model
Models abstract over [Data Sources](http://netflix.github.io/falcor/documentation/datasources.html) and provide several important services:

*   Models convert [JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html) information retrieved from the [Data Source](http://netflix.github.io/falcor/documentation/datasources.html) into JSON.
*   Models reduce latency by caching data previously retrieved from the [Data Source](http://netflix.github.io/falcor/documentation/datasources.html) in an in-memory cache.
*   Models achieve more efficient network access patterns by batching multiple concurrent requests for information from the view into batched requests to the [Data Source](http://netflix.github.io/falcor/documentation/datasources.html).
*   Models optimize your view’s outgoing requests to the [Data Source](http://netflix.github.io/falcor/documentation/datasources.html) using previously-cached [JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html) references.
### implemented on the client
# Resources
### http://netflix.github.io/falcor/
### https://auth0.com/blog/2015/08/28/getting-started-with-falcor/?utm_source=javascriptweekly&utm_medium=email
### Getting started with falcor
# Pain Points
### It says one end point, but there's a router
### not really, they are saying that routes are flexible enough and don't follow a static url to access subsets of data
# features
### Does automatic chaching
### manages data model on client and server
