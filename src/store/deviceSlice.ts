import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Device {
  type: string;
  id: string;
  hidden: boolean;
}

interface DeviceState {
  devicesSeacrch: Device[];
  loading: boolean;
  error: string | null;
  deviceList: Device[];
}

const initialState: DeviceState = {
  devicesSeacrch: [],
  loading: false,
  error: null,
  deviceList: []
};

// 假装异步获取
export const fetchDevices = createAsyncThunk<Device[]>(
  'devices/fetchAll',
  async (_, thunkAPI) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
            return [
        { type: '网络摄像机', id: '123452301', hidden: true },
        { type: '水月的摄像机', id: '7740996105', hidden: false },
        { type: '门铃室内机', id: '678900839', hidden: true },
      ];
    } catch (error) {
      return thunkAPI.rejectWithValue('设备列表获取失败');
    }
  }
);

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    // 同步添加设备
    addDevice: (state, action: PayloadAction<Device>) => {
      state.deviceList.push(action.payload);
    },
    // 同步更新设备隐藏状态
    toggleDeviceHidden: (state, action: PayloadAction<string>) => {
      const device = state.deviceList.find(d => d.id === action.payload);
      if (device) {
        device.hidden = !device.hidden;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.loading = false;
        state.devicesSeacrch = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { addDevice, toggleDeviceHidden } = deviceSlice.actions;
export default deviceSlice.reducer;