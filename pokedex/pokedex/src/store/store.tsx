import { configureStore } from "@reduxjs/toolkit";
import appOnReducer from './features/AppStart'
import pokeImporter from './features/SetPokeURL';
import pokeSearch from './features/SetSearcTerm';
import specificPokeUrl from './features/GetSpecificPoke';
import setPokemonStats from './features/SpecificPokeApi';


// initially configuring store with certain reducer
const store = configureStore({
    reducer:{
        appOnReducer,
        pokeImporter,
        pokeSearch,
        specificPokeUrl,
        setPokemonStats
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;