import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/CartSlice/cartSlice';
import productReducer from './feature/product/productSlice/productSlice';
import { api } from './api/apiSlice';
import userReducer from './feature/user/userSlice';

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Product: productReducer,
    User: userReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
