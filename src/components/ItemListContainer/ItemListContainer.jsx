

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Asegúrate de importar tu configuración de Firebase
import Item from '../Item/Item'; // Importa tu componente Item

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const productosList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosList);
                setLoading(false);
            } catch (e) {
                console.error("Error al obtener productos: ", e);
                setLoading(false);
            }
        };
        obtenerProductos();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="item-list">
                    {productos.map(producto => (
                        <Item key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
