import React from 'react';
import TopPokedex from './layout/TopPokedex';

const appStyles = {
  backgroundColor:'#A40041',
  minHeight:'100vh',
  minWidth:'100vw',
  borderLeft:'2vw solid #FF0066',
  borderRight:'2vw solid #FF0066',
  borderBottom:'2vw solid #FF0066'
}

function App() {
  return (
    <div style={appStyles} className="App">
      <TopPokedex/>
    </div>
  );
}

export default App;
