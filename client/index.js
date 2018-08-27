import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {HashRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // to use chrome redux devtool
  )
);

render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('app')
);