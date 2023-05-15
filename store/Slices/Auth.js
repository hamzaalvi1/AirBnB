import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMethodsConstants } from "@/app/config/constants";
import { AuthRoutes } from "@/app/config/api-routes";
import { fetchAPI } from "@/app/utils";
import { signIn } from "next-auth/react";
import { isModalOpen } from "./AuthModal";
import { AuthConstants } from "@/app/config/constants";

const initialState = {
  fetching: false,
  user: {},
  error: null,
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "authentication/registerUser",
  async (
    { values, toast, setSubmitting, resetForm },
    { rejectWithValue, dispatch }
  ) => {
    const apiParams = {
      method: ApiMethodsConstants.POST,
      url: AuthRoutes.SIGN_UP,
      data: JSON.stringify(values),
    };
    try {
      const createUser = await fetchAPI(apiParams);
      if (createUser?.data?.status == 200) {
        toast.success(createUser?.data?.message);
        setSubmitting(false);
        resetForm();
        dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));
      }
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);

export const getMe = createAsyncThunk(
  "authentication/getMe",
  async (
    { values, toast, setSubmitting, resetForm, router },
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
          toast.success("Logged in");
          setSubmitting(false);
          resetForm();
          router.refresh();
          dispatch(isModalOpen({ view: AuthConstants.SIGNUP, open: false }));
        }
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const googleSignIn = createAsyncThunk(
  "authentication/google",
  async () => {
    try {
      const getCredentials = await signIn("google");
      console.log(getCredentials);
    } catch (err) {
      console.log(err);
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
