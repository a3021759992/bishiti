import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types'; // 确保路径正确
const initialState: AuthState = {
  token: null,
  username: '用户名',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.username = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;