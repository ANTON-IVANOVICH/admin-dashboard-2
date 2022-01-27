import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/auth';
import { serviceAPI } from './services/serviceAPI';
import { todoAPI } from './services/TodoService';

const rootReducer = combineReducers({
    authReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
    [serviceAPI.reducerPath]: serviceAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                serviceAPI.middleware,
                todoAPI.middleware,
            ]),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
