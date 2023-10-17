import { useState } from 'react';
//se creaItemcount para seguir la logica de las filminas de la actividad 1...

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <button onClick={decrement}> - </button>
      <span>{count}</span>
      <button onClick={increment}> + </button>
      <button onClick={handleAddToCart} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;


