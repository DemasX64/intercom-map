import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://domofonof.net:3000/map';

export const addPlacemark = createAsyncThunk(
  'addPlacemarkForm/addPlacemark',
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/addPlacemark`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      return res.ok ? json : rejectWithValue(res.statusText);
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  },
);

export const getAllPlacemarks = createAsyncThunk(
  'placemarkInfo/getAllPlacemarks',
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/getAllPlacemarks`, {
        method: 'GET',
      });
      const json = await res.json();
      return res.ok ? json : rejectWithValue(res.statusText);
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  },
);
