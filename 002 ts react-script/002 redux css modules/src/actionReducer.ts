import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // ACTIONS
    // Обычная запись в redux 
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.value += 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmount } = slice.actions;


// Async запись в redux
export const incrementAsync = (amount: number): AppThunk => async dispatch => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  //ACTION вызывается здесь
  dispatch(incrementByAmount(amount));

  console.log('-done');
};


// для React Hook
export const selectCount = (state: RootState) => {
  return state.counter.value;
}



export default slice.reducer;