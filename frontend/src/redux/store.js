import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducers/productReducers';

// to combine more than one reducers we use combineReducers
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// provide created middlewares to the applyMiddleware.
const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

// This will create the store for the redux..  this is the place we are use to store the application state.
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
//  to access all the props we have to wrap the whole app using Provider. see index.js
