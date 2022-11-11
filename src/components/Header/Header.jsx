import { Link } from "react-router-dom";
import NavBar   from "../NavBar/NavBar";
import './Header.css'


const Header = () => {
    return (
        <header className="container-header">
            <div className="container-logo">
                <Link to='/'>
                    <img src="https://logospng.org/wp-content/uploads/star-wars.png " alt="log star wars"  />
                </Link>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;