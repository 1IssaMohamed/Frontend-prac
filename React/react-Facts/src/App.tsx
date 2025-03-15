import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import blarcoImage from './assets/blarco.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>test</h1>
    <img src={blarcoImage} width="400px"/>
      
    </>
  )
}

export default App
