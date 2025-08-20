import React from "react"
import {useState} from "react"
export default function App() {
    
    let test=useState("testing");
    console.log(test);
    // The console will show an array with 2 values
    // The first value is the current state
    // The second value is a function that allows us to update the state
    // so technically if we wanted to access the current state we would do test[0]
    // and if we wanted to update the state we would do test[1]("new value")
    // But this is not the way we use state in React
    // Instead we use array destructuring to assign the values to variables

    // Current state = butVal
    // Initial state = "Yes"
    // Function to update state = setButVal
    let [butVal,setButVal]=useState("Yes")
    // or you could even say sum like
    // let [currentState,setCurrentState]=useState("Bob")

    function change(){
      butVal+="!"
      setButVal(butVal)
    
    }


    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={change} className="value">{butVal}</button>
        </main>
    )
}
