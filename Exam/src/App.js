import React from 'react';
import './App.css';
import NavBar from './Componet/NavBar';
import"./Componet/CounTer"
import FooTer from './Componet/FooTer';
import CounTer from './Componet/CounTer';
import MaiN from './Componet/MaiN';
import InFo from './Componet/InFo';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <MaiN/>
      <FooTer/>
      <CounTer/>
      <InFo/>
    </div>
  );
}

export default App;
