/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import "./App.css"
import "./components/Main"
import Header from "./components/Header"
export default function App() {
  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}
