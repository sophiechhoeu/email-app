## Notes

Node
Javascript runtime used to execute code outside of the browser

Express
library that runs in the node runtime

a collection of helpers or functions for making for working with http aspects of node.js a little bit easier

Node takes the information from the HTTP traffic and hand it to express, then express figures out where to send it to and decides what chunk of code will handle or respond to the request

Route handlers
created in express (with logic), will formulates a response that routes back to the whoever send the requests

## Route handlers

```js
app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});
```

app - express app to register this route handler with

get - watch for incoming requests with this method

/ - watch for requests trying to access '/'



## Google oauth Strategy

```js
passport.use(new GoogleStrategy());
```

creating a new instance of the google Strategy
