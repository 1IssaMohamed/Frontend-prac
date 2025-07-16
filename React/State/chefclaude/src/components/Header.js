import React from "react";
import chef from "../assets/Chef Claude Icon.png"
import "./Header.css"
function Header() {
  return (
    <header className="header">
        <img src={chef} alt="chef"></img>
        <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;