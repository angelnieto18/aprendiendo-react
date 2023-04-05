import './navbar.css';
import { useState } from 'react';

const Navbar = (props) => {
  let [name, setName] = useState('menu-outline');

  const toggleAttribute = () => {
    const checkBtn = document.querySelector('.checkBtn');
    checkBtn.checked === false ? (checkBtn.checked = true) : (checkBtn.checked = false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo-container">
          <ion-icon name="logo-hackernews"></ion-icon>
        </div>
        <input className="checkBtn" type="checkbox" />
        <div className="navbar__menuBtn-container">
          <ion-icon
            onClick={() => {
              name === 'menu-outline' ? setName('close-outline') : setName('menu-outline');
              toggleAttribute();
            }}
            name={name}
          ></ion-icon>
        </div>
        <div className="navbar__menu-container">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-listItem">{props.link_1}</li>
            <li className="navbar__menu-listItem">{props.link_2}</li>
            <li className="navbar__menu-listItem">{props.link_3}</li>
            <li className="navbar__menu-listItem">{props.link_4}</li>
          </ul>
        </div>
      </nav>
      <div className="header__container">
        <h1 className="header__container-title">¡Hola!</h1>
      </div>
    </header>
  );
};

export default Navbar;
