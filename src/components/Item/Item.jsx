import './Item.css';

function Item({ nombre, precio }) {
    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    return (
        <div className='card'>
            <h2>{nombre}</h2>
            <h3>Precio:$ {precio}</h3>
            <button className="card-btn" onClick={() => agregarAlCarrito()}>Agregar a carrito</button>
        </div>
    )
}

export default Item;