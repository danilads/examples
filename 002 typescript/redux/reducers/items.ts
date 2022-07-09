import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TypeState, TypeDispatch} from '../store';

interface ItemState {
  items: number[];
  isLoading: boolean;
};

const defaultState: ItemState = {
  items: [],
  isLoading: false
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: defaultState,
  reducers: {
    setData(state, action: PayloadAction<{items: number[]}>) {
      const {items} = action.payload;

	  state.items = items;
    },
    setLoading(state, action: PayloadAction<{isLoading: boolean}>) {
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
export function asyncFetchItems(dataId: string) {
    return async (dispatch: TypeDispatch, state) => {
    const store: TypeState = state();

    console.log('--+ dataId', dataId);
    console.log('--+ store', store);
    // imitate request
    await new Promise(resolve => setTimeout(resolve, 5000));

      dispatch(setData({items: [1,2,3]}));
    };
}