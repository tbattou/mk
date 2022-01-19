import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        const getProducts = async () => {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        };
        getProducts();
      }, []);
    
      return (
            <section className="products">
              <h1 className="titleSection">📦 Productos detallados</h1>
              {products ? (
                products.map((product) => <ItemDetail {...product} />)
              ) : (
                <p>Cargando productos...</p>
              )}
            </section>
      );
    }