import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);
        if (productoExistente) {
            const carritoActualizado = carrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + producto.cantidad }
                    : item
            );
            setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalUnidades }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}
