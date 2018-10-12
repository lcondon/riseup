import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
