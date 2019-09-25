import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import items from "./reducers/items";
import text from "./reducers/text";

const store = createStore(
    combineReducers({items,text}),
    applyMiddleware(thunk)
);

export default store;