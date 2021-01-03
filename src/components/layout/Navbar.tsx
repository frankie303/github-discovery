import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../users/Search';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <img src='/images/bouncercat.png' alt='' />
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
