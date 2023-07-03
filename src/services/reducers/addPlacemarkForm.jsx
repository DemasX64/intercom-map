/* eslint-disable no-promise-executor-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addPlacemark } from '../../utils/map-api';

const initialState = {
  requestLoading: false,
  isFormShow: false,
  coordinates: ['-', '-'],
  type: 'Парадная',
  code: '',
  isToastShow: false,
};

const addPlacemarkFormSlice = createSlice({
  name: 'addPlacemarkForm',
  initialState,
  reducers: {
    showForm(state) {
      state.isFormShow = true;
    },
    hideForm(state) {
      state.isFormShow = false;
    },
    showToast(state) {
      state.isToastShow = true;
    },
    hideToast(state) {
      state.isToastShow = false;
    },
    addChar(state, action) {
      state.code += action.payload;
    },
    removeChar(state) {
      if (state.code) { state.code = state.code.slice(0, -1); }
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPlacemark.pending, (state) => {
      state.requestLoading = true;
    });
    builder.addCase(addPlacemark.fulfilled, (state) => {
      state.requestLoading = false;
      state.isToastShow = true;
      state.isFormShow = false;
    });
    builder.addCase(addPlacemark.rejected, (state) => {
      state.requestLoading = false;
      state.isToastShow = true;
      state.isFormShow = false;
    });
  },
});

export const {
  showForm, hideForm, addChar, removeChar, setCoordinates, showToast, hideToast, changeType,
} = addPlacemarkFormSlice.actions;
export default addPlacemarkFormSlice.reducer;
