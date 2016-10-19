// @flow
import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';

const routes = (<Route path='/' component={AppComponent}>
<IndexRoute component={IndexComponent} ></IndexRoute>
<Route path='/about' component={AboutComponent}></Route>
</Route>);

export default routes;