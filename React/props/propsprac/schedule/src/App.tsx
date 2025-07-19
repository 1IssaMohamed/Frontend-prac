import { useState } from 'react'

import Path from './assets/Path.png';
import './App.css'
import Header from './components/Header/Header'
import Entry from './components/Entry/Entry'
import data from "./data/data"
        // img: {
        //     src: "https://scrimba.com/links/travel-journal-japan-image-url",
        //     alt: "Mount Fuji"
        // },
        // title: "Mount Fuji",
        // country: "Japan",
        // googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
        // dates: "12 Jan, 2021 - 24 Jan, 2021",
        // text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
interface EntryInfo {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  country: string;
  title: string;
  googleMapsLink: string;
  dates: string;
  text: string;
}

const sortedData=data.map((info: EntryInfo)=>
                          <Entry 
                          id={info.id}
                          viewImage={info.img.src} 
                          location={info.country} 
                          attraction={info.title} 
                          mapsLink={info.googleMapsLink} 
                          date={info.dates} 
                          bio={info.text} 
                          alt={info.img.alt} /> );
function App() {
  return (
    <>
    <Header/>
    {sortedData}
    {/* <Entry  viewImage={japan1} location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" />
    <Entry  viewImage={japan2} location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" />
    <Entry  viewImage={japan3 } location="Japan" mapsLink="https://www.bob.com/" attraction="Mountain Zimbabwe" date="12 jan 2024 - 22 jan 2024" bio="hello bello" /> */}
    
    </>
  )
}

export default App
