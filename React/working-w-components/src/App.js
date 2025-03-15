import React from "react";
import ReactDOM from 'react-dom/client';

import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById("root"))


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )

}
export default App;