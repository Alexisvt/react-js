import './style.css';
import '../node_modules/toastr/build/toastr.min.css';
import './favicon-loader';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/toastr/build/toastr.min.js';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(<Provider store={store} ><Router history={browserHistory} routes={routes}></Router></Provider>, document.getElementById('main'));