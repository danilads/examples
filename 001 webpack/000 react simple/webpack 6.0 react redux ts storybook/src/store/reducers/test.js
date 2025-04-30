import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  items: [],
  isLoading: false
};

const itemsSlice = createSlice({
  name: 'test',
  initialState: defaultState,
  reducers: {
    setData(state, action) {
      const {items} = action.payload;
	    state.items = items;
    },
    setLoading(state, action) {
      const {isLoading} = action.payload;
	  
	  state.isLoading = isLoading;
    }
  }
});

export const {
	setData,
	setLoading
} = itemsSlice.actions;

export default itemsSlice.reducer;


/* [async actions] */
export function asyncFetchItems(dataId) {
  return async (dispatch) => {
    // imitate request
    await new Promise(resolve => setTimeout(resolve, 3000));
    dispatch(setData({items: [1,2,3]}));
  };
}