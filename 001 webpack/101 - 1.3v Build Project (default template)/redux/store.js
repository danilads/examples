// redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

import rdHeroes from './reducers/rdHeroes';
import rdModal from './reducers/rdModal';


const store = createStore(
  combineReducers({
    rdHeroes,
    rdModal
  }),
    // отключаем redux dev tools в production
    process.env.NODE_ENV==='development'?composeWithDevTools(
      applyMiddleware(thunk)
      ):applyMiddleware(thunk)
    
);

export default store;
