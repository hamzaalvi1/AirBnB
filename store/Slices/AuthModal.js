import { createSlice } from "@reduxjs/toolkit";
import { AuthConstants } from "@/app/config/constants";

const initialState = {
  open: false,
  view: AuthConstants.SIGNUP,
};

const authModal = createSlice({
  name: "Auth Modal",
  initialState,
  reducers: {
    isModalOpen: (state, action) => {
      const {
        payload: { open, view },
      } = action;
      state.open = open;
      state.view = view;
    },
  },
});

export const { isModalOpen } = authModal.actions;

export default authModal.reducer;
