import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLinks.css';

function NavbarLinks(props) {
  const { children, onClick, to, isActive } = props;

  return (
    <Link onClick={onClick} className={isActive ? 'active' : 'route-style'} to={to}>
      <span className="navbarRoutes">{children}</span>
    </Link>
  );
}

export default NavbarLinks;
