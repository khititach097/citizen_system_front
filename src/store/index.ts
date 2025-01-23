import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import storageLocal from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { logger } from "redux-logger";


import userReducer from "./userReducer";
import masterReducer from "./masterReducer";
import loadingReducer from "./loadingSlice";

const persistConfigSession = {
  key: "sts-app-session-root",
  storage: storageSession
};

const persistConfigLocal = {
  key: "sts-app-local-root",
  storage: storageLocal
};
// const rootReducer = combineReducers({
  
// });

const rootReducerLocal = combineReducers({
  user: userReducer,
  master: masterReducer,
  loading: loadingReducer,
});

const persistedReducerLocal = persistReducer(persistConfigLocal, rootReducerLocal);
// const persistedReducerSession = persistReducer(persistConfigSession, rootReducer);

const allReducer = combineReducers({
  local: persistedReducerLocal,
  // root: persistedReducerSession,
});

export const store = configureStore({
  reducer: allReducer,
  middleware:(getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
