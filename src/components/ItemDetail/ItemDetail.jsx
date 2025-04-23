import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { agregarAlCarrito } = useCartContext();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el producto");
                }
                setLoading(false);
            } catch (e) {
                console.error("Error al obtener producto: ", e);
                setLoading(false);
            }
        };
        obtenerProducto();
    }, [id]);

    const handleAgregarAlCarrito = () => {
        if (producto) {
            agregarAlCarrito({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1 // Aquí puedes implementar un contador de unidades si lo necesitas
            });
        }
    };

    return (
        <div>
            {loading ? (
                <p>Cargando detalles...</p>
            ) : producto ? (
                <div className="item-detail">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                    <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                </div>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetail;

