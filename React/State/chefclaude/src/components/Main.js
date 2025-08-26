import React, { useState } from 'react'
import {state} from 'react'

const Main = () => {
  // currenlty theres an array of itmes that maps the thigns in my list
  // what I want to do is make that array a use state one so that when I end up chanign the array the whole page refreshes!
  const [ingredients,setIngredients]= useState(["apple"])

  const ingrerdientList=ingredients.map((item) => (
          <li >{item}</li>
        ))

  function printer(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(event.target); // Get form data
    const newIng=formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIng]);
  }

return (
    <main>
      <form class ="add-ingredient-form" onSubmit={printer}>
        <input  
          type="text" 
          placeholder="Type your message..."  
          aria-label="Add ingredient"
          name="ingredient"
          />
        <button type="submit" >Add ingredient</button>
      </form>
      <ul>
        {ingrerdientList}
      </ul>
    </main>
  )
}

export default Main
