import { configureStore } from "@reduxjs/toolkit";
import appOnReducer from './features/AppStart'
// initially configuring store with certain reducer
const store = configureStore({
    reducer:{
        appOnReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;