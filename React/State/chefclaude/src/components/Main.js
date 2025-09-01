import React from 'react'
import {useState} from 'react';

const Main = () => {
  // currenlty theres an array of itmes that maps the thigns in my list
  // what I want to do is make that array a use state one so that when I end up chanign the array the whole page refreshes!
  const [ingredients,setIngredients]= useState([])

  const ingrerdientList=ingredients.map((item) => (
          <li >{item}</li>
        ))

  function printer(formData) {
    const newIng=formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIng]);
  }

return (
    <main>
      <form class ="add-ingredient-form" action={printer}>
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
