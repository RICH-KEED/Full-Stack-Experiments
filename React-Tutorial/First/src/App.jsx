import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import Arnav from './components/bomb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline p-20 text-center text-blue-500">Welcome to Game</h1>
      <Form classname="p-20 font-bold text-blue-500 border"/>
      {/* <Arnav /> */}
    </>
  )
}

export default App
