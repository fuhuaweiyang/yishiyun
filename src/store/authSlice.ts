import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean;
  iflogin: boolean;
  user: { username: string };
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  iflogin: false,
  user: { username: 'null' },
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
      state.iflogin= true,
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
    console.log('调用dispatchlogin',credentials)
    dispatch(loginRequest());
    if (credentials.username === 'shuiyue2530' && credentials.password === '123456') {
      console.log('调用dispatchlogin成功')
      dispatch(loginSuccess({ username: credentials.username }));
    } else {
      console.log('调用dispatchlogin失败')
      dispatch(loginFailure('用户名或密码错误'));
    }
  };

export default authSlice.reducer;