import React from "react"
import {useState} from "react";
export default function App() {
    let [value,setValue]= useState(0);
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    function Decrease(e) {
      // This should return -2 theoratically, btu it returns -1
      // This is becuase react is refrencign the value of the state at the time of the function call
      // setValue(value-1)
      // setValue(value-1)
      
      // What you would need to do inorder to fix this is make the changes in a function call!
      // the prevValue that is begin sent is the value of the state at the time of the function call
      setValue(function(prevValue) {
        return prevValue - 1 }
      )
      // short form
      setValue(prevValue => prevValue-1)
      
    }
    function Increase(e) {
      // Thsi returns the OLD value of the state ebcause ++ adds 1 AFTER the value is returned
      // setValue(value++)
      // correct way to do it is to use the previous value
      // setValue(value+1)

      setValue(prevValue => prevValue+1)


    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={Decrease} aria-label="Decrease count">–</button>
                <h2 className="count">{value}</h2>
                <button className="plus" onClick={Increase} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
