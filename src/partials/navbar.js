import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand">RML News</Link>
            <div className="navbar-nav">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/movie" className="nav-link">Movie</Link>
              <div className="nav-dropdown">
                <button onClick={toggleDropdown} className="nav-link dropdown-toggle">
                  Cartoon
                </button>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                    <Link to="/pokemon" className="dropdown-item">Pokemon</Link>
                    {/* Tambahkan item dropdown lain di sini */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
  };
  
  export default Navbar;