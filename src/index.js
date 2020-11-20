import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import allCombinedReducers from './reducers/allCombinedReducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './cakeshop_container/sagas/sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allCombinedReducers,
  applyMiddleware(thunk,sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
  
    <App />

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
