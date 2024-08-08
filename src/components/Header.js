import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white border-b shadow-md z-50'>
      <nav className='container flex justify-between items-center px-8 py-5 mx-auto'>
        <a href='/' alt='company-logo'>
          <img src={logo} alt='Nimet-Graphics' className='h-6 w-9 ml-12 mt-1' />
        </a>
        
        <ul className='flex space-x-6 font-bold font-roboto'>
          <li>
            <a exact href='/' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Home
            </a>
          </li>
          <li>
            <a exact href='/about' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              About
            </a>
          </li>
          <li>
            <a exact href='/portfolio' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Portfolio
            </a>
          </li>
          <li>
            <a exact href='/services' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Services
            </a>
          </li>
          {/* <li>
            <NavLink to='/blog' className='hover:text-primary transition-colors duration-500' activeClassName='text-primary'>
              Blog
            </NavLink>
          </li> */}
          <li>
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
