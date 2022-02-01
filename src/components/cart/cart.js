import React, {useContext} from "react";
import { CartContext } from "../cartContext/cartContext";


export const Cart = () => {
    const {item, removeItem, clearItems, checkoutItems} = useContext(CartContext)


    return (
        <div>
            <h2 className="title">{item.title}</h2>
            <img className="image" src={item.image} alt="product image" />
            <span className="data">
                <p className="price">${item.price}</p>
            </span>

            <button onClick={removeItem}>Borrar Item</button>
            <button onClick={clearItems}>Vaciar Carrito</button>
            <button onClick={checkoutItems}>Finalizar Compra</button>
            
        </div>
    );
}