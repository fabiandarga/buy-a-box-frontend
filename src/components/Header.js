import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="websiteName">
        <Link className="link-style" to="/">
          <span className="websiteName">Buy a Box</span>
        </Link>
        <span className="websiteTitle">| MTG Display Preisanalyse</span>
      </h1>
    </div>
  );
}

export default Header;
