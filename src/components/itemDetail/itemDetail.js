import '../itemDetail/itemDetail.css';

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
        <p className="rating">{stock}</p>
      </span>
      <p className="description">{desc}</p>
      <p className="category">{categoria}</p>
    </div>
  );
};
