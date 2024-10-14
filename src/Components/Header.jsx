import React from 'react';
import '../Components/header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="left-corner">
      <h1 className="visa-global">Visa Global</h1>
      </div>
      <div className="right-corner">
        <p className="on-time-granted">On Time <br/>Granted</p>
        <p className="country-code">LK</p>
        <img src="user-icon-path.png" alt="User Icon" className="user-icon" />
      </div>
      
    </div>
  );
}

export default Header;
