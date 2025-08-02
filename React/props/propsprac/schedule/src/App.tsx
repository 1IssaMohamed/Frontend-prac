
import './App.css'
import Header from './components/Header/Header'
import Entry from './components/Entry/Entry'
import data from "./data/data"
interface EntryInfo {
  entry:{
  id: number;
  img: {
    src: string;
    alt: string;
  };
  country: string;
  title: string;
  googleMapsLink: string;
  dates: string;
  text: string;}
}


function App() {
  const sortedData=data.map((info: EntryInfo)=>
    <Entry 
    entry={info.entry}
    // id={info.id}
    // viewImage={info.img.src} 
    // location={info.country} 
    // attraction={info.title} 
    // mapsLink={info.googleMapsLink} 
    // date={info.dates} 
    // bio={info.text} 
    // alt={info.img.alt}
     /> );
  return (
    <>
    <Header/>
    {sortedData}
    </>
  )
}

export default App
