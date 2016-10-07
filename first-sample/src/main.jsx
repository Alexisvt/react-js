// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import User from './components/UserComponent';
import store from './store';

ReactDOM.render(<Provider store={store}><User></User></Provider>, document.getElementById('main'));