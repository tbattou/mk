import Item from "../item/item";

const ItemList = ({ products }) => {
    return (
    <div>
        {
            products.map(product => {
                return <Item key={product.id} title={product.title} price={product.price}/>
            })
        }
    </div>)
}
export default ItemList;