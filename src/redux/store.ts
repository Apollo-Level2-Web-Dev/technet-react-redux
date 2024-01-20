import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/CartSlice/cartSlice';
import productReducer from './feature/product/productSlice/productSlice';

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
