import React from 'react';
import './App.css';
import Display from './Display/Display'
import Buttons from './Buttons/Buttons'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState(1)

  function btnPressed(buttonName) {
    if(result === 0) {
      setResult(buttonName)
      console.log(buttonName)
    }

    if(buttonName === '=') {
      console.log(calculate(result))
      setResult(calculate(result))
    }

    setResult(result + buttonName)
  }

  function calculate(expression) {
    return eval(expression)
  }

  return (
    <div className="App">
      <Display result={result}/>
      <Buttons btnClick={btnPressed}/>
    </div>
  );
}

export default App;
