import '../itemDetail/itemDetail.css';

export const ItemDetail = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <div className="product">
      <h2 className="title">{title}</h2>
      <img className="image" src={image} alt="product image" />
      <span className="data">
        <p className="price">${price}</p>
        <p className="rating">{rating.rate}</p>
      </span>
      <p className="description">{description}</p>
      <p className="category">{category}</p>
    </div>
  );
};
