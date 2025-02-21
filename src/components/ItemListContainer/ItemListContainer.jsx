import Item from '../Item/Item';
import './ItemListContainer.css';


function ItemListContainer() {
    return (
        <div className='container-card'>
            <Item nombre={"Producto 1"} precio={100} />
            <Item nombre={"Producto 2"} precio={100} />
            <Item nombre={"Producto 3"} precio={100} />


        </div>
    )
}

export default ItemListContainer;