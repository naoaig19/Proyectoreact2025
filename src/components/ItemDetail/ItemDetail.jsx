import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = () => {
    const { id } = useParams();
    const [detalle, setDetalle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(1);

    const { agregarAlCarrito } = useCartContext();

    useEffect(() => {
        const getProducto = async () => {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDetalle({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No se encontró el producto");
            }
            setLoading(false);
        };

        getProducto();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!detalle) return <p>Producto no encontrado</p>;

    return (
        <div>
            <h2>{detalle.nombre}</h2>
            <img src={detalle.img} alt={detalle.nombre} width={200} />
            <p>{detalle.descripcion}</p>
            <p>Precio: ${detalle.precio}</p>
            <p>Stock disponible: {detalle.stock}</p>

            <div>
                <button
                    onClick={() => setContador(Math.max(1, contador - 1))}
                    disabled={contador <= 1}
                >
                    -
                </button>
                <span style={{ margin: '0 10px' }}>{contador}</span>
                <button
                    onClick={() => setContador(Math.min(contador + 1, detalle.stock))}
                    disabled={contador >= detalle.stock}
                >
                    +
                </button>
            </div>

            <button
                onClick={() =>
                    agregarAlCarrito({
                        id: detalle.id,
                        nombre: detalle.nombre,
                        precio: detalle.precio,
                        cantidad: contador,
                    })
                }
                disabled={detalle.stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemDetail;


