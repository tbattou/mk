import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({id, name, price, imageUrl}) => {
    return (
        <div className="product">
            <h2 className="title">{name}</h2>
            <img className="image" src={imageUrl} alt="product image" />
            <h2 className="price">$ {price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    );
}

