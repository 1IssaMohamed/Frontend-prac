import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function signUp(formData) {
    const email = formData.get("email")
    const empStatus= formData.get("employmentStatus")
    console.log(empStatus)
    console.log(email)
  }
  // when you choose to do action instead of onSubmit, the form will automatically handel the preventDefault for you
  // AND it will also extract the formData for you and pass it as an argument to your function
  // so you dont need to do any of that manually
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
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
      </form>
    </section>
  )
}
export default App;