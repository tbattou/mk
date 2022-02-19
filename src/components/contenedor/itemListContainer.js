import { useEffect, useState } from 'react';
import { ItemList } from '../itemList/itemList';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../firebase/firebase';




export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'productos'))
            const products = querySnapshot.docs.map((doc) => {
                const id = doc.id
                return{
                    id : id,
                    ...doc.data(),
                }
            })
            setProducts(products)
        }
       getProducts()
    }, [] )

    return (
        <div>
            <ItemList products={products}/>
        </div>

    )
}