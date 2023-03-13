const Navbar = (props) => {
    return (
        <header>
            <nav>
                <li>{props.link_1}</li>
                <li>{props.link_2}</li>
                <li>{props.link_3}</li>
                <li>{props.link_4}</li>
            </nav>
        </header>
    )
}

export default Navbar