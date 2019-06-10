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
import projects from './data/projects.js'
// Initial State
const initialState = {
  projects: projects
};

// Reducers
import projectsReducer from './reducers/projects_reducer.js';
const reducers = combineReducers({
  projects: projectsReducer
});

//Stylesheets
import '../assets/stylesheets/application.scss';

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
