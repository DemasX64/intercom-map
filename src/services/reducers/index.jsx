/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFAQShow: false,
  isAddPlacemarkFormShow: false,
  isPlacemarkInfoShow: false,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setIsFAQShow(state, action) {
      state.isFAQShow = action.payload;
    },
    setIsAddPlacemarkFormShow(state, action) {
      state.isAddPlacemarkFormShow = action.payload;
    },
    setIsPlacemarkInfoShow(state, action) {
      state.isPlacemarkInfoShow = action.payload;
    },
  },
});

export const { showFAQ, hideFAQ } = indexSlice.actions;
export default indexSlice.reducer;
