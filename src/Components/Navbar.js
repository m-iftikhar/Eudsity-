import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='logo' className='logo' />
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to='home' smooth={true} duration={500} offset={0} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='program' smooth={true} duration={500} offset={-260} onClick={toggleMenu}>
            Program
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} offset={-150} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to='campus' smooth={true} duration={500} offset={-260} onClick={toggleMenu}>
            Campus
          </Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} duration={500} offset={-260} onClick={toggleMenu}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} offset={-260} onClick={toggleMenu}>
            <button className='btn'>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
