import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  isFAQShow: false,
  animation:'appear',
}

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    showFAQ(state) {
      state.animation = 'appear';
      state.isFAQShow = true;
    },
    hideFAQ(state) {
      state.isFAQShow = false;
    },
    setDisappear(state) {
      state.animation = 'disappear';
    }
  },
})

export const { showFAQ, hideFAQ, setDisappear } = faqSlice.actions
export default faqSlice.reducer