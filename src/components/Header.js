import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
     return (
      <>
    <header className="header">
      <img
        src={headerLogo}
        alt='Логотип в виде слов на латиннице, написано Место Россия.'
        className="header__logo"
      />
    </header>
    </>
    )
}
export default Header;