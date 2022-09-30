import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const addPlacemark = createAsyncThunk(
  'addPlacemarkForm/addPlacemark',
  () => {

  }
)

const initialState = { 
  isFormShow: false,
  animation: 'appear',

  coordinates:['-','-'],
  type:'Парадная',
  code:'',

  isToastShow:false,
  toastAnimation:'appear',
}

const addPlacemarkFormSlice = createSlice({
  name: 'addPlacemarkForm',
  initialState,
  reducers: {
    showForm(state) {
      state.isFormShow = true;
    },
    hideForm(state) {
      state.animation = 'appear';
      state.isFormShow = false;
    },
    showToast(state) {
      state.isToastShow = true;
    },
    hideToast(state) {
      //state.animation = 'appear';
      state.isToastShow = false;
    },
    setDisappear(state) {
      state.animation = 'disappear';
    },
    addChar(state, action) {
      state.code += action.payload;
    },
    removeChar(state) {
      if(state.code)
        state.code = state.code.slice(0, -1);
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload
    },
    setToastDisappear(state) {
      state.toastAnimation = 'disappear';
    },
    changeType(state, action) {
      state.type = action.payload
    }
  },
})

export const { showForm, hideForm, setDisappear, addChar, removeChar, setCoordinates,showToast, hideToast, setToastDisappear, changeType } = addPlacemarkFormSlice.actions
export default addPlacemarkFormSlice.reducer