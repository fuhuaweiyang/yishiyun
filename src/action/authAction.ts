export const loginRequest = (credentials) => ({
  type: 'LOGIN_REQUEST',
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const login = (credentials) => {
  // console.log('login', credentials);
  return (dispatch) => {
    console.log('login', credentials);
    // dispatch(loginRequest(credentials));
    if (credentials.username === 'a' && credentials.password === '1') {
      dispatch(loginSuccess({ username: 'admin' }));
    } else {
      dispatch(loginFailure('用户名或密码错误'));
    }
    // 模拟异步 API 调用
    // setTimeout(() => {
    //   if (credentials.username === 'a' && credentials.password === '1') {
    //     dispatch(loginSuccess({ username: 'admin' }));
    //   } else {
    //     dispatch(loginFailure('用户名或密码错误'));
    //   }
    // }, 1000);
  };
};
