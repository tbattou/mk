import React, {useContext} from "react";
import { CartContext } from "../cartContext/cartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const {items, removeItem, clearItems, checkoutItems, cantidadTotal, precioTotal} = useContext(CartContext)
    console.log(items)


    return (
        <div>
            {
            items.map(product => {
                return  (
                <div>
                    <h2 className="title">{product.title}</h2>
                    <img className="image" src={product.image} alt="product image" />
                    <span className="data">
                    <p className="price">${product.price}</p>
                    <p className="price">{product.count}</p>
                    </span>
    
                    <button onClick={() => removeItem({product, })}>Borrar Item</button>
                </div>)
            })}
            <p className="price">{cantidadTotal}</p>
            <p className="price">${precioTotal}</p>
            <button onClick={clearItems}>Vaciar Carrito</button>
            <Link to="/">
            <button onClick={checkoutItems}>Finalizar Compra</button>
            </Link>
            <Link to="/">
            <button>Seguir comprando</button>
            </Link>
            
        </div>
    );
}