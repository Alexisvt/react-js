import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout';
import Archives from './components/Archives';
import Featured from './components/Featured';
import Settings from './components/Settings';


ReactDOM.render(<Router history={hashHistory}>
  <Route path='/' component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path='archives' component={Archives}></Route>
    <Route path='settings' component={Settings}></Route>
  </Route>
</Router>, document.getElementById('main'));