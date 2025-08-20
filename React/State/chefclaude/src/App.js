/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import "./App.css"
import Header from "./components/Header"
import Main from './components/Main'; // Adjust the path if Main.js is in a different folder

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}
