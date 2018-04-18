import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
const store = createStore( reducers, {}, applyMiddleware());

//auth reducer - records whether or not the user is logged in
//surveys Reducer - records a list of all surveys the user has created



//redux store top level and hooked it up to provider react component
//child to the provider tag is the app component
//Provider tag react component reads changes from the redux store anytime
//there is a new state the provider will inform the children components that
//a new state is available and will update the components with the new state

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.querySelector('#root'));
