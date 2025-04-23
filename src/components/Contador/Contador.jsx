import React from 'react';

function Contador({ stock, contador, setContador }) {
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1); // Aumentar contador
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1); // Disminuir contador, pero no menor que 1
        }
    };

    return (
        <div className="contador">
            <button onClick={decrementar}>-</button>
            <span>{contador}</span> {/* Mostrar cantidad seleccionada */}
            <button onClick={incrementar}>+</button>
        </div>
    );
}

export default Contador;
