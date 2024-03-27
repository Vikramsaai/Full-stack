import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice";

// Root Reducer
const rootReducer = combineReducers({
    auth: userReducer
});

// Redux Persist Configuration
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store Configuration
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware=> getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);
export default store;
