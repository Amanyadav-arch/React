import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-green-400 p-4 text-black rounded-xl">tailwind test</h1>
    <Card />
    <Card username="aman" btnText='click me'/>
   </>
  )
}

export default App
