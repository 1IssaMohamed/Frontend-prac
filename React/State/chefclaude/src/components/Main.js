import React from 'react'
import { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList'
    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

const Main = () => {
  // currenlty theres an array of itmes that maps the thigns in my list
  // what I want to do is make that array a use state one so that when I end up chanign the array the whole page refreshes!
  const [ingredients, setIngredients] = useState([])
  const [isShown, setShown]= useState(false)



  function printer(formData) {
    const newIng = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIng]);
  }

  function showRecipe(){
    setShown(true)
  }

  return (
    <main>
      {/* prints ingredients & input box */}
      <form class="add-ingredient-form" action={printer}>
        <input
          type="text"
          placeholder="Type your message..."
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit" >Add ingredient</button>
      </form>
      {/* prints ingredients */}
      { <IngredientsList ingredients={ingredients} showRecipe={showRecipe}/> }
        {/* once recipe button is clicked then shows it  */}
        {isShown && <ClaudeRecipe/>}
    </main>
  )
}

export default Main
