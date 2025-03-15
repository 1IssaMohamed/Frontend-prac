import react from 'react';
import reactDOM from 'react-dom';
import reactLogo from './assets/react.svg';
import './Header.css';

// do the flex box for the header
const Header=()=>{
    return(
      <header className="header">
        <nav className="nav">
          <img src={reactLogo} className="reactIcon" alt="React Logo"/>
          <span className="facts">
            <p >ReactFacts</p>
          </span>
        </nav>
      </header>
    )
  }

export default Header;