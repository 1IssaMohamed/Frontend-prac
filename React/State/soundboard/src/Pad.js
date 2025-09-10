import React from "react";
import { useState } from "react";

export default function Pad(props) {
// want to create own useState usage over here for effeciency purposes, so now when
// we see an onlclikc I ont have to render maina nd this, instead only thi
let [onOrOff,setOnOrOff]= useState(props.x)

function toggle(id){
    setOnOrOff(prev=>prev.map( p => p.id===id? {...p, on:!p.on} : p));
}
  let y =onOrOff.map((p) => (
    // {} to go into object
    // {} to go into styleing itself
    // (p.on?"#222222":"#CCCCCC")
    
    <button key={p.id} style={{ backgroundColor: p.color }} className= {p.on?"on":"off"} onClick={()=>toggle(p.id)}>
      
    </button>
  ));
  return y
}
