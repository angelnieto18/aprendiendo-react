import "./navbar.css";

const Navbar = (props) => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__logo-container">
                    <ion-icon name="logo-hackernews"></ion-icon>
                </div>
                <div className="navbar__menuBtn-container">
                    <ion-icon name="menu-outline"></ion-icon>
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
