import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
      if (typeof window !== undefined) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
