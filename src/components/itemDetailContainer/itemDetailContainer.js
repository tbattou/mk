import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";
import { doc, getDocs} from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    console.log(itemId)

    useEffect (() => {
      const getProducts = async (itemId) => {
          const productId = await getDocs(doc(db, 'productos', itemId))
       
          setItem(productId)
      }
     getProducts()
  }, [] )
    
      return (
            <section className="products">
              <h1 className="titleSection">📦 Productos detallados</h1>
              <ItemDetail item={item}/>
            </section>
      );
    }