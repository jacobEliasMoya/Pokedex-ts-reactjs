import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface PokeAPIinfo{
    name:string,
    url:string
}

export interface PokeObject {
    count :number,
    next:any|string,
    previous:any|string,
    results : Array<PokeAPIinfo>
}

const initialState:Array<PokeObject> = []; 

const SetPokeURL = createSlice({
    name : 'setPokemon',
    initialState,
    reducers:{
        setPoke : (state,action:PayloadAction<PokeObject>) => {
            state.push(action.payload);
        }
    }

})

export const {setPoke} = SetPokeURL.actions; 
export default SetPokeURL.reducer