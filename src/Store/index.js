import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
const initialState = {};
const middleWare = [thunk];
const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["SUBMIT_CHECKOUT"] },
  rootReducer
);
export const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export const persistor = persistStore(store);
