import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store'

import App from './App';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import About from './routes/about/About';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="projects" component={Projects} />
                <Route path="about" component={About} />
            </Route>
         </Router>
    </Provider>,

  document.getElementById('root')
);
