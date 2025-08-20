import React from 'react'
const Main = () => {
const ingredients=["apple","banana","orange","grape","kiwi","mango","peach","pear","pineapple","strawberry"];
const ingrerdientList=ingredients.map((item) => (
          <li >{item}</li>
        ))

  function printer(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(event.target); // Get form data
    const newIng=formData.get("ingredient");
    ingredients.push(newIng);

    console.log({newIng},{ingredients});
    
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
