import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {HashRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('app')
);