import React, {useState, useContext} from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";

export const ItemCount = ({item, initial,}) => {

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
        if (newValue <= item.stock) {
          setCount(newValue);
        }
      };
    
    
    return (
    <div className="count">
      <button onClick={() => onDecrease()}> - </button>
      <h3> {count} </h3>
      <button onClick={() => onIncrease()}> + </button>
      <Link to={"/cart"}>
      <button onClick={() => addItem({item, count, })} >
        Agregar al Carrito
      </button>
      </Link>
    </div>
    )
}