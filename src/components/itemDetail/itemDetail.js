import '../itemDetail/itemDetail.css';
import { ItemCount } from '../itemCount/itemCount';

export const ItemDetail = ({item}) => {
  return (
    <div className="product">
      <h2 className="titleDetail">{item.name}</h2>
      <img className="image" src={item.imageUrl} alt="product image" />
      <span className="data">
        <p className="price">$ {item.price}</p>
        <p className="rating">Stock: {item.stock}</p>
      </span>
      <p className="description">{item.description}</p>
      <p className="category">Tipo: {item.category}</p>
      <ItemCount initial={1} item={item}/>
    </div>
  );
};
