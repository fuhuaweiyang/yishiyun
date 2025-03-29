import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  ifShowpop: boolean;
  isShowMore: boolean;
  ifOffline: boolean;
  ifShowHelper: boolean;
}

const initialState: UIState = {
  ifShowpop: false,
  isShowMore: false,
  ifOffline: false,
  ifShowHelper: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    togglePopup: (state) => { state.ifShowpop = !state.ifShowpop },
    toggleShowMore: (state) => { state.isShowMore = !state.isShowMore },
    toggleOffline: (state) => { state.ifOffline = !state.ifOffline },
    toggleHelper: (state) => { state.ifShowHelper = !state.ifShowHelper },
  },
});

export const { togglePopup, toggleShowMore, toggleOffline, toggleHelper } = uiSlice.actions;
export default uiSlice.reducer;