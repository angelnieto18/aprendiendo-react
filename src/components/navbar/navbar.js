import "./navbar.css";
import { useState } from "react";

const Navbar = (props) => {
    const menu = document.querySelector(".navbar__menu-list");

    let [name, setName] = useState("menu-outline");

    const handleClick = (e) => {
        if (e.target.name === "menu-outline") {
            setName("close-outline");
            menu.style.left = "0";
        } else {
            setName("menu-outline");
            menu.style.left = "100%";
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__logo-container">
                    <ion-icon name="logo-hackernews"></ion-icon>
                </div>
                <div className="navbar__menuBtn-container">
                    <ion-icon onClick={handleClick} name={name}></ion-icon>
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
        </header>
    );
};

export default Navbar;
