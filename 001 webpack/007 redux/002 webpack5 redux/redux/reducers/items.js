import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  items: [],
  isLoading: false
};

const itemsSlice = createSlice({
  name: 'items',
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
	console.log('--+ dataId', dataId);
	// imitate request
	await new Promise(resolve => setTimeout(resolve, 5000));

    dispatch(setData({items: [1,2,3]}));
  };
}