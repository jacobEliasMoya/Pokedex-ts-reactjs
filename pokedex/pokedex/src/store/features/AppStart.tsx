import { createSlice } from "@reduxjs/toolkit";

const appOnReducer = createSlice({
    name : 'appInitialize',
    initialState : {
        appOn : false
    },
    reducers:{
        beginApp : (state) => {
            state.appOn = !state.appOn
        }
    }

})

export const {beginApp} = appOnReducer.actions; 
export default appOnReducer.reducer