import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Favorites from './pages/Favorites';
import Todos from './pages/Todos';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
    /* jshint ignore:start */
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos} />
            <Route path="favorites" component={Favorites} />
            <Route path="settings" component={Settings} />
        </Route>
    </Router>,
    app
    /* jshint ignore:end */
);
