import React from 'react';
import TopPokedex from './layout/TopPokedex';

const appStyles = {
  backgroundColor:'#A40041',
  minHeight:'100vh',
  minWidth:'100vw',

}

function App() {
  return (
    <div style={appStyles} className="App">
      <TopPokedex/>
    </div>
  );
}

export default App;
