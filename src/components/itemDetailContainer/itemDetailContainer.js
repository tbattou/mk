import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { getData } from '../Services/getData'


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        getData.then((res) => setProducts(res));
    });

    return (
        <div>
            <ItemDetail products={products}/>
        </div>

    )
}