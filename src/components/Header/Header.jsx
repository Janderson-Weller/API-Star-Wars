import NavBar from "../NavBar/NavBar";
import './Header.css'

const Header = () => {
    return (
        <header className="container-header">
            <div className="container-logo">
                <img src="https://logospng.org/wp-content/uploads/star-wars.png " alt="log star wars"  />
            </div>
            <NavBar />
        </header>
    );
}

export default Header;