import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";
/* reducers */
import { AuthModal } from "./Slices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  authModal: AuthModal,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
