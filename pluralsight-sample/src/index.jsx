import './style.css';
import './favicon-loader';

import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(<Router history={browserHistory} routes={routes}></Router>, document.getElementById('main'));