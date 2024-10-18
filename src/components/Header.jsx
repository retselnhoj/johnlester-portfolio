// src/components/Header.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className='bg-[rgba(5, 12, 24, 1) 51%]
 text-white fixed top-0 left-0 w-full p-5 shadow-lg z-50'
    >
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>John Lester Bodonal</h1>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-8 text-lg'>
          <a href='#home' className='hover:text-blue-400'>
            Home
          </a>
          <a href='#about' className='hover:text-blue-400'>
            About Me
          </a>
          <a href='#projects' className='hover:text-blue-400'>
            Projects
          </a>
          <a href='#experience' className='hover:text-blue-400'>
            Experiences
          </a>
          <a href='#contact' className='hover:text-blue-400'>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className='flex flex-col items-center space-y-5 text-lg py-5'>
          <a href='#home' onClick={toggleMenu} className='hover:text-blue-400'>
            Home
          </a>
          <a href='#about' onClick={toggleMenu} className='hover:text-blue-400'>
            About Me
          </a>
          <a
            href='#projects'
            onClick={toggleMenu}
            className='hover:text-blue-400'
          >
            Projects
          </a>
          <a
            href='#experience'
            onClick={toggleMenu}
            className='hover:text-blue-400'
          >
            Experiences
          </a>
          <a
            href='#contact'
            onClick={toggleMenu}
            className='hover:text-blue-400'
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
