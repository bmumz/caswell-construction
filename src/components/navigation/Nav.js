import React, { useState } from 'react';
import MenuItem from './MenuItem';
import NavButton from './NavButton';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => setIsOpen(!isOpen);

  return (
    <div className='nav__container'>
      <NavButton isOpen={isOpen} showNav={showNav} />
      <span className={`nav__isOpen ${isOpen ? 'open' : 'closed'}`}>
        <div className='nav__overlay'></div>

        <MenuItem />
      </span>
    </div>
  );
};

export default Nav;
