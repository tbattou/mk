import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget'

export const NavBar = () => {
    return (
        <nav className="menu">
            <ul>
                <li><a href=''>Remeras</a></li>
                <li><a href=''>Buzos</a></li>
                <li><a href=''>Tazas</a></li>
                <li id='mk'><a href=''>mortalKompra</a></li>
                <li id='icono'><CartWidget /></li>
            </ul>
        </nav>
    )
}