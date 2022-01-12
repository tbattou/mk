import { ItemCount } from '../itemCount/itemCount'

export const ItemListContainer = ({ greeting= 'Próximamente...'  }) => {
    return (
        <div>
            <p> {greeting} </p>
            <ItemCount />
        </div>

    )
}