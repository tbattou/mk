import { createContext, useState } from 'react'


export const CartContext = createContext([])


export const CartProvider = ({ children }) => {

    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [items, setItems] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)

    const isInCart = (item) => {
      console.log(item)
      return items.some(items => items.id === item);
    } 

    const addItem = ({item, count}) => {

      if (isInCart(item.id) ){
        let copiaItems = [...items];
        let match = copiaItems.find(producto => producto.id === item.id);
        let idx = copiaItems.indexOf(match);
        copiaItems[idx].count = copiaItems[idx].count + count;
        setItems(copiaItems)
      } else {
        const copiaProducto = {...item};
        console.log(copiaProducto)
        copiaProducto.count = count;
        setItems([...items, copiaProducto]);
        console.log(items)
      }

        const precioPorCantidad = item.price * count;
        setPrecioTotal(precioTotal + precioPorCantidad)
        
        setCantidadTotal(cantidadTotal + count)
     
      console.log(items)
    }
      
    
    const clearItems = () => {
      setItems([]);
      setCantidadTotal(0);
      setPrecioTotal(0);
    };

    const removeItem = ({product}) => {
      const copiaProducto = items.filter(element => element.id !== product.id);
      setItems(copiaProducto);
      setPrecioTotal(precioTotal - product.price);
      setCantidadTotal(cantidadTotal - product.count);
    };

    const checkoutItems = () => {
      alert("Gracias por la compra")
      clearItems()
    };


    return <CartContext.Provider value={{ addItem, items, removeItem, clearItems, checkoutItems, cantidadTotal, precioTotal}}>{children}</CartContext.Provider>
}
