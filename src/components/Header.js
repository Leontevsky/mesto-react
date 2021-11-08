import React from 'react';
import headerLogo from '../images/Vector.svg';

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} className="header__logo" alt="Лого" />
    </div>
  );
}

export default Header;
