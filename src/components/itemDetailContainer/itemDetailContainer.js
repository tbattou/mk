import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { getData } from '../Services/getData'
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    useEffect(() => {
          getData.then ((res) => {
          setItem(res.find((prod) => prod.id === parseInt(itemId)))
        });
      }, []);
    
      return (
            <section className="products">
              <h1 className="titleSection">📦 Productos detallados</h1>
              <ItemDetail item={item}/>
            </section>
      );
    }