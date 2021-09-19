import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface URLint{
    specificUrl:string
}

const initialState:URLint = {
    specificUrl : ''
}; 

const SetSpecificPokeURL = createSlice({
    name : 'setPokemon',
    initialState, 
    reducers:{
        setSpecPoke : (state,action:PayloadAction<string>) => {
            state.specificUrl = action.payload;
        }
    }

})

export const {setSpecPoke} = SetSpecificPokeURL.actions; 
export default SetSpecificPokeURL.reducer