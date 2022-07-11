import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ids: [1],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.ids = [...state.ids, action.payload];
    },
    removeCartItem: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCartItem, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
