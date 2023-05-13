import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMethodsConstants } from "@/config/constants";
import { AuthRoutes } from "@/config/api-routes";
import { fetchAPI } from "@/utils";
const initialState = {
  fetching: false,
  user: {},
  error: null,
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "authentication/registerUser",
  (
    { values, toast, setSubmitting, resetForm },
    { rejectWithValue, dispatch }
  ) => {
    const apiParams = {
      method: ApiMethodsConstants.POST,
      url: AuthRoutes.SIGN_UP,
      data: JSON.stringify(values),
    };
    fetchAPI(apiParams)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
);

const Authentication = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.fetching = true;
    },
    [registerUser.fulfilled]: (state, payload) => {
      state.fetching = false;
      state.user = payload;
      state.isAuthenticated = true;
    },
    [registerUser.rejected]: (state, payload) => {
      state.fetching = false;
      state.user = {};
      state.isAuthenticated = false;
      state.error = payload;
    },
  },
});

export default Authentication.reducer;
