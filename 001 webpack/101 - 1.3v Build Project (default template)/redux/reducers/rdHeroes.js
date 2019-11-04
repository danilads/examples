import {
  HEROES_LOADING,
  HEROES_LOADED
} from '../constants';
import heroesVerify from '../../jsonBackUp/heroesVerify.json';

const initialState = {
  data: {},
  isFetching: false,
  isLoaded: false
};

// export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
  switch (action.type) {
    case HEROES_LOADING: {
      return {
        ...state,
        isFetching: true
      };
    }
    case HEROES_LOADED: {
      const arr = action.payload;
      const result = [];
      let cnt = 0;
      // фильтруем данные
      for (const pos in arr) {
        if (heroesVerify.includes(arr[pos].name)) {
          result.push({ ...arr[pos], codeName: pos, key: cnt });
          cnt += 1;
        }
      }
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        data: result
      };
    }
    default: return state;
  }
};
