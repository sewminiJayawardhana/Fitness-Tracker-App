import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo" > <img src="iconLogo.png" alt="" />ealth meter</h2>
      <ul className="navbar-links">
        <li>
          <Link className={location.pathname === '/home' ? 'active' : ''} to="/home">Home</Link>
        </li>
        <li>
          <Link className={location.pathname === '/log' ? 'active' : ''} to="/log">Log Activity</Link>
        </li>
        <li>
          <Link className={location.pathname === '/progress' ? 'active' : ''} to="/progress">Progress</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
