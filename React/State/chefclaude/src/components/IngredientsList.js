import React from "react";
import { useState } from "react";

export default function IngredientList({ingredients, showRecipe}) {

  const ingrerdientList = ingredients.map((item) => <li>{item}</li>);
  return  (
    ingredients.length > 0 ? (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingrerdientList}
      </ul>
      {/* prints recipe given OPTION ingredient > 3 */}
      {ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={showRecipe}>Get a recipe</button>
        </div>
      ) : (
        <></>
      )}
    </section>
  ) : (
    <></>
  )
    
)
}
