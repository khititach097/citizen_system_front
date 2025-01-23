import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

// ROOT
// export const selectorRoot = (state: RootState) => state.root;
export const selectorLocal = (state: RootState) => state.local;

//LOADING
export const isLoadingSelector = createSelector([selectorLocal],(local) => local.loading.isLoading);