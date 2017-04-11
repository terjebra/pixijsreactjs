import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes'
import reducers from './reducers/reducers';
import './styles/main.css';

const store = createStore(reducers);
import App from './containers/App';

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);