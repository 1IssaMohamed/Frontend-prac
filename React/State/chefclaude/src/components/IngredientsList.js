import React from "react";
import { useState } from "react";

export default function IngredientList(props) {

  const ingrerdientList = props.ingredients.map((item) => <li>{item}</li>);
  return  (
    props.ingredients.length > 0 ? (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingrerdientList}
      </ul>
      {/* prints recipe given OPTION ingredient > 3 */}
      {props.ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.showRecipe}>Get a recipe</button>
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
