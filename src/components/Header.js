import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './general/NavbarLinks';
import './header.css';

function getActiveLinkId(pathname) {
  switch (pathname) {
    case '/history':
      return 'preisentwicklung';
    case '/':
    default:
      return 'preisvergleich';
  }
}

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActiveLink(getActiveLinkId(location.pathname));
  }, [location]);
  return (
    <div className="header">
      <div className="logo">
        <h1 className="websiteName">
          <Link className="link-style" to="/">
            <span className="websiteName">Buy a Box</span>
          </Link>
          <span className="websiteTitle">| MTG Booster Display Preisanalyse</span>
        </h1>
      </div>
      <div className="navContainer">
        <NavbarLink
          onClick={() => setActiveLink('preisentwicklung')}
          isActive={activeLink === 'preisentwicklung'}
          to="/history"
        >
          Preisentwicklung
        </NavbarLink>

        <NavbarLink
          onClick={() => setActiveLink('preisvergleich')}
          isActive={activeLink === 'preisvergleich'}
          to="/"
        >
          Preisvergleich
        </NavbarLink>
      </div>
    </div>
  );
}

export default Header;
