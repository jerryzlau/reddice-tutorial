import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {HashRouter,Route} from 'react-router-dom';

render(
  <HashRouter>
    <App/>
  </HashRouter>
  , document.getElementById('app')
);