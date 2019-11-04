import {
  MODAL_OPEN,
  MODAL_CLOSED,
} from '../constants';

const initialState = {
  data: {},
};

// export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
      };
    }
    case MODAL_CLOSED: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};
