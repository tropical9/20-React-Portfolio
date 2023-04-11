import React from 'react';
import Navigation from './Navbar';

function Header(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-6">
        <h1 className="text-3xl font-bold tracking-wider">Welcome to my Portfolio</h1>
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          className="mt-4"
        />
      </div>
    </header>
  );
}

export default Header;
