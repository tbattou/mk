
export const Item = ({id, title, price}) => {
    return (
        <div>
            <h2>URL: /item/{id}</h2>
            <h2>Nombre: {title}</h2>
            <h2>Precio: {price}</h2>
        </div>
    );
}