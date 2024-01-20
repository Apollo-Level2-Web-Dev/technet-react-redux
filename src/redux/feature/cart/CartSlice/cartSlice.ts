import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartProduct {
  products: IProduct[];
}
const initialState: ICartProduct = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1!;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
