import { useState } from "react"

function App() {
  const [color, setColour] = useState("black")
  

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap just-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>RED</button>
            <button
             onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Green"}}>Green</button>
            <button
             onClick={() => setColour("tomato")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "tomato"}}>Tomato</button>
            <button
             onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}>Blue</button>
            <button
             onClick={() => setColour("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "violet"}}>Violet</button>
          </div>
        </div>
      </div>
      
  )
}

export default App
