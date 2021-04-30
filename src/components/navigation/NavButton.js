import React from 'react';

const NavButton = ({ isOpen, showNav }) => {
  return (
    <div className='nav__hmbrg'>
      <div className={`nav__btn ${isOpen ? 'open' : 'closed'}`}>
        <button onClick={showNav} className='nav__hmbrg--animation' />
      </div>
    </div>
  );
};

export default NavButton;
