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
import rootSaga from './rootSaga'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allCombinedReducers,
  applyMiddleware(thunk,sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
  
    <App />

  </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
