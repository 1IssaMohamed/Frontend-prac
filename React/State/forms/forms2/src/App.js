import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function signUp(formData) {
    const email = formData.get("email")
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
        
      </form>
    </section>
  )
}
export default App;