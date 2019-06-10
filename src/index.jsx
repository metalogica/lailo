import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose }from 'redux';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from'react-router-dom';
import { createHistory as history } from 'history';

// Middleware
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// Components and Containers
import App from './components/app.jsx';

// DB

// Initial State
const initialState = {
};

// Reducers
const reducers = combineReducers({
});

//Stylesheets
import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <Router history={history}>
      <Switch>
        <Route path="/contact" exact component={App}/>
        <Redirect from="/" to="/contact"/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
