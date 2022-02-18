import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";
import { doc, getDoc, collection} from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    console.log(itemId)

    useEffect (() => {
      const prodcollection = collection(db, "productos")
      const refDoc = doc(prodcollection, itemId)
      getDoc(refDoc)
      .then((resultado) => {
          const id = resultado.id
          const data = resultado.data()
          const prod = { id:id, ...data}
          setItem(prod)
         })
  }, [] )
    
      return (
            <section className="products">
              <h1 className="titleSection">📦 Productos detallados</h1>
              <ItemDetail item={item}/>
            </section>
      );
    }