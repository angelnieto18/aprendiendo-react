import './navbar.css';
import { useRef, useState } from 'react';

const Navbar = (props) => {
  let [name, setName] = useState('menu-outline');

  const checkBtn = useRef(null);
  const headerContainer = useRef(null);

  const toggleClassname = () => {
    name === 'menu-outline' ? setName('close-outline') : setName('menu-outline');
  };

  const toggleAttribute = () => {
    checkBtn.current.checked === false
      ? (checkBtn.current.checked = true)
      : (checkBtn.current.checked = false);
  };

  const toggleBackgroundColor = () => {
    checkBtn.current.checked === true
      ? headerContainer.current.classList.add('blurred')
      : headerContainer.current.classList.remove('blurred');

    console.log(headerContainer.current.classList);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo-container">
          <ion-icon name="logo-hackernews"></ion-icon>
        </div>
        <input className="checkBtn" type="checkbox" ref={checkBtn} />
        <div className="navbar__menuBtn-container">
          <ion-icon
            onClick={() => {
              toggleClassname();
              toggleAttribute();
              toggleBackgroundColor();
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
      <div className="header__container" ref={headerContainer}>
        <h1 className="header__container-title">¡Hola!</h1>
      </div>
    </header>
  );
};

export default Navbar;
