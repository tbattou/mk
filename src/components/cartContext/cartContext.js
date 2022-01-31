import { createContext, useState } from 'react'


export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const addItem = () => {
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
      };


    return <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
}
