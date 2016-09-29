import './style.css';
import './favicon-loader';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(<Provider store={store} ><Router history={browserHistory} routes={routes}></Router></Provider>, document.getElementById('main'));