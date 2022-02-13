import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget'
import { NavLink } from "react-router-dom";
import React, {useContext} from "react";
import { CartContext } from "../cartContext/cartContext";


export const NavBar = () => {
    const {cantidadTotal} = useContext(CartContext)
    return (
        <nav className="menu">
            <ul>
                <NavLink to="/">
                <li><a href=''>Catálogo</a></li>
                </NavLink>
                <NavLink to="/">
                <li id='mk'><a href=''>mortalKompra</a></li>
                </NavLink>
                <li className="contador">{cantidadTotal}</li>
                <NavLink to={cantidadTotal === 0 ? "/" : "/Cart"}>
                <li id='icono'><CartWidget /></li>
                </NavLink>
            </ul>
        </nav>
    )
}