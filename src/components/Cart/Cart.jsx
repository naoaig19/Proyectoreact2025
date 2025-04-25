import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carrito, eliminarDelCarrito, vaciarCarrito, totalUnidades } = useCartContext();

    if (carrito.length === 0) {
        return (
            <div>
                <h2>Tu carrito está vacío 😢</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Tu carrito 🛒</h2>
            <ul>
                {carrito.map((item) => (
                    <li key={item.id}>
                        {item.nombre} - ${item.precio} x {item.cantidad}
                        <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total de unidades: {totalUnidades}</p>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
    );
};

export default Cart;
