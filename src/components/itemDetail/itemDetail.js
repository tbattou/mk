export const ItemDetail = ({title, img, price, categoria}) => {
    return (
        <div>
            <img src={img} />
            <h2>Nombre: {title}</h2>
            <h3>Categoria: {categoria} </h3>
            <h2>Precio: {price}</h2>
        </div>
    );
}