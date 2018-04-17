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

clientID
public token - identifies app to google servers

client secret- private

## Mongoose / MongoDB

Model class- represents one collection in Mongo DB
Model instance - represents one individual record in the collection

```js
  new User({ googleId: profile.id }).save();
```
creates a model instance and saves it to the mlab database


```js
app.get('/api/current_user', (req, res) => {
  res.send(req.user);
```

request comes in -> cookie session extracts the data -> passport pulls user id out of the cookie session -> deserialize usr to turn the user id into a user -> this user model instance is added to the req object as req.user

this will show our user id and our google id as json

## React App

prior to deployment you will need to run build which will create a main.js public file that in will be served by the Node/express api back to the browser (and it gets automatically rewritten by heroku ) so relative routing like auth/google is automatic to the production environment

In production, the react server no longer exists 
