import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-2 bg-[#a7f3d0]'>
      <ul className= 'flex'>
        <li>
          <NavLink exact to="/" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>


    </nav>
  );
}

export default Navbar;
