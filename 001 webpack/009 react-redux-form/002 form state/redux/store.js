//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";



//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

//react-redux-form
import { combineForms } from 'react-redux-form';

//обязательно нужно объялять форму (user1 , user2, user3)
const store = createStore(
	combineReducers({
		reducer,
  	forms: combineForms( {
			user1: "",
			user2: "",
			user3: "",
			someForm: [
				{ number: '5551234567', type: 'home' },
				{ number: '5559876543', type: 'work' }
			],
			},'forms')}),
	composeWithDevTools(
	applyMiddleware(thunk)
	)
);

export default store;