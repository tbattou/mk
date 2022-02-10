import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({id, title, price}) => {
    return (
        <div className="box grid">
            <h2>Nombre: {title}</h2>
            <h2>Precio: {price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    );
}

