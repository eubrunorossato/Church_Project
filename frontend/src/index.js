import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Main/reducers";
import promisse from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';

const devTools = window.__REDUX__DEVTOOLS__EXTENSIONS__ && window.__REDUX__DEVTOOLS__EXTENSIONS__();
const store = applyMiddleware(thunk, promisse, multi)(createStore)(reducer, devTools);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();


