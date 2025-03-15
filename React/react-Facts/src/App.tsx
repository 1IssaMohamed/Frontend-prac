import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import blarco from './assets/blarco.jpg'
import './App.css'
import Header from  './Header.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <h1>Fun facts abotu React</h1>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>      
    <li>Has well over 100k stars on GitHub</li>      
    <li>Is maintaineid by Meta</li>      
    <li>Powers thousands of enterprise apps, including mobile apps</li> 
    </div>
  )
}

export default App
