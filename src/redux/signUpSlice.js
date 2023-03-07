import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearForm: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.errorMessage = null;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setError,
  clearForm,
} = signUpSlice.actions;

export default signUpSlice.reducer;