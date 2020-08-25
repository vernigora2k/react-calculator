import React from 'react';
import './App.css';
import Display from './Display/Display'
import Buttons from './Buttons/Buttons'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState(0)

  function checkBtnPressed(buttonName) {
    if(buttonName === 'c') {
      setResult(0)
      return
    }

    if(result === 0) {
      setResult(buttonName)
      return
    }

    if(buttonName === '%') {
      console.log(result)
      return
    }

    if(buttonName === '=') {
      setResult(calculate(result))
      return
    }

    setResult(result + buttonName)
  }

  function calculate(expression) {
    return eval(expression)
  }

  return (
    <div className="App">
      <Display result={result}/>
      <Buttons btnClick={checkBtnPressed}/>
    </div>
  );
}

export default App;
