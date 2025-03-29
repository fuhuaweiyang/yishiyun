import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean;
  user: { username: string };
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: { username: 'qianmo' },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.user.username = 'LOGIN_REQUEST';
    },
    loginSuccess: (state, action: PayloadAction<{ username: string }>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

export const login = (credentials: { username: string; password: string }): ThunkAction<void, any, unknown, any> => 
  (dispatch) => {
    dispatch(loginRequest());
    if (credentials.username === 'a' && credentials.password === '1') {
      dispatch(loginSuccess({ username: 'admin' }));
    } else {
      dispatch(loginFailure('用户名或密码错误'));
    }
  };

export default authSlice.reducer;