import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartProduct {
  products: IProduct[];
  total: number;
}
const initialState: ICartProduct = {
  products: [],
  total: 0,
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
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;

        state.total -= action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addtoCart, removeOne, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
