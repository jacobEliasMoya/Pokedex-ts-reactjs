import { configureStore } from "@reduxjs/toolkit";
import appOnReducer from './features/AppStart'
import pokeImporter from './features/SetPokeURL';
import pokeSearch from './features/SetSearcTerm';
// initially configuring store with certain reducer
const store = configureStore({
    reducer:{
        appOnReducer,
        pokeImporter,
        pokeSearch
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;