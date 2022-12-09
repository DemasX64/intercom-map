import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addPlacemark = createAsyncThunk(
  'addPlacemarkForm/addPlacemark',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
)

const initialState = { 

  requestLoading:false,

  isFormShow: false,

  coordinates:['-','-'],
  type:'Парадная',
  code:'',

  isToastShow:false,
}

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
      if(state.code)
        state.code = state.code.slice(0, -1);
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload
    },
    changeType(state, action) {
      state.type = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addPlacemark.pending, (state, action) => {
      state.requestLoading = true;
    })
    builder.addCase(addPlacemark.fulfilled, (state, action) => {
      state.requestLoading = false;
      state.isToastShow = true;
      state.isFormShow = false;
    })
    builder.addCase(addPlacemark.rejected, (state, action) => {
      state.requestLoading = false;
      state.isToastShow = true;
      state.isFormShow = false;
    })
  }
})

export const { showForm, hideForm, addChar, removeChar, setCoordinates,showToast, hideToast, changeType } = addPlacemarkFormSlice.actions
export default addPlacemarkFormSlice.reducer