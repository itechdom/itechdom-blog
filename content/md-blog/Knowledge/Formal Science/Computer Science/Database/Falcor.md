# Concepts
# JSON Graph
# allows json to have graph and linking (think of it as relations in SQL)
# Adds identity to model
### helps with caching and removing duplicates
# identity path
# new primitive json types
# reference is like a symbolic link in unix
# Paths
### A way to access a subset of the JSON Graph
# Data Sources
### Every data source is associated with one json graph
### Image showing relationship between model and data source
### http://netflix.github.io/falcor/documentation/datasource.png
### Why?
<h2 id="why-implement-a-datasource" style="box-sizing: border-box; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 500; line-height: 1.1; color: rgb(51, 51, 51); margin-top: -50px; font-size: 30px; position: relative; border-top-width: 70px; border-top-style: solid; border-top-color: transparent; z-index: -1; background-color: rgb(247, 247, 247); background-clip: padding-box;">Why Implement a DataSource?</h2><p style="box-sizing: border-box; background-color: rgb(247, 247, 247);">The most common reason for implementing a DataSource is to allow data to be retrieved from the network using a specific transport protocol. The falcor library ships with the HttpDataSource, which only supports retrieving&nbsp;<a href="http://netflix.github.io/falcor/documentation/jsongraph.html" style="box-sizing: border-box; color: rgb(51, 122, 183); background-color: transparent;">JSON Graph</a>&nbsp;information from the network using the HTTP/HTTPS protocol.</p><h2 id="datasource-implementations" style="box-sizing: border-box; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 500; line-height: 1.1; color: rgb(51, 51, 51); margin-top: -50px; font-size: 30px; position: relative; border-top-width: 70px; border-top-style: solid; border-top-color: transparent; z-index: -1; background-color: rgb(247, 247, 247); background-clip: padding-box;">DataSource Implementations</h2><p style="box-sizing: border-box; background-color: rgb(247, 247, 247);">Falcor ships with the following DataSource implementations:</p><ul style="box-sizing: border-box; background-color: rgb(247, 247, 247);"><li style="box-sizing: border-box;">HttpDataSource</li><li style="box-sizing: border-box;">Router (server only)</li><li style="box-sizing: border-box;">ModelDataSource</li></ul>
# Router
### Models run on the client
### Router runs on the server
### results in an http communication
### This is a Restfull end point
### It matches  JSON paths as apposed to url paths
### one route can match multiple paths
# Model
### implemented on the client
# Resources
# http://netflix.github.io/falcor/
# https://auth0.com/blog/2015/08/28/getting-started-with-falcor/?utm_source=javascriptweekly&utm_medium=email
### Getting started with falcor
# Pain Points
# It says one end point, but there's a router
### not really, they are saying that routes are flexible enough and don't follow a static url to access subsets of data
# features
# Does automatic chaching
# manages data model on client and server
