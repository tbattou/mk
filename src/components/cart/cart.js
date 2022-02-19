import React, {useContext, useState} from "react";
import { CartContext } from "../cartContext/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const Cart = () => {
    const {items, removeItem, clearItems, cantidadTotal, precioTotal} = useContext(CartContext)
    console.log(items)
    const [order, setOrder] = useState ({
        email: '',
        phone: '',
        total: '',
        user: '',
    })

    const createOrder = async (order) => {
        order.total = precioTotal
        const createdOrder = await addDoc(collection(db, 'ordenes'), order)
        alert("Gracias por tu compra! " + order.user + ", el total a abonar es: $" + precioTotal + ". Una vez confirmado el pago estaremos enviando tus productos.")
      clearItems()
    }

    return (
        <div>
            {
            items.map(product => {
                return  (
                <div>
                    <h2 className="title">{product.name}</h2>
                    <img className="image" src={product.imageUrl} alt="product image" />
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
            <button>Seguir comprando</button>
            </Link>
            <section>
            <p>Antes de finalizar la compra completá el siguiente formulario</p>
            <label>
                Nombre
            <input type="text" value={order.user} onChange={(e) => setOrder({ ...order, user: e.target.value})}></input>   
            </label>
            <label>
                Telefono
            <input type="number" value={order.phone} onChange={(e) => setOrder({ ...order, phone: e.target.value})}></input>   
            </label>
            <label>
                Dirección de email
            <input type="email" value={order.email} onChange={(e) => setOrder({ ...order, email: e.target.value})}></input>   
            </label>
            <Link to="/">
            <button onClick={() => createOrder(order)}>Finalizar Compra</button>
            </Link>
            </section>
            
        </div>
    );
}