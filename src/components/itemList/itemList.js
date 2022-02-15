import { Item } from "../item/item";

export const ItemList = ({ products }) => {
    return (
    <div>
        <h1>📦 Listado de productos</h1>
        {
            products.map(product => {
                return <Item key={product.id} name={product.name} price={product.price} id={product.id}/>
            })
        }
    </div>)
}