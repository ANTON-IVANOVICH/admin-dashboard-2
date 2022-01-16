import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import { postAPI } from "./services/PostService";
import { productAPI } from "./services/ProductService";
import { userAPI } from "./services/UserService";


const rootReducer = combineReducers({
  authReducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([postAPI.middleware, userAPI.middleware, productAPI.middleware])
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
