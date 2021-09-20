import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface PokeAbilities {
    ability : {
        name : string,
        url: string
    },
    is_hidden:boolean,
    slot:number
}

interface PokeForms {
    name: string,
    url : string
}

interface PokeGameIndicies {
    game_index : number,
    version : {
        name: string,
        url : string
    }
}
interface VersionDeets {
    rarity:number,
    version : {
        name : string,
        url : string
    }
}

interface PokeHeldItems {
    item:{
        name:string,
        url: string
    },
    versionDetails : Array<VersionDeets>
}

interface VersionGroupDeets {
    level_learned_at : number,
    move_learn_method: {
        name:string,
        url:string
    },
    version_group : {
        name:string,
        url:string
    }
}

interface PokeMoves {
    move: {
        name:string,
        url : string
    },
    version_group_details : Array<VersionGroupDeets>
}

interface SpeciesInt {
    name:string,
    url: string
}


interface PokeSprites {
    back_default: any,
    back_female: any,
    back_shiny: any,  
    back_shiny_female: any,
    front_default: any
    front_female: any
    front_shiny: any
}

interface StatsInt {
    base_stat:number,
    effor:number,
    stat:{
        name:string,
        url:string
    }
}

interface TypesInt{
    slot : number,
    type : {
        name:string,
        url : string
    }
}

export interface PokemonStats {
    abilities : Array<PokeAbilities>,
    base_experience: number,
    forms: Array<PokeForms>,
    game_indices: Array<PokeGameIndicies>,
    height: number,
    held_items: Array<PokeHeldItems>,
    id: number,
    is_default: true,
    location_area_encounters: string,
    moves: Array<PokeMoves>,
    name: string,
    order: number,
    past_types: [],
    species: SpeciesInt,
    sprites : PokeSprites,
    stats: Array<StatsInt>,
    types: Array<TypesInt>,
    weight: number
}

const initialState:Array<PokemonStats> = [];

const specificPokeStats = createSlice({
    name : 'setStats',
    initialState,
    reducers:{
        setPokeStats : (state,action:PayloadAction<PokemonStats>) => {
           state.push(action.payload)
           console.log(current(state))
        }
    }
})

export const {setPokeStats} = specificPokeStats.actions; 
export default specificPokeStats.reducer