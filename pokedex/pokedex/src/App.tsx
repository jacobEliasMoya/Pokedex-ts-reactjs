import React from 'react';
import TopPokedex from './layout/TopPokedex';
import PokedexInnerContainer from './layout/PokedexInnerContainer';

const appStyles = {
  backgroundColor:'#A40041',
  minHeight:'100vh',
  minWidth:'100vw',
  borderLeft:'2vw solid #FF0066',
  borderRight:'2vw solid #FF0066',
  borderBottom:'2vw solid #FF0066',
}

function App() {
  const fetchPokemon = async() =>{
    await fetch('https://pokeapi.co/api/v2/pokemon/golem').then(result=>result.json()).then(data=>{
      console.log(data)
    })
  }
  return (
    <div onLoad={fetchPokemon} style={appStyles} className="App">
      <TopPokedex/>
      <PokedexInnerContainer/>
    </div>
  );
}

export default App;
