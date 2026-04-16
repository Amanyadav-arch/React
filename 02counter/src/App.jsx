import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
         //variable  method
  let [counter, setCounter] = useState(15)
  
 // let counter = 15;

  const addvalue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    }
  }

  const decvalue = () => {
    if(counter > 0){
    counter = counter - 1
    setCounter(counter)
  }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={decvalue}>Decrease value</button>
    </>
  )
}

export default App
