// refrence for the usage of persist from the todolist application
// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export let store = createStore(persistedReducer);
// export let persistor = persistStore(store);

import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);

//redux and the thunk setup
// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// import rootReducer from "./rootReducer";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });
// export const persistor = persistStore(store);
