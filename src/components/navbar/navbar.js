import "./navbar.css";
import { useState } from "react";

const Navbar = (props) => {
    let [name, setName] = useState("menu-outline");

    const handleClick = (e) => {
        if (e.target.name === "menu-outline") {
            setName("close-outline");
        } else {
            setName("menu-outline");
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
                    <li>{props.link_1}</li>
                    <li>{props.link_2}</li>
                    <li>{props.link_3}</li>
                    <li>{props.link_4}</li>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
