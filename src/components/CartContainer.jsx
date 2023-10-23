import { useState } from 'react';
import CartItems from './CartItems';
import ItemDetailContainer from './ItemDetailContainer';
import CartIcon from './CartIcon';

//se grega lógica para agregar elementos al carrito aquí y actualizar el estado del carrito y el contador aquí.

function CartContainer() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (count) => {
    setCartCount(cartCount + count);
  };

  return (
    <div className="bg-info rounded p-3 position-relative">
      <CartIcon />
      <CartItems count={cartCount} />
      <ItemDetailContainer addToCart={addToCart} />
    </div>
  );
}

export default CartContainer;
