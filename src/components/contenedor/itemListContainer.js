import { useEffect, useState } from 'react'
import { ItemCount } from '../itemCount/itemCount'
import { ItemList } from '../itemList/itemList';
import { getData } from '../Services/getData'


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        getData.then((res) => setProducts(res));
    });

    return (
        <div>
            <ItemList products={products}/>
        </div>

    )
}