import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMethodsConstants } from "@/config/constants";
import { AuthRoutes } from "@/config/api-routes";
import { fetchAPI } from "@/utils";
import { signIn } from "next-auth/react";

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

export const getMe = createAsyncThunk(
  "authentication/getMe",
  async (
    { values, toast, setSubmitting, resetForm },
    { dispatch, rejectWithValue }
  ) => {
    const apiParams = {
      method: ApiMethodsConstants.POST,
      url: AuthRoutes.GET_USER,
      data: JSON.stringify({ email: values.email }),
    };
    try {
      let data;
      const getCredentials = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (getCredentials?.ok) {
        const getUser = await fetchAPI(apiParams);
        if (getUser?.data?.status == 200) {
          data = getUser?.data;
          toast.success('Logged in');
          setSubmitting(false) 
          resetForm()

        } 
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const Authentication = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.fetching = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.fetching = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});

export default Authentication.reducer;
