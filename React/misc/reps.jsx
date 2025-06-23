/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */
root=ReactDOM.createRoot(document.getElementById("root"));
// intertstingly enough you cant acutlaly render to elements in 1 root, but if you have a div or any contianer, 
// you can render as many as youd like!
// they all have to be under that one root though 
root.render(<div><h1>yoyo</h1> <p>blil</p></div>

);