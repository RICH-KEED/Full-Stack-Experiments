import { useState ,createContext,useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import Arnav from './components/bomb'


const UserContext = createContext()
function App() {
  const [count, setCount] = useState(0)
   
  let txt = useRef()
  let num = 0

  function increment(){
    txt.current.innerText = "You Really Think This Will Work ?"
    txt.current.style.backgroundColor="red"
  }

  return (
    <div>
      <h1 ref={txt}>Click To change This Heading</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
  
}

export default App

