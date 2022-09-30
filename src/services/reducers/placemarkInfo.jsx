import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  code:'',
  isInfoShow: false,
  placemarkID: null,
}

const placemarkInfoSlice = createSlice({
  name: 'placemarkInfo',
  initialState,
  reducers: {
    setCode(state, action) {
      state.code = action.payload;
    },
    showInfo(state) {
      state.isInfoShow = true;
    },
    hideInfo(state) {
      state.isInfoShow = false;
    },
    setPlacemarkID(state, action) {
      state.placemarkID = action.payload;
    }
  },
})

export const { setCode, showInfo, hideInfo, setPlacemarkID } = placemarkInfoSlice.actions
export default placemarkInfoSlice.reducer