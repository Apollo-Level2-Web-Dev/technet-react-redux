import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProductCart {
  status: boolean;
  priceRange: number;
}

const initialState: IProductCart = {
  status: false,
  priceRange: 150,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
