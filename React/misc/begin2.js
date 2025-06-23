import { createElement } from "react"
import { createRoot } from "react-dom/client"
// Ensure the root element is a div or a suitable container
const root = createRoot(document.getElementById("root"))
// root.render(<h1>Hello, Everyone!</h1>);
// NOW I dont have the abilitty to use jsx sicne im not usign babel anymore!
// you an still use root.rende , but hav eto use nomral js instead of html

const element=createElement("h1", null, "Hello from createElement!")

root.render(
    element
)