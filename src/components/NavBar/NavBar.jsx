import ListItems from "../ListItems/ListItems";
import './NavBar.css';

const menuItems = ['Home', 'Films', 'People', 'Planets', 'Vehicles', 'Species'];

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="ul-nav-bar">
                <ListItems arrayList = {menuItems} />
            </ul>
        </nav>
    );
}

export default NavBar;