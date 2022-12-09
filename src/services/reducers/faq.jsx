/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFAQShow: false,
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    showFAQ(state) {
      state.isFAQShow = true;
    },
    hideFAQ(state) {
      state.isFAQShow = false;
    },
  },
});

export const { showFAQ, hideFAQ } = faqSlice.actions;
export default faqSlice.reducer;
