
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
    <section>
        <h1>test</h1>
        <img src="D:\Code\frontend\React\blarco.jpg" width="40px"/>
    </section>
)
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
// root.render(
//     <section>
//         <img src="D:\Code\frontend\React\blarco.jpg" width="40px" />
//     </section>
// );
