import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  info:Record<string,any>;
}

export const initialState:IUserState = {
  info:{},
};

//export type User = typeof initialState;

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile:(state , action:PayloadAction<Record<string,any>>)=>{
      state.info = {
        ...state.info,
        ...action.payload
      }
    },
    setDataUser:(state, action: PayloadAction<IUserState>)=>{
      console.log("action.payload : ",action.payload)
      state.info = {
        ...action.payload.info
      }
    },
    signOut:()=> initialState
  },
});

// Action creators are generated for each case reducer function
export const {
  signOut,
  setDataUser,
  setUserProfile,
} = User.actions;

export default User.reducer;
