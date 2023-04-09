import React from 'react';
import Navigation from './Navbar';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <h1>My Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
