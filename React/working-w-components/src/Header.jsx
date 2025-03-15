import { createRoot } from "react-dom/client"
import blarcoImage from './blarco.jpg'
import './Header.css'
const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <header className="header">
            <img src={blarcoImage} className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;