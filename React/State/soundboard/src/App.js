import pads from "./pads";
import { useState } from "react";
import Pad from "./Pad";
export default function App() {
  
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from pads.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS is already written for you)
   *    (Don't worry about using the "on" or "color"
   *    properties yet)
   */
  let [thePads, setThePads] = useState(pads);
let buttonPads=<Pad x={thePads} setThePads={setThePads}/>
  return (
    <main>
      <div className="pad-container">
        {buttonPads}
      </div>
    </main>
  );
}
