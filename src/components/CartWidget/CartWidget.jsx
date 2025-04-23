import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Si no lo tenés instalado: `npm i react-icons`

function CartWidget() {
    const { totalUnidades } = useCartContext();

    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <FaShoppingCart size={24} />
                {
                    totalUnidades > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: -10,
                            right: -10,
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '12px'
                        }}>
                            {totalUnidades}
                        </span>
                    )
                }
            </div>
        </Link>
    );
}

export default CartWidget;
