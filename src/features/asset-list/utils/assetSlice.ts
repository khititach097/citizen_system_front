import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssetDataType } from "../types/types";

export interface IAssetSlice {
  assetData?: AssetDataType
}

const initialState:IAssetSlice = {
  assetData: undefined
}

export const assets = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setAssetData: (state, action: PayloadAction<AssetDataType>) => {
      state.assetData = action.payload;
    },
    resetAsset: () => initialState,
  },
});


export const {
resetAsset,
setAssetData
} = assets.actions;

export default assets.reducer;