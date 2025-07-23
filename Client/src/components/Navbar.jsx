import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // optional icons
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/log', label: 'Log Activity' },
    { path: '/progress', label: 'Progress' },
  ];

  return (
    <nav className="bg-[#40f069] text-white px-6 py-4 flex items-center justify-between font-sans">
      {/* Logo */}
      <h2 className="flex items-center text-[1.8rem] font-bold tracking-tight">
        <img src="LetterH.png" alt="Logo" className="w-8 h-8" />
        <span style={{ fontFamily: 'Monospace', paddingTop: '0.5rem' }}>ealth meter</span>
      </h2>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 list-none">
        {navLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-white text-base pb-1 transition duration-200 ${
                location.pathname === link.path
                  ? 'border-b-2 border-white'
                  : 'hover:border-b-2 hover:border-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-[72px] left-0 w-full bg-[#40f069] flex flex-col gap-4 items-center py-4 md:hidden shadow-md z-50">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-white text-base pb-1 transition duration-200 ${
                  location.pathname === link.path
                    ? 'border-b-2 border-white'
                    : 'hover:border-b-2 hover:border-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
