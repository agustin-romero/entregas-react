import { useState } from 'react';

const ItemCount = (props) => {

    const [productos, setProductos] = useState(1);

    const increment = () => {
        if (productos < props.stock) setProductos(productos+1);
    }

    const decrement = () => {
        if (productos > 1) setProductos(productos-1);
    }

    const agregar = () => {
        console.log("Se agrego correctamente")
    }
 
    return (
        <div>
            <button onClick={decrement}>-</button>
            {productos}
            <button onClick={increment}>+</button>
            <button onClick={agregar}>Agregar</button>
        </div>
    );
}

export default ItemCount;