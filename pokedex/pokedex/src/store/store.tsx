import { configureStore } from "@reduxjs/toolkit";
import appOnReducer from './features/AppStart'
import pokeImporter from './features/SetPokeURL';

// initially configuring store with certain reducer
const store = configureStore({
    reducer:{
        appOnReducer,
        pokeImporter
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;