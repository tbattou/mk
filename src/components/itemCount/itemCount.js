import React, {useState} from "react";
import "./itemCount.css";

export const ItemCount = () => {
    const [countClick, setCountClick] = useState(1)
    const addItem = () => {
        setCountClick(countClick + 1)
       }
    const subtractItem = () => {
        setCountClick(countClick - 1) }
    
    return (
    <div>
      <h1>Contador carrito</h1>
      
      <button onClick={() => subtractItem()}> - </button>
      <button onClick={() => addItem()}> + </button>
      
      <h1> {countClick} </h1>

    </div>
    )
}