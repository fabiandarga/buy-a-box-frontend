import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLinks.css';

function NavbarLink(props) {
  const { children, onClick, to, isActive } = props;

  return (
    <Link onClick={onClick} className={`navbarLink ${isActive ? 'active' : ''}`} to={to}>
      <span>{children}</span>
    </Link>
  );
}

export default NavbarLink;
