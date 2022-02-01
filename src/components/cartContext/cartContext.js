import { clear } from '@testing-library/user-event/dist/clear';
import { createContext, useState } from 'react'


export const CartContext = createContext([])


export const CartProvider = ({ children }) => {

    const [item, setItem] = useState([])
    const addItem = (count, title, image, price) => {
        setItem (count, title, price, image)
        console.log (item)
      };
    
    const clearItems = () => {

    };

    const removeItem = () => {

    };

    const checkoutItems = () => {
      alert("Gracias por la compra")
      clearItems()
    };


    return <CartContext.Provider value={{ addItem, item, removeItem, clearItems, checkoutItems}}>{children}</CartContext.Provider>
}
