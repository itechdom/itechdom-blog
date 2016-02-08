# No SQL
### Rethink DB
### https://www.rethinkdb.com/
### Falcor
### Falcor

### Falcor, a very new library created and open-sourced by Netflix, is a complete departure from the traditional REST API. Instead of focusing on specific endpoints that return a rigid and predetermined set of data, there is only one endpoint. This is how Falcor is commonly described, and it is a bit misleading, though technically correct. Instead of focusing on various server endpoints to retrieve and update your model data, you instead “ask” your API server for specific model data. Do you need the first 3 user names in your customer list along with their ages? Simply “ask” your API server, in a single request, for this specific data. What if you want only the first 2 user names and no ages? Again, a single request to the same endopint. The differences in these two GET requests can be seen by examining their query parameters, which contain specifics regarding the model properties of interest. Server-side, a handler for a particular combination or pattern of model properties is codified as part of a “route”. When handling the API request, the falcor router (server-side) contacts the proper router function based on the items present in the query string.

###   


### It expects you to be able to model your data in as a JSON graph. Your underlying data source does not necessarily have to maintain all data as a JSON graph, and in most cases it probably will not, but your Falcor API endpoint must translate your data into this format when responding to a request from your client. The necessity of this structure will become clearer as you go through this article and read a bit more about Falcor. The importance of organizing your data as a JSON graph will become even more obvious once you begin to explore reference routes, which I have left out of this post in order to keep it simple.

###   


### Falcor promotes a more intuitive API that is your model. It also ensures that extra, unnecessary model data is never returned, saving bandwidth. Furthermore, requests from multiple disparate browser-side components are combined into a single request to limit HTTP overhead. Data is cached by Falcor client-side, and subsequent requests for cached data avoid a round-trip to the server. This decoupling of the model from the data source, along with all of the efficiency considerations, is exceptionally appealing. But the underlying concepts can be a bit mind-bending. I was a little confused by Falcor until I watched this video by Jafar Husain, Falcor’s lead developer.
### http://netflix.github.io/falcor/
### https://auth0.com/blog/2015/08/28/getting-started-with-falcor/?utm_source=javascriptweekly&utm_medium=email
### Getting started with falcor
### azure.microsoft.com/en-us/services/documentdb/
### Document DB
### Microsoft's Document store
# SQL
