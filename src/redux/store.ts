import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/CartSlice/cartSlice';
import productReducer from './feature/product/productSlice/productSlice';
import { api } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Product: productReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
