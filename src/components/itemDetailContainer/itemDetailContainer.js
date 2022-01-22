import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { getData } from '../Services/getData'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    useEffect(() => {
          getData.then ((res) => {
          setItem(res.find((prod) => prod.id === 1))
        });
      }, []);
    
      return (
            <section className="products">
              <h1 className="titleSection">📦 Productos detallados</h1>
              <ItemDetail item={item} title={item.title} image={item.image} desc={item.desc} categoria={item.categoria} price={item.price} stock={item.stock}/>
            </section>
      );
    }