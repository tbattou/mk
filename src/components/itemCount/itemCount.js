import React, {useState, useContext} from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";

export const ItemCount = ({ stock, initial }) => {
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
    
      const onAdd = () => {
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
      };
    
    
    return (
    <div>
      <h1>Contador carrito</h1>
      
      <button onClick={() => onDecrease()}> - </button>
      <h3> {count} </h3>
      <button onClick={() => onIncrease()}> + </button>
      <Link to={"/cart"}>
      <button onClick={() => addItem()} >
        Agregar al Carrito
      </button>
      </Link>
    </div>
    )
}