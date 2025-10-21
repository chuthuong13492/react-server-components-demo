import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isLoggedIn: false,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateProfile: (state, action) => {
      state.name = action.payload.name || state.name;
      state.email = action.payload.email || state.email;
    },
  },
});

export const { login, logout, setLoading, updateProfile } = userSlice.actions;

export default userSlice.reducer;
