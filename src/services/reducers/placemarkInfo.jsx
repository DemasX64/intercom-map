/* eslint-disable no-promise-executor-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getAllPlacemarks } from '../../utils/map-api';

const initialState = {
  getPlacemarksRequest: false,
  placemarks: [

  ],
  code: '',
  isInfoShow: false,
  placemarkID: null,
};

const placemarkInfoSlice = createSlice({
  name: 'placemarkInfo',
  initialState,
  reducers: {
    setCode(state, action) {
      state.code = action.payload;
    },
    showInfo(state, action) {
      state.placemarkID = action.payload;
      state.isInfoShow = true;
    },
    hideInfo(state) {
      state.placemarkID = null;
      state.isInfoShow = false;
    },
    setPlacemarkID(state, action) {
      state.placemarkID = action.payload;
    },
    addPlacemarkToMap(state, action) {
      state.placemarks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPlacemarks.pending, (state) => {
      state.getPlacemarksRequest = true;
    });
    builder.addCase(getAllPlacemarks.fulfilled, (state, action) => {
      state.getPlacemarksRequest = false;
      state.placemarks = action.payload;
    });
    builder.addCase(getAllPlacemarks.rejected, (state) => {
      state.getPlacemarksRequest = false;
    });
  },
});

export const {
  setCode, showInfo, hideInfo, setPlacemarkID, addPlacemarkToMap,
} = placemarkInfoSlice.actions;
export default placemarkInfoSlice.reducer;
