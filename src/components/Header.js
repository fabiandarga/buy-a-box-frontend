import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Link className="link-style" to="/">
        <h1 className="websiteName">Buy a Box</h1>
      </Link>
      <p className="websiteTitle">| MTG Display Preisanalyse</p>
    </div>
  );
}

export default Header;
