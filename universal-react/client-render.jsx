import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

ReactDOM.render(<Router routes={routes} history={browserHistory}></Router>, document.getElementById('app'));