import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function signUp(formData) {
    // const email = formData.get("email")
    // const empStatus= formData.get("employmentStatus")
    // const dietaryRestrictions= formData.getAll("dietaryRestrictions")
    // const favColour= formData.get("favColour");
    // console.log(empStatus)
    // console.log(email)
    // console.log(dietaryRestrictions)
    // console.log(favColour)
    
    //putting everythign into an object can be very effecient adn effetive but problem arrive when yoruue getting data that comes back as an array liek checkboxes!
    // so you should sitll manually get that data back
    let obj=Object.fromEntries(formData)
    let dietR= formData.getAll("dietaryRestrictions")
    console.log(obj)
    console.log(dietR)
    let allData= {...obj, dietaryRestrictions:dietR }
    console.log(allData)
    console.log(allData.dietaryRestrictions)

  }
  // when you choose to do action instead of onSubmit, the form will automatically handel the preventDefault for you
  // AND it will also extract the formData for you and pass it as an argument to your function
  // so you dont need to do any of that manually
  
  return (
    <section>
      <h1>Signup form</h1>
      {/* sends post with the data in the form to which ever fucntion the form is calling on, in this instanc eits obv signUp */}
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        {/* larger textbox thingy mabober */}
        <label htmlFor='description'>Description:</label>
        <textarea id='description' name='description'></textarea>

        <fieldset>      
          <legend>Employment Status:</legend>
          {/* inorder to ensure that you can only seldct one of the radios at one you ahve to giv ethem all name properties  */}
          <label>  
            <input type="radio" name="employmentStatus" defaultChecked value="bum"/>
            Bum 
          </label>
          <label>  
            <input type="radio" name="employmentStatus" value="part timer"/>
            you trying (part timer)
          </label>
          <label>  
            <input type="radio" name="employmentStatus" value="full timer" />
            try hard (full time)
          </label>
        </fieldset>

        <fieldset>      
          <legend>Dietary restrcitions:</legend>
          {/* inorder to ensure that you can only seldct one of the radios at one you ahve to giv ethem all name properties  */}
          <label>  
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="kosher"/>
             kosher
          </label>
          <label>  
            <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
            vegan
          </label>
          <label>  
            <input type="checkbox" name="dietaryRestrictions" value="glutenfree" />
            gluten free
          </label>
        </fieldset>
        <select id="favColour" name="favColour" defaultValue="" requir>
          <option value="" disabled>-- Choose a Colour --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <button> submit</button>
      </form>
    </section>
  )
}
export default App;