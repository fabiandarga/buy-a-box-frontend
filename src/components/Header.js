import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './general/NavbarLinks';
import './header.css';

function getActiveLinkId(pathname) {
  switch (pathname) {
    case '/':
      return 'preisentwicklung';
    case '/compare':
      return 'preisvergleich';
    default:
      return 'preisentwicklung';
  }
}

function Header() {
  const [activelink, setActivLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActivLink(getActiveLinkId(location.pathname));
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
          onClick={() => setActivLink('preisentwicklung')}
          isActive={activelink === 'preisentwicklung'}
          to="/"
        >
          Preisentwicklung
        </NavbarLink>

        <NavbarLink
          onClick={() => setActivLink('preisvergleich')}
          isActive={activelink === 'preisvergleich'}
          to="/compare"
        >
          Preisvergleich
        </NavbarLink>
      </div>
    </div>
  );
}

export default Header;
