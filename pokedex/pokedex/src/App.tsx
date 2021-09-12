import React, { useEffect } from 'react';
import TopPokedex from './layout/TopPokedex';
import PokedexInnerContainer from './layout/PokedexInnerContainer';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { is } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

const appStyles = {
  backgroundColor:'#A40041',
  minHeight:'100vh',
  minWidth:'100vw',
  borderLeft:'2vw solid #FF0066',
  borderRight:'2vw solid #FF0066',
  borderBottom:'2vw solid #FF0066',
}

function App() {
  
  const isAppOn = useAppSelector(state => state.appOnReducer.appOn)

  const fetchPokemon = async() =>{
    await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118').then(result=>result.json()).then(data=>{
      console.log(data)  
  })
  }

  useEffect(()=>{
    if(isAppOn){
      fetchPokemon()
    }
  },[isAppOn])

  return (
    <div style={appStyles} className="App">
      <TopPokedex/>
      <PokedexInnerContainer/>
    </div>
  );
}

export default App;
