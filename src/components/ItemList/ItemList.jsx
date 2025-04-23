import Item from '../Item/Item';

function ItemList({ productos }) {
    return (
        <div className="item-list">
            {
                productos.map(producto => (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        img={producto.img}
                    />
                ))
            }
        </div>
    );
}

export default ItemList;