/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [thunk];

// const composeEnhancers =
//   typeof window !== 'undefined'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose; 

let state;
if (typeof window !== 'undefined') {
  state = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}
let isClient = typeof window !== 'undefined';
let isServer = typeof window === 'undefined';

const store = createStore(
  reducers,
  state,
  applyMiddleware(...middleware)
);

if(isClient){
  window.store = store;
};
export { store };
