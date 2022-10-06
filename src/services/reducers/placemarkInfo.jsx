import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const fakeApiRes = [
  {id: 1, pos: [59.93687192436499, 30.317392223419223], code: '1234' },
  {id: 2, pos: [59.93579116232591, 30.316882516933806], code: '123434' },
  {id: 3, pos: [59.93696431836826, 30.314474419507484], code: '123344' },
]

export const getPlacemarks = createAsyncThunk(
  'placemarkInfo/getPlacemarks',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return fakeApiRes;
  }
) 
export const addPlacemarkToMap = createAsyncThunk(
  'placemarkInfo/addPlacemarkToMap',
  async (data, thunkAPI) => {
    const {code,coordinates} = thunkAPI.getState().addPlacemarkForm
    return {code,pos: coordinates}
  }
) 


const initialState = { 
  getPlacemarksRequest:false,

  placemarks:[
    
  ],
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
    showInfo(state, action) {
      state.placemarkID = action.payload
      state.isInfoShow = true;
    },
    hideInfo(state) {
      state.placemarkID = null
      state.isInfoShow = false;
    },
    setPlacemarkID(state, action) {
      state.placemarkID = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPlacemarks.pending, (state, action) => {
      state.getPlacemarksRequest = true;
    })
    builder.addCase(getPlacemarks.fulfilled, (state, action) => {
      state.getPlacemarksRequest = false;
      state.placemarks = action.payload
    })
    builder.addCase(getPlacemarks.rejected, (state, action) => {
      state.getPlacemarksRequest = false;
    })
    builder.addCase(addPlacemarkToMap.pending, (state, action) => {
    })
    builder.addCase(addPlacemarkToMap.fulfilled, (state, action) => {
      state.placemarks.push({
        id: uuidv4(),
        pos: action.payload.pos,
        code: action.payload.code,
      })
    })
    builder.addCase(addPlacemarkToMap.rejected, (state, action) => {
    })
  }
})

export const { setCode, showInfo, hideInfo, setPlacemarkID } = placemarkInfoSlice.actions
export default placemarkInfoSlice.reducer