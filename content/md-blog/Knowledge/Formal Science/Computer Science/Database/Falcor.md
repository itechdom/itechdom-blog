# Concepts

### JSON Graph
### allows json to have graph and linking (think of it as relations in SQL)
### Adds identity to model
### helps with caching and removing duplicates
### identity path
### new primitive json types

### reference is like a symbolic link in unix
### Paths
### A way to access a subset of the JSON Graph
### Data Sources

### Every data source is associated with one json graph
### Image showing relationship between model and data source
### http://netflix.github.io/falcor/documentation/datasource.png
### Why?

### Router

### Models run on the client
### Router runs on the server
### results in an http communication
### This is a Restfull end point
### It matches  JSON paths as apposed to url paths
### one route can match multiple paths
### Model

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
