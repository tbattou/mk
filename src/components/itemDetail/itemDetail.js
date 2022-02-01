import '../itemDetail/itemDetail.css';
import { ItemCount } from '../itemCount/itemCount';

export const ItemDetail = ({
  categoria,
  desc,
  image,
  price,
  stock,
  title,
}) => {
  return (
    <div className="product">
      <h2 className="title">{title}</h2>
      <img className="image" src={image} alt="product image" />
      <span className="data">
        <p className="price">${price}</p>
        <p className="rating">Stock: {stock}</p>
      </span>
      <p className="description">{desc}</p>
      <p className="category">Tipo: {categoria}</p>
      <ItemCount stock={stock} initial={1} title={title} image={image} price={price}/>
    </div>
  );
};
