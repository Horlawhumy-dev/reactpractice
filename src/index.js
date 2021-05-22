
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
// import { combinedReducers } from 'redux';
import reducer from './reduxComponents/reducer';
import createClaims from './reduxComponents/createClaims';
import createPolicies from './reduxComponents/createPolicies';
import deletePolicy from './reduxComponents/deletePolicy';
console.clear();
const store = createStore(reducer);
store.dispatch(createClaims('Arafat', 120))
store.dispatch(createPolicies('Olawumi'))
store.dispatch(deletePolicy('Arafat'))

console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
