import { Item } from "../item/item";
import "../itemList/itemList.css";

export const ItemList = ({ products }) => {
    return (
    <div >
        <h1>📦 Listado de productos</h1>
        <section className="itemlist">
        {
            products.map(product => {
                return <Item key={product.id} name={product.name} price={product.price} id={product.id} imageUrl={product.imageUrl}/>
            })
        }
        </section>
    </div>)
}