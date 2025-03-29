import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './deviceSlice';
import uiSlice from './uiSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    devices: deviceReducer,
    ui: uiSlice,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;