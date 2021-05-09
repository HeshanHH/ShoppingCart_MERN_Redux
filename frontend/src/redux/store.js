import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';

// to combine more than one reducers we use combineReducers
const reducer = combineReducers({});

// provide created middlewares to the applyMiddleware.
const middleware = [thunk];

// This will create the store for the redux..  this is the place we are use to store the application state.
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
//  to access all the props we have to wrap the whole app using Provider. see index.js
