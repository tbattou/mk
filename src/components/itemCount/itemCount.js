import React, {useState, useContext} from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";

export const ItemCount = ({ stock, initial, title, image, price }) => {
    const {addItem} = useContext(CartContext)
    const [count, setCount] = useState(initial);
    const onDecrease = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
          setCount(newValue);
        }
      };
      const onIncrease = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
          setCount(newValue);
        }
      };
    
    
    return (
    <div>
      <h1>Contador carrito</h1>
      
      <button onClick={() => onDecrease()}> - </button>
      <h3> {count} </h3>
      <button onClick={() => onIncrease()}> + </button>
      <Link to={"/cart"}>
      <button onClick={() => addItem({count, title, image, price})} >
        Agregar al Carrito
      </button>
      </Link>
    </div>
    )
}