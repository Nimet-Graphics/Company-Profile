import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-white border-b shadow-md z-50'>
      <nav className=' container flex justify-between items-center px-8 py-5 mx-auto'>
        <a href='/' alt='company-logo'>
          <img src={logo} alt='Nimet-Graphics' className='h-6 w-9 ml-12 mt-1' />
        </a>

        {/* Hamburger Icon for mobile view */}
        <div className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <FaTimes className='text-2xl cursor-pointer' /> : <FaBars className='text-2xl cursor-pointer' />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 font-bold font-roboto absolute md:static bg-white top-full left-0 w-full md:w-auto md:bg-transparent transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:opacity-100 md:visible`}
        >
          <li className='md:my-0 my-4'>
            <a exact href='/' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Home
            </a>
          </li>
          <li className='md:my-0 my-4'>
            <a exact href='/about' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              About
            </a>
          </li>
          <li className='md:my-0 my-4'>
            <a exact href='/portfolio' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Portfolio
            </a>
          </li>
          <li className='md:my-0 my-4'>
            <a exact href='/services' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Services
            </a>
          </li>
          {/* <li className='md:my-0 my-4'>
            <NavLink to='/blog' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Blog
            </NavLink>
          </li> */}
          <li className='md:my-0 my-4'>
            <a exact href='/contact' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
