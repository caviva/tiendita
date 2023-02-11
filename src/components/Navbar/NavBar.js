import './navbar.css'
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="topnav">
            <a><Logo /></a>
            <a>Frutas</a>
            <a>Verduras</a>
            <a>Carnes</a>
            <a>Lácteos</a>
            <a className="split"><CartWidget /></a>
        </div>
    )
};

export default NavBar;