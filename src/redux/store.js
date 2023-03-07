import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInSlice from "./logInSlice";
import signUpSlice from "./signUpSlice";

const store = configureStore({
  reducer: {
    signup: signUpSlice,
    signin: logInSlice
  },
});

export default store;







