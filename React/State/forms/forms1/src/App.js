import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function handleSubmit(event) {
    event.preventDefault();
    // inorder to get the data from your form you need to use FormData
    // first tho, you need to extract the data from the event
    let data = event.currentTarget; 
    // then you can create a new FormData object
    let formData= new FormData(data);
    // then you can extract the data from the formData object
    let actualData = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(actualData);
    // realistically here you would send all this to some backend related stuff
    data.reset();
    
  }
  
  return (
    <section>
      <h1>Signup form</h1> 
      {/* by default form submissions happen has GET requests, so you have to speicfy that youre workign on a post request */}
      <form onSubmit={handleSubmit} method="post">
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
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);