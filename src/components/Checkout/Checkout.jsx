import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Checkout = () => {
    const { carrito, totalUnidades, vaciarCarrito } = useCartContext();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [idOrden, setIdOrden] = useState(null);

    const manejarSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            comprador: { nombre, email, telefono },
            items: carrito,
            total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
            fecha: new Date(),
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), orden);
            setIdOrden(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error al generar la orden", error);
        }
    };

    if (idOrden) {
        return <h2>¡Gracias por tu compra! Tu ID es: {idOrden}</h2>;
    }

    return (
        <form onSubmit={manejarSubmit}>
            <h2>Finalizar compra</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
            />
            <button type="submit">Generar orden</button>
        </form>
    );
};

export default Checkout;
