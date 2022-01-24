import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="menu">
            <ul>
                <NavLink to="/">
                <li><a href=''>Catálogo</a></li>
                </NavLink>
                <NavLink to="/">
                <li id='mk'><a href=''>mortalKompra</a></li>
                </NavLink>
                <li id='icono'><CartWidget /></li>
            </ul>
        </nav>
    )
}