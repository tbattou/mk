import { Item } from "../item/item";

export const ItemList = ({ products }) => {
    return (
    <div>
        <h1>📦 Listado de productos</h1>
        {
            products.map(product => {
                return <Item key={product.id} title={product.title} price={product.price}/>
            })
        }
    </div>)
}