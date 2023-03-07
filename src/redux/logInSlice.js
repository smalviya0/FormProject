import { createSlice } from '@reduxjs/toolkit';

export const logInSlice = createSlice({
  name: 'signIn',
  initialState: {
    email: '',
    password: '',
    logInFlag : false,
  },
  reducers: {

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setlogInFlag:(state, action)=>{
      state.logInFlag = action.payload;
    }
    
  },
});

export const {
  setEmail,
  setPassword,
  setlogInFlag
} = logInSlice.actions;

export default logInSlice.reducer;