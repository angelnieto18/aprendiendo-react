import './navbar.css';
import { createContext, useContext, useRef, useState } from 'react';

const headerContext = createContext(null);

const Header = () => {
  const listLinks = { link_1: 'Home', link_2: 'Services', link_3: 'About', link_4: 'FAQ' };
  const headerContainer = useRef(null);

  return (
    <headerContext.Provider value={{ listLinks, headerContainer }}>
      <header className="header">
        <Navbar />
        <div className="header__container" ref={headerContainer}>
          <h1 className="header__container-title">¡Hola!</h1>
        </div>
      </header>
    </headerContext.Provider>
  );
};

const Navbar = () => {
  let [name, setName] = useState('menu-outline');

  const { listLinks, headerContainer } = useContext(headerContext);

  const checkBtn = useRef(null);

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
  };

  return (
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
          <li className="navbar__menu-listItem">{listLinks.link_1}</li>
          <li className="navbar__menu-listItem">{listLinks.link_2}</li>
          <li className="navbar__menu-listItem">{listLinks.link_3}</li>
          <li className="navbar__menu-listItem">{listLinks.link_4}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
