import React from 'react';
import './App.css';
import Display from './Display/Display'
import Buttons from './Buttons/Buttons'
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)

  return (
    <div className="App">
      <Display currentNumber={ currentNumber }/>
      <Buttons/>
    </div>
  );
}

export default App;
