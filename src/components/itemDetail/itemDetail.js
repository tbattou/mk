import '../itemDetail/itemDetail.css';
import { ItemCount } from '../itemCount/itemCount';

export const ItemDetail = ({item}) => {
  console.log(item)
  return (
    <div className="product">
      <h2 className="title">{item.title}</h2>
      <img className="image" src={item.image} alt="product image" />
      <span className="data">
        <p className="price">${item.price}</p>
        <p className="rating">Stock: {item.stock}</p>
      </span>
      <p className="description">{item.desc}</p>
      <p className="category">Tipo: {item.categoria}</p>
      <ItemCount initial={1} item={item}/>
    </div>
  );
};
