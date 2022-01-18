import { useEffect, useState } from 'react'
import { ItemCount } from '../itemCount/itemCount'
import ItemList from '../itemList/itemList';
import { getData } from '../Services/getData'


export const ItemListContainer = ({ greeting= 'Próximamente...'  }) => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        getData
        .then((res) => setProducts(res))
        .catch((err) => alert("Error:", err));
    });

    return (
        <div>
            <p> {greeting} </p>
            <ItemList products={products}/>
            <ItemCount />
        </div>

    )
}