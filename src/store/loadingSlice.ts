import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface loadingState {
  isLoading: boolean;
}

const initialState: loadingState = {
  isLoading: false
}

export const loading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    resetLoading: () => initialState,
    setLoading: (state, action: PayloadAction<boolean>) =>{
      state.isLoading = action.payload
    }
  },
});

export const {
  resetLoading,
  setLoading
} = loading.actions;
export default loading.reducer;
