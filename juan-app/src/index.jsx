import './favicon-loader';
import * as React from 'react';
import { render } from 'react-dom';
import Main from './components/MainPage';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const store = configStore();

render(<Provider store={store}><Main></Main></Provider>, document.getElementById('main'));