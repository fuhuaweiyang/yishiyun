// src/store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 创建 Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    // 同步 Action：更新用户
    updateUser: (state:any, action:any) => {
      state.data = action.payload;
    }
  }
});

// 导出 Action 和 Reducer
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;