import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartProduct {
  product: IProduct[];
}
const initialState: ICartProduct = {
  product: [],
};

export const cartSlice = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<IProduct>) => {
      state.product.push(action.payload);
    },
  },
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
