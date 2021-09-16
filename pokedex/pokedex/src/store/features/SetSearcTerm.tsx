import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokeTerm {
    pokeName : string
}
const initialState:PokeTerm = {pokeName:' '}

const setSearchTerm = createSlice({
    name : 'setSearch',
    initialState,
    reducers:{
        getTerm : (state,action:PayloadAction<string>) => {
            return {...state, pokeName:action.payload}
        }
    }

})

export const {getTerm} = setSearchTerm.actions; 
export default setSearchTerm.reducer