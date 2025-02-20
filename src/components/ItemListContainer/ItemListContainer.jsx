import './ItemListContainer.css';

function ItemListContainer() {
    return (
        <div className='container-card'>
            <div className='card'>
                <h2>Producto</h2>
                <h3>Precio</h3>
                <button>Agregar a carrito</button>
            </div>
            <div className='card'>
                <h2>Producto</h2>
                <h3>Precio</h3>
                <button>Agregar a carrito</button>
            </div>
            <div className='card'>
                <h2>Producto</h2>
                <h3>Precio</h3>
                <button>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ItemListContainer;