import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

// Middleware
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// Components and Containers
import App from './components/app.jsx';
import App1 from './components/app1.jsx';

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
console.log(process.env.PUBLIC_URL);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <Router history={history()} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/app' exact component={App}/>
        <Route path='/app1' exact component={App1}/>
        <Route component={() => (<div>404 Not found </div>)} />
        <Redirect from='/' to='/app'/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
