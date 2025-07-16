import { useState } from 'react'
import japan1 from './assets/japan1.png';
import japan2 from './assets/japan2.png';
import japan3 from './assets/japan3.png';
import Path from './assets/Path.png';
import './App.css'
import Header from './components/Header/Header'
import Entry from './components/Entry/Entry'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
    <Entry  viewImage={japan1} location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" />
    <Entry  viewImage={japan2} location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" />
    <Entry  viewImage={japan3 } location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" />
    
    </>
  )
}

export default App
