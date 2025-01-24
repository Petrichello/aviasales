import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { transfersReducer } from "./transfersReducer";
import { sortReducer } from "./sortReducer";
import { ticketsReducer } from "./ticketsReducer";

const rootReducer = combineReducers({
  transfersReducer,
  sortReducer,
  ticketsReducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  },
  applyMiddleware(thunk)
);
